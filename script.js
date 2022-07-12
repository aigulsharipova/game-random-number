const inputText = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random() * 20) + 1;

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
      alert('You need write number is biggest');
    }

    else if (userNumber > answer) {
      alert('You need wtite number is smaller');
    }
   else {
    alert('You win!!!')
   }
  }
}