$.extend($.fn, {
        selectUi : function(opts){

            $.fn.selectUi.defaults = {
                showToTop: false, // list 위에서 보여질때 true, 디폴트는 아래도 나옴
                arrow : true, // 화살표 활성화 (css class on 으로 설정)
                duration: 400, // 슬라이드 속도 컨트롤
                listDuration : 200, // 리스트 항목 클릭 후 사라질 때 속도 컨트롤
                listItems :7, // 리스트 항목의 보여줄 갯수 설정
                listWid : false, // 리스트 width 값이 클때 true로 설정 후 아래의 listWidVal 값으로 width 설정 (두가지 옵션은 셋트임)
                listWidVal : 200
            };

            return this.each(function(){

                opts = $.extend( {}, $.fn.selectUi.defaults, opts || {});

                var _self = $(this),
                    target = _self.find('p > button');
                    list = _self.find('ul');


                function listHide(drt) {
                    list.slideUp(drt)
                }

                function rmClass() {
                    if(opts.arrow) {
                        target.removeClass('on')
                    }
                }

                target.on('click', function(){

                    if(list.is(':hidden')) {
                        list.slideDown(opts.duration);
                        var liHeight = list.find('li button').innerHeight();
                        list.css({'max-height': (liHeight * opts.listItems) - 5 });
                        if(opts.arrow) {
                            $(this).addClass('on')
                        }
                    } else {
                        listHide(opts.duration);
                        rmClass();
                    }
                    return false;
                });

                list.on('click','li button', function(){
                    listHide(opts.listDuration);
                    var clkText = $(this).text();
                    target.text(clkText);
                    rmClass();
                });

                if(opts.showToTop) {
                    list.css({bottom:23})
                } else {list.css({top:23})}

                if(opts.listWid) {
                    list.css({width: opts.listWidVal})
                }

                /* 셀렉터 컴포넌트를 벗어났을 때 */
                _self.on({
                    'mouseleave' : function() {
                        listHide(opts.duration);
                        rmClass();
                    }
                })

            })
        }
    });
    $('.li-slt').selectUi();