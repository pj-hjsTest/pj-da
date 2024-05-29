//큐앤에이 드롭박스
$('.faqArea').each(function() {
    const $btnFaq = $(this).find('.btnFaq')
    const $ansCont = $(this).find('.ansCont')
    $btnFaq.on('click', function() {
        $btnFaq.removeClass('active')
        $ansCont.removeClass('active').slideUp(300)
        if($(this).siblings('.ansCont').is(':hidden') === true) {
            $(this).addClass('active')
            $(this).siblings('.ansCont').addClass('active').slideDown(300).css("display","flex")
        } return('error!')
    })
})