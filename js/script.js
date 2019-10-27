

function scrollDown() {
    document.getElementById('introSection').scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

function goToSearchPage(){
    window.location.href="main.html"
}

window.onload = () =>{
    const preload = document.querySelector(".preload");
    const body = document.querySelector("body");
   
    window.scrollTo(0,0);

    preload.classList.add('preload-finish');
    body.style.overflowY = "scroll";

}

var scene2 = document.querySelector('#headerImgBox');
var parallaxInstance2 = new Parallax(scene2);

var scene3 = document.querySelector('#endImgBox');
var parallaxInstance3 = new Parallax(scene3);

var prevScrollPos = 0;
var scrollCount = 0;
var scrollUp = false;
window.addEventListener('scroll', () =>{
    
    if(prevScrollPos > window.scrollY){
        scrollUp = true
    }
    else{
        scrollUp = false;
    }

    if(sup1 != undefined){
        if(scrollCount == 10){
            if(scrollUp){
                sup1.move_relative(1);
            }
            else{
                sup1.move_relative(-1);
            } 
            scrollCount = 0;
        }
        scrollCount++;
        prevScrollPos = window.scrollY;
    }
    
});




const controller = new ScrollMagic.Controller();

var header = new TimelineMax();

var intro = new TimelineMax();
var introPin = new TimelineMax();

var oldFashion = new TimelineMax();
var oldFashionPin = new TimelineMax();

var newFashion = new TimelineMax();
var newFashionPin = new TimelineMax();

var massProduce = new TimelineMax();
var massProducePin = new TimelineMax();

var defineFF = new TimelineMax();
var defineFFPin = new TimelineMax();

var questionEvolve = new TimelineMax();
var questionEvolvePin = new TimelineMax();

var impact = new TimelineMax();
var impactPin = new TimelineMax();
var impactHugeText = new TimelineMax();

var co2 = new TimelineMax();
var co2Pin = new TimelineMax();

var polyester = new TimelineMax();
var polyesterPin = new TimelineMax();

var threeThingsCo2 = new TimelineMax();
var threeThingsCo2Pin = new TimelineMax();

var addsUpToCo2 = new TimelineMax();
var addsUpToCo2Pin = new TimelineMax();

var waterIntro = new TimelineMax();
var waterPin = new TimelineMax();

var cottonWater = new TimelineMax();
var cottonWaterPin = new TimelineMax();

var drinkingWater = new TimelineMax();
var drinkingWaterPin = new TimelineMax();

var threeYearsWater = new TimelineMax();
var threeYearsWaterPin = new TimelineMax();

var fiberWater = new TimelineMax();
var fiberWaterPin = new TimelineMax();

var dyeWater = new TimelineMax();
var dyeWaterPin = new TimelineMax();

var humanCostText1 = new TimelineMax();
var humanCostText2 = new TimelineMax();
var humanCostPin = new TimelineMax();

var throwaway = new TimelineMax();
var throwawayPin = new TimelineMax();

var overTheYears = new TimelineMax();
var overTheYearsPin = new TimelineMax();

var whatToDo = new TimelineMax();
var whatToDoPin = new TimelineMax();

var thrifting = new TimelineMax();
var thriftingPin = new TimelineMax();

var benefits = new TimelineMax();
var benefitsPin = new TimelineMax();

var endPin = new TimelineMax();




endPin.from("#thatsWhyAt", 2, {opacity: 1})
.to("#thatsWhyAt", 0.5, {opacity: 0}, "first")
.to("#firstSteps", 0.5, {opacity: 0}, "first")
.to("#endImg", 1 ,{y:"-10vh"}, "first")
.to("body", 1 ,{backgroundColor: "#FFAE02"}, "first")
.to("#findThriftStore", 1, {opacity:1}, "last")
.from("#endImgBox", 1, {opacity: 0}, "last")
.to("#findThriftStore", 0.00001, {pointerEvents: "all"})
.to("#endImgBox", 3, {opacity: 1})

endPinScene = new ScrollMagic.Scene({
    triggerElement: "#end",
    triggerHook: 0,
    duration: "250%"
})
.setPin("#end")
.setTween(endPin)
.addTo(controller)
.addIndicators({name: "end pin scene"});





benefits.to("#thriftingText", 1, {y:"-100vh"})

benefitsScene = new ScrollMagic.Scene({
    triggerElement: "#benefits",
    triggerHook: 1,
    duration: "100%"
})
.setTween(benefits)
.addTo(controller)
.addIndicators({name: "benefits scene"});
    





benefitsPin.from("#benefits1", 1, {x: "150vw"})
.from("#benefits1", 2, {opacity: "1"})
.to("#benefits1", 1, {x: "-150vw"}, "first")
.from("#benefits2", 1, {x: "150vw"}, "first")
.from("#benefits1", 2, {opacity: "1"})
.to("#benefits2", 1, {x: "-150vw"}, "second")
.from("#benefits3", 1, {x: "150vw"}, "second")
.from("#benefits1", 2, {opacity: "1"})

benefitsPinScene = new ScrollMagic.Scene({
    triggerElement: "#benefits",
    triggerHook: 0,
    duration: "400%",
    offset:"-150vh"
})
.setPin("#benefits")
.setTween(benefitsPin)
.addTo(controller)
.addIndicators({name: "benefits pin scene"});



thrifting.to('body', 1, {backgroundColor: "#8B2FC2"}, "first")
.to('#whatToDoText', 1, {y: "-100vh"}, "first")

thriftingPin.to('#thriftShoppingText', 0.00001, {color: "yellow"})
.to('#thriftShoppingText', 1, {color: "#FBCA2B"})

thriftingPinScene = new ScrollMagic.Scene({
    triggerElement: "#thrifting",
    triggerHook: 0.35,
    duration: "100%"
})
.setTween(thriftingPin)
.addTo(controller)
.addIndicators({name: "thriftingPin scene"});

thriftingScene = new ScrollMagic.Scene({
    triggerElement: "#thrifting",
    triggerHook: 1,
    duration: "100%"
})
.setTween(thrifting)
.addTo(controller)
.addIndicators({name: "thrifting scene"});
    






whatToDoPin
.to("#whatToDoText", 1, {y:"-25vh"})

whatToDoPinScene = new ScrollMagic.Scene({
    triggerElement: "#whatToDo",
    triggerHook: 0.5,
    duration: "100%",
})
.setPin("#whatToDo")
.setTween(whatToDoPin)
.addTo(controller)
.addIndicators({name: "whatToDo pin scene"});




whatToDo.to("#grassVideo", 0.25, {opacity: 0}, "first")
.to("#overTheYearsText1", 2, {opacity: 0}, "second")


whatToDoScene = new ScrollMagic.Scene({
    triggerElement: "#whatToDo",
    triggerHook: 1,
    duration: "100%",
    ease: Power0.easeNone,
    offset: "-100vh"
})
.setTween(whatToDo)
.addTo(controller)
.addIndicators({name: "whatToDo scene"});




overTheYearsPin.from("#grassVideo", 1, {opacity: 0}, "first")
.to("#overTheYearsText1", 1, {color: "rgb(192, 255, 0)"}, "first")
.to("#overTheYearsText1", 2, {opacity: 1}, "second")
.to("#overTheYearsText1", 0.00001, {visibility: "hidden"})
.from("#overTheYearsText2", 0.00001, {opacity: 0})
.to("#grassVideo", 2, {filter: "hue-rotate(330deg)"}, "third")
.to("#overTheYearsText2", 2, {opacity: 1}, "third")
.to("#overTheYearsText2", 0.00001, {opacity: 0})
.from("#overTheYearsText3", 0.00001, {opacity: 0})
.to("#overTheYearsText3", 2, {opacity: 1}, "last")




overTheYearsPinScene = new ScrollMagic.Scene({
    triggerElement: "#overTheYears",
    triggerHook: 0,
    duration: "200%",
    offset: "-300vh"
})
.setPin("#overTheYears")
.setTween(overTheYearsPin)
.addTo(controller)
.addIndicators({name: "overTheYears pin scene"});


overTheYears.to("body", 15, {backgroundColor: "#148D62"}, "first")
.to("#sweaterFallImg", 15, {y: "280vh"}, "first")
.to("#jeansFallImg", 15, {y: "360vh"}, "first")
.to("#jacketFallImg", 15, {y: "260vh"}, "first")
.to("#socksFallImg", 15, {y: "240vh"}, "first")
.to("#sweatpantsFallImg", 15, {y: "320vh"}, "first")
.to(".throwawayImg", 15, {transform: "rotate(40deg"}, "first")
.to("#grassVideo", 0.0001, {opacity: 0}, "first")


.to("#sweaterFallImg", 0.00001, {opacity: 0}, "last")
.to("#jeansFallImg", 0.000001, {opacity: 0}, "last")
.to("#jacketFallImg", 0.00001, {opacity: 0}, "last")
.to("#socksFallImg", 0.00001, {opacity: 0}, "last")
.to("#sweatpantsFallImg", 0.00001, {opacity: 0}, "last")

overTheYearsScene = new ScrollMagic.Scene({
    triggerElement: "#overTheYears",
    triggerHook: 1,
    duration: "250%",
    offset: "-300vh"
})
.setTween(overTheYears)
.addTo(controller)
.addIndicators({name: "overTheYears scene"});




throwawayPin
.to(".throwawayImg", 1, {transform: "rotate(5deg"}, "last")
.to("#sweaterFallImg", 1, {y: "-40vh"}, "last")
.to("#jeansFallImg", 1, {y: "-20vh"}, "last")
.to("#jacketFallImg", 1, {y: "-70vh"}, "last")
.to("#socksFallImg", 1, {y: "-50vh"}, "last")
.to("#sweatpantsFallImg", 1, {y: "-50vh"}, "last")
.to("#throwawayText", 1, {y: "-35vh"}, "last")
.to("#throwawayText", 0.00001, {visibility: "hidden"}, "=-0.5")
.from("#throwawayText2", 0.00001, {opacity: 0} , "=-0.5")
.to("#throwawayText2", 0.5, {y: "-5vh"} , "=-0.5")


throwawayPinScene = new ScrollMagic.Scene({
    triggerElement: "#throwAway",
    triggerHook: 0.5,
    duration: "200%"
})
.setPin("#throwAway")
.setTween(throwawayPin)
.addTo(controller)
.addIndicators({name: "throwaway pin scene"});



throwaway.to("#throwawayIntroText", 1, {y:"70vh"}, "first")
.to("#throwawayIntroImg", 1, {filter:"brightness(0.75)"}, "first")
.to("body", 0.00001, {backgroundColor: "#51ab1a"}, "=0.85")
.from("#sweaterFallImg", 1, {y: "-40vh"}, "last")
.from("#jeansFallImg", 1, {y: "-60vh"}, "last")
.from("#jacketFallImg", 1, {y: "-30vh"}, "last")
.from("#sweatpantsFallImg", 1, {y: "-30vh"}, "last")
.from("#socksFallImg", 1, {y: "-60vh"}, "last")


const throwawayScene = new ScrollMagic.Scene({
    triggerElement: "#throwawayIntro",
    triggerHook: 1,
    duration: "220%"
})
.setTween(throwaway)
.addTo(controller)
.addIndicators({name: "throwawayIntro scene"});





humanCostText2.to("#nineOutOfTen", 0.000001, {color: "#8f0000"})

const humanCostChangeColour2= new ScrollMagic.Scene({
    triggerElement: "#humanText3",
    triggerHook: 0.25, 
})
.setTween(humanCostText2)
.addTo(controller)
.addIndicators({name: "humanCostText2  scene"});


humanCostText1.to("#onePercent", 0.000001, {color: "#8f0000"})

const humanCostChangeColour1= new ScrollMagic.Scene({
    triggerElement: "#humanText2",
    triggerHook: 0.25
})
.setTween(humanCostText1)
.addTo(controller)
.addIndicators({name: "humanCostText1 pin scene"});




humanCostPin
.to("#humanCostImgGrid", 1, {y: "110vw"})


const humanCostPinScene = new ScrollMagic.Scene({
    triggerElement: "#humanText1",
    triggerHook: 0,
    ease: Power0.easeNone,
    duration: "300%"
})
.setTween(humanCostPin)
.addTo(controller)
.addIndicators({name: "humanCost pin scene"});


dyeWaterPin.from("#dyeVideo", 2, {opacity: 0}, "first")
.to("#dyeText1", 0.5, {color: "rgb(231, 107, 255)"}, "first")
.to("#dyeText4", 0.5, {color: "rgb(231, 107, 255)"}, "first")
.to("#dyeVideo", 3, {opacity: 1})
.to("body", 0.05, {backgroundColor:"rgb(192, 4, 231)"})
.to("#dyeText1", 0.00001, {opacity: 0})
.to("#dyeText4", 0.00001, {opacity: 0})
.from("#dyeText3", 0.00001, {opacity: 0})
.to("#dyeText3", 3, {opacity: 1})
.to("#dyeText3", 0.00001, {opacity: 0})
.from("#dyeText2", 0.00001, {opacity: 0})
.to("#dyeText2", 2  , {opacity: 1})
.to("#fiveMilPpl", 0.0001, {color: "#8f0000"})
.to("#dyeText2", 2, {opacity: 1})
.to("#dyeVideo", 2, {opacity: 0})


const dyePinSectionScene = new ScrollMagic.Scene({
    triggerElement: "#dyeWater",
    triggerHook: 0,
    duration: "300%"
})
.setPin("#dyeWater")
.setTween(dyeWaterPin)
.addTo(controller)
.addIndicators({name: "dyeWater pin scene"});





fiberWaterPin.from("#fiberVideo", 1, {opacity: 0}, "first")
.to("#fiberVideo", 1, {y: -250}, "first")
.to("#fiberText1", 1, {y: -150}, "first")
.to("#fiberVideo", 1, {y: -350}, "second")
.to("#fiberText1", 1, {y: -750}, "second")
.from("#fiberText2", 1, {y: 1000}, "second")
.from("#fiberText3", 1, {y: 1000}, "second")
.from("#fiberText4", 1, {y: 1000}, "second")
.from("#fiber1", 1, {y: 1850}, "second")
.from("#fiber2", 1, {y: 2350}, "second")
.to("body", 0.5, {backgroundColor: "black"}, "second")
.from("#fiber-floaty-1", 1, {y: 1350}, "second")
.from("#fiber-floaty-2", 1, {y: 1350}, "second")
.from("#fiber-floaty-3", 1, {y: 1350}, "second")
.from("#fiber-floaty-4", 1, {y: 1350}, "second")
.to("#fiberText2", 1, {y: -200}, "third")
.to("#fiberText3", 1, {y: -200}, "third")
.to("#fiberText4", 1, {y: -200}, "third")

.to("#fiber1", 1, {y: -100}, "third")
.to("#fiber2", 1, {y: -200}, "third")
.to("#fiber-floaty-1", 1, {y: -550}, "third")
.to("#fiber-floaty-2", 1, {y: -1050}, "third")
.to("#fiber-floaty-3", 1, {y: -350}, "third")
.to("#fiber-floaty-4", 1, {y: -850}, "third")
.to("#fiberText3", 0.0001, {color:"rgb(255, 106, 0)"}, "=-0.5")
.to("#fiberVideo", 0.5, {opacity: 0}, "=-0.5");

const FiberPinSectionScene = new ScrollMagic.Scene({
    triggerElement: "#fiber",
    triggerHook: 0,
    duration: "300%"
})
.setPin("#fiber")
.setTween(fiberWaterPin)
.addTo(controller)
.addIndicators({name: "fiber pin scene"});










threeYearsWaterPin.from(".miniCup1", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup2", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup3", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup4", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup5", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup6", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup7", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup8", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup9", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup10", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup11", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup12", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup13", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup14", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup15", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})
.from(".miniCup16", 0.00001, {opacity: 0})
.to(".miniCup1", 1, {opacity: 1})







threeYearsWaterPinScene = new ScrollMagic.Scene({
    triggerElement: "#threeYearsWater",
    triggerHook: 0,
    duration: "100%"
})
.setPin("#threeYearsWater")
.setTween(threeYearsWaterPin)
.addTo(controller)
.addIndicators({name: "threeYearsWater pin scene"});







threeYearsWater.to("#glassesGrid", 2, {y:200});
threeYearsWaterScene = new ScrollMagic.Scene({
    triggerElement: "#threeYearsWater",
    triggerHook: 1,
    duration: "100%",
})
.setTween(threeYearsWater)
.addTo(controller)
.addIndicators({name: "threeYearsWater scene"});






drinkingWaterPin.to("#onePerson", 0.00001, {color: "#6EC3D5"})
.from("#cup1", 0.00001, {opacity: 0})
.to("#cup1", 1, {opacity: 1})
.from("#cup2", 0.00001, {opacity: 0})
.to("#cup1", 1, {opacity: 1})
.from("#cup3", 0.00001, {opacity: 0})
.to("#eightGlasses", 0.00001, {color: "#6EC3D5"})
.to("#cup1", 1, {opacity: 1})
.from("#cup4", 0.00001, {opacity: 0})
.to("#cup1", 1, {opacity: 1})
.from("#cup5", 0.00001, {opacity: 0})
.to("#cup1", 1, {opacity: 1})
.from("#cup6", 0.00001, {opacity: 0})
.to("#cup1", 1, {opacity: 1})
.from("#cup7", 0.00001, {opacity: 0})
.to("#cup1", 1, {opacity: 1})
.from("#cup8", 0.00001, {opacity: 0})
.to("#cup1", 1, {opacity: 1});

const drinkingWaterPinScene = new ScrollMagic.Scene({
    triggerElement: "#drinkingWater",
    triggerHook: 0,
    duration: "150%"
})
.setPin("#drinkingWater")
.setTween(drinkingWaterPin)
.addTo(controller)
.addIndicators({name: "drinkingWaterPin pin scene"});








cottonWater.to("#cottonWaterText", 2, {y: 275})
.to("#cottonGrid", 1, {y: 110}, "=-1")
.to("#cottonImg2", 1, {y: 120}, "=-1")
.to("#cottonImg4", 1, {y: 120}, "=-1");

const cottonWaterScene = new ScrollMagic.Scene({
    triggerElement: "#cottonWater",
    triggerHook: 1,
    duration: "100%",
})
.setTween(cottonWater)
.addTo(controller)
.addIndicators({name: "cottonWater scene"});

cottonWaterPin
.to("#soManyLiters", 3, {opacity: 1})
.to("#soManyLiters", 0.0001, {color: "#6EC3D5"})
.to("#soManyLiters", 3, {color: "#6EC3D5"})
.to("#singleCottonShirt", 0.0001, {color: "#6EC3D5"})
.to("#singleCottonShirt", 5, {color: "#6EC3D5"})
.to("#cottonImg1", 2, {y: 400})
.to("#cottonImg1", 0.00001, {opacity: 0})
.to("#cottonImg2", 2, {y: 400}, "=-0.75")
.to("#cottonImg2", 0.00001, {opacity: 0})
.to("#cottonImg3", 2, {y: 400}, "=-0.75")
.to("#cottonImg3", 0.00001, {opacity: 0})
.to("#cottonImg4", 2, {y: 400}, "=-0.75")
.to("#cottonImg4", 0.00001, {opacity: 0})
.to("#cottonWaterText", 2, {y: "-50vh"}, "=-2")
;

const cottonWaterpinScene = new ScrollMagic.Scene({
    triggerElement: "#cottonWater",
    triggerHook: 0,
    duration: "250%",
    offset: "120"
})
.setPin("#cottonWater")
.setTween(cottonWaterPin)
.addTo(controller)
.addIndicators({name: "waterrrr cotton pin scene"});



waterPin.to("#waterTitle", 1, {y: -150}, "first")
.to("#waterImg", 1, {y: -400}, "first")
.from("#waterText", 0.75, {y: 1000}, "=-0.75")
.to("body", 1, {backgroundColor: "#162D93"}, "first")
.to("#waterImg", 1, {y: -450}, "last")
.to("#waterText", 1, {y: -100}, "last")
.to("#waterTitle", 1, {y: -250}, "last");

const waterSectionPinScene = new ScrollMagic.Scene({
    triggerElement: "#waterIntro",
    triggerHook: 0,
    offset: 300,
    duration: "120%"
})
.setPin("#waterIntro")
.setTween(waterPin)
.addTo(controller)
.addIndicators({name: "waterrrr intro pin scene"});



waterIntro.to("#addsUpToCo2Text", 1, {y:400});

const waterIntroScene = new ScrollMagic.Scene({
    triggerElement: "#waterIntro",
    triggerHook: 1,
    duration: "100%",
})
.setTween(waterIntro)
.addTo(controller)
.addIndicators({name: "addsUpTo scene"});




addsUpToCo2Pin.to("#ATonneText", 0.0001, {color: "yellow"})
.to("#ATonneText", 1, {color: "yellow", textShadow: "0.75vw 0.75vw rgb(197, 4, 31)"});

const addsUpToCo2PinScene = new ScrollMagic.Scene({
    triggerElement: "#addsUpToCo2",
    triggerHook: 0,
    duration: "200%"
})
.setPin("#addsUpToCo2")
.setTween(addsUpToCo2Pin)
.addTo(controller)
.addIndicators({name: "addsUpToCo2Pin pin scene"});





addsUpToCo2.to("#threeThingsCo2Text", 1, {y: -120})
.to("#threeThingsCo2Grid", 1, {y: 120});

const addsUpToScene = new ScrollMagic.Scene({
    triggerElement: "#addsUpToCo2",
    triggerHook: 1,
    duration: "100%",
})
.setTween(addsUpToCo2)
.addTo(controller)
.addIndicators({name: "addsUpTo scene"});





threeThingsCo2Pin.from("#productionText", 0.01, {opacity: 0}, "first")
.from("#sewingImg", 0.01, {opacity: 0}, "first")
.to("#sewingImg", 1, {opacity: 1})
.from("#transportationText", 0.01, {opacity: 0}, "second")
.from("#truckImg", 0.01, {opacity: 0}, "second")
.to("#sewingImg", 1, {opacity: 1})
.from("#andText", 0.01, {opacity: 0}, "third")
.to("#sewingImg", 1, {opacity: 1})
.from("#maintenanceText", 0.01, {opacity: 0}, "fourth")
.from("#washImg", 0.01, {opacity: 0}, "fourth")
.to("#sewingImg", 1, {opacity: 1})
.from("#ofClothingText", 0.01, {opacity: 0}, "fifth")
.to("#threeThingsCo2", 1, {marginBottom: 0});

const threeThingsCo2PinScene = new ScrollMagic.Scene({
    triggerElement: "#threeThingsCo2",
    triggerHook: 0,
    duration: "100%",
})
.setPin("#threeThingsCo2")
.setTween(threeThingsCo2Pin)
.addTo(controller)
.addIndicators({name: "threeThingsCo2Pin pin scene"});




polyesterPin
.to("#seven06Billion", 0.00001, {color: "rgb(197, 4, 31)"})
.to("#polyesterSection", 0.5, {color: "black"}, "first")
.to("#polyesterSection", 0.5, {y: "-100"}, "first")
.from("#clothingLabel", 0.000001, {opacity: 0}, "first")
.from("#clothingLabel", 0.5, {y: "-1800"}, "first")


const polyesterPinScene  = new ScrollMagic.Scene({
    triggerElement: "#polyester",
    triggerHook: 0,
    duration: "150%"
})
.setPin("#polyester")
.setTween(polyesterPin)
.addTo(controller)
.addIndicators({name: "polyester pin scene"});





co2Pin.from("#smokeVideo", 0.25, {opacity: "0"})
.to("#co2Heading", 0.00001, {opacity: "0"})
.from("#co2Text2", 0.00001, {opacity: "0"})
.to("#co2Text2", 0.05, {opacity: "1"})
.from("#co2Text3", 0.0001, {opacity: "0"})
.to("#co2Text2", 0.05, {opacity: "1"})
.from("#co2Text4", 0.000001, {opacity: "0"})
.to("#co2Text4", 0.4, {opacity: "1"})
.to("body", 0.1, {backgroundColor: "#F77600"})
.to("#smokeVideo", 0.1, {opacity: "0"});

const co2PinScene = new ScrollMagic.Scene({
    triggerElement: "#co2",
    triggerHook: 0,
    duration: "300%"
})
.setPin("#co2")
.setTween(co2Pin)
.addTo(controller)
.addIndicators({name: "co2 scene"});

impact.from("#impactText", 1, {y:400}, "first")

const impactScene = new ScrollMagic.Scene({
    triggerElement: "#impact",
    triggerHook: 1,
    duration: "100%"
})
.setTween(impact)
.addTo(controller)
.addIndicators({name: "impact scene"});


impactHugeText
.from("#hugeText", 0.001, {opacity:0}, "first");


const impactHugeTextScene = new ScrollMagic.Scene({
    triggerElement: "#impact",
    triggerHook: 0,
    duration:"1%"
})
.setTween(impactHugeText)
.addTo(controller)
.addIndicators({name: "impact HUGE appear scene"});


impactPin
.to("#cloud1", 1.5, {y:-2300, x: 80}, "first" )
.to("#cloud4", 1.5, {y: -2000}, "first")
.to("#cloud3", 1, {y:-800}, "first")
.to("#cloud2", 1, {y:-1500}, "first")
.to("#cloud5", 1, {y:-200}, "=-0.5")
.to("#cloud8", 2, {y:-900}, "first")
.to("#cloud9", 1, {y:-40}, "=-0.5")
;


const impactPinScene = new ScrollMagic.Scene({
    triggerElement: "#impact",
    triggerHook: 0,
    duration:"200%"
})
.setPin("#impact")
.setTween(impactPin)
.addTo(controller)
.addIndicators({name: "impact pin scene"});

questionEvolve.to("body", 0.15, {backgroundColor: "black"}, "first")
.to('#defineFFText1', 0.5, {y: -80}, "first")
.to('#defineFFText2', 0.5, {y: -120}, "first")
.to('#defineFFText3', 0.5, {y: -160}, "first")
.to('#defineFFText4', 0.5, {y: -200}, "first")
.to('#defineFFText5', 0.5, {y: -200}, "first")
.from("#questionEvolveText1", 1, { y: 250}, "first")
.to("#questionEvolveText1", 1, {y: -1000}, "first")
.from("canvas", 1, {y: 100}, "first");

const questionEvolveScene = new ScrollMagic.Scene({
    triggerElement: "#questionEvolve",
    triggerHook: 1,
    duration: "200%"
})
.setTween(questionEvolve)
.addTo(controller)
.addIndicators({name: "questionEvolve scene"});








defineFF.to("body", 1, {backgroundColor: "#148D62"}, "first")
;

const defineFFScene = new ScrollMagic.Scene({
    triggerElement: "#defineFF",
    triggerHook: 1,
    duration: "160%"
})
.setTween(defineFF)
.addTo(controller)
.addIndicators({name: "defineFF scene"});

defineFFPin.from("#defineFFText2", 0.01, {opacity: 0}, "=0.25")
.from("#defineFFText3", 0.01, {opacity: 0}, "=0.25")
.from("#defineFFText4", 0.01, {opacity: 0})
.from("#defineFFText5", 0.01, {opacity: 0});

const defineFFAutoScene = new ScrollMagic.Scene({
    triggerElement: "#defineFFText1",
    triggerHook: 1,
    offset: 300
})
.setTween(defineFFPin)
.addTo(controller)
.addIndicators({name: "auto defineFF scene", indent: 600});

const defineFFPinScene = new ScrollMagic.Scene({
    triggerElement: "#defineFF",
    triggerHook: 0,
    duration: "200%"
})
.setPin('#defineFF')
.addTo(controller)
.addIndicators({name: "pin defineFF scene", indent: 300});







massProducePin.to("#shirtsImg1", 1, {y: "-250vh"}, "first")
.from('#massProducedText', 0.5, {x: "100vw"}, "first")
.to("#shirtsImg1", 0.00001, {opacity: 0}, "second")
.from("#bagImg", 0.00001, {opacity: 0}, "second")
.from("#shirtsImg2", 0.00001, {opacity: 0}, "second")
.from("#shirtsImg2", 1, {y: "-400vh"}, "second")
.to("#shirtsImg2", 1, {y: "50vh"}, "second")
.from("#bagImg", 1, {y: "100vh"}, "second")
.from('#massPurchasedText', 0.5, {x: "100vw"}, "second")
.from('#massAndText', 0.0001, {opacity: 0}, "=-0.33")
.to("#bagImg", 1, {y: "-200vh"}, "third")
.from("#shirtsImg3", 0.00001, {opacity: 0}, "third")
.from("#shirtsImg3", 1, {y: "-400vh"}, "=-0.75")
.from("#massBinText", 0.5, {x: "100vw"}, "=-0.75")
.from('#binImg', 1, {y: "50vh"}, "=-0.75")
.from('#binLidImg', 1, {transform: "translateX(-100vw) translateY(-200vh) rotate(-90deg"}, "fourth ")
.to("#bagImg", 0.00001, {opacity: 0}, "fourth")
.to("#shirtsImg3", 1, {opacity: "0"}, "fourth")
.to("#shirtsImg2", 1, {opacity: "0"}, "fourth")
;

const pinMassProduceScene = new ScrollMagic.Scene({
    triggerElement: "#massProduce",
    triggerHook: 0,
    duration: "800%"
})
.setPin('#massProduce')
.setTween(massProducePin)
.addTo(controller)
.addIndicators({name: "pin new fashion scene", indent: 300});



massProduce.from("#shirtsImg1", 1, {y: "100vh"})

const massProduceScene = new ScrollMagic.Scene({
    triggerElement: "#massProduce",
    triggerHook: 1,
    duration: "100%"
})
.setTween(massProduce)
.addTo(controller)
.addIndicators({name: "massProduce scene"});




newFashion.to("#crownImg", 1, {y:"-70vh"}, "first")
.to("#necklaceImg", 1, {y:"-50vh"}, "first")
.to("#ringImg", 1, {y:"-60vh"}, "first")
.from('#hatImg', 0.5, {opacity: 0}, "first")
.from('#hatImg', 1, {y: "-33vh"}, "first")
.from("#ringNewImg", 0.5, {opacity: 0}, "first")
.from("#ringNewImg", 1, {y: "-20vh"}, "first")
.from("#necklaceNewImg", 0.5, {opacity: 0}, "first")
.from("#necklaceNewImg", 1, {y: "-13vh"}, "first");



const newFashionScene = new ScrollMagic.Scene({
    triggerElement: "#newFashion",
    triggerHook: 0.5
})
.setTween(newFashion)
.addTo(controller)
.addIndicators({name: "new fashion scene"});

newFashionPin.from('#fashionStraightText', 1, {x: 800})

const pinNewFashionScene = new ScrollMagic.Scene({
    triggerElement: "#newFashion",
    triggerHook: 0,
    duration: "200%"
})
.setPin("#newFashion")
.setTween(newFashionPin)
.addTo(controller)
.addIndicators({name: "pin new fashion scene", indent: 300});






oldFashion.to("#introText", 0.25, {y: -250}, "first")


const oldFashionScene = new ScrollMagic.Scene({
    triggerElement: "#oldFashion",
    triggerHook: 1
})
.setTween(oldFashion)
.addTo(controller)
.addIndicators({name: "old fashion scene"});

oldFashionPin.from('#oldFashionText', 1, {y:80}, "first")

;

const pinOldFashionScene = new ScrollMagic.Scene({
    triggerElement: "#oldFashion",
    triggerHook: 0,
    duration: "100%"
})
.setPin("#oldFashion")
.setTween(oldFashionPin)
.addTo(controller)
.addIndicators({name: "pin old fashion scene", indent: 300});









introPin.to("#introText", 1, {y: -100, color: "#FB5430"});

const pinIntroScene = new ScrollMagic.Scene({
    triggerElement: "#introSection",
    triggerHook: 0,
    duration: "115%",
    offset: -100
})
.setPin("#introSection")
.setTween(introPin)
.addIndicators({name: "pin intro scene"})
.addTo(controller);





header.to("body", 1, {backgroundColor: "#D92608"}, "first")
.to("#headingAndButtonsBox", 1, {y: -200}, "first")
.to("#jeansHeaderImg", 1, {y: -500}, "first")
.to("#shirtHeaderImg", 1, {y: -1200}, "first")
.to("#sweaterHeaderImg", 1, {y: -400}, "first")
.to("#necklaceHeaderImg", 1, {y: -200}, "first")
;


const headerScene = new ScrollMagic.Scene({
    triggerElement: "header",
    triggerHook: 0,
    duration: "300%"
})
.setTween(header)
.addTo(controller)
.addIndicators({name: "header"});

