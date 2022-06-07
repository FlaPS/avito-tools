import {Command, Flags} from '@oclif/core'
import scanFS from '../file-system/scanFS'
import {compressImages} from '../file-system/compressImages'
import composePack from '../file-system/composePack'

export default class Build extends Command {
  static description = 'describe the command here'

  static examples = [
    'avito build ./avito-catalog ./avito-generated',
  ]


  static args = [
    {name: 'input',  description: 'Исх данные', required: true},
    {name: 'output', description: 'Рабочая папка для записи результата'}
   ]

   public async run(): Promise<void> {
     const {args} = await this.parse(Build)

     const {input, output} = args

    const scan = await scanFS(input)

     console.log('Found images to compress ')
    const compressedRes = await compressImages(scan, output)

     for(let p of scan.packs) {
       const res1 = await composePack(scan, p, output)
     }
   }
}
