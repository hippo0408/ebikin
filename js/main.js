'use strict';
{
    const btn=document.getElementById("btn");
    
    

btn.addEventListener('click', () => {
    const results = [ "エビ★金", "その★新","マニワインサイ","坂東","永吉","橋本","佐藤",
    "今村","よしのび","あへたく","カイチ","清原","えびき", "長尾の夫","チンペー","マニワアウサイ",
    "沢尻エリカ","山口達也","清原","田代","小出恵介","押尾学",新谷太郎,];
    btn.textContent = results[Math.floor(Math.random() * results.length)];
  });
}