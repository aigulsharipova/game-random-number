const inputText = document.querySelector('#gues');
const button = document.querySelector('#btn');

button.addEventListener('click', play);

function play() {

  const userNumber = document.querySelector('#gues').value; 
  if (userNumber < 1 || userNumber > 20) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Write numbers 1 to 20!',
    })
  }
  
}