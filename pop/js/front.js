$(function(){
	//NoticeBox();
	//SettingBox();
	
	if($('.side-popup').size() != 0){
		Sidepopup(); //메뉴
	}
	Headerfixed();
		


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
	$('.side-popup-btn').on('click',function(e){
		e.preventDefault();
		
		$('.side-popup').animate({left: '0%'});
		$('.side-popup-close').fadeIn();
		$('#wrap').css({'position':'fixed'});
		/*[2017-06-01 최정아] 스크롤 발생하지 않는 페이지에서 페이지 하단에 가로로 하얀 배경이 생겨 'position':'fixed'만 사용 
		 * $('#wrap').css({'overflow':'hidden' , 'position':'fixed'});*/
		$('.bgDim').height($(document).height()).toggle();
		return false;
	});
	$('.side-popup-close, .bgDim,.side-popup .btn-list .cancel').on('click',function(e){
		e.preventDefault();
		$('.side-popup').animate({left: '-100%'});
		$('.side-popup-close').hide();
		$('#wrap').css({'overflow':'' , 'position':''});
		$('.bgDim').height($(document).height()).toggle();
		
		return false;
	});
	
}

//end
	
});



$(document).ready(function() {
	var selectTarget = $('.selectbox select');
	selectTarget.change(function(){
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	});

	 // focus 가 되었을 때와 focus 를 잃었을 때
  selectTarget.on({
    'focus': function() {
      $(this).parent().addClass('focus');
    },
    'blur': function() {
      $(this).parent().removeClass('focus');
    }
  });

  selectTarget.change(function() {
    var select_name = $(this).children('option:selected').text();
    $(this).siblings('label').text(select_name);
    $(this).parent().removeClass('focus');
  });

});


//search 삭제 버튼

 $(function() {
	$('input[type="search"]').iwtInputClearButtonController({top:3, right:3});
	//$('input[type="search"]').iwtInputClearButtonController({position:'absolute', appendTarget:$('body'), top:10, left:50});
});


//달력
$(function(){
		
	$("#date3").datepicker({
		onselect:function(dateText, inst) {
			console.log(dateText);
			console.log(inst);
		}
	});

});