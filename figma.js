let scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

/*-------- count up -----------*/

let counters = document.querySelectorAll('.counter span');
let container = document.querySelector(".counters");

let activated = false;

window.addEventListener('scroll', () => {

    if(window.scrollY > container.offsetTop - container.offsetHeight -200 && activated===false) {
        counters.forEach((counter) => {
            counter.innerText = 50;
            let count = 100;

        function updateCount(){
            const target = parseInt(counter.dataset.count);
            if (count < target) {
                count++;
                counter.innerText = count;
                setTimeout(updateCount, 10);
            }
            else{
                counter.innerText = target;
            }
        }
        updateCount();
        activated = true;
        })
    } else if (window.scrollY < container.offsetTop - container.offsetHeight - 500 && activated===true) {
        counters.forEach((counter) => {
            counter.innerText = 0;
        });
        activated = false;
    }
})

/*--------------Responsive------------------*/
let open = document.querySelector('.open-svg');
let close = document.querySelector('.close-svg');
let menu = document.querySelector('.link');


open.addEventListener('click', () => {
    menu.classList.toggle('active');
    open.style.display = 'none';
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    open.style.display = 'block';
});

