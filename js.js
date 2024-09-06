$(document).ready(function () {
    // 페이지 로딩 시 해가 우측으로 이동하면서 사라짐
    $('.sun').addClass('move-right');

    // 해가 완전히 사라질 즈음에 별이 나타남
    setTimeout(function () {
        $('.star').addClass('move-left');
    }, 1000); // 별이 1초 후에 나타남

    // 별이 나타난 후 첫 번째 이미지 사라지고 두 번째 이미지 나타남
    setTimeout(function () {
        $('.light').fadeOut(2000);
        $('.dark').fadeIn(2000);
    }, 2000); // 2초 후 이미지 전환

    $('.main').css({ 'display': 'none' })



    $('.star').click(function () {
        $('.intro').css({ 'display': 'none' })
        $('.main').css({ 'display': 'flex' })

        // .profile 요소를 보여줌
        $('.profile').fadeIn();

        // 애니메이션이 이미 실행되었는지 확인 (중복 실행 방지)
        if (!$('.profile').hasClass('animated')) {
            $('.profile').addClass('animated');

            // 원형차트

            // canvas 애니메이션 실행
            $('.profile .canvas').each(function () {
                const imageContainer = $(this).siblings('.image-container');
                const imageSrc = "path_to_image.png"; // 이미지 경로

                const border = 20;
                const duration = 2500;

                const canvas = $(this)[0];
                const ctx = canvas.getContext('2d');
                const targetPercent = $(this).data('percent');
                const color = $(this).data('color');
                const posX = canvas.width / 2;
                const posY = canvas.height / 2;
                const onePercent = 360 / 100;
                const result = onePercent * targetPercent;
                const radius = (canvas.width / 2) - (border / 2);
                let percent = 0;
                ctx.lineCap = (targetPercent <= 0) ? 'butt' : 'round';

                function arcMove() {
                    let degrees = 0;
                    let startTime = null;

                    function animate(timestamp) {
                        if (!startTime) startTime = timestamp;
                        let progress = (timestamp - startTime) / duration;
                        progress = Math.min(1, progress);
                        degrees = progress * result;

                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        percent = Math.floor(degrees / onePercent);

                        ctx.beginPath();
                        ctx.arc(posX, posY, radius, 0, Math.PI * 2);
                        ctx.strokeStyle = '#000000';
                        ctx.lineWidth = border;
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.strokeStyle = color;
                        ctx.lineWidth = border;
                        ctx.arc(posX, posY, radius, Math.PI * -0.5, (Math.PI / 180) * degrees - (Math.PI / 2));
                        ctx.stroke();

                        if (percent >= targetPercent) {
                            imageContainer.html(`<img src="${imageSrc}" alt="Image">`);
                        }

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    }
                    requestAnimationFrame(animate);
                }

                arcMove();
            });
        }



    })

    $('.concept').click(function(){
        $('.slide-panel').css({'left' : '-100%'})
        $('.popup').css({'z-index' : '1', 'opacity' : '1' })

    })

    $('.popup').click(function(){
        $('.slide-panel').css({'left' : '0'})
        $('.popup').css({'z-index' : '-1', 'opacity' : '0'})

    })



    $('.category').on('click', function () {
        var i = $(this).index()

        $('.cube>div').removeClass('on')
        $('.cube>div').eq(i).addClass('on')
        // 다른 모든 카테고리에서 active 클래스 제거
        $('.category').removeClass('active');

        // 클릭된 카테고리에 active 클래스 추가
        $(this).addClass('active');

        // 데이터 속성으로부터 카테고리 이름 가져오기
        const category = $(this).data("category");

        // 프로필이 아닌 경우에만 패널 열기
        if (category !== "profile") {
            openPanel(category);
        } else {
            closePanel(); // 프로필 클릭 시 패널이 닫히도록 설정
        }
        
    });

    // 큐브애니메이션

    const $cube = $('.cube');
    const $menuItems = $('.menu li');

    // 초기 상태 설정
    let currentRotation = 0;

    $menuItems.on('click', function () {
        // 클릭된 카테고리 인덱스에 따라 회전 각도 계산
        const index = $(this).index();
        currentRotation = -90 * index;

        // 큐브 회전 적용
        $cube.css('transform', `rotateY(${currentRotation}deg)`);

        // 모든 메뉴 아이템에서 active 클래스 제거하고 클릭된 아이템에 추가
        $menuItems.removeClass('active');
        $(this).addClass('active');

    });

    // 슬라이드패널

    function openPanel(category) {
        let content = "";

        switch (category) {
            case 'chungju':
                content = `<h2 class="header">충주커피박물관</h2>
                <h3 class="header_info">충주커피박물관 웹사이트 리뉴얼</h3>
                <p class="work_time">작업시간 : 60H</p>
                <p class="overview">OVERVIEW</p>
                <p class="overview_txt">목표: 커피와 자연이 어우러지는 휴식처를 제공<br>
            
                리뉴얼 목적: 기존 박물관의 기능성 개선<br>
                </p>
                <ul class="publish">퍼블리싱
                <li>접근성 향상</li>
                <li>반응형 웹 구현</li>
                <li>예약 시스템 활성화</li>
                </ul>`;
                break;
            case 'powerade':
                content = `<h2 class="header_power">파워에이드</h2>
                <h3 class="info_power">파워에이드 웹사이트 리뉴얼</h3>
                <p class="work_time">작업시간 : 72H</p>
                <p class="overview">OVERVIEW</p>
                <p class="overview_txt">목표: 파리올림픽 공식 스포츠 음료인 파워에이드 소개<br>
                
                리뉴얼 목적: 기존사이트와 다른 동적인 요소 추가<br>
                </p>
                <ul class="publish">퍼블리싱
                <li>애니메이션(패럴랙스 스크롤 등)</li>
                <li>장바구니 기능, 페이지 제작</li>
                <li>로그인페이지</li>
                </ul>`;
                break;
            case 'ryu':
                content = `<h2 class="header_ryu">Hyun-Jin RYU</h2>
                <h3 class="info_ryu">류현진 팬사이트 제작</h3>
                <p class="work_time">작업시간 : 86H</p>
                <p class="overview">OVERVIEW</p>
                <p class="overview_txt">목표: 류현진 선수의 전성기를 느낄 수 있는 페이지<br>
                </p>
                <ul class="publish">퍼블리싱
                <li>인트로페이지 2개로 구성</li>
                <li>translateZ를 이용한 구조(Video)</li>
                <li>슬라이드 팝업(Photo)</li>
                </ul>
                `;
                break;
        }

        

        // 패널에 내용 로드 및 슬라이드 패널 열기
        $("#panelContent").html(content);
        $("#slidePanel").css("width", "400px");

        // 패널이 완전히 열리면 내용을 보이게 함
        setTimeout(function() {
            $("#panelContent").css("visibility", "visible");
        }, 500);

        currentCategory = category; // 현재 카테고리 업데이트
    }

    function closePanel(callback) {
        $("#slidePanel").css("width", "0");

        // 패널이 닫힐 때 내용을 숨김
        $("#panelContent").css("visibility", "hidden");

        currentCategory = ""; // 현재 카테고리 초기화

        // 패널이 닫히는 애니메이션이 완료된 후 콜백 실행
        setTimeout(function() {
            if (callback) callback();
        }, 500); // 애니메이션이 0.5초 동안 진행되므로 이 시간에 맞춰 딜레이 설정
    }





});