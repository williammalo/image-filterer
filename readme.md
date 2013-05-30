# Javascript Image Filterer #

A simple api for doing custom filtering to images in javascript.

### Example: ###

    var image=document.images[0];
    
    var filter=function(r,g,b,a){
      return{
          r : 255
        , g : 255
        , b : 255
        , a : (r+g+b)*.9-300
      }
    };
    
    imageFilter(image,filter);

The filter is just a function that takes in the rgba of the pixel and returns an object containing the new colors.