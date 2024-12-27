import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Container } from '@/components/shared/Container'
import { Main } from '@/components/shared/Main'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { FilterModal } from './FilterModal'

export function Layout() {
  return (
    <div className="layout">
      <FilterModal />
      <Container>
        <Header />
        <Main>
          <ScrollToTop />
          <Outlet />
        </Main>
      </Container>
    </div>
  )
}