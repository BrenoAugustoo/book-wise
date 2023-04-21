import { Star } from '@phosphor-icons/react'
import { RatingStarsContainer } from './styles'
import { ComponentProps } from '@stitches/react'

type RatingStarsProps = ComponentProps<typeof RatingStarsContainer> & {
  rating: number
  size?: 'sm' | 'md' | 'lg'
}

export const RatingStars = ({ rating, size, ...props }: RatingStarsProps) => {
  return (
    <RatingStarsContainer size={size} {...props}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={`star-${i}`} weight={i + 1 <= rating ? 'fill' : 'regular'} />
      ))}
    </RatingStarsContainer>
  )
}
