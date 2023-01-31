import { generateId } from '@/utils/util'
import type { BasicWidget, Widget } from '@/types/editor'

const generateCol = (num: number): Widget[] => {
  return Array.from({ length: num }, (): Widget => {
    const id = generateId()
    const type = 'column'
    return {
      type,
      id,
      key: `${type}_${id}`,
      tagName: 'mj-column',
      attributes: {},
      children: [],
      options: {},
      widgetList: [],
    }
  })
}

const generateSection = (): Widget[] => {
  const colNumList = [1, 2, 3, 4]
  return colNumList.map((v): Widget => {
    return {
      type: 'section',
      tagName: 'mj-section',
      attributes: {},
      children: [],
      id: generateId(),
      options: {},
      widgetList: generateCol(v),
    }
  })
}

// 容器
export const containers = generateSection()

// 基础组件
export const basicWidget: BasicWidget[] = [
  // 一段文字
  {
    internal: true,
    type: 'text',
    tagName: 'mj-text',
    attributes: {},
    id: generateId(),
    options: {},
    content: '',
  },
  // 图片
  {
    internal: true,
    type: 'image',
    tagName: 'mj-image',
    attributes: {},
    id: generateId(),
    options: {},
    content: '',
  },
  {
    internal: true,
    type: 'button',
    tagName: 'mj-button',
    attributes: {},
    id: generateId(),
    options: {},
    content: '',
  },
]
