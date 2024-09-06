$(document).ready(function () {

    setTimeout(function () {
        $("#introSlide").fadeOut(1000, function () {
            $("#introSlide2").fadeIn(1000, function () {
                startTypingEffect(); // 두 번째 인트로 페이지에서 타이핑 효과 시작
            });
        });
    }, 3000); // 3초 대기 후 첫 번째 인트로 페이지 숨기기

    function startTypingEffect() {
        const content = "KOREAN MONSTER";
        const text = document.querySelector(".text");
        let i = 0;

        function typing() {
            if (i < content.length) {
                let txt = content.charAt(i);
                text.innerHTML += txt;
                i++;
            } else {
                clearInterval(typingInterval);
                startSecondScript();
            }
        }

        const typingInterval = setInterval(typing, 150);

        function startSecondScript() {
            new TypeIt("#asyncExec", {
                waitUntilVisible: true,
            })
                .type("FAN")
                .exec(async () => {
                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            return resolve();
                        }, 1000);
                    });
                })
                .type(" PAGE")
                .go();

            // 타이핑이 끝난 후 콘텐츠 표시
            setTimeout(function () {
                $("#introSlide2").fadeOut(1000, function () {
                    $("#content").fadeIn(1000);  // 메인 콘텐츠 표시
                });
            }, 3000); // 두 번째 인트로 타이핑 효과 후 3초 대기 후 메인 콘텐츠 표시
        }
    }

    $(window).scroll(function () {
        var sc = $(window).scrollTop()

        $('.art2, .art5').each(function () {
            var $this = $(this);

            // .game 요소에 대한 처리
            for (var i2 = 0; i2 < 6; i2++) {
                $this.find('.game').eq(i2).css({
                    'transform': 'translateZ(' + (sc + -(i2 * 3500) + 'px')
                });

                if (sc >= i2 * 2500 && sc < (i2 + 1) * 2500) {
                    $this.find('.game').removeClass('on');
                    $this.find('.game').eq(i2).addClass('on');
                }
            }

            // .game_d 요소에 대한 처리
            for (var d2 = 0; d2 < 6; d2++) {
                $this.find('.game_d').eq(d2).css({
                    'transform': 'translateZ(' + (sc + -(d2 * 3500) + 'px')
                });

                if (sc >= d2 * 3000 && sc < (d2 + 1) * 3000) {
                    $this.find('.game_d').removeClass('on');
                    $this.find('.game_d').eq(d2).addClass('on');
                }
            }
        });


        $('.gallery_img.on').css({ 'left': -sc })


    });





    $(window).on('scroll', function () {
        // 현재 z 위치 (스크롤 위치)를 가져오기
        var scrollTop = $(window).scrollTop();

        // z 위치가 2500px 이상일 때 비디오 재생 4500 미만일때 비디오 정지
        if (scrollTop >= 2500 && scrollTop < 4500) {
            if ($("#Video")[0].paused) {
                $("#Video")[0].play();
            }
        } else {
            if (!$("#Video")[0].paused) {
                $("#Video")[0].pause();
            }
        }

        // z 위치가 9000px 이상일 때 비디오 재생 11500 미만일때 비디오 정지
        if (scrollTop >= 9000 && scrollTop < 11500) {
            if ($("#Video2")[0].paused) {
                $("#Video2")[0].play();
            }
        } else {
            if (!$("#Video2")[0].paused) {
                $("#Video2")[0].pause();
            }
        }

        // z 위치가 12500px 이상일 때 비디오 재생 17000 미만일때 비디오 정지
        if (scrollTop >= 12500 && scrollTop < 17000) {
            if ($("#Video3")[0].paused) {
                $("#Video3")[0].play();
            }
        } else {
            if (!$("#Video3")[0].paused) {
                $("#Video3")[0].pause();
            }
        }

        // z 위치가 2500px 이상일 때 비디오 재생 4500 미만일때 비디오 정지
        if (scrollTop >= 2500 && scrollTop < 4500) {
            if ($("#Video_d")[0].paused) {
                $("#Video_d")[0].play();
            }
        } else {
            if (!$("#Video_d")[0].paused) {
                $("#Video_d")[0].pause();
            }
        }

        // z 위치가 7500px 이상일 때 비디오 재생 10000 미만일때 비디오 정지
        if (scrollTop >= 7500 && scrollTop < 10000) {
            if ($("#Video2_d")[0].paused) {
                $("#Video2_d")[0].play();
            }
        } else {
            if (!$("#Video2_d")[0].paused) {
                $("#Video2_d")[0].pause();
            }
        }

        // z 위치가 15000px 이상일 때 비디오 재생 17000 미만일때 비디오 정지
        if (scrollTop >= 15000 && scrollTop < 17000) {
            if ($("#Video3_d")[0].paused) {
                $("#Video3_d")[0].play();
            }
        } else {
            if (!$("#Video3_d")[0].paused) {
                $("#Video3_d")[0].pause();
            }
        }

    });


    $('.menu ul li').click(function () {
        var i = $(this).index()

        $('.menu ul li').removeClass('on')
        $(this).addClass('on')
        $('article').removeClass('on')
        $('article').eq(i).addClass('on')
        window.scrollTo(0, 0)
        $('.art3').css({ 'height': '' })


        $('article').eq(i - 1).css({ 'left': 0 }).stop().animate({ 'left': '-100%' }, 1000)
        $('article').eq(i).css({ 'left': '100%' }).stop().animate({ 'left': 0 }, 1000)



    });

    $('nav.life ul li').click(function () {
        var i2 = $(this).index()

        $('.gallery_img').removeClass('on')
        $('.gallery_img').eq(i2).addClass('on')
        $('.life ul li').removeClass('on')
        $('.life ul li').eq(i2).addClass('on')


        $('.gallery_img').fadeOut(function () {


        })
        $('.gallery_img.on').fadeIn(function () {

        })



        // 선택된 요소들의 개수를 계산
        var pnum = $('.gallery_img.on p').length;

        // 요소들의 너비를 계산하고 설정
        $('.gallery_img').width((660 * pnum) + 400);

        // 요소들의 높이를 계산하고 설정
        $('.art3').height((500 * pnum) + 600);

        // 페이지 스크롤 위치를 설정
        $('html, body').scrollTop((800 * pnum) + 400);

        // 페이지 맨 위로 스크롤
        window.scrollTo(0, 0);




    })

    $('.dodgers ul li').click(function () {
        var d = $(this).index()
        console.log(d)

        $('.dodgers ul li').removeClass('on')
        $(this).addClass('on')
        $('article').removeClass('on')
        $('article').eq(d + 3).addClass('on')
        window.scrollTo(0, 0)

        $('article').eq(d + 2).css({ 'left': 0 }).stop().animate({ 'left': '-100%' }, 1000)
        $('article').eq(d + 3).css({ 'left': '100%' }).stop().animate({ 'left': 0 }, 1000)

        $('.gallery_img').css({ 'left': '' })
        $('.art5').removeClass('off')
        $('.art3').removeClass('off')


    })

    $('.dodgers_profile').click(function () {
        $('.art3').addClass('off')
        $('.art5').addClass('off')
    })



    $('.dodgers_menu').click(function () {
        $('.hanwha').removeClass('on')
        $('.dodgers').addClass('on')



    })

    $('.hanwha_menu').click(function () {
        $('.dodgers').removeClass('on')
        $('.hanwha').addClass('on')
        $('.art1').addClass('on')
        $('.art1').css({ 'left': '0' })



    })




    $('.photo_menu').click(function () {
        $('.art3').addClass('on')
        $('.gallery img').eq(0).addClass('on')
        $('.art3').css({ 'left': '0' })

        // 선택된 요소들의 개수를 계산
        var pnum = $('.gallery_img.on p').length;

        // 요소들의 너비를 계산하고 설정
        $('.gallery_img').width((660 * pnum) + 400);

        // 요소들의 높이를 계산하고 설정
        $('.art3').height((500 * pnum) + 600);

        // 페이지 스크롤 위치를 설정
        $('html, body').scrollTop((800 * pnum) + 400);

        // 페이지 맨 위로 스크롤
        window.scrollTo(0, 0);

    })


    $('.gallery_img p').mouseenter(function () {
        $(this).css('transform', 'scale(1.05)');



    })

    $('.gallery_img p').mouseleave(function () {
        $(this).css('transform', 'scale(1)');




    })

   






    const selectors = ['.art2', '.art5'];
    const config = { attributes: true };

    const callback = function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const targetNode = mutation.target;
                if ($(targetNode).hasClass('on')) {
                    $('body').height(17500);
                } else {
                    $('body').height('auto'); // 기본 높이값으로 변경
                }
            }
        }
    };

    selectors.forEach(selector => {
        $(selector).each(function (index, element) {
            const observer = new MutationObserver(callback);
            observer.observe(element, config);


        });
    });






    $('.canvas').each(function () {
        // 퍼센트를 표시할 요소 선택
        const spanpercent = $(this).siblings('.percent');

        // 원의 테두리 너비(px) 및 애니메이션 지속 시간(ms) 정의 
        const border = 20;
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