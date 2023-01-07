const Restaurant = require('../restaurant') // Schema
const restaurantList = require('../data/restaurant.json') // default data

// Mongoose(資料庫)連線 => 產生種子資料
const db = require('../../config/mongoose')
db.once('open', () => {
  console.log('mongodb connected!')
  restaurantList.results.forEach((restaurant) => {
    Restaurant.create(restaurant) // 拿物件去create
  })
  console.log('done')
})