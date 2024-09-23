'use client'
import GetStarted from "@/pages/extra/GetStarted"
import UserProvider from "@/contexts/UserProvider"
import AuthWrapper from "@/wrappers/AuthWrapper"

const page = () => {
  return (
    <UserProvider>
      <GetStarted/>
    </UserProvider>
  )
}

export default AuthWrapper(page)