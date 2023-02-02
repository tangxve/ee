import { Collapse } from 'antd'
import React, { useState } from 'react'
import styles from './WidgetPanel.module.scss'
import type { BasicWidget, Widget } from '@/types/editor'
import { basicWidget, containers } from '@/components/widgetPanel/widgetConfig'
import useStore from '@/store'

const { Panel } = Collapse

interface BasicItemProps {
  block: BasicWidget
}

function BasicItem({ block }: BasicItemProps) {
  return (
    <div className={styles.blockItem}>
      <div className={styles.blockItemContainer}>
        <span className="bloc-title">{block.type}</span>
      </div>
    </div>
  )
}

interface ContainerWidgetProps {
  layout: Widget
}

function ContainerWidget({ layout }: ContainerWidgetProps) {
  const addContainerByDbClick = useStore(state => state.addContainerByDbClick)

  const colItems = layout.widgetList.map((col, colI) =>
    <div className={styles.col} key={colI}>{colI}</div>,
  )

  return (
    <div className={styles.layoutItem} onDoubleClick={() => addContainerByDbClick(layout)}>
      <div className={styles.layoutLabel}>
        {layout.widgetList.length} 列 columns
      </div>
      <div className={styles.layoutItemContainer}>
        <div className={styles.layoutItemContent}>{colItems}</div>
      </div>
    </div>
  )
}

export default function WidgetPanel() {
  const [layouts] = useState<Widget[]>(containers)
  const [basics] = useState<BasicWidget[]>(basicWidget)

  return (
    <Collapse defaultActiveKey={[1, 2, 3]}>
      <Panel key={1} header="布局 Layout">
        <div className={styles.containerBox}>
          {layouts.map((layout, i) =>
            <ContainerWidget key={i} layout={layout} />,
          )}
        </div>
      </Panel>
      <Panel key={2} header="内容 Content">
        <div className={styles.blockBox}>
          {basics.map(widget =>
            <BasicItem key={widget.id} block={widget} />,
          )}
        </div>
      </Panel>
      <Panel key={3} header="自定义 Custom">
        <div>真棒</div>
      </Panel>
    </Collapse>
  )
}
