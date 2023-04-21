import Image from 'next/image'
import { styled } from '../../../stitches.config'

export const RatingCardContainer = styled('div', {})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  marginBottom: '$8',

  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
})

export const BookDetails = styled('div', {
  display: 'flex',
  gap: '$5',

  img: {
    borderRadius: 4,
  },
})

export const BookImage = styled(Image, {
  minWidth: 100,
  objectFit: 'cover',
  transition: '0.2s',

  '&:hover': {
    filter: 'brightness(1.2)',
  },
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ToggleShowMoreButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '$sm',
  color: '$purple100',
  fontWeight: '$bold',
  marginLeft: '$1',
})