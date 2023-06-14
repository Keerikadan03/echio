import { ObjectId } from "mongodb"
import { isValidObjectId } from "mongoose"
import { z } from "zod"
import { Campaigns } from "../db/models"


const schema = z.any().refine(isValidObjectId).transform((val) => new ObjectId(val))


export default async function list_user_campaigns(user_id: any) {

  const _user_id = schema.parse(user_id)

  const campaigns = await Campaigns.find({ owner_id: _user_id })
  return campaigns

}
