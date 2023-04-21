import { Book } from '@prisma/client'
import {
  BookCardContainer,
  PopularBookDetails,
  PopularBookImage,
  PopularBookName,
} from './styles'
import { Text } from '../Typography'
import { RatingStars } from '../RatingStars'

export type BookWithAvgRating = Book & {
  avgRating: number
}

type BookCardProps = {
  book: BookWithAvgRating
  size?: 'md' | 'lg'
}

export const BookCard = ({ book, size = 'md' }: BookCardProps) => {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 152,
    },
  }

  const currentSize = IMAGE_SIZES[size]

  return (
    <BookCardContainer>
      <PopularBookImage
        width={currentSize.width}
        height={currentSize.height}
        alt={book.name}
        src={book.cover_url}
        css={{
          minWidth: currentSize.width,
        }}
      />

      <PopularBookDetails>
        <div>
          <PopularBookName size="xs">{book.name}</PopularBookName>
          <Text size="sm" color="gray-400">
            {book.author}
          </Text>
        </div>
        <RatingStars rating={book.avgRating} />
      </PopularBookDetails>
    </BookCardContainer>
  )
}
