import { ProfileData } from '@/pages/profile/[id]'
import {
  ProfileDetailsContainer,
  ProfileDetailsWrapper,
  UserInfo,
} from './styles'
import { Avatar } from '../ui/Avatar'
import { Heading, Text } from '../Typography'
import { ProfileDetailsItem } from './ProfileDetailsItem'
import {
  BookOpen,
  BookmarkSimple,
  BookmarksSimple,
  Books,
  UserList,
} from '@phosphor-icons/react'

type ProfileDetailsProps = {
  profile: ProfileData
}

export const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear()
  return (
    <ProfileDetailsContainer>
      <UserInfo>
        <Avatar
          size="lg"
          alt={profile.user.name}
          src={profile.user.avatar_url}
        />
        <Heading size="md" css={{ marginTop: 20 }}>
          {profile.user.name}
        </Heading>
        <Text size="sm" color="gray-400">
          membro desde {memberSinceYear}
        </Text>
      </UserInfo>
      <ProfileDetailsWrapper>
        <ProfileDetailsItem
          icon={<BookOpen />}
          info={profile.readPages}
          label="Páginas lidas"
        />
        <ProfileDetailsItem
          icon={<Books />}
          info={profile.ratedBooks}
          label="Livros avaliados"
        />
        <ProfileDetailsItem
          icon={<UserList />}
          info={profile.readAuthors}
          label="Autores lidos"
        />
        {profile?.mostReadCategory && (
          <ProfileDetailsItem
            icon={<BookmarksSimple />}
            info={profile.mostReadCategory}
            label="Categoria mais lida"
          />
        )}
      </ProfileDetailsWrapper>
    </ProfileDetailsContainer>
  )
}
