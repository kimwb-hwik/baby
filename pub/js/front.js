$(function(){
	Headerfixed();
	//NoticeBox();
	//SettingBox();
	
	// if($('.side-menu').size() != 0){
	// 	Sidepopup(); //메뉴
	// }
	
	qnaList();
	sideList();
	droplist();
	//ActionHover;
	//add();
	
		


//header fixed
function Headerfixed(){
	var menu = $( 'header' ).offset();
		$( window ).scroll( function() {
			if ( $( document ).scrollTop() > header.top ) {
				$( 'header' ).addClass( 'fixed' );
			} else {
				$( 'header' ).removeClass( 'fixed' );
			}
	});
}


//detail qnalist
//자주하는 질문
function qnaList(){
	
	$('.qna-list .drop').click(function(e) {
		e.preventDefault();
		$(this).removeClass('on');
				
		$(this).parents().next('.dropbox').slideUp('fast');
		if (!$(this).parents().next('.dropbox').is(':visible')) {
			$(this).addClass('on');
			$(this).parents().next('.dropbox').slideDown(); //parents 다은위치
		}
	});
}

//sideList
function sideList(){
	
	$('.side-list .drop').click(function(e) {
		e.preventDefault();
		$(this).removeClass('on');
				
		$(this).children('.dropbox').slideUp('fast');
		if (!$(this).children('.dropbox').is(':visible')) {
			$(this).addClass('on');
			$(this).children('.dropbox').slideDown(); //parents 다은위치
		}
	});
}


//detail droplist
//droplist
function droplist(){
	
	$('.drop-list').click(function(e) {
		e.preventDefault();
		$(this).removeClass('on');
				
		$(this).children('.dropbox').slideUp('fast');
		if (!$(this).children('.dropbox').is(':visible')) {
			$(this).addClass('on');
			$(this).children('.dropbox').slideDown(); //parents 다은위치
		}
	});
}




// 알림 박스
// function  NoticeBox(){
// 	$('#gnb ul li.notice button').on('click', function(e){
// 		e.preventDefault();
// 		$('.NoticeBox').show();
// 	});
	
// 	$('.NoticeBox button.close').on('click', function(e){
// 		e.preventDefault();
// 		$('.NoticeBox').hide();
		
// 	});
// }



//사이드 팝업
// function Sidepopup(){
// 	$('.side-menu-btn').on('click',function(e){
// 		e.preventDefault();
		
// 		$('.side-menu').animate({left: '0%'});
// 		$('.side-menu-close').fadeIn();
// 		$('#wrap').css({'position':'fixed'});
// 		/*[2017-06-01 최정아] 스크롤 발생하지 않는 페이지에서 페이지 하단에 가로로 하얀 배경이 생겨 'position':'fixed'만 사용 
// 		 * $('#wrap').css({'overflow':'hidden' , 'position':'fixed'});*/
// 		$('.bgDim').height($(document).height()).toggle();
// 		return false;
// 	});
// 	$('.side-menu-close, .bgDim').on('click',function(e){
// 		e.preventDefault();
// 		$('.side-menu').animate({left: '-100%'});
// 		$('.side-menu-close').hide();
// 		$('#wrap').css({'overflow':'' , 'position':''});
// 		$('.bgDim').height($(document).height()).toggle();
		
// 		return false;
// 	});
	
// }



}); //end


//mySidepanel 사이드메뉴
function openNav() {
	document.getElementById("mySidepanel").style.width = "100%";
  }
  
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
document.getElementById("mySidepanel").style.width = "0";
}


//include
function includeHTML() {
var z, i, elmnt, file, xhttp;
/* Loop through a collection of all HTML elements: */
z = document.getElementsByTagName("*");
for (i = 0; i < z.length; i++) {
	elmnt = z[i];
	/*search for elements with a certain atrribute:*/
	file = elmnt.getAttribute("w3-include-html");
	if (file) {
	/* Make an HTTP request using the attribute value as the file name: */
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
		if (this.status == 200) {elmnt.innerHTML = this.responseText;}
		if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
		/* Remove the attribute, and call this function once more: */
		elmnt.removeAttribute("w3-include-html");
		includeHTML();
		}
	}
	xhttp.open("GET", file, true);
	xhttp.send();
	/* Exit the function: */
	return;
	}
}
}


//accordion

function accordion(){

var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        }

	};











