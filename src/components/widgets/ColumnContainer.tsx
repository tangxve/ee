import type { ReactNode } from 'react'
import styles from './widgets.module.scss'
import ContainerWrapper from '@/components/wrapper/ContainerWrapper'
import type { ContainerProps } from '@/types/editor'

interface ColumnContainerProps extends ContainerProps {
  children: ReactNode
}
export default function ColumnContainer(
  { children, ...props }: ColumnContainerProps,
) {
  return (
  <div className={styles.ColumnContainer}>
    <ContainerWrapper {...props}>
      {children}
    </ContainerWrapper>
  </div>
  )
}
