import $ from 'jquery/dist/jquery.js'
import 'winbox/dist/js/winbox.min.js'

const viewportWidth = 16.66666667

let windows = []

createWindow(0, '#networkTab', '#networkContent', 'Network Config', false, false);


function createWindow(id, controlElm, contentElm, name, min, hidden) {
    let w = new WinBox(name,
        {
            root: $('#workplace')[0],
            background: "#000000",
            left: window.innerWidth/100 *  viewportWidth,
            min: min,
            hidden: hidden,
            class: ['no-full', 'no-close']
        });

    w.mount($(contentElm)[0]);

    $(controlElm).click(() => {
        w.hide(!w.hidden);


    });

    windows[id] = w;
}

setTimeout(() => {
    windows.forEach((elm) => {
        elm.left = window.innerWidth/100 *  viewportWidth
        elm.bottom = 0
    })
}, 1000)

function debounce(func){
    let timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,500,event);
    };
}

addEventListener("resize", debounce( () => {
    windows.forEach((elm) => {
        elm.left = window.innerWidth/100 *  viewportWidth
        elm.bottom = 0
    })
} ));