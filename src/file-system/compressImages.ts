import {ScanFS} from './scanFS'
import sharp from "sharp";
import path from "path";
import {ensureDir} from "fs-extra";
import {SIZE_LIMIT} from '../constants'
export const compressImages = async (scan: ScanFS, output: string) => {
  const handleImage = async (from, to) => {

    return await sharp(from).metadata()
      .then( async (meta) =>{
        let d = 1
        const maxDim = Math.max(meta.width, meta.height)

        if(maxDim > SIZE_LIMIT) {
          d = SIZE_LIMIT / maxDim

         return await (sharp(from)
           .flatten({ background: '#ffffff' })
            .resize({width: Math.min(2000, Math.ceil(meta.width * d)), height: Math.min(2000, Math.ceil(meta.height * d))})
            .toFormat('jpg')
            .toFile(to))
        }


        return await sharp(from)
          .flatten({ background: '#ffffff' })
          .toFormat('jpg')
          .toFile(to)
      })
      .catch(e => {
        console.error('Can not find artPath '+from, to)
        console.error(e)
      })
  }
  let all = []
  for(let g of scan.grades) {
    for(let p of g.products) {
      const results = await Promise.all(p.children.map( async f => {
        const toDir = path.join(output, 'compressed', g.name, p.name)
        await ensureDir(toDir)
          const to = path.join(toDir, f.name)
        return await handleImage(f.path, to)
      }))
      all = [...all, ...results]
    }
  }

  return all
}