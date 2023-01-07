const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant') // Schema

// 新增
router.get('/', (req, res) => {
  return res.render('new')
})
router.post('/', (req, res) => {
  const form = req.body // JS 物件
  return Restaurant.create(form)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
// 查看特定資訊
router.get('/:id', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean() // 把資料轉換成單純的 "JS 物件"
    .then(restaurant => res.render('info', { restaurant }))
    .catch(error => console.log(error))
})
// 修改
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean() // 把資料轉換成單純的 "JS 物件"
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const id = req.params.id // 字串
  return Restaurant.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
// 刪除
router.delete('/:id', (req, res) => {
  const id = req.params.id // 字串
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router