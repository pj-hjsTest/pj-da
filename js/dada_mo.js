//gototop
$('header').each(function() {
    const $btnTop = $('#goToTop')
    $(window).on('scroll', function() {
        let scroll = Math.floor($(this).scrollTop())
        if(scroll > 554) {
            $btnTop.addClass('on')
        } else {
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
        for(i=0;i<rankData.length;i++) {
            let dataDeafault = rankData[i].rankStatus
            if(rankData[i].rankStatus == "up") {
                const rankText = `<li class="up"><a href="#"><b>${rankData[i].rank}</b><span>${rankData[i].title }</span></a></li>`
                
                const $chartList = document.querySelector('.resultPopualr')
                $chartList.insertAdjacentHTML('beforeend', rankText)
                
            } else if(rankData[i].rankStatus == "new") {
                const rankText = `<li class="new"><a href="#"><b>${rankData[i].rank}</b><span>${rankData[i].title }</span></a></li>`
                const $chartList = document.querySelector('.resultPopualr')
                $chartList.insertAdjacentHTML('beforeend', rankText)
                
            } else if (rankData[i].rankStatus == "down") {
                const rankText = `<li class="down"><a href="#"><b>${rankData[i].rank}</b><span>${rankData[i].title }</span></a></li>`
                const $chartList = document.querySelector('.resultPopualr')
                $chartList.insertAdjacentHTML('beforeend', rankText)
                
            } else if (rankData[i].rankStatus == "none") {
                const rankText = `<li class="none"><a href="#"><b>${rankData[i].rank}</b><span>${rankData[i].title }</span></a></li>`
                const $chartList = document.querySelector('.resultPopualr')
                $chartList.insertAdjacentHTML('beforeend', rankText)
            } else {return}

        }
    }
    rankList()
})

//tab버튼 -구현 완료 ----------------------
$('.compareTab').each(function() {
    let tabList = $(this).find('.compareTabBox li')

    tabList.on('click', function() {
        let tabIdx = $(this).index();
        //console.log(tabIdx)
        let tabCont = $('.compareCont li').eq(tabIdx)
        //console.log(tabCont)
        $(this).addClass('active')
        $(this).siblings('li').removeClass('active')

        tabCont.addClass('active');
        tabCont.siblings('li').removeClass('active')    
    })
})

//footer - 구현완료--- 
$('footer').each(function() {
    const $btnLang = $(this).find('#btnLang');
    const $btnFtInfo = $(this).find('#btnFtInfo');

    //언어 선택 드롭박스
    $btnLang.on('click', function(e) {
        e.preventDefault()
        
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