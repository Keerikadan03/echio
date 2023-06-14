import mongo from "@/lib/mongodb"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { getUserByCredentials, getUserByEmail } from "@/lib/db/user"

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(mongo),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email"},
        password: { label: "Password", type: "password", placeholder: "password"}
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as { email: string; password: string }
        console.log(email, password)

        const user = await getUserByEmail(email)
        if (!user) return null

        const creds = await getUserByCredentials(email, password)
        if (!creds) return null

        return user
      }})


  ],
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    error: "/signin",
    verifyRequest: "/verify-request",
    newUser: undefined,
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        // @ts-ignore
        session.user.id = token.uid
      }
      return session
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id
      }
      return token
    }
  },
  session: {
    strategy: "jwt"
  }
}

export default NextAuth(authOptions)
