import { Text } from '../Typography'
import { PopularBooksContainer } from './styles'
import { Link } from '../ui/Link'
import { BookCard, BookWithAvgRating } from '../BookCard'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export const PopularBooks = () => {
  const { data: popularBooks } = useQuery<BookWithAvgRating[]>(
    ['popular-books'],
    async () => {
      const { data } = await api.get('/books/popular')
      return data?.books ?? []
    },
  )

  return (
    <PopularBooksContainer>
      <header>
        <Text size="sm">Livros Populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {popularBooks?.map((book) => (
          <BookCard key={`popular-${book.id}`} book={book} />
        ))}
      </section>
    </PopularBooksContainer>
  )
}
