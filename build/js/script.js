$(document).ready(function() {


    $("#card").flip();


	var pixelsOffset = 248;
	var left = $('.slider__larrow');
	var	right = $('.slider__rarrow');
	var elementsList = $('.slider__list');
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
 
   
  left.click(function() {
       
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += pixelsOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }; 


    });
 
    right.click(function() {  

      
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= pixelsOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        };
		
		if (currentLeftValue < (minimumOffset+10)){
			currentLeftValue = 0;
			elementsList.animate({ left : currentLeftValue + "px"}, 1500);
		};
			
	
	});

});