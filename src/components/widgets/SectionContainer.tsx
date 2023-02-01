import type { ReactNode } from 'react'
import styles from './widgets.module.scss'
import ContainerWrapper from '@/components/wrapper/ContainerWrapper'
import type { ContainerProps } from '@/types/editor'

interface SectionContainerProps extends ContainerProps {
  children: ReactNode
}

export default function SectionContainer(
  { children, ...props }: SectionContainerProps,
) {
  return (
    <div className={styles.SectionContainer}>
      <ContainerWrapper {...props}>
        <div className={styles.sectionContent}></div>
        {children}
      </ContainerWrapper>
    </div>
  )
}
