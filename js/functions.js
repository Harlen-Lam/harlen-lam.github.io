var slideIndex = 0;
var img_src = ['./team/IG.jpeg', './team/FPX.jpeg', './team/EDG.jpeg'];
var img_href = ['http://localhost:3000/team', 'http://localhost:3000/team', 'http://localhost:3000/team'];
var timer;

function slide_change() {
    // get the slide
    var slide = document.getElementsByClassName('slideshow_img')[0];
    // set the src
    slide.src = img_src[slideIndex];
    var slide_a = document.getElementsByClassName('slideshow_a')[0];
    slide_a.href = img_href[slideIndex];
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
        btn_imgs[i].src = './btn/dot-white.png';
    }
    btn_imgs[slideIndex].src = './btn/dot-black.png';
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
    var slide_a = document.getElementsByClassName('slideshow_a')[0];
    slide_a.href = img_href[slideIndex];
    // set the btn img
    var btn_imgs = document.getElementsByClassName("btn_img_dot");
    set_btn_img(btn_imgs);
    addSlideIndex();
}

function nextSlide() {
    timer = restartTimer(timer);
    var slide = document.getElementsByClassName('slideshow_img')[0];
    slide.src = img_src[slideIndex];
    var slide_a = document.getElementsByClassName('slideshow_a')[0];
    slide_a.href = img_href[slideIndex];
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
    var slide_a = document.getElementsByClassName('slideshow_a')[0];
    slide_a.href = img_href[slideIndex];
    // set the btn img
    var btn_imgs = document.getElementsByClassName("btn_img_dot");
    set_btn_img(btn_imgs);
    addSlideIndex();
}

function news_report_hover(n=0) {
    // choose team
    var teams = ['IG', 'FPX', 'EDG'];
    // set the header class
    var a_items = document.getElementsByClassName('noticeBoard_a');
    for (var i = 0; i < 3; i++) {
        a_items[i].setAttribute('class', 'noticeBoard_a');
    }
    a_items[n].setAttribute('class', 'noticeBoard_a active');
    // set the content-head
    var head_item = document.getElementsByClassName('content-head')[0];
    head_item.innerHTML = teams[n] + ' News Report';
    // get the reports
    var data = { team: teams[n] };
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://localhost:3000/getReports',
        success: function (result) {
            // set the reports
            var content_ul = document.getElementsByClassName('content-ul')[0];
            // remove all child
            while (content_ul.firstChild) {
                content_ul.removeChild(content_ul.firstChild);
            }
            // append new child
            for (var i = 0; i < result.reports.length; i++) {
                // content of a
                var content_a = document.createElement('a');
                content_a.setAttribute('class', 'content-a');
                content_a.setAttribute('href', result.src[i]);
                content_a.setAttribute("target", "_blank");
                content_a.innerHTML = result.reports[i];
                // hr line
                var content_hr = document.createElement('hr');
                content_hr.setAttribute("class", "content-a-line");
                // element of li
                var content_li = document.createElement('li');
                content_li.setAttribute('class', 'content-li');
                content_li.appendChild(content_a);
                content_li.appendChild(content_hr);
                // append to ul
                content_ul.appendChild(content_li);
            }
        },
    });
}

function scroll_to_top() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function search_submit() {
    var input = document.getElementsByClassName('search-input')[0];
    var data = {};
    data.value = input.value;

    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://localhost:3000/getPlayers',
        success: function (result) {
            search_player(result);
        },
    });
}

function search_player(players) {
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
            player_a.setAttribute("target", "_blank");
            player_a.appendChild(img);
            var a = document.createElement('a');
            a.setAttribute('class', 'player-info');
            a.setAttribute('href', player.href);
            a.setAttribute("target", "_blank");
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
        if (input.value == '') {
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
