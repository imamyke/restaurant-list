const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant') // Schema

// 新增
router.get('/', (req, res) => {
  return res.render('new')
})
router.post('/', (req, res) => {
  const userId = req.user._id
  const form = req.body // JS 物件
  return Restaurant.create({ ...form, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
// 查看特定資訊
router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Restaurant.findOne({ _id, userId })
    .lean() // 把資料轉換成單純的 "JS 物件"
    .then(restaurant => res.render('info', { restaurant }))
    .catch(error => console.log(error))
})
// 修改
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Restaurant.findOne({ _id, userId })
    .lean() // 把資料轉換成單純的 "JS 物件"
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id // 字串
  return Restaurant.findOneAndUpdate({ _id, userId }, req.body)
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(error => console.log(error))
})
// 刪除
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id // 字串
  return Restaurant.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router