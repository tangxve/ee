import { renderToStaticMarkup } from 'react-dom/server'
import { unescape } from 'lodash-es'
import BlockManager from '@/utils/BlockManager'

interface JsonToMjmlOption {
  data: any
}

export default function JsonToMjml(options: JsonToMjmlOption): string {
  const { data } = options
  const bm = new BlockManager()

  const block = bm.getBlockByType(data.type)

  const mjmlString = unescape(renderToStaticMarkup(block.render()))

  // console.log('mjmlString', mjmlString)

  return mjmlString
}
