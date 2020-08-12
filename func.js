let image_count = 5;
let image = document.querySelector('.image');
let btnL = document.querySelector('.btn_left')
let btnR = document.querySelector('.btn_right');
let dots = document.querySelectorAll('.dot');


//다음 이미지 보여주기
function nextImage() {
    for(let i = 1; i < image_count; i++) {
        if(Number(image.id) === i) {
            image.id = i + 1;
            image.src = 'image/cat-v' + image.id + '.jpg';
            dots[i - 1].classList.remove('now');
            dots[i].classList.add('now');
            break;
        } else if(Number(image.id) === image_count) { //첫번째 이미지 보여주기
            image.id = 1;
            image.src = 'image/cat-v' + image.id + '.jpg';
            dots[image_count - 1].classList.remove('now');
            dots[0].classList.add('now');
        }
    }
}

//이전 이미지 보여주기
function preImage() {
    for(let i = image_count; i > 0; i--) {
        if(Number(image.id) === i) {
            image.id = i - 1;
            image.src = 'image/cat-v' + image.id + '.jpg';
            dots[i - 1].classList.remove('now');
            dots[i - 2].classList.add('now');
            break;
        } else if(Number(image.id) === 1) { //마지막 이미지 보여주기
            image.id = image_count;
            image.src = 'image/cat-v' + image.id + '.jpg';
            dots[0].classList.remove('now');
            dots[image_count - 1].classList.add('now');
        }
    }
}

btnR.addEventListener('click', nextImage);
btnL.addEventListener('click', preImage);


// dot 클릭 -> 해당 순번 이미지 보여주기
dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
        let prevDot = document.querySelector('.now');

        prevDot.classList.remove('now');
        dot.classList.add('now');
        
        image.id = dot.id;
        image.src = 'image/cat-v' + image.id + '.jpg';
    });
});




