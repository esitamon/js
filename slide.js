(function(){

    // array of images

    let imageArr = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];

    //current index

    let currentIndex = 0;

    //getting the link element for next 

    let nextLink = document.getElementById('next');
    let previousLink = document.getElementById('previous');

    //getting the image tile

    let tileImage = document.getElementById('myimage');

    //triggering function call through event

    nextLink.onclick = moveNext;
    previousLink.onclick = movePrevious;
    
    //stepper function for the slide

    //declare global

    currentIndex = 0;

    function moveNext(){

            currentIndex++
            
            if(currentIndex > imageArr.length-1){

                currentIndex = 0;

            }else{
            
                tileImage.src =  imageArr[currentIndex];
                
                //console.log()
            } 
        
    }

    function movePrevious(){

        currentIndex--;

            if(currentIndex < 0){

                currentIndex = 4;
            }else{
    
                tileImage.src =  imageArr[currentIndex];
            }
           
    
    }

    //alert("I work");

})();