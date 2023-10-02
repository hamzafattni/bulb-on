const pic = document.querySelector('.picture');


pic.addEventListener('mouseover', function (event) {
  if (event.target.tagName === 'IMG' ) {
    pic.innerHTML=
    `<h1>Bulb On</h1 class="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCzykKHkJOSb7TjniNwxddcYIDReU2w-aGg&usqp=CAU" class="images1">`
    
    
  }
  
  
  
  else {
    pic.innerHTML=` <h1 class="image">Bulb Off</h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxptf-w1eyWgPPn24UQKdgEj4Fm_xfwhKLfw&usqp=CAU">`
   
  }
});