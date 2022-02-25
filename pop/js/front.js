$(function(){
	//NoticeBox();
	//SettingBox();
	
	if($('.side-menu').size() != 0){
		Sidepopup(); //메뉴
	}
	Headerfixed();
	qnalist();
	
		


//header fixed
function Headerfixed(){
	var menu = $( 'header' ).offset();
		$( window ).scroll( function() {
			if ( $( document ).scrollTop() > menu.top ) {
				$( 'header' ).addClass( 'fixed' );
			} else {
				$( 'header' ).removeClass( 'fixed' );
			}
	});
}


//detail qnalist
function qnalist(){
	// 상품상세 qna-list
	$(document).on("click",".qna-list .drop" , function(e) {
		e.preventDefault();
		$('.qnalist .drop').removeClass('on');
		$('.qnalist > ul > li > a').removeClass('on');
		$('.qnalist .dropbox ul li a').removeClass('on');
				
		$('.qnalist .dropbox').slideUp('fast');
		if (!$(this).next('.dropbox').is(':visible')) {//.next 같은위치
			$(this).addClass('on');
			$(this).next('.dropbox').slideDown();
		}
	});
}




// 알림 박스
function  NoticeBox(){
	$('#gnb ul li.notice button').on('click', function(e){
		e.preventDefault();
		$('.NoticeBox').show();
	});
	
	$('.NoticeBox button.close').on('click', function(e){
		e.preventDefault();
		$('.NoticeBox').hide();
		
	});
}

// 환경설정
function  SettingBox(){
	$('#header .setting button').on('click', function(e){
		e.preventDefault();
		$('.SettingBox').show();
	});
	
	$('.SettingBox button.close').on('click', function(e){
		e.preventDefault();
		$('.SettingBox').hide();
		
	});
}

//사이드 팝업
function Sidepopup(){
	$('.side-menu-btn').on('click',function(e){
		e.preventDefault();
		
		$('.side-menu').animate({left: '0%'});
		$('.side-menu-close').fadeIn();
		$('#wrap').css({'position':'fixed'});
		/*[2017-06-01 최정아] 스크롤 발생하지 않는 페이지에서 페이지 하단에 가로로 하얀 배경이 생겨 'position':'fixed'만 사용 
		 * $('#wrap').css({'overflow':'hidden' , 'position':'fixed'});*/
		$('.bgDim').height($(document).height()).toggle();
		return false;
	});
	$('.side-menu-close, .bgDim').on('click',function(e){
		e.preventDefault();
		$('.side-menu').animate({left: '-100%'});
		$('.side-menu-close').hide();
		$('#wrap').css({'overflow':'' , 'position':''});
		$('.bgDim').height($(document).height()).toggle();
		
		return false;
	});
	
}



}); //end



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









