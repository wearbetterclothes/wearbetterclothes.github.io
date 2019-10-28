var scene3 = document.querySelector('#endImgBox');
var parallaxInstance3 = new Parallax(scene3);

var scene2 = document.querySelector('#photoGalleryGrid');
var parallaxInstance2 = new Parallax(scene2);



function scrollTo(event){
    alert(event.target);
}



var msnry = new Masonry( '#photoGalleryGrid', {
    itemSelector: '.grid-item',
});


const controller = new ScrollMagic.Controller();

var gallery = new TimelineMax();
var galleryText = new TimelineMax();
var pre_gallery = new TimelineMax();

var learn = new TimelineMax();


learn.to('body', 1, {backgroundColor: 'red'}, "first")
.to('#photoGalleryGridBox', 1, {y: '-50vh'}, "first")

learnScene = new ScrollMagic.Scene({
    triggerElement: "#learnFastFashion",
    triggerHook: 1.5,
    duration: "100%"
})
.setTween(learn)
.addTo(controller);


galleryText.to("#photoGalleryText", 1, {y: "130vh"}, "first")
.to("#photoGalleryText", 0.25, {textShadow: "0.2vw 0.2vw 0 red"},"first")
.to("#photoGalleryText", 0.5, {y: "150vh"},"second")

galleryTextScene = new ScrollMagic.Scene({
    triggerElement: "#featuredImages",
    triggerHook: 0.05,
    duration: "300%"
})
.setTween(galleryText)
.addTo(controller);

gallery.from('#photoGalleryGrid', 1, {y:"50vh", opacity: 0}, "first")

galleryScene = new ScrollMagic.Scene({
    triggerElement: "#featuredImages",
    triggerHook: 0
})
.setTween(gallery)
.addTo(controller);

pre_gallery.to('body', 1, {backgroundColor: "#53C2E6"}, "first")
.to('#endImgBox', 1, {y: "-50vh"}, "first")
.to('#headingAndButtonsBox', 1, {y: "-100vh"}, "first")
.to('#headerLogoBox', 1, {y: "-80vh"}, "first")

preGalleryScene = new ScrollMagic.Scene({
    triggerElement: "#featuredImages",
    triggerHook: 1.25,
    duration: "150%"
})
.setTween(pre_gallery)
.addTo(controller);