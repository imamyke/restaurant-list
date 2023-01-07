# 吃吃食記
利用Node.js及Express框架建立一個餐廳清單網站，可以讓使用者輸入餐廳類別或餐廳名稱找到特定的餐廳，也可以透過排序按鈕來查看餐廳。
除此之外，還可以新增、編輯、刪除自己的食記。

## 專案畫面
### 首頁
![MyImage](https://i.imgur.com/ozXGR8j.jpg)
### 使用搜尋按鈕找到特定的餐廳
![MyImage](https://i.imgur.com/8OOuYBo.png)
### 使用排序按鈕顯示畫面
![MyImage]()
### 餐廳詳細資訊
![MyImage](https://i.imgur.com/bG8e4ht.png)
### 新增餐廳資訊
![MyImage](https://i.imgur.com/z377syL.png)
### 編輯餐廳資訊
![MyImage](https://i.imgur.com/w0hUplT.png)
### 刪除餐廳資訊
![MyImage](https://i.imgur.com/6yT7R9l.png)
## 專案特色
1. 使用者在首頁可以看到所有餐廳的簡單資料，包含:
- 餐廳照片
- 餐廳名稱
- 餐廳分類
- 餐廳評分
2. 使用者可以輸入餐廳類別或餐廳名稱找到特定的餐廳
3. 使用者可以點擊餐廳來查看餐廳的詳細資訊，包含:
- 餐廳類別
- 餐廳地址
- 餐廳電話
- 餐廳介紹
4. 使用者可以透過排序下拉選單來查看餐廳，包含:
- 名稱升冪排序
- 名稱降冪排序
- 類別排序
- 位置排序
5. 使用者可以新增、編輯、刪除餐廳
6. 優化使用者體驗
- 當使用者碰觸到餐廳卡片，餐廳照片會放大
- 當使用者誤輸入空字串找尋餐廳時，會提醒使用者
- 當使用者表單輸入不完全時，表單有驗證機制並提醒使用者
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



