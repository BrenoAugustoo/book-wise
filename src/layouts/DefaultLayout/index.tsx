import { ReactNode } from 'react'
import { LayoutContainer, LayoutContent } from './styles'
import Head from 'next/head'
import { Sidebar } from '@/components/Sidebar'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <LayoutContainer>
      <Head>
        <title>{`${title} | BookWise`}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <Sidebar />
      <LayoutContent>{children}</LayoutContent>
    </LayoutContainer>
  )
}
