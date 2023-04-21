import { ChartLineUp } from '@phosphor-icons/react'
import { PageTitle } from '../ui/PageTitle'
import { LatestRatingsContainer } from './styles'
import { Text } from '../Typography'
import { RatingCard } from '../RatingCard'

export const LatestRatings = () => {
  return (
    <LatestRatingsContainer>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />

      <Text size="sm">Avaliçaões mais recentes </Text>

      <section>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard
            rating={{
              id: 'aa',
              rate: 4,
              user: {
                name: 'Anna Costa',
                avatar_url:
                  'https://pbs.twimg.com/profile_images/1642652340606889986/gTN2PCvo_400x400.jpg',
                email: 'annacosta.raquel@gmail.com',
                id: 'dnkasndsjadka',
                created_at: new Date(),
              },
              book: {
                author: 'Eichiro Oda',
                cover_url:
                  'https://comicvine.gamespot.com/a/uploads/scale_small/11144/111442876/8836073-fpzvad5xoaag7vi.jfif.jpg',
                id: 'ksmdjkasndjkand',
                name: 'One Piece',
                summary:
                  'A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece, e proclamar-se o Rei dos Piratas.',
                total_pages: 5000,
              },
              created_at: new Date(),
            }}
            key={i}
          />
        ))}
      </section>
    </LatestRatingsContainer>
  )
}
