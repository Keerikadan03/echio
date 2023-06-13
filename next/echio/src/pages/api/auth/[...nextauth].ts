import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"


export const authOptions : NextAuthOptions = {
  // adapter: MongoDBAdapter(mongo),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
  // pages: {
  //   signIn: "/signin",
  //   signOut: "/signout",
  //   error: "/signin",
  //   verifyRequest: "/verify-request",
  //   newUser: undefined
  // }
}

export default NextAuth(authOptions)

