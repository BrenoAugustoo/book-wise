import { Fragment, useState } from 'react'
import { Text } from '../Typography'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { Link } from '../ui/Link'
import { BookRatingsContainer } from './styles'
import { RatingForm } from '../RatingForm'
import { useSession } from 'next-auth/react'
import { LoginDialog } from '../LoginDialog'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export const BookRatings = ({ bookId, ratings }: BookRatingsProps) => {
  const { status, data: session } = useSession()
  const [showForm, setShowForm] = useState(false)

  const isAuthenticated = status === 'authenticated'

  const handleRate = () => {
    if (!isAuthenticated) return
    setShowForm(true)
  }

  const RatingWrapper = isAuthenticated ? Fragment : LoginDialog

  const sortedRatingsbyDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const canRate = ratings.every((x) => x.user_id !== session?.user?.id)

  return (
    <BookRatingsContainer>
      <header>
        <Text>Avaliações</Text>
        {canRate && (
          <RatingWrapper>
            <Link text="Avaliar" withoutIcon onClick={handleRate} />
          </RatingWrapper>
        )}
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
