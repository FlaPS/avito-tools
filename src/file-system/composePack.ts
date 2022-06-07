import scanFS, {ScanFS} from './scanFS'
import readXlsxFile from 'read-excel-file/node'
import path from 'path'
import sharp from "sharp";

import {ensureDir} from "fs-extra";
import {gitSha} from 'oclif/lib/tarballs'
const composePack = async (scan: ScanFS, pack: ScanFS['packs'][number], output) => {
  const xlsxFile = pack.children.filter(f =>f.children ==undefined)[0]

  const handleSheet = async (sheetName) => {
    const sheet = await readXlsxFile(
      path.join(xlsxFile.path),
      {sheet:sheetName}
    )


    const handleRow = async (row) => {
      const productName = row[0]
      const templateIndex = Number(row[1])

      console.log('handle row ', row ,'in pack', pack.name)
        //  console.log(scan.allProducts)
      const product = scan.getProductByName(productName)
      console.log('selected product', product)
      if(!product) {
        console.error(productName + ' not found')
        debugger
      }
      const productFile = product.children[0]
      const templatesFolder = pack.children.find(f => f.children !== undefined && f.name ==='шаблон'+templateIndex)
      const s = sheet
      const bgFile = templatesFolder.children.find(f => f.name === '1.png')
      const overlayFile = templatesFolder.children.find(f => f.name === '2.png')
      const {width, height} = await (sharp(bgFile.path).metadata()
        .then( async ({width, height}) =>{
            return {width, height}
          }
        ) .catch(e => {
          console.error('Can not find  '+bgFile)
          console.error(e)
        }))

      const overlaySharp = await (sharp(overlayFile.path).toBuffer())
      const xProduct = Math.round(Number(row[2])/100 * width)
      const yProduct = Math.round(Number(row[3])/100 * height)
      const wProduct = Math.round(Number(row[4])/100 * width)
      const hProduct = Math.round(Number(row[5])/100 * height)
      const productSharp = await (sharp(productFile.path).resize(
        {width:wProduct,
        height:hProduct,
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        }
      ).toBuffer())

      const toFileFolder = path.join(output, pack.name, 'Готовое решение',productName +' '+templateIndex)
      await ensureDir(toFileFolder)
        const toFile = path.join(toFileFolder, '1.jpg')
      await (sharp(bgFile.path)
        .composite([{input: productSharp,top:yProduct, left:xProduct,},
          {input: overlaySharp}
        ])
        .toFormat('jpg')
        .toFile(toFile))
      console.log(pack.name+' '+sheetName+ ' '+productName + ' at template  '+ templateIndex + ' done')
    }
    let index = 1
    while(sheet[index]!==undefined) {
      await handleRow(sheet[index])
      index++
    }
  }

  for(let grade of scan.grades) {
    await handleSheet(grade.gradeName)
  }

}


export default composePack
