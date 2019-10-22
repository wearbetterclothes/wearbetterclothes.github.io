var sup1;
/*
sup1 = new SuperGif({ gif: document.getElementById('earthGif') } );
sup1.load();
*/

function scrollDown() {
    document.getElementById('introSection').scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

window.onload = () =>{
    const preload = document.querySelector(".preload");
    const body = document.querySelector("body");
   
    if(sup1 != undefined){
        timer = setInterval(()=>{
            if(sup1.get_loading() == false){
                preload.classList.add('preload-finish');
                body.style.overflowY = "scroll";
                window.scrollTo(0,0);
                clearInterval(timer);
            }
        }, 2000);
    }
    else{
        preload.classList.add('preload-finish');
        body.style.overflowY = "scroll";
        window.scrollTo(0,0);
    }
}

var scene = document.querySelector('#headerLogoBox');
var parallaxInstance = new Parallax(scene);

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

var humanCost = new TimelineMax();
var humanCostPin = new TimelineMax();


humanCostPin.to("#humanCostSection", 1, {y: -1500})

const humanCostPinScene = new ScrollMagic.Scene({
    triggerElement: "#humanCost",
    triggerHook: 0,
    duration: "150%"
})
.setPin("#humanCost")
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
.from("#fiber1", 1, {y: 1850}, "second")
.from("#fiber2", 1, {y: 2350}, "second")
.to("body", 0.5, {backgroundColor: "black"}, "second")
.from("#fiber-floaty-1", 1, {y: 1350}, "second")
.from("#fiber-floaty-2", 1, {y: 1350}, "second")
.from("#fiber-floaty-3", 1, {y: 1350}, "second")
.from("#fiber-floaty-4", 1, {y: 1350}, "second")
.to("#fiberText2", 1, {y: -200}, "third")
.to("#fiber1", 1, {y: -100}, "third")
.to("#fiber2", 1, {y: -200}, "third")
.to("#fiber-floaty-1", 1, {y: -550}, "third")
.to("#fiber-floaty-2", 1, {y: -1050}, "third")
.to("#fiber-floaty-3", 1, {y: -350}, "third")
.to("#fiber-floaty-4", 1, {y: -850}, "third")
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
    duration: "100%"
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
.to("#cottonImg1", 1, {y: 400})
.to("#cottonImg1", 0.00001, {opacity: 0})
.to("#cottonImg2", 1, {y: 400}, "=-0.75")
.to("#cottonImg2", 0.00001, {opacity: 0})
.to("#cottonImg3", 1, {y: 400}, "=-0.75")
.to("#cottonImg3", 0.00001, {opacity: 0})
.to("#cottonImg4", 1, {y: 400}, "=-0.75")
.to("#cottonImg4", 0.00001, {opacity: 0})
.to("#cottonWaterText", 1, {y: -200}, "=-2")
;

const cottonWaterpinScene = new ScrollMagic.Scene({
    triggerElement: "#cottonWater",
    triggerHook: 0,
    duration: "250%",
    offset: "100"
})
.setPin("#cottonWater")
.setTween(cottonWaterPin)
.addTo(controller)
.addIndicators({name: "waterrrr cotton pin scene"});



waterPin.to("#waterTitle", 1, {y: -200}, "first")
.to("#waterImg", 1, {y: -400}, "first")
.from("#waterText", 0.75, {y: 1000}, "=-0.75")
.to("body", 1, {backgroundColor: "#162D93"}, "first")

;

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
.to("body", 0.1, {backgroundColor: "#F77600"})
.to("#smokeVideo", 0.1, {opacity: "0"})
;

const co2PinScene = new ScrollMagic.Scene({
    triggerElement: "#co2",
    triggerHook: 0,
    duration: "300%"
})
.setPin("#co2")
.setTween(co2Pin)
.addTo(controller)
.addIndicators({name: "co2 scene"});

impact
.from("#impactText", 1, {y:400}, "first")

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


/*

const questionEvolvePinScene = new ScrollMagic.Scene({
    triggerElement: "#questionEvolve",
    triggerHook: 0,
    duration: "100%"
})
.setPin("#questionEvolve")
.setTween(questionEvolvePin)
.addTo(controller)
.addIndicators({name: "pin questionEvolve scene", indent: 300});


*/
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











massProduce.to("#hatImg", 4, {y: -380})
.to("#ringNewImg", 3, {y: -520}, "=-3.25")
.to("#necklaceNewImg", 3, {y: -420}, "=-3.4")

.from("#shirtsImg1", 6, {y:1800, opacity: 0})
;

const massProduceScene = new ScrollMagic.Scene({
    triggerElement: "#massProduce",
    triggerHook: 1,
    duration: "100%"
})
.setTween(massProduce)
.addTo(controller)
.addIndicators({name: "massProduce scene"});



massProducePin.to('#shirtsImg1', 315, {y: -1800}, "first")
.from('#massProducedText', 1, {opacity: 0}, "first")
.from('#bagImg', 85, {y: 700}, "=-100.5")
.from('#massPurchasedText', 1, {opacity: 0}, "=-80.5")
.to('#shirtsImg2', 1, {opacity: '1'}, "=-20.5")
.to('#shirtsImg2', 315, {y: 2700}, "=-20.5")
.to('#bagImg', 185, {y: -1200},"=-60.5")
.from('#massAndText', 1, {opacity: 0}, "=-180.5")
.to('#shirtsImg3', 0.25, {opacity: '1'}, "=-130.5" )
.to('#shirtsImg3', 315, {y: 2700}, "=-140.5")
.from('#massBinText', 1, {opacity: 0}, "=-280.5")
.from('#binImg', 101, {y: 500}, "=-280.5")
.to('#shirtsImg3', 0.25, {opacity: 0}, "=-100.5")
.to('#shirtsImg2', 0.25, {opacity: 0}, "=-100.5")
.to('#shirtsImg1', 0.25, {opacity: 0}, "=-100.5")
.from('#binLidImg', 55, {transform: "rotate(-80deg)", bottom: "40vw", right: "180vw"}, "=-100.5")

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





newFashion.to("#crownImg", 2, {y:-180})
.to("#necklaceImg", 2, {y:-280}, )
.to("#ringImg", 2, {y:-380})
.to("#oldFashionText", 2, {y:-480})

.from("#hatImg", 3, {y:-320}, "=-5")
.from("#hatImg", 0.5, {opacity: 0}, "=-5")
.from("#necklaceNewImg", 3, {y:-280}, "=-5.5")
.from("#necklaceNewImg", 0.5, {opacity: 0}, "=-5.5")
.from("#ringNewImg", 3, {y:-280}, "=-6")
.from("#ringNewImg", 0.5, {opacity: 0},"=-6");    


const newFashionScene = new ScrollMagic.Scene({
    triggerElement: "#newFashion",
    triggerHook: 1,
    duration: "200%"
})
.setTween(newFashion)
.addTo(controller)
.addIndicators({name: "new fashion scene"});

newFashionPin.from('#fashionStraightText', 0.1, {x: 800})

const pinNewFashionScene = new ScrollMagic.Scene({
    triggerElement: "#newFashion",
    triggerHook: 0,
    duration: "100%"
})
.setPin("#newFashion")
.setTween(newFashionPin)
.addTo(controller)
.addIndicators({name: "pin new fashion scene", indent: 300});






oldFashion.to("#introText", 0.25, {y: -250}, "first")
.from("#crownImg", 1, {y:-280}, 0.2)
.from("#crownImg", 0.75, {opacity: 0}, 0.2)
.from("#necklaceImg", 1, {y:-320}, 0.25)
.from("#necklaceImg", 0.75, {opacity: 0}, 0.2)
.from("#ringImg", 1, {y:-340}, 0.25)
.from("#ringImg", 0.75, {opacity: 0}, 0.2);    

const oldFashionScene = new ScrollMagic.Scene({
    triggerElement: "#oldFashion",
    triggerHook: 1,
    duration: "100%"
})
.setTween(oldFashion)
.addTo(controller)
.addIndicators({name: "old fashion scene"});

oldFashionPin.from('#oldFashionText', 1, {y:80});

const pinOldFashionScene = new ScrollMagic.Scene({
    triggerElement: "#oldFashion",
    triggerHook: 0,
    duration: "100%"
})
.setPin("#oldFashion")
.setTween(oldFashionPin)
.addTo(controller)
.addIndicators({name: "pin old fashion scene", indent: 300});










intro.from("#introText", 0.4, {y: -200}, "first")
.from("#introText", 1, {opacity: 0}, "first")



const introScene = new ScrollMagic.Scene({
    triggerElement: "#introSection",
    triggerHook: 1,
    duration: "100%"
})
.setTween(intro)
.addTo(controller)
.addIndicators({name: "intro scene"});


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
.to("#headingAndButtonsBox", 1, {y: -200}, "first");


const headerScene = new ScrollMagic.Scene({
    triggerElement: "header",
    triggerHook: 0,
    duration: "300%"
})
.setTween(header)
.addTo(controller)
.addIndicators({name: "header"});

