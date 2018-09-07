

let catPicOne  = document.getElementById('catPictureOne');
let catPicTwo = document.getElementById('catPictureTwo');
let catPicThree = document.getElementById('catPictureThree');
let catPicFour = document.getElementById('catPictureFour');
let catPicFive = document.getElementById('catPictureFive');

let clickCounter = document.querySelector('.counter');
let catNameClass = document.querySelector('.name');

// This is the Name  Part
let catName = 'Ringo';
catNameClass.innerHTML = ' Name : ' + catName;

//This is Info for the counter
let counter = 0; // this is called priming

catPicOne.addEventListener('click', function(){
  // if the picture is clicked then the counter should be increased
  counter = counter + 1;
  clickCounter.innerHTML = 'Click Count: ' + counter;
  // console.log('click works');

}, false);

catPicTwo.addEventListener('click', function(){
  // if the picture is clicked then the counter should be increased
  counter = counter + 1;
  clickCounter.innerHTML = 'Click Count: ' + counter;
  // console.log('click works');

}, false);

catPicThree.addEventListener('click', function(){
  // if the picture is clicked then the counter should be increased
  counter = counter + 1;
  clickCounter.innerHTML = 'Click Count: ' + counter;
  // console.log('click works');

}, false);

catPicFour.addEventListener('click', function(){
  // if the picture is clicked then the counter should be increased
  counter = counter + 1;
  clickCounter.innerHTML = 'Click Count: ' + counter;
  // console.log('click works');

}, false);

catPicFive.addEventListener('click', function(){
  // if the picture is clicked then the counter should be increased
  counter = counter + 1;
  clickCounter.innerHTML = 'Click Count: ' + counter;
  // console.log('click works');

}, false);
