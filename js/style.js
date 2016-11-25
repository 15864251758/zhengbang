$(function(){
	//搜索框
	$('.show-search-btn').click(function(){
		$('.search-show').fadeIn();
	})
	var wh=$('body').height();
	$('.search-show').css("height",wh)
	$('.search-show').click(function(){
		$('.search-show').fadeOut();
	})
	$(".search-show .navbar-form").click(function(event){
	  event.stopPropagation();
	});
	$('.tp-banner').css("height","100%");

	//轮播 
    jQuery('.tp-banner').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 600,
        hideThumbs: 30,
        fullWidth: "on",
        forceFullWidth: "on",
        navigationType:"none",
    });
	// 导航条
	var bw=$(window).width();
	if(bw>=768){


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

    //快速见效系统

    $('.fast-box').hover(function(){
    	    var img1=$(this).find('.fast-block1 img').attr("src");
    		var imgNew=img1.substring(0,img1.length-4);
    		var img2=imgNew+'-2.png';
    	$(this).find('.fast-block1-txt').stop().slideDown();
    	$('.fast-block1-circle').stop().fadeOut();
    	$(this).find('.fast-block1 img').attr("src",img2);

    },function(){
    	     var img1=$(this).find('.fast-block1 img').attr("src");
    	     var imgNew=img1.substring(0,img1.length-6);
    		 var img2=imgNew+'.png';
    	$('.fast-block1-circle').stop().fadeIn();
    	$(this).find('.fast-block1-txt').stop().slideUp();
    	$(this).find('.fast-block1 img').attr("src",img2);
    })



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

    //about
    jQuery('.tp-banner1').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 800,
        hideThumbs: 30,
        fullWidth: "on",
        forceFullWidth: "on",
        navigationType:"none",
    });

        $(".header_default .dropdown-menu").hover(function(event){
         event.stopPropagation();
          event.preventDefault();
        });


})

$(window).scroll(function(){
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


