var form = document.querySelector('.form');
var result = document.querySelector('.result');

form.addEventListener('submit', function(e) {
  // Stop form from refreshing the page
  e.preventDefault();
  var userNum = e.target[0].value;
  var romanNum = romanizer(userNum);
  result.textContent = romanNum;
});
