module.exports = {
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb://dbLuna:QJkCJ11LKg9QklFj@cluster0-shard-00-01.gzj6j.azure.mongodb.net:27017/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&directConnection=true&ssl=true",
  port: process.env.PORT || 5000,
};
