import blocks from '@/blocks'

export default class BlockManager {
  blocksMap = {
    ...blocks,
  }

  getBlockByType(type: string) {
    console.log('type', type)
    return this.blocksMap[type]
  }
}
