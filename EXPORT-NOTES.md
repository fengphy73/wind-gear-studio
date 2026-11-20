# 風力齒輪設計室 v1.3.3 原始碼匯出

本 ZIP 保留 v1.3.3 的全部 26 個版控檔案，包含 package.json、package-lock.json、所有 src 程式、建置程式、HTML、CSS、測試程式、中文字型與原有授權檔，以及網站部署設定。原檔內容未修改。

## 使用方式

安裝 Node.js 與 npm 後，在解壓縮資料夾執行：

```sh
npm ci
npm test
npm run build
```

建置完成的靜態網站在 dist/；以支援 WebAssembly 的 HTTP 靜態伺服器提供該資料夾。不要以 file:// 直接開啟。

未包含可由 npm ci 還原的 node_modules、Git 歷史、暫存測試 STL 或重新生成的 dist；這些不是遺失的網站原始碼。字型檔已完整包含在 assets/，不需要另外下載字型。

## 版本與檢查

- 程式版本：1.3.3。
- 來源版本：cc1b2cb6027809e9b5592c0b7f1915d0de24b264。
- 已執行 npm test 與 npm run build，全部通過。
- 六種快速起點為 20、40、50、60、80、100 齒，均採六角孔對邊距 6.34 mm；文字刻入深度預設為 3 mm。
- 原始 README.md 的標題與部分功能列表停留於較早版本；為保持原始碼原樣，此次未改寫 README.md，實際版本以 package.json 與程式為準。
- 字型來源及授權在 assets/FONT-LICENSE.txt，使用或散布字型時請一併保留。專案本身沒有另外附上總體開源授權，不要將字型授權誤認為所有程式的授權。
- SOURCE-FILES-SHA256.txt 列出全部原始檔的 SHA-256，方便確認檔案完整性。
