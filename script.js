document.addEventListener('DOMContentLoaded', function() {  
    const myImage = document.getElementById('myImage');  
    const changeImageBtn = document.getElementById('changeImageBtn');  
      
     
    const newImageUrl = '8.jpg';  
      
    changeImageBtn.addEventListener('click', function() {  
      myImage.src = newImageUrl; 
    });  
  });