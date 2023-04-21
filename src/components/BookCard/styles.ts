import Image from 'next/image'
import { styled } from '../../../stitches.config'
import { Heading } from '../Typography'

export const BookCardContainer = styled('div', {
  display: 'flex',
  gap: '$5',
  padding: '18px $5',
  background: '$gray700',
  borderRadius: 8,
  cursor: 'pointer',
  border: '1px solid $gray700',
  transition: '0.2s',

  '&:hover': {
    borderColor: '$gray600',
  },
})

export const PopularBookImage = styled(Image, {
  borderRadius: 4,
  objectFit: 'cover',
})

export const PopularBookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const PopularBookName = styled(Heading, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
})
