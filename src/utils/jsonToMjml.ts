import BlockManager from '@/utils/BlockManager'

interface JsonToMjmlOption {
  data: any
}

export default function JsonToMjml(options: JsonToMjmlOption): string {
  const { data } = options
  console.log('data', data)
  const bm = new BlockManager()

  const block = bm.getBlockByType(data.type)

  const mjmlString = block.render()

  console.log('mjmlString', mjmlString)

  return ''
}
