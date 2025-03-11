const myCarousel = document.getElementById('carousel')
console.log(myCarousel)
const carouselItem = document.querySelectorAll(".carousel-item")
console.log(carouselItem)
const prevElement = document.getElementById('prev')
const nextElement = document.getElementById('next')


let currentIndex = 0

nextElement.addEventListener('click', function () {

    if( currentIndex === carouselItem.length - 1 ){
    
        carouselItem[currentIndex].classList.remove('active');
        currentIndex = 0
        carouselItem[currentIndex].classList.add('active');

    } else{
  
        carouselItem[currentIndex].classList.remove('active');
  
    currentIndex++;
  
    carouselItem[currentIndex].classList.add('active');

    }

  
  })



    
    prevElement.addEventListener('click', function () {
      
        if(currentIndex !== 0 ){
            carouselItem[currentIndex].classList.remove('active');
           
            currentIndex--;
          
            carouselItem[currentIndex].classList.add('active');
        
        
        } else{
       
             carouselItem[0].classList.remove('active');
           
            currentIndex =  carouselItem.length -1
            
           
             carouselItem[currentIndex].classList.add('active');
         
        }
       })
    
    







    
      