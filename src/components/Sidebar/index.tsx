import Image from 'next/image'
import { LoginButton, SidebarContainer, UserDetails } from './styles'
import { SidebarNav } from '../SidebarNav'
import { signOut, useSession } from 'next-auth/react'
import { SignIn, SignOut } from '@phosphor-icons/react'
import { Text } from '../Typography'
import { Avatar } from '../ui/Avatar'
import { useRouter } from 'next/router'

export const Sidebar = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const user = session?.user

  function handleOpenProfile() {
    router.push(`/profile/${user?.id}`)
  }

  return (
    <SidebarContainer>
      <div>
        <Image width={128} height={128} src="/images/logo.svg" alt="" />
        <SidebarNav />
      </div>
      <footer>
        {!user ? (
          <LoginButton href="/login">
            Fazer login
            <SignIn size={24} />
          </LoginButton>
        ) : (
          <UserDetails>
            <Avatar
              size="sm"
              src={user?.avatar_url}
              alt={user?.name}
              onClick={handleOpenProfile}
              css={{ cursor: 'pointer' }}
            />
            <Text size="sm">{user?.name}</Text>
            <SignOut size={24} color="#F75A68" onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </SidebarContainer>
  )
}
