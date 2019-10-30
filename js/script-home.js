var scene3 = document.querySelector('#endImgBox');
var parallaxInstance3 = new Parallax(scene3);

var scene2 = document.querySelector('#photoGalleryGrid');
var parallaxInstance2 = new Parallax(scene2);

var scene1 = document.querySelector('#learnImages');
var parallaxInstance1 = new Parallax(scene1);

window.onload = () =>{
    const preload = document.querySelector(".preload");
    const body = document.querySelector("body");


    preload.classList.add('preload-finish');
    body.style.overflowY = "scroll";
}

function scrollToPos(event){
    if(event.id == "search"){
        document.querySelector('header').scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }
    else if(event.id == "learn"){
        document.querySelector('#learnFastFashion').scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }
    else if(event.id == "gallery"){
        document.querySelector('#gallerySection').scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }
    else if(event.id == "login"){
        window.location.href="inProgress.html";
    }
    else if(event.id=="home"){
        window.location.href="home.html";
    }
    else if(event.id=="goToScrollStory"){
        window.location.href="index.html";
    }
}

var prevScrollPos = 0;
var scrollCount = 0;
var scrollUp = false;
window.addEventListener('scroll', () =>{
    var navbar = document.querySelector('#navbar');

    if(prevScrollPos > window.scrollY){
        navbar.className = "show";
    }
    else{
        navbar.className = "hide";
    }

    prevScrollPos = window.scrollY;

});



var msnry = new Masonry( '#photoGalleryGrid', {
    itemSelector: '.grid-item',
});

imagesLoaded( '#photoGalleryGrid', function() {
    msnry.layout();
});

msnry.on( 'layoutComplete', function() {
});










const controller = new ScrollMagic.Controller();

var gallery = new TimelineMax();
var galleryText = new TimelineMax();
var pre_gallery = new TimelineMax();

var learn = new TimelineMax();


learnIsActive = new ScrollMagic.Scene({
    triggerElement: "#learnFastFashion",
    triggerHook: 0.5,
    duration: "100%"
})
.setClassToggle("#learn", "active")
.addTo(controller);

learn.to('body', 1, {backgroundColor: '#6900ff'}, "first")
.to('#photoGalleryGridBox', 1, {y: '-50vh'}, "first")

learnScene = new ScrollMagic.Scene({
    triggerElement: "#learnFastFashion",
    triggerHook: 1.5,
    duration: "100%"
})
.setTween(learn)
.addTo(controller);


galleryText.to("#photoGalleryText", 1, {y: "130vh"}, "first")
.to("#photoGalleryText", 0.25, {textShadow: "0.3vw 0.3vw 0 rgb(255, 0, 235)"},"first")
.to("#photoGalleryText", 0.5, {y: "150vh"},"second")

galleryTextScene = new ScrollMagic.Scene({
    triggerElement: "#gallerySection",
    triggerHook: 0.05,
    duration: "300%"
})
.setTween(galleryText)
.addTo(controller);


galleryIsActive = new ScrollMagic.Scene({
    triggerElement: "#gallerySection",
    triggerHook: 0.5,
    duration: "180%"
})
.setClassToggle("#gallery", "active")
.addTo(controller);



gallery.from('#photoGalleryGrid', 1, {y:"50vh", opacity: 0}, "first")

galleryScene = new ScrollMagic.Scene({
    triggerElement: "#gallerySection",
    triggerHook: 0
})
.setTween(gallery)
.addTo(controller);

pre_gallery.to('body', 1, {backgroundColor: "#53C2E6"}, "first")
.to('#endImgBox', 1, {y: "-50vh"}, "first")
.to('#headingAndButtonsBox', 1, {y: "-100vh"}, "first")
.to('#headerLogoBox', 1, {y: "-80vh"}, "first")


preGalleryScene = new ScrollMagic.Scene({
    triggerElement: "#gallerySection",
    triggerHook: 1.25,
    duration: "100%"
})
.setTween(pre_gallery)
.addTo(controller);

searchIsActive = new ScrollMagic.Scene({
    triggerElement: "header",
    triggerHook: 0,
    duration: "60%"
})
.setClassToggle("#search", "active")
.addTo(controller);
