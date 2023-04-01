import pymongo


pymongo_client = pymongo.MongoClient("mongodb://localhost:27017")
pymongo_db = pymongo_client["echiofy"]

pymongo_users = pymongo_db["users"]
pymongo_influencers = pymongo_db["influencers"]
pymongo_clients = pymongo_db["clients"]
pymongo_campaigns = pymongo_db["campaigns"]
pymongo_campaign_influencers = pymongo_db["campaign_influencers"]
