# 吃吃食記
- 利用Node.js及Express框架建立一個餐廳清單網站
- 使用 Passport 打造註冊功能並串接 Facebook 第三方登入
- 使用 bcrypt 保護使用者的密碼
- 可以新增、編輯、刪除食記
- 除了可以讓使用者輸入餐廳類別或餐廳名稱找到特定的餐廳，也可以透過排序按鈕來查看餐廳。

## 專案畫面
### 首頁
![MyImage](https://i.imgur.com/Koh7Y6Z.png)
### 註冊
![MyImage](https://i.imgur.com/zLmZ4uh.png)
### 使用搜尋按鈕找到特定的餐廳
![MyImage](https://i.imgur.com/TZREP75.png)
### 使用排序按鈕顯示畫面
![MyImage](https://i.imgur.com/tj7Jyki.png)
### 餐廳詳細資訊
![MyImage](https://i.imgur.com/mfqAqEJ.png)
### 新增餐廳資訊
![MyImage](https://i.imgur.com/z377syL.png)
### 表單輸入不完全時，表單驗證機制畫面
![MyImage](https://i.imgur.com/BtK70Lu.png)
### 編輯餐廳資訊
![MyImage](https://i.imgur.com/w0hUplT.png)
### 刪除餐廳資訊
![MyImage](https://i.imgur.com/fe4WVlN.png)
## 專案特色
1. 使用者可以註冊並使用自己的帳號登入網頁，並建立自己的餐廳清單，且加入表單的例外處理，包含:
- 登入頁及註冊頁表單若輸入不完全會提醒使用者填寫完整的表單內容
- 若使用者登出後，會告訴使用者已成功登出
2. 使用者除了手動建立帳號密碼，還可以使用 Facebook 的第三方登入方式註冊帳號密碼
3. 使用者在首頁可以看到所有餐廳的簡單資料，包含:
- 餐廳照片
- 餐廳名稱
- 餐廳分類
- 餐廳評分
4. 使用者可以輸入餐廳類別或餐廳名稱找到特定的餐廳
5. 使用者可以點擊餐廳來查看餐廳的詳細資訊，包含:
- 餐廳類別
- 餐廳地址
- 餐廳電話
- 餐廳介紹
6. 使用者可以透過排序下拉選單來查看餐廳，包含:
- 全部
- 名稱升冪排序
- 名稱降冪排序
- 類別排序
- 位置排序
7. 使用者可以新增、編輯、刪除餐廳
8. 優化使用者體驗
- 當使用者碰觸到餐廳卡片，餐廳照片會放大
- 當使用者誤輸入空字串找尋餐廳時，會提醒使用者
- 當使用者表單輸入不完全時，表單有驗證機制並提醒使用者
- 當使用者想查詢全部時，可利用空字串且下拉選單為全部時查詢
## 環境建置
- Node.js

## 專案安裝流程
1. Clone此專案至本機電腦
```
git clone https://github.com/imamyke/restaurant_list.git
```
2. 進入此專案資料夾
```
cd restaurant_list
```
3. 安裝 npm 套件
```
npm install
```
4. 打開Terminal，並輸入以下指令
```
npm run dev
```
5. 當Terminal出現此字句，表示伺服器已成功啟用
```
The server is running on http://localhost:3000
```
現在可以將 http://localhost:3000 輸入至瀏覽器，開始瀏覽「吃吃食記」囉!



