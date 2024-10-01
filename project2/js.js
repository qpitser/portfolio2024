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

        $('.cart_util').click(function (e) {
            e.preventDefault()
            $('.shop').css({ 'display': 'flex' })
        })

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


    // 함수: 카트 아이콘의 숫자 업데이트
    function updateCartUtilCount() {
        $('.cart_util span').text(totalItems);
    };

    // 기본 변수 설정
    var i = 0;
    var i2 = 0;
    let totalAmount = 0; // 총 금액을 담을 변수
    let totalItems = 0;  // 총 갯수 (수량)

    // .plus 버튼 클릭 시
    $('.plus').click(function (e) {
        e.preventDefault();

        // 수량 증가
        i++;
        totalItems++;
        $('.cart').find('span').text(totalItems);
        $('.product').find('span').text(totalItems);

        // 상품 정보 가져오기
        let txt = $(this).parents('a').find('.price').text();
        txt = '<p class="product_txt">' + txt + '</p>';

        let item = $(this).parents('a').find('.name').text();
        item = '<p class="product_item">' + item + '</p>';

        let timg = $(this).parents('a').find('p').html();
        timg = '<p class="product_img">' + timg + '</p>';
        // 카트 아이콘의 숫자 업데이트
        updateCartUtilCount();

        // 장바구니 리스트에 추가
        $('.shop').find('.list').append('<div>' + (timg + item + txt) + '</div>');

        // 가격에서 숫자만 추출 (쉼표나 "원" 제거)
        let price = parseInt($(this).parents('a').find('.price').text().replace(/[^0-9]/g, '원'));

        // 총 금액에 더하기
        totalAmount += price;

        // 총 금액 업데이트
        $('.shop').find('.total span').eq(1).text(totalAmount.toLocaleString());

        // 장바구니 팝업창 표시
        $('.shopping_bg').css({ 'display': 'flex' });
    });

    // .plus_cart 버튼 클릭 시
    $('.plus_cart').click(function (e) {
        e.preventDefault();

        // 수량 증가
        i2++;
        totalItems++;

        // 화면에 총 갯수 업데이트
        $('.cart').find('span').text(totalItems);
        $('.product').find('span').text(totalItems);

        // 상품 정보 가져오기
        let txt2 = $(this).parents('div').find('.info_price').text();
        txt2 = '<p class="product_txt">' + txt2 + '</p>';

        let item2 = $(this).parents('div').find('.info_name').text();
        item2 = '<p class="product_item">' + item2 + '</p>';

        let timg2 = $(this).parents('div').find('.buy_img').html();
        timg2 = '<p class="product_img">' + timg2 + '</p>';
        // 카트 아이콘의 숫자 업데이트
        updateCartUtilCount();

        // 장바구니 리스트에 추가
        $('.shop').find('.list').append('<div>' + (timg2 + item2 + txt2) + '</div>');

        // 가격에서 숫자만 추출 (쉼표나 "원" 제거)
        let price2 = parseInt($(this).parents('div').find('.info_price').text().replace(/[^0-9]/g, ''));

        // 총 금액에 더하기 (같은 totalAmount 변수 사용)
        totalAmount += price2;

        // 총 금액 업데이트
        $('.shop').find('.total span').eq(1).text(totalAmount.toLocaleString());

        // 장바구니 팝업창 표시
        $('.shopping_bg').css({ 'display': 'flex' });
    });


    // 초기 변수 설정
    var pricePerUnit = 16960;
    var quantity = 1;

    // 수량 및 가격 업데이트 함수
    function updateDisplay() {
        $('#quantity').text(quantity);
        $('.total_quantity').text(quantity);
        $('#total_price').text((pricePerUnit * quantity).toLocaleString() + '원');
    }



    // '-' 버튼 클릭 이벤트
    $('.minus').on('click', function () {
        if (quantity > 1) {
            quantity--;
            updateDisplay();
        }
    });

    // '+' 버튼 클릭 이벤트
    $('.plus_buy').on('click', function () {
        quantity++;
        updateDisplay();
    });

    // 페이지 로드 시 초기 업데이트
    updateDisplay();

    $('.empty').click(function (e) {
        e.preventDefault()
        i = 0;
        i2 = 0;
        // 총 수량 및 금액 초기화
        totalItems = 0;
        totalAmount = 0;

        $('.cart_util span').text(totalItems);
        $('.cart').find('span').text(i)
        $('.product').find('span').text(i)
        $('.shop').find('.list').empty()

    })

    $('.mou').click(function () {
        var i = $(this).index()
        $('.flavor p').removeClass('on')
        $(this).addClass('on')
        $('.help_2').removeClass('on')
        $('.help_3').removeClass('on')
        $('.help_1').addClass('on')

        $('.help_1').css({ 'left': '100%', 'display': 'flex' }).stop().animate({ 'left': '0' }, 1500)


    })

    $('.gra').click(function () {
        var i = $(this).index()
        $('.flavor p').removeClass('on')
        $(this).addClass('on')
        $('.help_3').removeClass('on')
        $('.help_2').addClass('on')


        $('.help_2').css({ 'left': '100%', 'display': 'flex' }).stop().animate({ 'left': '0' }, 1500)


    })

    $('.fru').click(function () {
        var i = $(this).index()
        $('.flavor p').removeClass('on')
        $(this).addClass('on')
        $('.help_3').addClass('on')

        $('.help_3').css({ 'left': '100%', 'display': 'flex' }).stop().animate({ 'left': '0' }, 1500)

    })



    $('.btn li').click(function () {
        var i = $(this).index()

        $('.btn li').removeClass('on')
        $(this).addClass('on')
        $('.slide_img li').eq(i - 1).css({ 'left': 0 }).stop().animate({ 'left': '-100%' }, 1000)
        $('.slide_img li').eq(i).css({ 'left': '100%' }).stop().animate({ 'left': 0 }, 1000)

    })

    $('.heart').click(function () {

        $('.fa-heart').css({ 'color': 'red' })

    })

    $('.close_product').click(function () {

        $('.shop').css({ 'display': 'none' })
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



    // 태극전사 소개 자동슬라이드 설정
    var ii = 0;
    var slideInterval; // 슬라이드 interval을 저장할 변수
    var videoElement = document.querySelector('#videoPlayer video'); // 비디오 요소 선택

    function startSlide() {
        slideInterval = setInterval(function () {
             // 비디오가 재생 중인지 확인
            if (!videoElement.paused) {
            return; // 비디오가 재생 중이면 슬라이드 전환 중단
            }


            ii++;
            if (ii == 3) ii = 0;

            // 이전 슬라이드 애니메이션
        $('.korea_inner_wrap').eq(ii - 1).stop().animate({ 'opacity': '0' }, 800, function() {
            // 애니메이션이 끝난 후 on 클래스 제거
            $(this).find('.imgBox').removeClass('on');
        });

        // 현재 슬라이드 애니메이션
        $('.korea_inner_wrap').eq(ii).stop().animate({ 'opacity': '1' }, 800, function() {
            // 애니메이션이 끝난 후 on 클래스 추가
            $(this).find('.imgBox').addClass('on');
        });
        }, 3000);
    }

    // 슬라이드 시작
    startSlide();

    // 태극전사 광고 비디오 재생 설정

    $('.korea_inner .imgBox').click(function() {
        $(this).click(function() {
            // 클릭한 imgBox의 부모 요소인 korea_inner_wrap에서 data-video 속성 값 가져오기
        var videoSrc = $(this).closest('.korea_inner_wrap').data('video'); 
        
        // 비디오 소스 선택
        var videoSource = $('#videoSource');

        // 비디오 소스 설정
        videoSource.attr('src', videoSrc);
        
        // 비디오 플레이어 선택
        var videoPlayer = $('#videoPlayer');

        // 비디오 로드 후 재생
        var videoElement = videoPlayer.find('video')[0];
        
        // 비디오 소스를 변경하고 로드
        videoElement.load();
        
        // 비디오 재생 후 재생 Promise 처리
        videoElement.play().catch(error => {
        });
        
        // 비디오 플레이어 보이기
        videoPlayer.css('display', 'flex');
        });
    
        // 비디오 닫기 버튼 클릭 이벤트
        $('.close_video').click(function() {
            var videoPlayer = $('#videoPlayer');
        videoPlayer.css('display', 'none'); // 비디오 플레이어 숨기기
        var videoElement = videoPlayer.find('video')[0];
        videoElement.pause(); // 비디오 일시 정지
        });
        
    });
    
})
