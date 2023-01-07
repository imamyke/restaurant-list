const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant') // Schema

router.get('/', (req, res) => {
  Restaurant.find() // 取出 model 裡的"所有"資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JS "資料陣列"
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})
router.get('/search', (req, res) => {
  keyword = req.query.keyword.trim().toLowerCase()
  Restaurant.find()
  .lean()
  .then(restaurant => {
    restaurants = restaurant.filter(i => i.name.includes(keyword) || i.category.includes(keyword))
    return res.render('index', { restaurants })
  })
})

module.exports = router


