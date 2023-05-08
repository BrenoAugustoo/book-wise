import { Heading, Text } from '@/components/Typography'
import { ReactNode } from 'react'
import { ProfileDetailsItemContainer } from './styles'

type ProfileDetailsItemProps = {
  icon: ReactNode
  info: string | number
  label: string
}

export const ProfileDetailsItem = ({
  icon,
  info,
  label,
}: ProfileDetailsItemProps) => {
  return (
    <ProfileDetailsItemContainer>
      {icon}
      <div>
        <Heading size="xs" color="gray-200">
          {info}
        </Heading>
        <Text size="sm" color="gray-300">
          {label}
        </Text>
      </div>
    </ProfileDetailsItemContainer>
  )
}
