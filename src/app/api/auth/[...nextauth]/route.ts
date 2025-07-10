// All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.

import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string, // identificador para al app
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string // contraseña para la app
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string, // identificador para al app
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string // contraseña para la app
    })
  ]
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

