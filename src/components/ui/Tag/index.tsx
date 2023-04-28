import { ReactNode } from 'react'
import { TagContainer } from './styles'
import { ComponentProps } from '@stitches/react'

interface TagProps extends ComponentProps<typeof TagContainer> {
  children: ReactNode
  active?: boolean
}

export const Tag = ({ children, active, ...props }: TagProps) => {
  return (
    <TagContainer active={active} {...props}>
      {children}
    </TagContainer>
  )
}
