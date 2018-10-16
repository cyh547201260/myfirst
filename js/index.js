var h=window.innerHeight;
var w=window.innerWidth;
var rightAudio=document.getElementById("rightAudio");
var wrongAudio=document.getElementById("wrongAudio");
var video = document.getElementById('Bvideo');
//适配
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(isAndroid||isiOS) {
    var touchstart1="touchstart";
    var touchmove1="touchmove";
    var touchend1="touchend";
    var tap1="touchstart"
}else{
    var touchstart1="mousedown";
    var touchmove1="mousemove";
    var touchend1="mouseup";
    var tap1="click"
}
var video2 = "";
function turn1(){
	var video2 = document.getElementsByClassName("first-video")[0];
    video2.addEventListener('ended', function () {  
        $(".section2").css("display","none");
        $(".section3").css("display","none");
        
        
    }, false);
}
$(".first_bg").on(tap1,function(){
	$(".start").css("display","none");
	$(".stu-1").css("display","block")
//	$(".section1").css("display","block");
//	$(".section1").attr("src":"images/video2.mp4","poster":"images/video2.jpg");
//	document.getElementById("Bvideo").play();
})
$(".str-stu").click(function(){
	$(".stu-1").css("display","none");
    $(".stu-2").css("display","block");

})
$(".stu-2").on("click",function(){
	$(".stu-2").css("display","none");
	$(".section1").css("display","block");
	$(".section1").attr({"src":"images/video2.mp4","poster":"images/video2.jpg"});
	document.getElementById("Bvideo").play();
	var video1 = document.getElementById("Bvideo");
video1.addEventListener('ended', function () {
	$(".section1").css("display","none");
	$(".question").css("display","block");
//	$(".question").html(`<img src="images/choose3.jpg" alt="" class="ques-bg"/>
//  		<div class="ques-p4">
//  			<img src="images/p2.png" alt="" class="ques-p4-1" data=""/>
//  			<img src="images/p2.1.png" alt="" class="ques-p4-2" data="1"/>
//  			<img src="images/p2.2.png" alt="" class="ques-p4-3" data="2"/>
//  			<img src="images/p2.3.png" alt="" class="ques-p4-4" data="3"/>
//  		</div>`);
    $(".ques-p4 img").on("click",function(){
		if($(this).attr("data") == ""){
			return false;
		}
		$(".question").css("display","none");
	//	$(".section2").css("display","block");
	//	document.getElementById("right").play();
		if($(this).attr("data") == 1){
			$(".section2").css("display","block");
			$(".section2").html('<video id="right" class="first-video" poster="images/rig-video-4.jpg" width="100%" preload="auto" x-webkit-airplay="true" webkit-playsinline="true" playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="true" src="images/video4.mp4"></video>');
			turn1();
			document.getElementById("right").play();
		}else{
			$(".section3").css("display","block");
//			$(".section3").html('<video id="wrong" class="first-video" poster="images/wro-video-5.jpg" width="100%" class="video" preload="auto" x-webkit-airplay="true" webkit-playsinline="true" playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="true" src="images/video5.mp4"></video>');
			turn1();
			document.getElementById("wrong").play();
		}
	})
}, false);


})
