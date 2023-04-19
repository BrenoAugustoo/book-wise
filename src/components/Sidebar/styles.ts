import Link from 'next/link'
import { styled } from '../../../stitches.config'

export const SidebarContainer = styled('aside', {
  width: 232,
  height: 'calc(100% - 40px)',
  margin: 20,
  background: '$gray700 url(/images/sidebar-bg.png) no-repeat center',
  backgroundSize: 'cover',
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 40,
  paddingBottom: 24,
})

export const LoginButton = styled(Link, {
  textDecoration: 'none',
  color: '$gray200',
  fontWeight: 700,
  fontSize: '$md',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  transition: '0.2s',

  svg: {
    color: '$green100',
  },

  '&:hover': {
    color: '$gray300',
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    cursor: 'pointer',
  },

  p: {
    maxWidth: 100,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})
