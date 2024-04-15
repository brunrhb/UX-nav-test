$(document).ready(function() {

    setTimeout(function() {
        $('.loader-text').css("opacity","0"); 
    },'1500');   
  
      if( $('body').hasClass("not-mobile") ){
  
            var heightinitialeimage = ($('.image > img').attr("th")*($(window).width()*0.045*0.9))/$('.image > img').attr("tw");
            var widthMaxImg = (($(window).height()*0.7)/heightinitialeimage)*90;
  
            const scale = (num, in_min, in_max, out_min, out_max) => {
              return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
            }
  
            $(window).mousemove(function(event) {
                 
                var mouseposX =  $(window).width() - event.pageX;
                var mouseposY = $(window).height() - event.pageY;
                
                var widthimgfonctionY = scale(mouseposY, $(window).height()*0.15, $(window).height()*0.85, 90, widthMaxImg); //valeur en VW
               if ( widthimgfonctionY < 90 ) {
                widthimgfonctionY = 90;
                 }
                if ( widthimgfonctionY > widthMaxImg ) {
                widthimgfonctionY = widthMaxImg;
               }
  
  
                var translatemax = - widthimgfonctionY + 90; // VALEUR EN VW 
                var mousePosXEnPrc = (mouseposX * 100) / $(window).width(); // VALEUR EN VW 
                var translateActuel = scale(mousePosXEnPrc, 5, 95, translatemax, 0 ); //valeur en VW
  
  
                if ( translateActuel > 0 ) { 
                   translateActuel = 0;
                }
                if ( translateActuel < translatemax ) {
                 translateActuel = translatemax;
                 }
  
            //    console.log("curwidth:" + widthimgfonctionY + " maxtrans: " + translatemax + "//mouse pos:" + mousePosXEnPrc + " translateact: " + translateActuel);
  
   
                 $(".images").css({ 
                   '-webkit-transform' : 'translateX('+translateActuel+'vw)',
                    '-moz-transform'    : 'translateX('+translateActuel+'vw)',
                    '-ms-transform'     : 'translateX('+translateActuel+'vw)',
                    '-o-transform'      : 'translateX('+translateActuel+'vw)',
                    'transform'         : 'translateX('+translateActuel+'vw)',
                  
                  //  'left': translateActuel+"vw",
                  });
  
                        $(".images, .missing-z-wrapper").css({
                           "width": widthimgfonctionY + "vw"
                        });
         
               }); 
      }
  
  
  
      $('#archive-wrapper > div').each(function(){
   
      //    var randomXs = ["20vw",  "5vw", "10vw", "15vw", "40vw", "30vw", "15vw", "7.5vw", "35vw"];
      //     var randomX2s = ["5vw",  "0vw",  "5vw", "7.5vw", "5vw"]; 
      //       var randomYs = ["10vw", "5vw", "7.5", "5vw", "15vw"];
      //       var randomY2s = ["10vw", "5vw", "10vw"];
      //       var widths = ["65vw", "75vw", "60vw", "50vw","40vw", "50vw","70vw", "50vw","65vw"];
  
      //   if ($(window).width() > 1024) {
      //       var randomXs = ["20vw",  "5vw", "10vw", "15vw", "7.5vw", "35vw"];
      //       var randomX2s = ["5vw","3.5vw","2.5vw", "4.5vw"];
      //       var randomYs = ["2.5vw", "5vw", "3.5vw", "5vw", "7.5vw"];
      //       var randomY2s = ["5vw", "2.5vw"];
      //       var widths = [ "30vw", "40vw", "45vw", "35vw", "67vw", "30vw", "37vw",  "37vw", "40vw", "35vw", "25vw", "60vw"];
      //     } 
  
      
      //   var randomX = randomXs[Math.floor(Math.random() * randomXs.length)];
      //   var randomX2 = randomX2s[Math.floor(Math.random() * randomX2s.length)];
      //   var randomY = randomYs[Math.floor(Math.random() * randomYs.length)];
      //   var randomY2 = randomY2s[Math.floor(Math.random() * randomY2s.length)];
      //   var width = widths[Math.floor(Math.random() * widths.length)];
  
      //   $(this).css('width', width);    
      //  // $(this).css('margin-right', randomX2);
      //   $(this).css('margin-left', randomX);
      //   $(this).css('margin-bottom', randomY);
      //   $(this).css('margin-top', randomY2);
      });
  
   
  
  });       
    
  // $('#archive-wrapper').css('top', '10vw');
  
  
  
  // $(document).ready(function() {
  
  
  //   setTimeout(function() {
  //       $('.loader-text').css("opacity","0"); 
  //   },'500');   
  
  
  //     if( $('body').hasClass("not-mobile") ){
  
  //           var heightinitialeimage = ($('.image > img').attr("th")*($(window).width()*0.045*0.9))/$('.image > img').attr("tw");
  //           var widthmaxxx = (($(window).height()*0.7)/heightinitialeimage)*90;
  //           //var widthmaxxx  = scalemax + scalemax*0.04; 
  //          // var widthmaxxx  = scalemax ; 
  
  //          // console.log( $(window).height()*0.7 + " / " + heightinitialeimage + " = " + scalemax );
  
  //           const scale = (num, in_min, in_max, out_min, out_max) => {
  //             return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  //           }
  
  //           $(window).mousemove(function(event) {
                
  //               var mouseposX =  event.pageX;
  //               var mouseposY = $(window).height() - event.pageY;
  //               const num = event.pageY;
              
  //               var newMouseY = scale(num, 0, $(window).height(), $(window).height()*0.15, $(window).height()*0.85); 
  //               var widthimgfonctionY = scale(mouseposY, $(window).height()*0.15, $(window).height()*0.85, 90, widthmaxxx);
  
                 
  //               var translatemax = - widthimgfonctionY; 
  //               var translateactuel = ((widthimgfonctionY * translatemax) / widthmaxxx ) + 90;
  
  //             //  console.log(widthimgfonctionY + " / " + translatemax );
    
  //             //  var newMouseX = scale(event.pageX, $(window).width()*0.05, $(window).width()*0.95, 0, translatemax ) ; 
  //               var eventinprc = (event.pageX * 100) / $(window).width();
                
  //               var newMouseX = (eventinprc * translatemax ) / 100; 
  //               console.log(translatemax + " / " + newMouseX);
   
  
  //                $(".images").css({ 
  //                // "left": newMouseX + "vw",
  //                  '-webkit-transform' : 'translateX(-'+ newMouseX+'vw)',
  //                   '-moz-transform'    : 'translateX(-'+ newMouseX+'vw)',
  //                   '-ms-transform'     : 'translateX(-'+ newMouseX+'vw)',
  //                   '-o-transform'      : 'translateX(-'+ newMouseX+'vw)',
  //                   'transform'         : 'translateX(-'+ newMouseX+'vw)'
  //                 });
  
  //               if (event.pageY < $(window).height()*0.15) {
                     
  //                     $(".images, .missing-z-wrapper").css({
  //                     "width": widthmaxxx + "vw"
  //                     });
  
  //                     // if (event.pageX > $(window).width()*0.05 && event.pageX < $(window).width()*0.95) {
  //                     //     console.log("ok");
                         
  //                     // }
  //               } 
  
  //                else if (event.pageY > $(window).height()*0.85) {
  //                    //  $(".images").css({ 
  //                    // "transform": "translateX(" + newMouseX + "vw)"
  //                    //  });
  //               //       $(".images, .missing-z-wrapper").css({
  //               //       "width": "90vw"
  //               //       });
  //                    // if (event.pageX > $(window).width()*0.05 && event.pageX < $(window).width()*0.95) {
  //                         // $(".images").css({
  //                         //      "transform": "translateX(" + 0 + "vw)"
  //                         // });
  //                     //}
  
  //                     // if (event.pageX > $(window).width()*0.05 && event.pageX < $(window).width()*0.95) {
  //                     //    console.log("ok");
  //                     //     $(".images").css({
  //                     //          "transform": "translateX(-" + newMouseX + "vw)"
  //                     //     });
  //                     // } 
  
  
  //                } 
  //               else{
  //                     // if (event.pageX > $(window).width()*0.05 && event.pageX < $(window).width()*0.95) {
  //                     //    console.log("ok");
  //                     //     $(".images").css({
  //                     //          "transform": "translateX(-" + newMouseX + "vw)"
  //                     //     });
  //                     // } 
  //                       $(".images, .missing-z-wrapper").css({
  //                         //"width": widthimgfonctionY + "vw"
  //                          "width": widthmaxxx + "vw"
  //                       });
   
  //                  }
  
         
  //              }); 
  
  //     }
  
  
  
  
  
  // });       
    
  
  
  
  