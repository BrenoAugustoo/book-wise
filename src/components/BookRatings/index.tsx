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

        {ratings?.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </BookRatingsContainer>
  )
}
