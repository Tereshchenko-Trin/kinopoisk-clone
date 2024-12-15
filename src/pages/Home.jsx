import { Outlet } from 'react-router-dom'
import { Menu } from '@/components/Menu'

export function Home() {
  return (
    <div className="container_home">
      <Menu />
      <Outlet />  
    </div>
  )
}