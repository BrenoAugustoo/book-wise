import { Text } from '../Typography'
import { PopularBooksContainer } from './styles'
import { Link } from '../ui/Link'
import { BookCard } from '../BookCard'

export const PopularBooks = () => {
  return (
    <PopularBooksContainer>
      <header>
        <Text size="sm">Livros Populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, index) => (
          <BookCard
            key={`popular-${index}`}
            book={{
              author: 'Umino Chika',
              avgRating: 5,
              cover_url:
                'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Sangatsu_no_Lion.jpg/220px-Sangatsu_no_Lion.jpg',
              created_at: new Date(),
              id: 'sdjkasndkjasnd',
              name: '3-gatsu no Lion',
              summary:
                '3-Gatsu no Lion acompanha a vida de um jovem jogador profissional de Shogi chamado Rei Kiriyama que vive sozinho, longe da família. Ele começa a se relacionar com três irmãs que moram próximas de sua casa, Akari, Hinata e Momo.',
              total_pages: 500,
            }}
          />
        ))}
      </section>
    </PopularBooksContainer>
  )
}
