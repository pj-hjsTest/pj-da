$(function() {
    // goToTop 버튼 나타남 -구현 완료
    const $btnTop = $('#goToTop')
    $(window).on('scroll', function() {
        let scroll = Math.floor($(this).scrollTop());
        //console.log(scroll)
        if (scroll > 60) {
            $btnTop.addClass('on')
        } else {
           $btnTop.removeClass('on')
        }
    })
    $btnTop.on('click', function() {
        $('html').scrollTop(0)
    })

    //a버튼 클릭시 새로고침 방지
    /* $('a').on('click', (e)=> {
        e.preventDefault();
    }) */
})

$('header').each(function() {
    let $header = $(this)
    let $gnb = $(this).find('.gnb > ul > li')
    let $hdBg = $(this).siblings('#hdBg')
    let $bgBk = $(this).siblings('#bgBlack')

    //gnb- 드롭다운, 호버효과
    $gnb.on('mouseover', function() {
        let gnbIdx = $(this).index()
        //console.log(gnbIdx)

        if($('#searchMenu').hasClass('active')) {
            return
        } else {
            //호버효과
            $gnb.eq(gnbIdx).children('a').addClass('hover').stop().css({color: '#6C801A'})
            $gnb.eq(gnbIdx).siblings('li').children('a').removeClass('hover').stop().removeAttr('style')
                
            //드롭다운
            $gnb.eq(gnbIdx).children('.sub').addClass('on').stop().slideDown(400)
            $gnb.eq(gnbIdx).siblings('li').children('.sub').removeClass('on').stop().slideUp(0)
        }
            
        if($gnb.children('.sub').hasClass("on")) {
                $hdBg.addClass('on').stop().slideDown(400)
                $bgBk.addClass('on').stop().fadeIn(300)

        } else {
                $hdBg.removeClass('on').slideUp(0)
                $bgBk.addClass('on').stop().fadeOut(100)
        }
        }).on('mouseleave', function() {
          $gnb.children('.sub').removeClass('on').slideUp(100)
          $hdBg.removeClass('on').slideUp(100)
          $bgBk.addClass('on').stop().fadeOut(100)
          $gnb.find('a').removeClass('hover').removeAttr('style')
    })

    //gnb li(depth2_3) 호버효과 - 구현완료 --------------
    let $depth2 = $('.gnb > ul > li').find('.depth2 > li')
    $depth2.on('mouseover', function() {
        let dep2Idx = $(this).index()
        //console.log(dep2Idx)
        $(this).children('a').addClass('hover').css({color: '#6C801A'})
        $(this).siblings('li').children('a').removeClass('hover').removeAttr('style')
    }).on('mouseleave', function() {
        $(this).children('a').removeClass('hover').removeAttr('style')
    })
    let $depth3 = $depth2.find('.depth3 > li')
    $depth3.on('mouseover', function() {
        let dep3Idx = $(this).index()
        //console.log(dep3Idx)
        $(this).children('a').addClass('hover').css({color: '#6C801A'})
        $(this).siblings('li').children('a').removeClass('hover').removeAttr('style')
    }).on('mouseleave' , function() {
        $(this).children('a').removeClass('hover').removeAttr('style')
    })

    //유틸 영역 구현 완료 ------------------
    $('.rightArea').each(function() {
        //메뉴 드롭다운
        const $btnMenu = $('#btnMenu')
        const $menuDropBox = $('.utilArea').find('.dropBox')
        $btnMenu.on('mouseover', function() {
            if($('#searchMenu').hasClass('active')){
                return
            } else {
                $menuDropBox.slideDown(200)
                $(this).parents('.utilArea').siblings('div').find('.dropBox').slideUp(200)
            }
        })
        $menuDropBox.on('mouseleave', function() {
            $(this).slideUp(200)
        })

        //유저 드롭다운
        const $btnLogIn = $('#btnLogIn')
        const $logInDropBox = $('.logIn').find('.dropBox')
        $btnLogIn.on('mouseover', function() {
            if($('#searchMenu').hasClass('active')) {
                return
            } else {
                $logInDropBox.slideDown(200)
                $(this).parents('.user').siblings('div').find('.dropBox').slideUp(200)
                $(this).parents('.logIn').siblings('ul').find('.dropBox').slideUp(200)
            }
        })
        $logInDropBox.on('mouseleave', function() {
            $(this).slideUp(200)
        })

        //lang 드롭다운
        const $btnLang = $('#btnLang')
        const $langDropBox = $('.lang').find('.dropBox')
        
        $btnLang.on('mouseover', function() {
            if($('#searchMenu').hasClass('active')) {
                return
            } else {
                $langDropBox.slideDown(200)
                $(this).parents('.user').siblings('div').find('.dropBox').slideUp(200)
                $(this).parents('.lang').siblings('ul').find('.dropBox').slideUp(200)   
            }
        })
        $langDropBox.on('mouseleave', function() {
            $(this).slideUp(200)
        })
    })
})

//서치창 -------------------------
$("#searchMenu").each(function() {
    //버튼을 누르면 메뉴 팝업
    const $searchMenu = $(this)
    const $rightArea = $('header').find('.rightArea')
    const btnSearch = $('#btnSearch');
    const searchClose = $('#searchClose');
    btnSearch.on('click', function() {
        $('body').addClass('scrollStop')
        $('header').addClass('active')
        $rightArea.addClass('active')
        $searchMenu.addClass('active')
     
    })
    searchClose.on('click', function() {
        $('body').removeClass('scrollStop')
        $('header').removeClass('active')
        $rightArea.removeClass('active')
        $searchMenu.removeClass('active')
    })

    //서치 리스트-검색영역 기록 저장 및 삭제 ---구현 완료
    let liLength = [] //검색리스트 배열 변수
    document.querySelector('#btnSearch').addEventListener('click', (e) => {
        e.preventDefault()

        //변수
        const history = document.querySelector('.history')
        const searchForm = document.querySelector('#searchForm')
        
        //시간데이터
        const today = new Date();
        let searchDate = today.getDate()
        let searchMonth = today.getMonth()
        
        if(searchMonth < 10) {
            searchMonth = '0' +searchMonth+'.'
        } else {searchMonth= searchMonth}
        if(searchDate < 10) {
            searchDate = '0'+searchDate
        } else { searchDate = searchDate}


        //값 입력
        let newLi = document.createElement('li')
        newLi.innerHTML =  `<a href="#">${searchForm.value}<span class="date">${searchMonth}${searchDate}</span></a> <button class="btnRemove"><img src="img/icon/icon_rankDel.svg" alt=""></button>`
        
        //값이 입력되지 않았을 경우에 리스트에 추가되지 않음
    
        if(searchForm.value == '') {
            return
        } else {
            history.appendChild(newLi)
            liLength.push(searchForm.value)
        }
        searchForm.value = ''

        //값 삭제
        const delButtons = document.querySelectorAll('.btnRemove')

        for (let [i, delButton] of delButtons.entries()) {
                delButton.index = i
                delButton.onclick = function() {

                //클릭한 버튼의 인덱스 값에 해당하는 요소를 배열에서 삭제 
                //let list = this.parentNode('li')
                let btnIdx = this.index
                //console.log(btnIdx)
                this.parentNode.remove(this)
                liLength.splice(btnIdx, 1)

                /* if(liLength.length > 1) {
                    return
                } else {
                    document.querySelector('.historyText').remove()
                }
                */
            if(liLength.length == 0) {
                newLi.innerHTML = "<li class='historyText'>검색 내역이 없습니다.</li>"
                history.appendChild(newLi)
            } else {
                return
            }
            }
        }
        console.log(liLength, liLength.length)

        if(liLength.length == 1) {
            document.querySelector('.historyText').remove()
        } else {
        return
        }
    })

    //버튼 클릭시 내역 전부 삭제 - 구현완료 -------------
    document.querySelector('.removeHistoryAll').addEventListener('click', function() {
        liLength = []
        document.querySelector('.history').innerHTML = ''
    })
})