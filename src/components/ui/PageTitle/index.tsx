import { ComponentProps } from '@stitches/react'
import { PageTitleContainer } from './styles'
import { ReactNode } from 'react'
import { Heading } from '@/components/Typography'

type PageTitleProps = ComponentProps<typeof PageTitleContainer> & {
  icon: ReactNode
  title: string
}

export const PageTitle = ({ icon, title, ...props }: PageTitleProps) => {
  return (
    <PageTitleContainer {...props}>
      {icon}
      <Heading size="lg">{title}</Heading>
    </PageTitleContainer>
  )
}
