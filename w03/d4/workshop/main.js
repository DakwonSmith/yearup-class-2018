//This comes from data.js
let gifs = window.data.data;
  console.log(gifs);

function changeGifBg(){
  let gifElement = document.getElementById('background');
  let randomGif = Math.floor(Math.random() * gifs.length);
  gifElement.src = gifs.[randomGif]images.orignal.url;
}

let button = document.querySelector('button');
button.addEventListener('click',randomGif);
