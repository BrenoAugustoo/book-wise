import { ComponentProps } from '@stitches/react'
import { AvatarImage, AvatarContainer } from './styles'

type AvatarProps = ComponentProps<typeof AvatarContainer> & {
  src: string
  size?: 'sm' | 'md' | 'lg'
  alt: string
}

export const Avatar = ({ src, alt, size = 'md', ...props }: AvatarProps) => {
  return (
    <AvatarContainer size={size} {...props}>
      <AvatarImage src={src} width={80} height={80} alt={alt} />
    </AvatarContainer>
  )
}
