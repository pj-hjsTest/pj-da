$(function() {
    //header 스크롤시 동작 - 구현완료
    $('header').each(function() {
        const $header = $('header')
        const $logo = $(this).find('.logo img')
        const $btnTop = $('#goToTop')
        //헤더 변화
        $(window).on('scroll', function() {
            let scroll = Math.floor($(this).scrollTop())

            //console.log(scroll)
            if(scroll > 554) {
                $header.addClass('active')
                $logo.attr({
                    src: 'img/icon/logo_black.png',
                    alt: '오설록'
                },100)
                
                $btnTop.addClass('on')

            } else {
                $header.removeClass('active')
                $logo.attr({
                    src: 'img/icon/logo_white.png',
                    alt: '오설록'
                })

                $btnTop.removeClass('on')
            }
        })
    })

    //side gnb - 구현 완료 -----------
    $('#sideMenu').each(function() {
        //열었다 닫았다
        const $btnAside = $('#btnMenu')
        const $btnCloseAside =$('#btnClose')
        $btnAside.on('click', (e) => {
            e.preventDefault();
            $(this).toggleClass('on')
            $('body').toggleClass('active')
        })
        $btnCloseAside.on('click', (e) => {
            e.preventDefault();
            $(this).removeClass('on')
            $('body').removeClass('active')
        })

        //gnb 클릭시 on, 드롭다운 메뉴
        const $gnb = $('.gnb > ul > li')
        const $depth2 = $(this).find('.depth2');
        $gnb.on('click', function() {
            $gnb.removeClass('on')
            $depth2.removeClass('on').slideUp(400)
            if($(this).children('.depth2').is(':hidden') == true) {
                $(this).addClass('on');
                $(this).children('.depth2').addClass('on').slideDown(400)
            } else {return}
        })
    })

    //searchTab
    $('#searchArea').each(function() {
        const $btnSearch = $('#btnSearch');
        const $searchArea = $(this);
        const $btnCloseSearch = $(this).find('#btnSearchClose')
        $btnSearch.on('click', () => {
            $searchArea.addClass('active')
        })
        $btnCloseSearch.on('click', () => {
            $searchArea.removeClass('active')
        })

        //tab버튼
        const $searchTab = $(this).find('.chartTab li');
        $searchTab.on('click', function() {
            let tabIdx = $(this).index();
            const $chartCont = $('.chartCont')
            $(this).addClass('active')
            $(this).siblings('li').removeClass('active')
            $chartCont.eq(tabIdx).addClass('active')
            $chartCont.eq(tabIdx).siblings('div').removeClass('active')
        })

        //rank area
        //데이터베이스
        const rankData = [
            {"rank": "1", "title":"세트", "rankStatus":"up"},
            {"rank": "2", "title":"그린티 랑드샤", "rankStatus":"new"},
            {"rank": "3", "title":"선물세트", "rankStatus":"up"},
            {"rank": "4", "title":"캐모마일", "rankStatus":"new"},
            {"rank": "5", "title":"비의 사색", "rankStatus":"new"},
            {"rank": "6", "title":"제주 영귤", "rankStatus":"none"},
            {"rank": "7", "title":"말차", "rankStatus":"none"},
            {"rank": "8", "title":"세작", "rankStatus":"down"},
            {"rank": "9", "title":"케이크", "rankStatus":"down"},
            {"rank": "10", "title":"콤부", "rankStatus":"down"},
        ]

        function rankList() {
            /* let rankUp = rankData.filter(rank => rank.rankStatus == "up")
            let rankNew = rankData.filter(rank => rank.rankStatus == "new")
            let rankDown = rankData.filter(rank => rank.rankStatus == "down")
            let rankNone = rankData.filter(rank => rank.rankStatus == "none") */
            for(i=0;i<rankData.length;i++) {
                let dataDeafault = rankData[i].rankStatus
                if(rankData[i].rankStatus == "up") {
                    const rankText = `<li class="up"><a href="#"><b>${rankData[i].rank}</b><span>${rankData[i].title }</span></a></li>`
                    
                    const $chartList = document.querySelector('#resultPopualr')
                    $chartList.insertAdjacentHTML('beforeend', rankText)
                    
                } else if(rankData[i].rankStatus == "new") {
                    const rankText = `<li class="new"><a href="#"><b>${rankData[i].rank}</b><span>${rankData[i].title }</span></a></li>`
                    const $chartList = document.querySelector('#resultPopualr')
                    $chartList.insertAdjacentHTML('beforeend', rankText)
                    
                } else if (rankData[i].rankStatus == "down") {
                    const rankText = `<li class="down"><a href="#"><b>${rankData[i].rank}</b><span>${rankData[i].title }</span></a></li>`
                    const $chartList = document.querySelector('#resultPopualr')
                    $chartList.insertAdjacentHTML('beforeend', rankText)
                    
                } else if (rankData[i].rankStatus == "none") {
                    const rankText = `<li class="none"><a href="#"><b>${rankData[i].rank}</b><span>${rankData[i].title }</span></a></li>`
                    const $chartList = document.querySelector('#resultPopualr')
                    $chartList.insertAdjacentHTML('beforeend', rankText)
                } else {return}
              /*   const $chartList = document.querySelector('.resultPopualr')
                $chartList.insertAdjacentHTML('beforeend', listWrap) */
               
            }
        
        }
        rankList()
    })

    //tab버튼 -구현 완료 ----------------------
    $('.todayRecom').each(function() {
        let tabList = $(this).find('.tabItemList li')

        tabList.on('click', function() {
            let tabIdx = $(this).index();
            //console.log(tabIdx)
            let tabCont = $(this).parents('.recomTop').siblings('.tabList').children('#tabCont').eq(tabIdx)
            //console.log(tabCont)
            $(this).addClass('on')
            $(this).siblings('li').removeClass('on')

            tabCont.addClass('on');
            tabCont.siblings('#tabCont').removeClass('on')    
        })
    })
    
    //footer - 구현완료--- 
    $('footer').each(function() {
        const $btnLang = $(this).find('#btnLang');
        const $btnFtInfo = $(this).find('#btnFtInfo');

        //언어 선택 드롭박스
        $btnLang.on('click', function(e) {
            e.preventDefault();
            
            $(this).toggleClass('on')
            $(this).siblings('.dropBox').toggleClass('active')

        })
        //오설록 사업자 정보확인
        $btnFtInfo.on('click', function(e) {
            e.preventDefault();

            $(this).toggleClass('on')
            $(this).parents('div').siblings('.dropBox').toggleClass('active')
        })
    })    
})
//공지사항 리스트, 자동 넘기기
document.addEventListener('DOMContentLoaded', () => {
    window.setInterval(roopNotice, 6000);
    window.setInterval(eventDate, 1000)
})

function roopNotice() {
    //prev 클래스 삭제
    document.querySelector('.noticeArea .prev').classList.remove('.prev')

    //.on  => .prev
    let current = document.querySelector('.noticeArea .on')
    current.classList.remove('on')
    current.classList.add('prev')

    //.next => .current
    let next = document.querySelector('.noticeArea .next')
    if(next.nextElementSibling == null) {
        //비어있으면 첫번째 li를 맨 뒤로 보내는 작업
        document.querySelector('.noticeArea ul li:first-child').classList.add('next');
    } else {
        next.nextElementSibling.classList.add('next')
    }
    next.classList.remove('next');
    next.classList.add('on')
}
clearInterval(roopNotice)

//타임세일 남은시간 출력
function eventDate() {
    const eventDay = Date.parse("2025/09/14 23:59:59")
    const eventHour = 23
    const eventMin = 59
    const eventSec = 59
    const today = new Date();

    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    let resultHr = `${eventHour - hr}`
    let resultMin = `${eventMin - min}`
    let resultSec = `${eventSec - sec}` 

    if(resultHr < 10 ) {
        resultHr = '0' + resultHr
    } else {
        resultHr = resultHr
    }
    if(resultMin  < 10 ) {
        resultMin = '0' + resultMin
    }else {
        resultMin = resultMin
    }
    if(resultSec < 10 ) {
        resultSec = '0' + resultSec
    }else {
        resultSec = resultSec
    }

    //적용 영역
    let $span = $('.timer span')
    $span.filter('.hr').text(resultHr)
    $span.filter('.min').text(resultMin)
    $span.filter('.sec').text(resultSec)
}
clearInterval(eventDate)



//main-swiper -- 구현완료
$(function() {
    const swiperLength = $(".mainVisual .swiper-slide").length
    document.querySelector('.nowPage').textContent = 1
    document.querySelector('.totalPage').textContent = swiperLength

    var swiper = new Swiper(".mainVisual", {
        autoplay: {
            delay:6000,
            disableOnInteraction: false
        },
        loop:true,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        speed: 500,
        on: {
            activeIndexChange: function() {
                const $swiperIdx = this.realIndex
                document.querySelector('.nowPage').textContent = $swiperIdx +1
            }
        }
    });
})

$(function() {
    var qkswiper = new Swiper(".quickList", {
        slidesPerView: 4,
    });
})

$(function() {
    var tabSwiper = new Swiper(".bestRecom", {
        slidesPerView: 1,
        grid: {
          rows: 3,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
})

$(function() {
    var weekSwiper = new Swiper(".weekRecom", {
        slidesPerView: 1,
        grid: {
          rows: 3,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
})

$(function() {
    var qkswiper = new Swiper(".dadaInfo", {
        slidesPerView: 1.2,
    });
})

$(function() {
    var swiper = new Swiper(".storeList", {
        loop: true,
        slidesPerView: 1.4,
        centeredSlides: true,
        speed: 600,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            activeIndexChange: function() {
                let storyIdx = this.activeIndex
                //console.log(storyIdx)
                $storeList = $('.storeList .swiper-slide')
                
                //console.log($storeList.eq())
                $storeList.eq(storyIdx).siblings('.swiper-slide').removeClass('on')
                $storeList.eq(storyIdx).addClass('on')
            }
        }
    });
})

