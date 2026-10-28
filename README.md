# aespa — CHROME EDITION

B 款首頁視覺 Demo：精品時裝 × 金屬未來感。

## 執行

`npm install`，接著 `npm run dev`。正式產物使用 `npm run build`。

## 結構

- `src/main.tsx`：共用導覽、頁尾與首頁互動。
- `src/styles/base.css`：共用元件與基礎樣式。
- `src/styles/home.css`：首頁區塊與 RWD。
- `src/styles/chrome.css`：Chrome 主題與原創金屬視覺。

## 本次範圍

成員入口、專輯入口、活動分類、消息閱讀、手機選單及鍵盤可操作對話框。成員、專輯圖像為原創概念佔位，正式上線前需要替換選定素材。活動與消息為明確標示的展示資料。無登入、資料庫或後台，不保存使用者資料。

## 後續

A、B、C、D 四款已提供視覺預覽，可由共用導覽切換比較。正式站依約加入四位團員介紹與影片入口、專輯介紹與曲目、活動行事曆、文章分類與 CRUD、管理員登入與資料庫、RWD 測試、上線與操作教學。不含粉絲會員、留言或投稿。

## 本機驗證紀錄

- TypeScript 檢查通過；最後建置命令：`npm run build -- --emptyOutDir false`。
- 預設清空既有 dist 的步驟在此工作環境中途結束，因此本次保留舊資產完成輸出；最新 dist/index.html 已指向最新資產。新的輸出目錄可正常完整建置。
- 已檢視桌面與 390px 手機首屏，點測手機選單、活動分類與活動詳情。
- 共用元件位於 `src/components/Layout.tsx`。
- 本機預覽： http://127.0.0.1:5173/ 。本次未公開部署。

## D｜NEW DIMENSION（2026-10-25）

- 已確認方向：深紫黑 × 冰藍 × 異次元入口。原創 CSS 發光入口、空間透視與拱形成員卡。
- B 預覽：`http://127.0.0.1:5173/?edition=b`；D 預覽：`http://127.0.0.1:5173/?edition=d`。頁首可切換，無參數仍為 B。
- `src/components/ChromeHero.tsx` 保留 B 首屏；`DimensionHero.tsx` 為 D 首屏；`src/styles/dimension.css` 僅覆寫 D 主題。
- 共用導覽、頁尾、成員、音樂、活動分類和消息互動，未新增資料庫或正式活動資訊。
- 驗證：TypeScript 與 Vite 建置通過；桌面與 390px 手機首屏檢視；手機選單展開／收起、D 活動分類及詳情、B／D 切換通過。
- 尚未在實體手機驗證，仍使用概念佔位圖。

## A｜SIGNAL ERROR（2026-10-26）

- 黑白 × 酸綠、放大字體、金屬碎片與唱片訊號視覺；首屏為 `SignalHero.tsx`，主題覆寫位於 `src/styles/signal.css`。
- 預覽：`http://127.0.0.1:5173/?edition=a`。共用切換列提供 A／B／D，C 草稿暫時隱藏，留待下一輪。
- 已檢視桌面、390px 與 320px 窄版首屏；320px 選單、成員詳情開關、活動篩選通過，頁面無水平溢位。尚未進行實體手機測試。
- TypeScript 與 Vite 建置通過：`npm run build -- --emptyOutDir false`。概念素材與展示資料標示保留，未公開部署。

## C｜HYPER BLOOM（2026-10-26）

- 冰白 × 電光藍 × 虹彩花朵，使用 BloomHero.tsx 與獨立 bloom.css 主題覆寫，沿用共用區塊。
- 預覽：http://127.0.0.1:5173/?edition=c 。導覽已開放 A／B／C／D。
- 已檢視桌面、768px 平板、390px 與 320px 手機寬度；手機選單、成員詳情開關與行程篩選通過。320px 無水平溢位；未進行實體手機測試。
- 微調平板花朵比例與位置，避免被側邊截斷；保留概念素材與展示資料標示。

# aespa-fans
