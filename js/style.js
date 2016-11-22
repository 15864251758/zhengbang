$(function(){
	$('.show-search-btn').click(function(){
		$('.search-show').fadeIn();
	})
	var wh=$(window).height();
	$('.search-show').css("height",wh)
	$('.search-show').click(function(){
		$('.search-show').fadeOut();
	})
	$(".search-show .navbar-form").click(function(event){
	  event.stopPropagation();
	});
	$('.tp-banner').css("height","100%");


	<!-- 轮播 -->
    $(function() {
        jQuery('.tp-banner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 600,
            hideThumbs: 30,
            fullWidth: "on",
            forceFullWidth: "on",
            navigationType:"none",
        });
    });
	// 导航条
	var bw=$(window).width();
	if(bw>=768){
		// $('.header_default li.dropdown').hover(function(){
		// 	$(this).find('.magic_line').show();
		// 	$(this).find('.triangle-up').show();

		// },function(){
		// 	$(this).find('.magic_line').hide();
		// 	$(this).find('.triangle-up').hide();
		// });


     //判断导航栏是否在原来位置上的标志，初始为false
    var test = false;
    $(window).scroll(function(){
            //获取当前位置到窗口顶部的高度
            var h_num=$(window).scrollTop();
            if(h_num>580){//当当前高度大于导航条到窗口顶部高度
               //切换导航条的类名为固定后的类名
               $('.header_default').addClass('fixer'); 
               $('.header_default').slideDown();
               $(".header_default .navbar-brand img").attr("src","images/logo-colored.png");

		   //当导航条的position变成了fixed后，原来的位置会变空，需要在原位置增加个占位div
		   //$("button").click(function(){
    				
            if(!test){
                var stayPos = document.createElement("div");
     		    stayPos.id= "stayPosDiv";
				stayPos.style.height = "38px";//导航条的高度
     		    var temp = document.getElementById("nav");
        		temp.appendChild(stayPos);
        		test=true;
    		}
        }else{
            //如果回到导航条原位置之前则替换回原来的类名
            $('.header_default').removeClass('fixer');
            $(".header_default .navbar-brand img").attr("src","images/logo.png");
      		if(test){//移除占位div
	            var temp = document.getElementById("nav");
	        	temp.removeChild(stayPosDiv);
	       		test = false;
      		}
        }   
    });





	}

	//旋转
    var swiper = new Swiper('.xz-middle', {
    pagination: '.xz-middle .swiper-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
	        1050: {
	            slidesPerView: 4,
	            spaceBetween: 40
	        },
	        900: {
	            slidesPerView: 3,
	            spaceBetween: 30
	        },
	        640: {
	            slidesPerView: 1,
	            spaceBetween: 20
	        },
	        320: {
	            slidesPerView: 1,
	            spaceBetween: 10
	        }
	    }
	});

    // 热门课程按钮
    $('.swiper-slide-con').hover(function(){
    	$(this).find('.swiper-slide-btn').stop(false,true).slideToggle();
    })
    $('.swiper-slide-btn').hover(function(){
    	$(this).next('.swiper-slide-btn2').css({
    		"width":"200px",
    	});
    })


})



	$(window).scroll(function(){
		var numt=$('.fight').offset().top;
		var numh=$(window).scrollTop();
		if (numh>=1200 & numh<=1300) {
			//数字翻滚
				$.fn.countTo = function (options) {
					options = options || {};
					
					return $(this).each(function () {
						// set options for current element
						var settings = $.extend({}, $.fn.countTo.defaults, {
							from:            $(this).data('from'),
							to:              $(this).data('to'),
							speed:           $(this).data('speed'),
							refreshInterval: $(this).data('refresh-interval'),
							decimals:        $(this).data('decimals')
						}, options);
						
						// how many times to update the value, and how much to increment the value on each update
						var loops = Math.ceil(settings.speed / settings.refreshInterval),
							increment = (settings.to - settings.from) / loops;
						
						// references & variables that will change with each update
						var self = this,
							$self = $(this),
							loopCount = 0,
							value = settings.from,
							data = $self.data('countTo') || {};
						
						$self.data('countTo', data);
						
						// if an existing interval can be found, clear it first
						if (data.interval) {
							clearInterval(data.interval);
						}
						data.interval = setInterval(updateTimer, settings.refreshInterval);
						
						// initialize the element with the starting value
						render(value);
						
						function updateTimer() {
							value += increment;
							loopCount++;
							
							render(value);
							
							if (typeof(settings.onUpdate) == 'function') {
								settings.onUpdate.call(self, value);
							}
							
							if (loopCount >= loops) {
								// remove the interval
								$self.removeData('countTo');
								clearInterval(data.interval);
								value = settings.to;
								
								if (typeof(settings.onComplete) == 'function') {
									settings.onComplete.call(self, value);
								}
							}
						}
						
						function render(value) {
							var formattedValue = settings.formatter.call(self, value, settings);
							$self.html(formattedValue);
						}
					});
				};
				
				$.fn.countTo.defaults = {
					// from: 899,               // the number the element should start at
					// to: 0,                 // the number the element should end at
					// speed: 500,           // how long it should take to count between the target numbers
					refreshInterval: 50,  // how often the element should be updated
					decimals: 0,           // the number of decimal places to show
					formatter: formatter,  // handler for formatting the value before rendering
					onUpdate: null,        // callback method for every time the element is updated
					onComplete: null       // callback method for when the element finishes updating
				};
				
				function formatter(value, settings) {
					return value.toFixed(settings.decimals);
				}



			  // custom formatting example
			  $('#count-number').data('countToOptions', {
				formatter: function (value, options) {
				  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
				}
			  });
			  
			  // start all the timers
			  $('.timer').each(count);  
			  
			  function count(options) {
				var $this = $(this);
				options = $.extend({}, options || {}, $this.data('countToOptions') || {});
				$this.countTo(options);
			  }
			//数字翻滚结束


		}

		// 在这你可以获得
		$('.learn-con').hover(function(){
			$(this).stop(true,false).animate({
				'bottom':'16px',
			},300)
		},function(){
			$(this).stop(true,false).animate({
				'bottom':'0px',
			})
		})



		// comments
		    var swiper = new Swiper('.comments .swiper-container', {
		        pagination: '.comments .swiper-pagination',
		        paginationClickable: true,
		        slidesPerView: 3,
		        spaceBetween: 50,
		        breakpoints: {
		            1024: {
		                slidesPerView: 4,
		                spaceBetween: 40
		            },
		            768: {
		                slidesPerView: 2,
		                spaceBetween: 30
		            },
		            640: {
		                slidesPerView: 1,
		                spaceBetween: 20
		            },
		            320: {
		                slidesPerView: 1,
		                spaceBetween: 10
		            }
		        }
		    });
	})


