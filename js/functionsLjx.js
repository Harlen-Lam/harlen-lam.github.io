var slideIndex = 0;
var img_src = ['../figures/team/IG.jpeg', '../figures/team/FPX.jpeg', '../figures/team/EDG.jpeg'];
var timer;

function slide_change() {
    // get the slide
    var slide = document.getElementsByClassName('slideshow_img')[0];
    // set the src
    slide.src = img_src[slideIndex];
    // set the btn img
    var btn_imgs = document.getElementsByClassName("btn_img_dot");
    set_btn_img(btn_imgs);
    // recall
    timer = setTimeout(slide_change, 3000);
    // next slide
    slideIndex++;
    if (slideIndex > 2) {
        slideIndex = 0;
    }
}

function set_btn_img(btn_imgs) {
    for (var i = 0; i < 3; i++) {
        btn_imgs[i].src = '../figures/btn/dot-white.png';
    }
    btn_imgs[slideIndex].src = '../figures/btn/dot-black.png';
}

function startTimer() {
    timer = setTimeout(slide_change, 3000);
    return timer;
}

function restartTimer(timer) {
    clearTimeout(timer);
    timer = startTimer();
    return timer;
}

function addSlideIndex() {
    slideIndex++;
    if (slideIndex > 2) {
        slideIndex = 0;
    }
}

function prevSlide() {
    timer = restartTimer(timer);
    slideIndex -= 2;
    if (slideIndex == -1) {
        slideIndex = 2;
    } else if (slideIndex == -2) {
        slideIndex = 1;
    }
    var slide = document.getElementsByClassName('slideshow_img')[0];
    slide.src = img_src[slideIndex];
    // set the btn img
    var btn_imgs = document.getElementsByClassName("btn_img_dot");
    set_btn_img(btn_imgs);
    addSlideIndex();
}

function nextSlide() {
    timer = restartTimer(timer);
    var slide = document.getElementsByClassName('slideshow_img')[0];
    slide.src = img_src[slideIndex];
    // set the btn img
    var btn_imgs = document.getElementsByClassName("btn_img_dot");
    set_btn_img(btn_imgs);
    addSlideIndex();
}

function choose_slide(number) {
    timer = restartTimer(timer);
    var slide = document.getElementsByClassName('slideshow_img')[0];
    slideIndex = number;
    slide.src = img_src[slideIndex];
    // set the btn img
    var btn_imgs = document.getElementsByClassName("btn_img_dot");
    set_btn_img(btn_imgs);
    addSlideIndex();
}

function news_report_hover(n) {
    var teams = ['IG', 'FPX', 'EDG'];
    var posts = ['666!', 'NB!', '厉害！', '为什么这么厉害？', '夺冠之路',
                'Fighting！', '再续LOL 5年！', '好！', '妙！'];
    // set the header
    var a_items = document.getElementsByClassName('noticeBoard_a');
    for(var i = 0; i < 3; i++) {
        a_items[i].setAttribute('class', 'noticeBoard_a negative');
    }
    a_items[n].setAttribute('class', 'noticeBoard_a active');
    // set the content-head
    var head_item = document.getElementsByClassName('content-head')[0];
    head_item.innerHTML = teams[n] + ' News Report';
    // set the posts
    var content_items = document.getElementsByClassName('content-a');
    for(var i = 0; i < content_items.length; i++) {
        content_items[i].innerHTML = teams[n] + ' ' + posts[i];
    }

}

function scroll_to_top() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function search_player() {
    var players = [
        { 'name': 'TheShy', 'team': 'IG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'Ning', 'team': 'IG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'Tian', 'team': 'FPX', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'JieJie', 'team': 'EDG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'TheShy', 'team': 'IG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'Ning', 'team': 'IG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'Tian', 'team': 'FPX', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'JieJie', 'team': 'EDG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'TheShy', 'team': 'IG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'Ning', 'team': 'IG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'Tian', 'team': 'FPX', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'JieJie', 'team': 'EDG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'TheShy', 'team': 'IG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'Ning', 'team': 'IG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'Tian', 'team': 'FPX', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'JieJie', 'team': 'EDG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'TheShy', 'team': 'IG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'Ning', 'team': 'IG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'Tian', 'team': 'FPX', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
        { 'name': 'JieJie', 'team': 'EDG', 'src': '../figures/players/IG-TheShy.jpeg', 'href': '#TS' },
    ];
    var parent = document.getElementsByClassName('player-show')[0];
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    var input = document.getElementsByClassName('search-input')[0];
    var hasAns = false;
    players.forEach(function (player) {
        if (player.name == input.value || player.team == input.value || input.value == '') {
            hasAns = true;
            var img = document.createElement("img");
            img.setAttribute("class", 'player-photo');
            img.setAttribute('src', player.src);
            var player_a = document.createElement('a');
            player_a.setAttribute('class', 'player-photo-a');
            player_a.setAttribute('href', player.href);
            player_a.appendChild(img);
            var a = document.createElement('a');
            a.setAttribute('class', 'player-info');
            a.setAttribute('href', player.href);
            a.innerHTML = player.name;
            var div = document.createElement('div');
            div.setAttribute('class', 'player');
            div.appendChild(player_a);
            div.appendChild(a);
            parent.appendChild(div);
        }
    });
    var h2 = document.getElementsByClassName('player-search-head')[0];
    if (hasAns) {
        if(input.value == '') {
            h2.innerHTML = 'All Players';
        } else if (input.value == 'IG' || input.value == 'FPX' || input.value == 'EDG') {
            h2.innerHTML = input.value + ' Players';
        } else {
            h2.innerHTML = 'Player ' + input.value;
        }
    } else {
        h2.innerHTML = 'No info about the ' + input.value;
    }
}