import { useState } from 'react'
import { RatingStars } from '../RatingStars'
import { Heading } from '../Typography'
import { Avatar } from '../ui/Avatar'
import {
  ActionsContainer,
  FormContainer,
  RatingFormContainer,
  UserDetails,
} from './styles'
import { useSession } from 'next-auth/react'

type RatingFormProps = {
  onCancel: () => void
  bookId: string
}

export const RatingForm = ({ onCancel, bookId }: RatingFormProps) => {
  const { data: session } = useSession()

  const user = session?.user

  const [currentSize, setCurrentSize] = useState(0)

  return (
    <RatingFormContainer>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} />
            <Heading size="xs">{user.name}</Heading>
          </section>

          <RatingStars size="lg" rating={currentSize} />
        </UserDetails>
      )}
      <FormContainer>
        <textarea />
        <ActionsContainer></ActionsContainer>
      </FormContainer>
    </RatingFormContainer>
  )
}
