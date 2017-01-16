(function($){

  var clash = { 
  scoreB : 0,
  scoreA : 0, 
    MyCar: {
      x: 320,
      y: 86,
      width: 30,
      height: 30
    },
    playground: {
      offsetTop: $("#playground").offset().top,
      height: parseInt($("#playground").height()),
      width: parseInt($("#playground").width()),
    },
   car : {
      speed: 5,
      x: 0,
      y: 0,
      width: 100,
      height: 30,
      directionY: 1,
	  directionX: 1
    }
	
  };
  
  var clash2 = { 
   car2 : {
      speed: 5,
      x: 0,
      y:48,
      width: 100,
      height: 30,
      directionY: 1,
	  directionX: 1
    }
	
  };
  var clash3 = { 
   car3 : {
      speed: 5,
      x: 0,
      y:98,
      width: 100,
      height: 30,
      directionY: 1,
	  directionX: 1
    }
	
  };
  
   var clash4 = { 
   car4 : {
      speed: 2,
      x: 0,
      y:150,
      width: 100,
      height: 30,
      directionY: 1,
	  directionX: 1
    }
	
  };
  
   var BACK4 = { 
   back4 : {
      speed: 2,
      x: 0,
      y:150,
      width: 100,
      height: 30,
	  directionX: 1
    }
	
  };
  
  function autoMovecar()
{
  /* if(clash.scoreB<500){
    var speed = 1.3;
	}
	 if(clash.scoreB>500){
    var speed = 2;
	}*/
    var speed = 1.3;
    var direction = 1;
	clash.car.x += speed * direction;
	if(clash.car.x  > 700){
	  clash.car.x=0;
	}
	playerBWin();
}
  
 // var s=0;
  function autoMovecar2()
{
    /* if(clash.scoreB<500){
    var speed = 3.1;
	}
	 if(clash.scoreB>500){
    var speed = 4.1;
	}*/
    var speed = 3.1;
    var direction = 1;
	clash2.car2.x += speed * direction;
	if(clash2.car2.x  > 600){
	  clash2.car2.x=0;
	}
playerBWin();
} 
 

function autoMovecar3()
{
  /* if(clash.scoreB<500){
    var speed = 3.7;
	}
	 if(clash.scoreB>500){
    var speed = 4.7;
	}*/
    var speed = 3.7;
    var direction = 1;
	clash3.car3.x += speed * direction;
	if(clash3.car3.x  > 420){
	  clash3.car3.x=0;
	}
playerBWin();
} 
  
  function autoMovecar4()
{
   /*if(clash.scoreB<500){
    var speed = 1.6;
	}
	 if(clash.scoreB>500){
    var speed = 2.6;
	}*/
	var speed = 1.6;
    var direction = 1;
	clash4.car4.x += speed * direction;
	if(clash4.car4.x  > 480){
	  clash4.car4.x=0;
	}
	//clash.scoreB
playerBWin();

} 
  
  function autoback()
  {
  var speed = 3;
  
  var direction = 1;
  
  (BACK4.back4.x)++;
  
  
  }
  
  var N=30;
 function playerBWin() {
 var H=0;
clash.scoreB += 1;
H=clash.scoreB;
$("#score-b").text(clash.scoreB);
    playerBWin3();
	if(H==500 || H==4000 || H==10000 || H==18000){
	//document.getElementById("game").style.borderBottomColor = "yellow";
	//document.getElementById("game").style.borderTopColor = "yellow";
	clearTimeout(clash.timer);
	N+=3;
	clash.timer = setInterval(gameloop, 1000/N);
	}
	else if(H==1000  || H==5000 || H==11000  || H==21000){
//	document.getElementById("game").style.borderBottomColor = "red";
//	document.getElementById("game").style.borderTopColor = "red";
	clearTimeout(clash.timer);
	N+=3;
	clash.timer = setInterval(gameloop, 1000/N);
	}
	else if(H==1500 || H==6000 || H==12000  || H==24000){
//	document.getElementById("game").style.borderBottomColor = "orange";
//	document.getElementById("game").style.borderTopColor = "orange";
	clearTimeout(clash.timer);
	N+=3;
	clash.timer = setInterval(gameloop, 1000/N);
	}
	else if(H==2000 || H==7000 || H==13000  || H==27000){
	//document.getElementById("game").style.borderBottomColor = "HotPink";
	//document.getElementById("game").style.borderTopColor = "HotPink";
	clearTimeout(clash.timer);
	N+=3;
	clash.timer = setInterval(gameloop, 1000/N);
	}
	else if(H==2500 || H==8000 || H==14000  || H==30000){
	//document.getElementById("game").style.borderBottomColor = "Sienna  ";
	//document.getElementById("game").style.borderTopColor = "Sienna  ";
	clearTimeout(clash.timer);
	N+=3;
	clash.timer = setInterval(gameloop, 1000/N);
	}
	else if(H==3000 || H==9000 || H==15000  || H==35000){
	//document.getElementById("game").style.borderBottomColor = "RosyBrown ";
	//document.getElementById("game").style.borderTopColor = "RosyBrown ";
	H=0;
	clearTimeout(clash.timer);
	N+=3;
	clash.timer = setInterval(gameloop, 1000/N);
	}
  }
  function playerBWin2() {
 
//clash.scoreB = 0;
$("#score-b").text(clash.scoreB);
//document.getElementById("playground").style.background = "url(../images/background.jpg)";
clearTimeout(clash.timer);
//clearTimeout(clash.window);
//document.write("Game Over");
document.getElementById("ja").innerHTML = "Game Over!";
document.getElementById("ba").innerHTML = "Play Again!";
document.getElementById("dell").style.color = "yellow";
 //location.reload();
// window.clearInterval(ani);
//s=1;
//setTimeout(ani, 10000)
//s++;
$( ".PG" ).stop();
 //x=0;
audio.pause();
au2();
 // $("background").stop();
  $( "#background" ).stop();
 $( "#border" ).stop();
  }
  function playerBWin3() {
clash.scoreA=localStorage.getItem('highscore');
if (clash.scoreA === null || clash.scoreB > clash.scoreA) {
localStorage.setItem('highscore', clash.scoreB+1);
}

$("#score-a").text(clash.scoreA);

  }
 var E=0;

 var audio = new Audio('salamisound-4725222-busy-road-street-noises.mp3');
 function au(){
 audio.play();
 }
 
 var audio1 = new Audio('Untitled.mp3');
 function au2(){
 audio1.play();
 }
   
     function collision()
	{
	    var car=clash.car;
		if( clash.car.x < clash.MyCar.x+clash.MyCar.width  && clash.car.x + clash.car.width > clash.MyCar.x && clash.car.y < clash.MyCar.y+clash.MyCar.height && clash.car.height + clash.car.y > clash.MyCar.y){
		playerBWin2();
		}
		
	}
	
	 function collision2()
	{
	    var car2 = clash2.car2;
		if( clash2.car2.x < clash.MyCar.x+clash.MyCar.width  && clash2.car2.x + clash2.car2.width > clash.MyCar.x && clash2.car2.y < clash.MyCar.y+clash.MyCar.height && clash2.car2.height + clash2.car2.y > clash.MyCar.y){
			playerBWin2();
		}
		
	}
	function collision3()
	{
	    var car3 = clash3.car3;
		if( clash3.car3.x < clash.MyCar.x+clash.MyCar.width  && clash3.car3.x + clash3.car3.width > clash.MyCar.x && clash3.car3.y < clash.MyCar.y+clash.MyCar.height && clash3.car3.height + clash3.car3.y > clash.MyCar.y){
		playerBWin2();
		}			
	}
	function collision4()
	{
	    var car4 = clash4.car4;
		if( clash4.car4.x < clash.MyCar.x+clash.MyCar.width  && clash4.car4.x + clash4.car4.width > clash.MyCar.x && clash4.car4.y < clash.MyCar.y+clash.MyCar.height && clash4.car4.height + clash4.car4.y > clash.MyCar.y){
		playerBWin2();
		}		
	}

	$("#playground").css('background-position','200 0');

	
	/*function ac()
	{
	var T=0;
	if(T==0){
	document.getElementById("game").style.borderBottomColor = "yellow";
	document.getElementById("game").style.borderTopColor = "yellow";
	
	}
	if(T==1){
	document.getElementById("game").style.borderBottomColor = "red";
	document.getElementById("game").style.borderTopColor = "red";
	}
	if(T==2){
	document.getElementById("game").style.borderBottomColor = "orange";
	document.getElementById("game").style.borderTopColor = "orange";
	T=0;
	}
	T++;
	}*/
	
	
	function app()
	{
	
	 var colors = ["red", "green", "blue", "purple", "yellow", "orange"];

    var currentColor = 0;
   function switchColor() {    
    if (currentColor >= colors.length) currentColor = 0;

    $('#GAME').css('borderTopColor', colors[currentColor++]);

    setTimeout(switchColor, 50);
}
switchColor();
	}
	
	
  function renderCars() {
    $("#MyCar").css("top", clash.MyCar.y);
	 $("#MyCar").css("top", clash.MyCar.y);
	 $("#car").css("left", clash.car.x);
	// $("#car").css("top", clash.car.y);
	 $("#car2").css("left", clash2.car2.x);
	// $("#car2").css("top", clash2.car2.y);
	  $("#car3").css("left", clash3.car3.x);
	// $("#car3").css("top", clash3.car3.y);
	  $("#car4").css("left", clash4.car4.x);
	// $("#car4").css("top", clash4.car4.y);
	 // $("#playground").css("left", BACK4.back4.x);
 
  } 
  function handleMouseInputs() {

    $('#playground').mouseenter(function(){
      clash.isPaused = false;
    });

 
    $('#playground').mouseleave(function(){
      clash.isPaused = true;
    });

   
    $('#playground').mousemove(function(e){
      clash.MyCar.y = e.pageY - clash.playground.offsetTop;
	  
    });
  }

  
  function render() {
  

  

    window.requestAnimationFrame(render);
  }
  var p=100;
  function gameloop() {
    autoMovecar();
	autoMovecar2();
	autoMovecar3();
	autoMovecar4();
	collision();
	collision2();
	collision3();
	collision4();
	  renderCars();
	 // autoback()
	  document.getElementById('myBtn').style.visibility = 'hidden';
	//  ac();
	  //app();
	 // p++;
	//  $("#playground").css('background-position','500px 0px,300px 5px');
	 // $("#playground").css('background-position','505px 0px,300px 5px');
	 // $("#playground").css('background-position','510px 0px,300px 5px');
	//  $("#playground").css('background-position','515px 0px,300px 5px');
	//  $("#playground").css('background-position','520px 0px,300px 5px');
	 // $("#playground").css('background-position','525px 0px,300px 5px');
	 // $("#playground").css('background-position','530px 0px');
	// p++;
    //document.getElementById("playground").css({ 'backgroundPosition': p + 'px ' + 0 + 'px' });
	
	  
  }
  
  function ja(){
  $('#playground').animate({
  'background-position-x': '90000px',
  
}, 1000000, 'linear');
  
  }
  
  
  
  
  function JA(){
  $('#border').animate({
  'background-position-x': '90000px',
  
}, 1000000, 'linear');
  
  }
 // $(document).ready(function() {
  //  $('#playground').animate({'background-position': '10%'}, 10000, 'linear');
 //});
  //  p++;
   // document.getElementById("playground").css({ 'backgroundPosition': p + 'px ' + 0 + 'px' });
   
  /* var x=0;
   function ani(){
window.setInterval(function(){
$('#playground').css('background-position',-x+'px '+0+'px');
x=(x-4)%1100;//1100 is width of background image in px
},50);
}*/


//document.getElementById('playground').style.backgroundPosition: '100% 100%';
//css({backgroundPosition: '100% 100%'}

  function init() {
     document.getElementById("dell").style.top = "174px";
      document.getElementById("dell2").style.top = "174px";
    document.getElementById("myBtn").removeEventListener("click", init);
	//if(clash.scoreB<500){
    clash.timer = setInterval(gameloop, 1000/30);
	//}
	//if(clash.scoreB>500){
 //   clash.timer = setInterval(gameloop, 100);
	//}
	//clash.timer = setInterval(ac, 1000/30);
	var yValue=50000;
  //  var bgPos = '20px';
    //document.getElementById('playground').style.backgroundPosition = '500px ' ;
   
  // $('#playground').animate({backgroundPosition: '5000px 50px'});
  //$('#playground').animate({'background-position': '500px 0px'});
  
  ja();
  JA();
  au();
   
    window.requestAnimationFrame(render);

      handleMouseInputs();
    
  }
 
 function ANI()
 {
 
 }

document.getElementById("myBtn").addEventListener("click", init);
//document.getElementById("myBtn").addEventListener("click", ani);

})(jQuery);