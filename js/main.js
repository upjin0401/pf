$(document).ready(function () {
	var myFullpage = new fullpage('#fullpage', {


		//options here

		// licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		navigation: true,
		anchors: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5'],
		navigationTooltips: ['HOME', 'PROFILE', 'WEBDESIGN', 'GRAPHIC DESIGN', 'CHARACTOR'],
		slidesNavigation: true,
		autoScrolling: true,
		scrollHorizontally: true,
		easing: 'easeOutBounce',
		easingcss3: 'ease',
		responsiveWidth: 1024, 







	



		//    afterLoad: function(anchorLink, index){
		//     console.log("현재 섹션 번호는" + index);
		//     if(index == 4){
		//         alert('마지막입니다.');}
		//    }


		
		onLeave: function () {
			$('.section [data-aos]').each(function () {
				$(this).removeClass("aos-animate")
			});
		},
		onSlideLeave: function () {
			$('.slide [data-aos]').each(function () {
				$(this).removeClass("aos-animate")
			});
		},
		afterSlideLoad: function () {
			$('.slide.active [data-aos]').each(function () {
				$(this).addClass("aos-animate")
			});
		},
		afterLoad: function () {
			$('.section.active [data-aos]').each(function () {
				$(this).addClass("aos-animate")
			});
		}
		
	});


	// ham


	$('.ham').click(function () {
        $('.mgnb_wrap').animate({
            left: '0'

        });




        $('.mgnb_close').click(function () {
            $('.mgnb_wrap').animate({
                left: '100%'

            });

        });

    });




	// modal_up
	$('.modal_up,.modal_up2,.modal_up3').hide();
	$('.modal').click(function(){
		$('.modal_up').show();
	});

	$('.close').click(function(){
		$('.modal_up').hide();
	});

	
	$('.modal2').click(function(){
		$('.modal_up2').show();
	});

	$('.close').click(function(){
		$('.modal_up2').hide();
	});
	
	

	$('.modal3').click(function(){
		$('.modal_up3').show();
	});

	$('.close').click(function(){
		$('.modal_up3').hide();
	});
	
	// charactor
	$('.emo_wrap').hide();
	$('.emo_1').click(function(){
		$('.emo_wrap').show();
	});

	$('.emo_modal .close').click(function(){
		$('.emo_wrap').hide();
	});

	$('.emo_wrap2').hide();
	$('.emo_2').click(function(){
		$('.emo_wrap2').show();
	});

	$('.emo_modal2 .close').click(function(){
		$('.emo_wrap2').hide();
	});

	
	$('.emo_wrap3').hide();
	$('.emo_3').click(function(){
		$('.emo_wrap3').show();
	});

	$('.emo_modal3 .close').click(function(){
		$('.emo_wrap3').hide();
	});

		
	$('.emo_wrap4').hide();
	$('.emo_4').click(function(){
		$('.emo_wrap4').show();
	});

	$('.emo_modal4 .close').click(function(){
		$('.emo_wrap4').hide();
	});

	$('.emo_wrap5').hide();
	$('.emo_5').click(function(){
		$('.emo_wrap5').show();
	});

	$('.emo_modal5 .close').click(function(){
		$('.emo_wrap5').hide();
	});



// gotop

    $('.gotop').hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('.gotop').fadeIn();
      } else {
        $('.gotop').fadeOut();
        
      }  
    });

    $('.gotop').click(function(){
        $('html,body').animate({
            scrollTop: '0'
        },1500); 
        });







	

});