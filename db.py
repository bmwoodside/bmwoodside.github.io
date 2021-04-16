
client = pymongo.MongoClient("mongodb://dbAdmin:<password>@cluster0-shard-00-00.b00ti.mongodb.net:27017,cluster0-shard-00-01.b00ti.mongodb.net:27017,cluster0-shard-00-02.b00ti.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mydz1b-shard-0&authSource=admin&retryWrites=true&w=majority")
db = client.test
