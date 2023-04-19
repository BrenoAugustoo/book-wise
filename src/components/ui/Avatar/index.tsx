import { ComponentProps } from '@stitches/react'
import { AvatarContainer, AvatarImage } from './styles'

interface AvatarProps extends ComponentProps<typeof AvatarContainer> {
  src: string
  size?: 'sm' | 'md' | 'lg'
  alt: string
}

export const Avatar = ({ src, alt, size = 'md', ...props }: AvatarProps) => {
  return (
    <AvatarContainer size={size} {...props}>
      <AvatarImage src={src} alt={alt} width={80} height={80} />
    </AvatarContainer>
  )
}
