import { NextApiRequest, NextApiResponse } from 'next'

export type Context = {
  req: NextApiRequest
  res: NextApiResponse
  query: any
  }


// type User = {
//   id: string
//   name: string
//   email: string
//   password: string
// }

// type Campaign = {
//   id: string
//   owner_id: string
//   name: string
//   description: string
// }

// type Influencer = {
//   id: string
//   user_id: string
//   followers: number
//   avg_likes: number
//   avg_comments: number
// }

