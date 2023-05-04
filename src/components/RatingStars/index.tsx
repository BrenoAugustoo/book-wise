import { Star } from '@phosphor-icons/react'
import { RatingStarsContainer } from './styles'
import { ComponentProps } from '@stitches/react'
import { useState } from 'react'

type RatingStarsProps = ComponentProps<typeof RatingStarsContainer> & {
  rating: number
  size?: 'sm' | 'md' | 'lg'
  setRating?: (rating: number) => void
}

export const RatingStars = ({
  rating,
  setRating,
  size,
  ...props
}: RatingStarsProps) => {
  const [previewValue, setpreviewValue] = useState(0)

  const isEditable = !!setRating

  const ratingValue = isEditable ? previewValue : rating

  const handleMouseEnter = (value: number) => {
    if (isEditable) setpreviewValue(value)
  }

  const handleMouseLeave = () => {
    if (isEditable) setpreviewValue(rating)
  }

  const handleSetRating = () => {
    if (isEditable) setRating(previewValue)
  }

  return (
    <RatingStarsContainer
      css={isEditable ? { cursor: 'pointer' } : undefined}
      size={size}
      {...props}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          weight={i + 1 <= ratingValue ? 'fill' : 'regular'}
          onMouseEnter={() => handleMouseEnter(i + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={handleSetRating}
        />
      ))}
    </RatingStarsContainer>
  )
}
