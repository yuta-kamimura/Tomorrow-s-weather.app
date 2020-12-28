global.fetch = require('node-fetch');
let mailFunction = require('./mallsend.js');

//callApi();
let id = setInterval(function(){
  callApi();
},12000);

//APIから天気予報の情報取得
async function　callApi() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=d3addd5b87abd1646818e926a54cb9b1")
    .then(function (res){
       return res.json();
    })
.then(function (data) {

//もし天気が雨の時
const apiget = data.weather[0].main;
if(apiget === "Rain"){
   console.log("今日は雨です");
   mailFunction.sendmailer();
}
//もし天気が曇りの時
else if(apiget === "Clouds"){
    console.log("今日はくもりです");
}
//それ以外天気が晴れの時
else{
    console.log("今日は晴れです");
}
});
} 