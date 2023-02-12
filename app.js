// 伺服器設定
const express = require('express')
const app = express()
const port = 3000

// 載入 Session
const session = require('express-session')
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

// Mongoose(資料庫)連線
require('./config/mongoose')

// 網頁樣板設定
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// 解析req.body => body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true })) // 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理

// RESTful API
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// 總路由
const routers = require('./routes')
app.use(routers)

// 伺服器監聽
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
})
