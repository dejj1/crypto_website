var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=ngn",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
     btc.innerHTML = response.bitcoin.ngn;
     eth.innerHTML = response.ethereum.ngn;
     doge.innerHTML = response.dogecoin.ngn;

});
