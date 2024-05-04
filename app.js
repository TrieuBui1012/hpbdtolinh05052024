// script.js
let popped = 0;
let played_audio = false;
document.addEventListener('click', function(e){
    
    if (e.target.className === "balloon-zero"){
        
        e.target.style.backgroundColor = "#EBE9E1";
        e.target.textContent = "0";
        popped++;
        var audio = new Audio('pop.mp3');
        audio.play();
        removeEvent(e);
    }
    else if (e.target.className === "balloon-five"){
        e.target.style.backgroundColor = "#EBE9E1";
        e.target.textContent = "5";
        popped++;
        var audio = new Audio('pop.mp3');
        audio.play();
        removeEvent(e);
    }
    else if (e.target.className === "balloon-two"){
        e.target.style.backgroundColor = "#EBE9E1";
        e.target.textContent = "2";
        popped++;
        var audio = new Audio('pop.mp3');
        audio.play();
        removeEvent(e);
    }
    else if (e.target.className === "balloon-four"){
        e.target.style.backgroundColor = "#EBE9E1";
        e.target.textContent = "4";
        popped++;
        var audio = new Audio('pop.mp3');
        audio.play();
        removeEvent(e);
    }
    else if (e.target.className === "balloon-"){
        e.target.style.backgroundColor = "#EBE9E1";
        e.target.textContent = "-";
        popped++;
        var audio = new Audio('pop.mp3');
        audio.play();
        removeEvent(e);
    }
    checkAllPopped();
});

function removeEvent(e){
    e.target.removeEventListener('click', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 10){
        console.log('all popped!');
        let gallery = document.querySelector('#guide');
        let message = document.querySelector('#card');
        gallery.innerHTML = '';
        message.style.display = 'block';
        if (played_audio === false){
            var audio = new Audio('hpbd.mp3');
            audio.play();
            audio.loop = true;
            played_audio = true;
        }
    }
    
};

(function() {
    function $(id) {
        return document.getElementById(id);
    }

    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
    console.log('wat', card);
    openB.addEventListener('click', function () {
        card.setAttribute('class', 'open-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
        }, 1000);
    });

    closeB.addEventListener('click', function () {
        card.setAttribute('class', 'close-half');
        if (timer) clearTimerout(timer);
        timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
        }, 1000);
    });
}());