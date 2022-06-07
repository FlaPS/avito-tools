import DT from 'directory-tree'

import {UnPromisify} from '../utils/types'

const scanFS = async (input) => {

    const tree = await DT(input, {exclude: /DS_Store/})
    const packs = tree.children.filter(c => c.name.includes('пачка'))
    const gradesFolder = tree.children.find(c => c.name ==='source-images')

    const grades = gradesFolder.children.map(c => {
      const grade = ({
        ...c,
        gradeName: c.name.split('.')[1].trim(),
        products: c.children.map(p => ({
          ...p,
          productName: p.name.split('.')[1].trim()
        }))
      })

      return grade
    }
    )
  const allProducts = grades.map(g =>g.products).flat()
    return {
        packs,
        grades,
        tree,
      allProducts,
      getProductByName : name => {
          return allProducts.find(p => p.productName.toLowerCase() === name.toLowerCase())
      }
    } as any



}

export type ScanFS =any
export default scanFS
