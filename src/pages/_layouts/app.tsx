import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <header>Header</header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
