import { Collapse } from 'antd'
import React from 'react'
import styles from './WidgetPanel.module.scss'

const { Panel } = Collapse

function BasicWidget() {
  return (
    <div className={styles.blockItem}>
      <div className={styles.blockItemContainer}>
        <span className="bloc-title"> BasicWidget </span>
      </div>
    </div>
  )
}

function ContainerWidget() {
  return (
    <div className={styles.layoutItem}>
      <div className={styles.layoutLabel}>
        11 列 columns
      </div>
      <div className={styles.layoutItemContainer}>
        <div className={styles.layoutItemContent}>
          <div className={styles.col}>111</div>
        </div>
      </div>
    </div>
  )
}

export default function WidgetPanel() {
  return (
    <Collapse defaultActiveKey={[1, 2, 3]}>
      <Panel key={1} header="布局 Layout">
        <div className={styles.containerBox}>
          <ContainerWidget />
          <ContainerWidget />
          <ContainerWidget />
        </div>
      </Panel>
      <Panel key={2} header="内容 Content">
        <div className={styles.blockBox}>
          <BasicWidget />
          <BasicWidget />
          <BasicWidget />
          <BasicWidget />
        </div>
      </Panel>
      <Panel key={3} header="自定义 Custom">
        <div>真棒</div>
      </Panel>
    </Collapse>
  )
}
