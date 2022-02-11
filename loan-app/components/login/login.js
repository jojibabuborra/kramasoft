import { useSession, signIn, signOut, } from "next-auth/react"

export default function Login() {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    return (
        <div>
            
    {!session && (
        <>
            <button onClick={() => signIn('keycloak')} ><b class="text-blue-700 p-2 bold">Sign in </b></button>
            </>
    )}
    {session && (
        <>
        <p>
        <small>Signed in as</small>
        <br />
        <strong>{session.user.name}</strong>
      </p>
      <button onClick={() => signOut()}><b class="text-red-700 p-2 bold">Sign out</b></button>
      </>
    )}
    </div>
    )
}