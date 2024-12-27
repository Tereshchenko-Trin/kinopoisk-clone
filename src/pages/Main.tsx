import { Outlet } from 'react-router-dom'
import { Menu } from '@/components/Menu'

export function Main() {
  return (
    <div className="container_home">
      <Menu />
      <Outlet />  
    </div>
  )
}