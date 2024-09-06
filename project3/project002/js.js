$(document).ready(function () {

    $(document).ready(function () {
        // 팝업 열기 함수
        function openPopup() {
            $('#popupOverlay').fadeIn();
        }

        // 팝업 닫기 함수
        function closePopup() {
            $('#popupOverlay').fadeOut();
        }

        // 오버레이 클릭 시 팝업 닫기
        $('#popupOverlay').click(function (e) {
            if (e.target.id === 'popupOverlay') {
                closePopup();
            }
        });

        // "쇼핑 계속하기" 버튼 클릭 시 팝업 닫기
        $('.shop_keep').click(function () {
            closePopup();
        });

        // "장바구니 이동" 버튼 클릭 시 팝업 닫기
        $('.shop_basket').click(function () {
            closePopup();
            // 장바구니로 이동하는 추가 로직
            $('.shop').css({ 'display': 'flex' })
        });

        // 팝업을 열고 싶을 때 호출
        // openPopup();
    });

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height();

        $('.left1, .left2, .left3, .left4, .left5, .right1, .right2, .right3, .right4, .right5').each(function () {
            var elementTop = $(this).offset().top;
            var elementHeight = $(this).outerHeight();

            if (scrollTop + windowHeight >= elementTop + elementHeight / 3) {
                if ($(this).hasClass('left1') || $(this).hasClass('left2') || $(this).hasClass('left3') || $(this).hasClass('left4') || $(this).hasClass('left5')) {
                    $(this).addClass('animate-left');
                } else if ($(this).hasClass('right1') || $(this).hasClass('right2') || $(this).hasClass('right3') || $(this).hasClass('right4') || $(this).hasClass('right5')) {
                    $(this).addClass('animate-right');
                }
            }
        });
    })


    $('section').eq(2).mousemove(function (event) {
        $('.view').css({
            left: event.pageX + -50 + 'px',
            top: event.pageY + -30 + 'px'
        }).show(); // 마우스를 움직일 때만 보이도록 설정
    });

    $('.view').mouseleave(function () {
        $(this).hide(); // 마우스가 섹션을 벗어나면 숨기기
    });

    $('.view').click(function () {

        $('section').eq(2).stop().animate()
    });

    $('.cart').click(function (e) {
        e.preventDefault()

        $('.shop').css({ 'display': 'flex' })

    })

    $('.shop').click(function (e) {
        e.preventDefault()

        $('.shop').css({ 'display': 'none' })


    })
    var i = 0;
    let totalAmount = 0;
    $('.plus').click(function (e) {

        e.preventDefault()
        i++
        console.log(i)
        $('.cart').find('span').text(i)
        $('.product').find('span').text(i)

        let txt = $(this).parents('a').find('.price').text()
        txt = '<p class="product_txt">' + txt + '</p>';
        console.log(txt)
        let item = $(this).parents('a').find('.name').text()
        item = '<p class="product_item">' + item + '</p>';
        let timg = $(this).parents('a').find('p').html()
        timg = '<p class="product_img">' + timg + '</p>';
        console.log(timg)

        $('.shop').find('.list').append('<div>' + (timg + item + txt) + '</div>')

        let price = parseInt($(this).parents('a').find('.price').text());
        totalAmount += price;
        $('.shop').find('.total span').eq(1).text(totalAmount);


        // 장바구니 팝업창표시
        $('.shopping_bg').css({ 'display': 'flex' })
    })

    $('.empty').click(function (e) {
        e.preventDefault()
        i = 0;
        $('.cart').find('span').text(i)
        $('.product').find('span').text(i)
        $('.shop').find('.list').empty()

    })

    $('.mou').click(function () {
        var i = $(this).index()
        console.log(i)
        $('.flavor p').removeClass('on')
        $(this).addClass('on')
        $('.help_2').removeClass('on')
        $('.help_3').removeClass('on')
        $('.help_1').addClass('on')

        $('.help_1').css({ 'left': '100%', 'display': 'flex' }).stop().animate({ 'left': '0' }, 1500)


    })

    $('.gra').click(function () {
        var i = $(this).index()
        console.log(i)
        $('.flavor p').removeClass('on')
        $(this).addClass('on')
        $('.help_3').removeClass('on')
        $('.help_2').addClass('on')


        $('.help_2').css({ 'left': '100%', 'display': 'flex' }).stop().animate({ 'left': '0' }, 1500)


    })

    $('.fru').click(function () {
        var i = $(this).index()
        console.log(i)
        $('.flavor p').removeClass('on')
        $(this).addClass('on')
        $('.help_3').addClass('on')

        $('.help_3').css({ 'left': '100%', 'display': 'flex' }).stop().animate({ 'left': '0' }, 1500)

    })



    $('.btn li').click(function () {
        var i = $(this).index()
        console.log(i)

        $('.btn li').removeClass('on')
        $(this).addClass('on')
        $('.slide_img li').eq(i - 1).css({ 'left': 0 }).stop().animate({ 'left': '-100%' }, 1000)
        $('.slide_img li').eq(i).css({ 'left': '100%' }).stop().animate({ 'left': 0 }, 1000)

    })


    var a = 0;

    function timer() {
        a++;
        if (a == 4) a = 0;
        $('.btn li').eq(a).trigger('click')



    }

    var slide = setInterval(timer, 3000)

    $('.slide').mouseenter(function () {
        clearInterval(slide)

    })

    $('.slide').mouseleave(function () {
        slide = setInterval(timer, 3000)

    })




})
