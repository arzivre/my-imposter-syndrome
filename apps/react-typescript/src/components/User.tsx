import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export default function User() {
  // Type Assertion
  //Other Option <AuthUser>({} as AuthUser)
  const [user, setUser] = useState<AuthUser | null>(null)

  const handleLogin = () => {
    setUser({
      name: 'Arzivre',
      email: 'dev@dev.com',
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user && (
        <>
          <div>name: {user.name}</div>
          <div>email: {user.email}</div>
        </>
      )}
    </div>
  )
}
