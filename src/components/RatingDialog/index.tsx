import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useState } from 'react'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  BookDetailsWrapper,
  BookDetailsContainer,
  BookImage,
  BookContent,
  BookInfos,
} from './styles'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { Heading, Text } from '../Typography'
import { RatingStars } from '../RatingStars'
import { BookInfo } from './BookInfo'
import { BookRatings } from '../BookRatings'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { BookWithAvgRating } from '../BookCard'
import { RatingWithAuthor } from '../UserRatingCard'
import { CategoriesOnBooks, Category } from '@prisma/client'

type RatingsDialogProps = {
  bookId: string
  children: ReactNode
}

type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

export const RatingsDialog = ({ bookId, children }: RatingsDialogProps) => {
  const [open, setOpen] = useState(false)

  const { data: book } = useQuery<BookDetails>(
    ['book', bookId],
    async () => {
      const { data } = await api.get(`/books/details/${bookId}`)
      return data?.book ?? {}
    },
    {
      enabled: open,
    },
  )

  const ratingsLength = book?.ratings?.length ?? 0

  const categories =
    book?.categories?.map((x) => x?.category?.name).join(', ') ?? ''

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          {!book ? (
            <p>Caregando...</p>
          ) : (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage
                    width={171}
                    height={242}
                    alt={book.name}
                    src={book.cover_url}
                  />
                  <BookContent>
                    <div>
                      <Heading size="sm">{book.name}</Heading>
                      <Text color="gray-300" css={{ marginTop: '$2' }}>
                        {book.author}
                      </Text>
                    </div>

                    <div>
                      <RatingStars rating={book.avgRating} size="md" />
                      <Text
                        color="gray-400"
                        size="sm"
                        css={{ marginTop: '$1' }}
                      >
                        {ratingsLength === 1
                          ? '1 avaliação'
                          : `${ratingsLength} avaliações`}
                      </Text>
                    </div>
                  </BookContent>
                </BookDetailsContainer>
                <BookInfos>
                  <BookInfo
                    icon={<BookmarkSimple />}
                    title="Categorias"
                    info={categories}
                  />
                  <BookInfo
                    icon={<BookOpen />}
                    title="Páginas"
                    info={String(book.total_pages)}
                  />
                </BookInfos>
              </BookDetailsWrapper>

              <BookRatings ratings={book.ratings} bookId={book.id} />
            </>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
