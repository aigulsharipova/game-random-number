const inputText = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*20)+1;

inputText.addEventListener('keypress', function(e) {
  if (e.keyCode === 13)  
    play()
  
})



button.addEventListener('click', play);

function play() {

  const userNumber = document.querySelector('#guess').value; 
  
  if (userNumber < 1 || userNumber > 20) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Write numbers 1 to 20!',
    })
  } 
  else if (isNaN(userNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Write number!',
    })
  }
  else {
    if (userNumber < answer) {
       Swal.fire('You need write number is biggest');
    }
    else if (userNumber > answer) {
      Swal.fire('You need wtite number is smaller');
    }
   else {
    Swal.fire({
      title: 'You WIN!!!!',
      imageUrl: './style/win.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
   }
  }
}