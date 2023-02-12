const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant') // Schema
const User = require('../user')
const restaurantList = require('../data/restaurant.json') // default data

let SEED_USER = []
for (let i = 1; i < 3; i++) {
  const users = {
    name: `User${i}`,
    email: `user${i}@example.com`,
    password: '12345678'
  }
  SEED_USER.push(users)
}
let user1restaurants = []
for (let i = 0; i < 3; i++) {
  user1restaurants.push(restaurantList.results[i])
}
let user2restaurants = []
for (let i = 3; i < 6; i++) {
  user2restaurants.push(restaurantList.results[i])
}

// Mongoose(資料庫)連線 => 產生種子資料
const db = require('../../config/mongoose')
db.once('open', () => {
  const restaurantSeeder = (user, restaurants) => {
    bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(user.password, salt))
    .then(hash => User.create({
      name: user.name,
      email: user.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      return Promise.all(Array.from(
        { length: 3 },
        (_, i) => Restaurant.create({ ...restaurants[i], userId })
      ))
    })
    .then(() => {
      console.log('done.')
      process.exit()
    })
  }

  restaurantSeeder(SEED_USER[0], user1restaurants)
  restaurantSeeder(SEED_USER[1], user2restaurants)
})

