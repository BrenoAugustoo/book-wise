import { signIn } from 'next-auth/react'
import { AuthButton, AuthButtonsContainer } from './styles'
import { useRouter } from 'next/router'

type AuthButtonProps = {
  callbackUrl?: string
}

export const AuthButtons = ({ callbackUrl = '/' }: AuthButtonProps) => {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push(callbackUrl)
      return
    }

    signIn(provider, {
      callbackUrl,
    })
  }

  return (
    <AuthButtonsContainer>
      <AuthButton onClick={() => handleSignIn('google')}>
        <img src="/images/icons/google.svg" alt="" />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn('github')}>
        <img src="/images/icons/github.svg" alt="" />
        Entrar com Github
      </AuthButton>
      <AuthButton onClick={() => handleSignIn()}>
        <img src="/images/icons/rocket.svg" alt="" />
        Entrar como visitante
      </AuthButton>
    </AuthButtonsContainer>
  )
}
