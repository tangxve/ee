import blocks from '@/blocks'

export default class BlockManager {
  blocksMap = {
    ...blocks,
  }

  getBlockByType(type: string) {
    return this.blocksMap[type]
  }
}
