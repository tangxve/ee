import type { ReactNode } from 'react'
import styles from './ContainerWrapper.module.scss'
import type { ContainerProps } from '@/types/editor'

interface ContainerWrapperProps extends ContainerProps {
  children: ReactNode
}

export default function ContainerWrapper({ children, widget }: ContainerWrapperProps) {
  function selectWidget() {
    console.log(222)
  }

  function removeWidget() {
    console.log(333)
  }

  return (
    <div className={styles.ContainerWrapper} onClick={() => selectWidget}>
      <div className={styles.containerContent}>
        {children}
      </div>
      <div className={styles.containerAction}>
        <div className={`${styles.actionItem}`}>{widget.type}</div>
        <div className={`${styles.actionItem} widget-remove`} onClick={() => removeWidget}></div>
      </div>
    </div>
  )
}
