$(document).ready(function () {

    $(window).scroll(function () {
        var sc = $(window).scrollTop()
        var d2 = $(this).index()

        for (var i2 = 0; i2 < 4; i2++) {
            $('.game').eq(i2).css({ 'transform': 'translateZ(' + (sc + -(i2 * 3500) + 'px') })


            if (sc >= i2 * 2500 && sc < (i2 + 1) * 2500) {
                $('.game').removeClass('on')
                $('.game').eq(i2).addClass('on')

            }
        }

        for (var d2 = 0; d2 < 4; d2++) {
            $('.game_d').eq(d2).css({ 'transform': 'translateZ(' + (sc + -(d2 * 4000) + 'px') })


            if (sc >= d2 * 4000 && sc < (d2 + 1) * 4000) {
                $('.game_d').removeClass('on')
                $('.game_d').eq(d2).addClass('on')

            }
        }

        $('.gallery_img.on').css({ 'left': -sc })

    });



    $('.menu ul li').click(function () {
        var i = $(this).index()

        $('.menu ul li').removeClass('on')
        $(this).addClass('on')
        $('article').removeClass('on')
        $('article').eq(i).addClass('on')
        window.scrollTo(0, 0)
        $('.art3').css({'height' :''})


        $('article').eq(i-1).css({'left' : 0}).stop().animate({'left' : '-100%'},1000)
        $('article').eq(i).css({'left' : '100%'}).stop().animate({'left' : 0},1000)

        

    });

    $('nav.life ul li').click(function () {
        var i2 = $(this).index()

        $('.gallery_img').removeClass('on')
        $('.gallery_img').eq(i2).addClass('on')
        $('.life ul li').removeClass('on')
        $('.life ul li').eq(i2).addClass('on')
        

        $('.gallery_img').fadeOut(1000, function () {


        })
        $('.gallery_img.on').fadeIn(1000, function () {

        })

        

        var pnum = $('.gallery_img.on p').size()
        $('.gallery_img').width((660 * pnum) + 400)
        $('.art3').height((500 * pnum) + 400)

        $('html,body').scrollTop((500 * pnum) + 400)
        window.scrollTo(0, 0)


        

    })

    $('.dodgers ul li').click(function(){
        var d = $(this).index()
        console.log(d)

        $('.dodgers ul li').removeClass('on')
        $(this).addClass('on')
        $('article').removeClass('on')
        $('article').eq(d+3).addClass('on')

        $('article').eq(d+2).css({'left' : 0}).stop().animate({'left' : '-100%'},1000)
        $('article').eq(d+3).css({'left' : '100%'}).stop().animate({'left' : 0},1000)

        $('.gallery_img').css({'left' : ''})


    })



    $('.dodgers_menu').click(function(){
        $('.hanwha').removeClass('on')
        $('.dodgers').addClass('on')



    })

    $('.hanwha_menu').click(function(){
        $('.dodgers').removeClass('on')
        $('.hanwha').addClass('on')
        $('.art1').addClass('on')
        $('.art1').css({'left':'0'})



    })




    $('.photo_menu').click(function(){
        $('.art3').addClass('on')
        $('.gallery img').eq(0).addClass('on')
        $('.art3').css({'left' : '0'})

        var pnum = $('.gallery_img.on p').size()
        $('.gallery_img').width((660 * pnum) + 400)
        $('.art3').height((500 * pnum) + 400)

        $('html,body').scrollTop((500 * pnum) + 400)
        window.scrollTo(0, 0)

    })


    $('.gallery_img p').mouseenter(function () {
        $(this).css('transform', 'scale(1.2)');




    })

    $('.gallery_img p').mouseleave(function () {
        $(this).css('transform', 'scale(1)');




    })




    


    const selectors = ['.art2','.art5'];
    const config = { attributes: true };

    const callback = function(mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const targetNode = mutation.target;
                if ($(targetNode).hasClass('on')) {
                    $('body').height(12000);
                } else {
                    $('body').height('auto'); // 기본 높이값으로 변경
                }
            }
        }
    };

    selectors.forEach(selector => {
        $(selector).each(function(index, element) {
            const observer = new MutationObserver(callback);
            observer.observe(element, config);

            
        });
    });
    

    

    

    $('.canvas').each(function() { 
        // 퍼센트를 표시할 요소 선택
        const spanpercent = $(this).siblings('.percent');
        
        // 원의 테두리 너비(px) 및 애니메이션 지속 시간(ms) 정의 
        const border = 50;
        const duration = 2500; 
    
        // 캔버스 및 2D 컨텍스트 설정
        const canvas = $(this)[0]; 
        const ctx = canvas.getContext('2d');
    
        // 애니메이션에 필요한 변수 및 데이터 속성에서 목표 퍼센트 가져오기
        const targetPercent = $(this).data('percent');
        const posX = canvas.width / 2;
        const posY = canvas.height / 2;
        const onePercent = 360 / 100;
        const result = onePercent * targetPercent;
        const radius = (canvas.width / 2) - (border / 2);
        let percent = 0;
        ctx.lineCap = (targetPercent <= 0) ? 'butt' : 'round';
    
        // 원을 그리고 퍼센트 업데이트하는 함수
        function arcMove() {
            let degrees = 0;
            let startTime = null;
    
            // 애니메이션을 처리하는 함수
            function animate(timestamp) {
                if (!startTime) startTime = timestamp;
                let progress = (timestamp - startTime) / duration;
                progress = Math.min(1, progress);
                degrees = progress * result;
    
                // 캔버스 초기화 및 퍼센트 업데이트
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                percent = Math.floor(degrees / onePercent);
                spanpercent.text(percent);
    
                // 배경 선 그리기
                ctx.beginPath();
                ctx.arc(posX, posY, radius, 0, Math.PI * 2);
                ctx.strokeStyle = '#FF6347';
                ctx.lineWidth = border;
                ctx.stroke();
    
                // 애니메이션 되는 선 그리기
                ctx.beginPath();
                ctx.strokeStyle = '#FFA07A';
                ctx.lineWidth = border;
                ctx.arc(posX, posY, radius, Math.PI * -0.5, (Math.PI / 180) * degrees - (Math.PI / 2));
                ctx.stroke();
    
                // 애니메이션이 완료되지 않았다면 계속해서 프레임 요청
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
            // 첫 프레임 요청
            requestAnimationFrame(animate);
        }
    
        // 애니메이션 함수 호출
        arcMove();
    });


})