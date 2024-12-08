import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Container } from '@/components/shared/Container'
import { Main } from '@/components/shared/Main'

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </div>
  )
}