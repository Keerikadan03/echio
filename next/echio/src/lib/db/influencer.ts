import prisma from "@/lib/prisma"
import { isValidObjectId } from "mongoose"
import { z } from "zod"

/** Influencer zod model for input validation */
const Influencer = z.object({
  user_id: z.string().refine(isValidObjectId),
  name: z.string(),
  reach: z.number().min(0),
  engagement: z.number().min(0).max(100),
  avg_likes: z.number().min(0),
  avg_views: z.number().min(0),
  rate: z.number().min(0),
  image: z.string().url().optional()
})

/**
 * Create an influencer object.
 * Validates the input using the Influencer zod model.
 */
export async function createInfluencer(props: z.infer<typeof Influencer>) {
  const influencer_props = Influencer.parse(props)

  const influencer = await prisma.influencers.create({
    data: influencer_props
  })

  return influencer
}

/**
 * Get the influencer object by their id.
 * Assumes influencer_id is clean.
 */
export async function getInfluencer(influencer_id: string) {
  const influencer = await prisma.influencers.findUnique({
    where: {
      id: influencer_id
    }
  })

  return influencer
}

/** InfluencerQuery zod model for input validation */
const InfluencerQuery = z.object({
  min_reach: z.number().min(0).optional(),
  max_reach: z.number().min(0).optional(),
  min_engagement: z.number().min(0).max(100).optional(),
  max_engagement: z.number().min(0).max(100).optional(),
  min_avg_likes: z.number().min(0).optional(),
  max_avg_likes: z.number().min(0).optional(),
  min_avg_views: z.number().min(0).optional(),
  max_avg_views: z.number().min(0).optional(),
  platform_youtube: z.boolean().default(true),
  platform_instagram: z.boolean().default(true)
})

/**
 * Get the influencer objects by the query parameters.
 * Validates the input using the InfluencerQuery zod model.
 */
export async function getInfluencers(_query: z.infer<typeof InfluencerQuery>) {
  const _query_props = InfluencerQuery.parse(_query)

  let query: any = {}

  if (_query_props.min_reach) query.reach.gte = _query_props.min_reach
  if (_query_props.max_reach) query.reach.lte = _query_props.max_reach
  if (_query_props.min_engagement) query.engagement.gte = _query_props.min_engagement
  if (_query_props.max_engagement) query.engagement.lte = _query_props.max_engagement
  if (_query_props.min_avg_likes) query.avg_likes.gte = _query_props.min_avg_likes
  if (_query_props.max_avg_likes) query.avg_likes.lte = _query_props.max_avg_likes
  if (_query_props.min_avg_views) query.avg_views.gte = _query_props.min_avg_views
  if (_query_props.max_avg_views) query.avg_views.lte = _query_props.max_avg_views
  if (_query_props.platform_youtube) query.platform_youtube.not = null
  if (_query_props.platform_instagram) query.platform_instagram.not = null

  const influencers = await prisma.influencers.findMany({
    where: query
  })

  return influencers
}

/**
 * Add an influencer to a campaign's ongoing list.
 * Validates the influencer_id and campaign_id.
 */
export async function addInfluencerToCampaign(influencer_id: string, campaign_id: string) {
  const _influencer_id = z.string().refine(isValidObjectId).parse(influencer_id)
  const _campaign_id = z.string().refine(isValidObjectId).parse(campaign_id)

  await prisma.campaign_influencers.create({
    data: {
      influencer_id: _influencer_id,
      campaign_id: _campaign_id
    }
  })
}

/**
 * Add an influencer to a campaign's shortlisted list.
 * Validates the influencer_id and campaign_id.
 */
export async function shortlistInfluencer(influencer_id: string, campaign_id: string) {
  const _influencer_id = z.string().refine(isValidObjectId).parse(influencer_id)
  const _campaign_id = z.string().refine(isValidObjectId).parse(campaign_id)

  await prisma.campaign_influencers.update({
    where: {
      campaign_id_influencer_id: {
        influencer_id: _influencer_id,
        campaign_id: _campaign_id
      }
    },
    data: {
      status: "SHORTLISTED"
    }
  })
}
