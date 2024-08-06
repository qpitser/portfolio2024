$(document).ready(function(){

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height();
        
        $('.left1, .left2, .left3, .left4, .left5, .right1, .right2, .right3, .right4, .right5').each(function() {
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


    $('section').eq(2).mousemove(function(event){
        $('.view').css({
            left: event.pageX + -50 + 'px',
            top: event.pageY + -30 + 'px'
        }).show(); // 마우스를 움직일 때만 보이도록 설정
    });

    $('.view').mouseleave(function(){
        $(this).hide(); // 마우스가 섹션을 벗어나면 숨기기
    });

    $('.view').click(function(){

        $('section').eq(2).stop().animate()
    });

    $('.cart').click(function(e){
        e.preventDefault()

        $('.shop').css({'display' : 'flex'})

    })

    $('.reset').click(function(e){
        e.preventDefault()

        $('.shop').css({'display' : 'none'})


    })
    var i = 0;
    $('.plus').click(function(e){
        
        e.preventDefault()
        i++
        console.log(i)
        $('.cart').find('span').text(i)
        $('.product').find('span').text(i)

        let txt = $(this).parents('a').find('.price').text()
        console.log(txt)
        let item = $(this).parents('a').find('.name').text()
        let timg = $(this).parents('a').find('p').html()
                console.log(timg)

        $('.shop').find('.list').append('<div>'+(timg+item+txt)+'</div>')
    })

    $('.empty').click(function(e){
        e.preventDefault()
        i = 0;
        $('.cart').find('span').text(i)
        $('.product').find('span').text(i)
        $('.shop').find('.list').empty()

    })

    $('.mou').click(function(){
        var i = $(this).index()
        console.log(i)
        $('.flavor p').removeClass('on')
        $(this).addClass('on')

        $('.help .txtBox').css({'left' : '100%', 'display' : 'flex'}).stop().animate({'left' : '0'},2000)


    })

    $('.gra').click(function(){
        var i = $(this).index()
        console.log(i)
        $('.flavor p').removeClass('on')
        $(this).addClass('on')

        
        $('.help_2').css({'left' : '100%', 'display' : 'flex'}).stop().animate({'left' : '0'},2000)


    })

    $('.fru').click(function(){
        var i = $(this).index()
        console.log(i)
        $('.flavor p').removeClass('on')
        $(this).addClass('on')

        $('.help_3').css({'left' : '100%', 'display' : 'flex'}).stop().animate({'left' : '0'},2000)

    })



    $('.btn li').click(function(){
        var i = $(this).index()
            console.log(i)

            $('.btn li').removeClass('on')
            $(this).addClass('on')
        $('.slide_img li').eq(i-1).css({'left' : 0}).stop().animate({'left' : '-100%'},1000)
        $('.slide_img li').eq(i).css({'left' : '100%'}).stop().animate({'left' : 0},1000)

        })


        var a = 0;

        function timer() {
            a++;
            if(a==4)a=0;
            $('.btn li').eq(a).trigger('click')

            
            
        }

    var slide = setInterval(timer, 3000)

            $('.slide').mouseenter(function(){
                clearInterval(slide)

            })

            $('.slide').mouseleave(function(){
                slide = setInterval(timer, 3000)

            })

    
})
