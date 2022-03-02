/**
 * input �±׿� clear ��ư ��� �߰��ϱ�
 * �Ϲ������� ���� �Է��� �ŵ� ��Ŀ���� �������� ��Ÿ������
 * ��Ŀ���� ������� ���� ������ ������ ǥ�õǰ� ��
 * jquery.iwtInputClearButtonController-0.9.0.js
 * requires jQuery v1.4.2 or later
 *
 * @author incree <incree@incree.com>
 * @copyright incree 2013.08.06 GPL Version 2 license
 * @version 0.9.0
 * 
 */
(function($) {
	window.isMsClearDisplayNonestyleAdded = false;
	
	var ua = navigator.userAgent,
  		ie = /msie|Trident/i.test(ua);

	$.iwtInputClearButtonController = {
		defaultOptions: {
			image:'../images/btn-search-close.png',   // ���� �̹���
			position:'absolute',         // �̹����� position
			className: 'close',               // �̹����� ������ class
			appendTarget:'',             // ������ input �� parent��, ������ ���� jquery object��(ex : $('body'))
			top:'',                      // position�� relative or absolute �϶� top ��ǥ
			left:'',                     // position�� relative or absolute �϶� left ��ǥ
			bottom:'',                   // position�� relative or absolute �϶� bottom ��ǥ
			right:''                     // position�� relative or absolute �϶� right ��ǥ
		}
	}

	$.fn.iwtInputClearButtonController = function(options) {
		if(ie && !window.isMsClearDisplayNonestyleAdded) {
			// ie10�� ��ü������ ǥ�õǴ� clear ��ư�� �����(.someinput::-ms-clear {display: none;})
			// ��Ÿ �±׿� X-UA-Compatible �� ������ ���� ���� �־ try�� ���Ѵ�(ex : <meta http-equiv="X-UA-Compatible" content="IE=7" />)
			try {
				$('<style type="text/css"></style>').text('input::-ms-clear{display: none;}').appendTo('head');
			}
			catch(e) {}
			window.isMsClearDisplayNonestyleAdded = true;
		}
		
		var $result = $([]);

		this.each(function(idx, elem) {
			if (elem.tagName.toUpperCase() == "INPUT") {
				var data = $.data(elem, 'iwtInputClearButtonController');
				if (!data) data = new iwtInputClearButtonController(elem, options);
				$result = $result.add(data);
			}
		});
		
		return $result
	}
	
	iwtInputClearButtonController = function(input, options) {
		var controller = this;
		var $input = $(input)

		options = $.extend({}, $.iwtInputClearButtonController.defaultOptions, options);
		
		var cssMap = {position:options.position, cursor:'pointer', zIndex:1};
		if(options.top != '') cssMap['top'] = options.top;
		if(options.left != '') cssMap['left'] = options.left;
		if(options.bottom != '') cssMap['bottom'] = options.bottom;
		if(options.right != '') cssMap['right'] = options.right;

		var $img = $('<img>')
			.attr({src: options.image, alt: '�Է°� ����'})
			.addClass(options.className)
			.css(cssMap)
			.appendTo(typeof options.appendTarget == 'object' ? options.appendTarget : $input.parent())
			.click(function() {
				$input.val('').focus();
				return false;
			})
			.hide();

		$input.bind('propertychange keyup input paste focus blur', function() {
			if($(this).val() == '') $img.hide();
			else $img.show();
		});
		
		$(function() {
			if($input.val() != '') $img.show();
		});
	}
})(jQuery);