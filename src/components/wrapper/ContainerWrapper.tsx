import type { ReactNode } from 'react'
import React, { useEffect, useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import styles from './ContainerWrapper.module.scss'
import type { ContainerProps } from '@/types/editor'
import useStore from '@/store'

interface ContainerWrapperProps extends ContainerProps {
  children: ReactNode
}

export default function ContainerWrapper({ children, widget }: ContainerWrapperProps) {
  const setSelected = useStore(state => state.setSelected)
  const selectedId = useStore(state => state.selectedId)

  const [isSelected, setIsSelected] = useState<boolean>(false)

  useEffect(() => {
    setIsSelected(widget.id === selectedId)
  }, [selectedId])

  const selectWidget = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setSelected(widget)
  }

  function Selected() {
    if (!isSelected)
      return null

    return (
      <div className={styles.containerAction}>
        <div className={`${styles.actionItem}`}>{widget.type}</div>
        <div className={`${styles.actionItem} widget-remove`}>
          <DeleteOutlined />
        </div>
      </div>
    )
  }

  return (
    <div role="presentation"
         className={styles.ContainerWrapper}
         onClick={(e) => selectWidget(e)}>
      <div className={`${styles.containerContent} ${isSelected ? styles.isSelected : ''}`}>
        {children}
      </div>
      <Selected />
    </div>
  )
}
