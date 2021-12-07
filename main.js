// var arrLeft = [{Rocket : "./file left/Raised-fist-gestures-emoji-on-transparent-PNG.png"},
// {Scissor:"./file left/Victory-hand-gestures-emoji-Preimum-vector-PNG (1)23.png"},{Paper:"file left/Hand-with-fingers-splayed-gestu66res-on-transparent-PNG.png"}]
// var arrRight=[{Rocket: "./file right/Hand-with-fingers-splayed-gestures6-on-transparent-PNG.png"},
// {Sissor:"./file right/Victory-hand-gestures-emoji-Preimu645m-vector-PNG (1)23.png"},
// {Paper:"./file right/Hand-with-fingers-splayed-gestures6-on-transparent-PNG.png"}]
var arrLeft = ["./file left/Raised-fist-gestures-emoji-on-transparent-PNG.png","./file left/Victory-hand-gestures-emoji-Preimum-vector-PNG (1)23.png",
"file left/Hand-with-fingers-splayed-gestu66res-on-transparent-PNG.png"]
var arrRight=["./file right/Raised-fist-gestures-emoji-o99n-transpare5nt-PNG.png",
"./file right/Victory-hand-gestures-emoji-Preimu645m-vector-PNG (1)23.png",
"./file right/Hand-with-fingers-splayed-gestures6-on-transparent-PNG.png"]
var win = $('<h1></h1>')
win.addClass("Win")
var body=$("body")
var numberWin=0
win.text("Win :"+ numberWin)
win.appendTo(body)
var Lose=$('<h1></h1>')
Lose.addClass( "lose" );
var numberLose=0
Lose.text("Lose :"+ numberLose)
Lose.appendTo(body)

var Draw=$('<h1></h1>')
Draw.addClass( "draw" );
var numberDraw=0
Draw.text("Draw :"+ numberDraw)
Draw.appendTo(body)
    $('#b1').click(function() {
    var rand=Math.floor(Math.random()*3)
    $("#fest_left").attr("src",arrLeft[0])
    $("#fest_right").attr("src",arrRight[rand])
    if(rand===0){
        numberDraw++
        Draw.text("Draw :"+ numberDraw)
       
        }
   else if(rand===1){
       numberWin++
       win.text("Win :"+ numberWin)
       
   }
   else if(rand===2){
       numberLose++
       Lose.text("Lose :"+ numberLose)}
    
//         if(numberWin===3){
//             final.appendTo(body)
           
//             }
//             else if(numberLose===3){
//                 final.appendTo(body)
//             }
//             else if(numberDraw===3){
//              final.appendTo(body)
//             }
       
   
   
// }
   }
)
   $('#b2').click(function() {
       var rand1=Math.floor(Math.random()*3)
       $("#fest_left").attr("src",arrLeft[1])
       $("#fest_right").attr("src",arrRight[rand1])
           if(rand1===0){
               numberLose++
               Lose.text("Lose :"+ numberLose)
           }
       else if(rand1===1){
           numberDraw++
           Draw.text("Draw :"+ numberDraw)
       }
       else if(rand1===2){
       numberWin++
       win.text("Win :"+ numberWin)
       }

       }
   
       )
   $('#b3').click(function() {
       var rand2=Math.floor(Math.random()*3)
       $("#fest_left").attr("src",arrLeft[2])
       $("#fest_right").attr("src",arrRight[rand2])
       if(rand2===0){
       numberWin++
       win.text("Win :"+ numberWin)
       }
       else if(rand2===1){
       numberLose++
       Lose.text("Lose :"+ numberLose)
       }
       else if(rand2===2){
           numberDraw++
           Draw.text("Draw :"+ numberDraw)
          }
       })
       var finalmes=$("<h1></h1>")
       finalmes.attr("id","finalmes")
       
       var final=$('<button>Play again</button>')
       final.attr("id","b4")
       
       if(numberWin===3){
           final.appendTo(body)
           }
           else if(numberLose===3){
               final.appendTo(body)
           }
           else if(numberDraw===3){
            final.appendTo(body)
           }
       