import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export default function UserWithContext() {
  const userContext = useContext(UserContext)
  const handleLogin = () => {
    userContext.setUser({
      name: 'Arzivre',
      email: 'dev@dev.com',
    })
  }
  const handleLogout = () => {
    userContext.setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {userContext.user && (
        <>
          <div>name: {userContext.user.name}</div>
          <div>email: {userContext.user.email}</div>
        </>
      )}
    </div>
  )
}
