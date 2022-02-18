

//  const answers = answers_image 
//   ("images/magic8ball_1.png", 
//   "images/magic8ball_2.png",
//  "images/magic8ball_3.png",
//  "images/magic8ball_4.png",
//  "images/magic8ball_5.png",
//  "images/magic8ball_6.png",
//  "images/magic8ball_7.png",
//  "images/magic8ball_8.png",
//  "images/magic8ball_9.png",
//  "images/magic8ball_10.png",
//  "images/magic8ball_11.png",
//  "images/magic8ball_12.png",
//  "images/magic8ball_13.png",
//  "images/magic8ball_14.png",
//  "images/magic8ball_15.png",
//  "images/magic8ball_16.png",
//  "images/magic8ball_17.png",
//  "images/magic8ball_18.png",
//  "images/magic8ball_19.png",
//  "images/magic8ball_20.png"
//  )
 

button.addEventListener('ask',get_answers_image)

 function get_answers_image(){

    let answers =
    ["images/magic8ball_1.png", 
    "images/magic8ball_2.png",
    "images/magic8ball_3.png",
    "images/magic8ball_4.png",
    "images/magic8ball_5.png",
    "images/magic8ball_6.png",
    "images/magic8ball_7.png",
    "images/magic8ball_8.png",
    "images/magic8ball_9.png",
    "images/magic8ball_10.png",
    "images/magic8ball_11.png",
    "images/magic8ball_12.png",
    "images/magic8ball_13.png",
    "images/magic8ball_14.png",
    "images/magic8ball_15.png",
    "images/magic8ball_16.png",
    "images/magic8ball_17.png",
    "images/magic8ball_18.png",
    "images/magic8ball_19.png",
    "images/magic8ball_20.png"]

    const yourInput = prompt ("Ask me anything");


     random_index = Math.floor(Math.random()*answers_image.length);
      selected_image = random_image[random_index]
      document.getElementById('answers')
     .src=`./image/${selected_image}`  

    function clearAnswer(){
        document.getElementById('answer').remove();

    }
  } 
