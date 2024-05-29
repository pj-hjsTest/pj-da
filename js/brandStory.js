//teafield 모달 박스
$('#teaField').each(function() {
  const $btnModal = $('.btnDropbox')
  const $btnModalClose = $('.modalBox .btnModalClose')
  $btnModal.on('click', function(e) {
    e.preventDefault();
    $(this).parents('.inner').siblings('.modalBox').addClass('active')
    $(this).parents('.inner').siblings('.bgModal').addClass('active')
    $('html').addClass('active')
  })
  $btnModalClose.on('click', function(e) {
    e.preventDefault();
    $(this).parents('.modalBox').removeClass('active')
    $(this).parents('.modalBox').siblings('.bgModal').removeClass('active')
    $('html').removeClass('active')
  })
})

// 스페셜리스트 탭 기능 -- 구현완료
$('#speciality').each(function() {
  const $btnTab = $('.tabButtonWrap button')
  $btnTab.on('click', function() {
    const tabIdx = $(this).index()
    //console.log(tabIdx)
    $(this).siblings('button').removeClass('active')
    $(this).addClass('active')
    $(this).parents('.tabButtonWrap').parents('.itemTitleArea').siblings('.tabContBox').children('div').eq(tabIdx).siblings('div').fadeOut(200)
    $(this).parents('.tabButtonWrap').parents('.itemTitleArea').siblings('.tabContBox').children('div').eq(tabIdx).fadeIn(300)
   
  })
})
//스크롤에 따라 제목 영역 페이드인 -- 구현완료
$(document).ready(function() {
  $(window).scroll(function() {
    $('.titleArea').each(function() {
      let btHeight = $(this).offset().top + $(this).outerHeight();
      let btmWindow = $(window).scrollTop()+$(window).height();

      if(btmWindow > btHeight) {
        $(this).animate({'opacity':'1'},600)
      } else {return}
    })
  })
})
//swiper -- 구현 80%
$('.brandStoryWrap').each(function() {
  const $btnNext = $(this).find('.swiper-button-next')
  const $btnPrev = $(this).find('.swiper-button-prev')
  const $slide = $(this).find('.swiper-wrapper .swiper-slide')
  const slideLength = $slide.length
  //console.log(nowIdx)
  let nowIdx = 0;
 
  $btnNext.on('click', function() {
    nowIdx ++;
    if(nowIdx > slideLength) {
      nowIdx = 0
    }
    $('.now').removeClass('now')
    $('.prev').removeClass('prev')
    $('.next').removeClass('next')
    
    if(nowIdx >= 0 && nowIdx<4) {
      //1~3(nowidx 기준)
      $slide.eq(nowIdx).addClass('now')
      $slide.eq(nowIdx+1).addClass('next')
      $slide.eq(nowIdx-1).addClass('prev')
    } else if (nowIdx>3 && nowIdx <=4) {
      //next가 0되어야하는 경우
      $slide.eq(nowIdx).addClass('now')
      $slide.eq(nowIdx-1).addClass('prev')
      $slide.eq(0).addClass('next')
    } else if (nowIdx > 4 && nowIdx <= 5) {
      $slide.eq(0).addClass('now')
      $slide.eq(1).addClass('next')
      $slide.eq(slideLength-1).addClass('prev')
      //console.log(nowIdx)
    } else {return}
  })
  //이전버튼
  $btnPrev.on('click', function() {
    nowIdx --;
    if(nowIdx > slideLength) {
      nowIdx = 0
    } else if (nowIdx < 0) {
      nowIdx = 5
    }
    $('.now').removeClass('now')
    $('.prev').removeClass('prev')
    $('.next').removeClass('next')
    
    if(nowIdx >= 0 && nowIdx<4) {
      //1~3(nowidx 기준)
      $slide.eq(nowIdx).addClass('now')
      $slide.eq(nowIdx+1).addClass('next')
      $slide.eq(nowIdx-1).addClass('prev')
    } else if (nowIdx>3 && nowIdx <=4) {
      //next가 0되어야하는 경우
      $slide.eq(nowIdx).addClass('now')
      $slide.eq(nowIdx-1).addClass('prev')
      $slide.eq(0).addClass('next')
    } else if (nowIdx > 4 && nowIdx <= 5) {
      $slide.eq(0).addClass('now')
      $slide.eq(1).addClass('next')
      $slide.eq(slideLength-1).addClass('prev')
      //console.log(nowIdx)
    } else {return}
  })
})

$(function() {
    //메인 스와이퍼 구현
    var sinceSwiper = new Swiper(".sinceAbout", {
      spaceBetween: 30,
      slidesPerView: 'auto',
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    var peopleSwiper = new Swiper(".peopleAbout", {
      slideToClickedSlide : true,
      spaceBetween: 160,
      slidesPerView: 2,
      loop: true,
      loopAdditionalSlides : 1,
      centeredSlides: true,
      breakpoints: {
        320: {
          spaceBetween : 10
        }
      }
    });
})