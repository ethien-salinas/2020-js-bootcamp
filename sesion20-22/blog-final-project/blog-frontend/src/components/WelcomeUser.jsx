import { useAuth } from "../hook/authHook"

export const WelcomeUser = () => {
  const auth = useAuth()
  return auth.user && (
    <h3>Welcome {auth.user}!</h3>
  )
}