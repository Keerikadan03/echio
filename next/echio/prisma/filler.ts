import { createCampaign } from "@/lib/db/campaigns"
import { addInfluencerToCampaign, createInfluencer, shortlistInfluencer } from "@/lib/db/influencer"
import { createUserByCredentials } from "@/lib/db/user"
import prisma from "@/lib/prisma"
import { CampaignType } from "@prisma/client"

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

const ON = false

export async function fillDatabase() {

  if (!ON) return

  console.log("Starting")

  console.log("Emptying users")
  await prisma.users.deleteMany({})

  console.log("Emptying credentials")
  await prisma.credentials.deleteMany({})

  console.log("Emptying influencers")
  await prisma.influencers.deleteMany({})

  console.log("Emptying campaigns")
  await prisma.campaigns.deleteMany({})

  console.log("Emptying campaign_influencers")
  await prisma.campaign_influencers.deleteMany({})


  let users = []
  const n_users = 50
  for (let i = 1; i <= n_users; i++) {
    users.push(await createUserByCredentials(`user${i}@example.com`, `user${i}`, `user ${i}`))
    console.log(`Created user ${i}`)
  }

  let influencers = []

  for (let i = 0; i < n_users; i++) {
    influencers.push(
      await createInfluencer({
        user_id: users[i].id,
        name: `influencer ${i + 1}`,
        reach: random(1000, 10_000_000),
        engagement: random(1, 100),
        avg_likes: random(1, 10_000_000),
        avg_views: random(1, 10_000_000),
        rate: random(1, 100)
      })
    )
    console.log(`Created influencer ${i + 1}`)
  }

  let n_campaigns = 5
  let n_ongoing_influencers = 10
  let n_shortlisted_influencers = 10
  let campaigns = []

  for (let i = 0; i < n_campaigns; i++) {
    campaigns.push(
      await createCampaign({
        name: `campaign ${i + 1}`,
        owner_id: users[0].id,
        description: `description ${i + 1}`,
        image: "https://www.reliablesoft.net/wp-content/uploads/2020/11/digital-marketing-campaign.jpg",
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in malesuada est. Pellentesque porttitor massa neque, vitae tempor nisi faucibus nec. Donec orci sem, volutpat vitae nunc ac, porta venenatis diam. Donec pharetra quam a elementum vulputate. Etiam ullamcorper lobortis arcu ac efficitur. Ut aliquet, ante quis iaculis accumsan, nisl arcu volutpat orci, nec mollis risus mi et nisi. Integer tincidunt mattis sem vel viverra. Quisque ullamcorper dolor tincidunt maximus venenatis. Phasellus auctor quis dui quis mollis. Duis vel varius quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis mollis ex id commodo.",
        product_media: [
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        campaign_type: ["NORMAL", "PAID", "BARTER"][random(0, 3)] as CampaignType,
        nsfw: [true, false][random(0, 2)]
      })
    )
    console.log(`Created campaign ${i + 1}`)

    for (let j = 1; j < n_shortlisted_influencers + n_ongoing_influencers; j++) {
      await addInfluencerToCampaign(influencers[j].id, campaigns[i].id)
      console.log(`Added influencer ${j + 1} to campaign ${i + 1}`)
    }


    for (let j = 1; j < n_shortlisted_influencers; j++) {
      await shortlistInfluencer(influencers[j].id, campaigns[i].id)
      console.log(`Shortlisted influencer ${j + 1} to campaign ${i + 1}`)
    }
  }

  console.log("Done")

}

