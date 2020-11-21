import { useAuth } from "../hook/authHook"

export const LoginPage = () => {
  const auth = useAuth()
  return (
    <>
      <h2>LoginPage view</h2>
      <button onClick={() => { auth.signin(() => { }) }}>Login</button>
    </>
  )
}