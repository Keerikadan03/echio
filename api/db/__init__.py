import pymongo

import os

ECHIO_MONGO_HOST = os.environ.get('ECHIO_MONGO_HOST')

client = pymongo.MongoClient(ECHIO_MONGO_HOST)
db = client['echio']
db_users = db['users']

