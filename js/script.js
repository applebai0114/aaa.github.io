//讀取/js/data.json檔案
//讀取物件data的移轉面積 用p寫入body
fetch('js/data.json')
  .then(response => response.json())
  .then(data => {
    // 在這裡處理讀取到的資料
    console.log(data);
    // 將移轉面積寫入body
    const p = document.createElement('p');
    p.textContent = `移轉面積: ${data.移轉面積}`;
    document.body.appendChild(p);   
  })    
  .catch(error => {
    console.error('讀取資料時發生錯誤:', error);
  });