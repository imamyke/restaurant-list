const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant') // Schema

// 瀏覽所有餐廳
router.get('/', (req, res) => {
  Restaurant.find() // 取出 model 裡的"所有"資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JS "資料陣列"
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})
// 搜尋&排序
router.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase() || ''
  const sort = req.query.sort
  let sorter = {}
  const selected = {
    asc: false,
    desc: false,
    category: false,
    location: false
  }
  if (sort === 'asc') {
    sorter = { _id: 'asc' }
    selected.asc = true
  }
  if (sort === 'desc') {
    sorter = { _id: 'desc' }
    selected.desc = true
  }
  if (sort === 'category') {
    sorter = { category: 'asc' }
    selected.category = true
  } 
  if (sort === 'location') {
    sorter = { location: 'asc' }
    selected.location = true
  } 
  Restaurant.find()
  .lean()
  .sort(sorter)
  .then(restaurant => {
    const restaurants = restaurant.filter(i => i.name.includes(keyword) || i.category.includes(keyword))
    return res.render('index', { restaurants, keyword, selected })
  })
  .catch(error => console.error(error))
})
// 排序
router.get('/sort', (req, res) => {
  
  Restaurant.find()
  .lean()
  .sort(sorter)
  .then(restaurants => res.render('index', { restaurants, selected }))
  .catch(error => console.error(error))
})

module.exports = router


