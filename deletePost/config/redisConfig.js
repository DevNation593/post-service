const redis = require("redis");
const client = redis.createClient({
  host: "your-redis-host",
  port: 6379
});
client.on("error", (err) => console.error("Redis error:", err));
module.exports = client;
