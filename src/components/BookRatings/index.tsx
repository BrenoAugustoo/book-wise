import { useState } from 'react'
import { Text } from '../Typography'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { BookRatingsContainer } from './styles'
import { RatingForm } from '../RatingForm'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export const BookRatings = ({ bookId, ratings }: BookRatingsProps) => {
  const [showForm, setShowForm] = useState(false)
  const handleRate = () => {
    setShowForm(true)
  }

  const sortedRatingsbyDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  return (
    <BookRatingsContainer>
      <header>
        <Text>Avaliações</Text>
        <Link text="Avaliar" withoutIcon onClick={handleRate} />
      </header>

      <section>
        {showForm && (
          <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />
        )}

        {sortedRatingsbyDate?.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </BookRatingsContainer>
  )
}
