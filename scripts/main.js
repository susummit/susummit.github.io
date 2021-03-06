let myImage = document.querySelector('img');
let index = 0;

function setImage() {
  let rand = Math.floor(Math.random() * 4);
  if (rand >= index) {
    index = rand + 1;
  } else {
    index = rand;
  }
  myImage.setAttribute('src','images/bg' + index + '.jpg');
  // myImage.setAttribute('src','images/bg' + Math.floor(Math.random() * 5) + '.jpg'); 
  // if(myImage.getAttribute('src') === 'images/backgroud.jpg') {
  //   myImage.setAttribute('src','images/bg2.jpg');
  // } else {
  //   myImage.setAttribute('src','images/backgroud.jpg');
  // }
}

function setTitle(userName) {
  myHeading.textContent = '龙龙饲养指南--for ' + userName;
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('输入饲养员名字.');
  if (!myName){
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    setTitle(myName);
  }
}

function main() {
  /* 每秒变换图片 */
  setInterval(setImage, 1000);

  /* 初始化用户名 */
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    setTitle(localStorage.getItem('name'));
  }

  /* 初始化改变用户名的按钮 */
  myButton.onclick = function() {
    setUserName();
  }

}

main();