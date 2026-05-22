let arrow = document.getElementById("scroll-arrow");

let observer = new IntersectionObserver(function (entries, observer){
    console.log(entries[0]['isIntersecting']);
    let onScreen = entries[0]['isIntersecting'];
    if (!onScreen){
        arrow.hidden = true;
    }
})

observer.observe(arrow);