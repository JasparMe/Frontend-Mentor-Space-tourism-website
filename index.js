// navbar var
var hamburger = $(".hamburger");
var links = $(".links");
var close = $(".close");
var naviLinks = $(".navi-links");
var screenWidth = $(window).width();
// destination var
var planetImg = $(".planet-img"); 
var moonBtn = $(".moon-btn");
var marsBtn = $(".mars-btn");
var europaBtn = $(".europa-btn");
var titanBtn = $(".titan-btn");
var planetName = $(".planet-name");
var planetDesc = $(".planet-paragraph");
var planetDistance =$(".planet-distance") ;
var planetTraveltime = $(".planet-travel") ;
// crew var
var hurleyBtn = $(".hurley-btn");
var shuttleworthBtn = $(".shuttleworth-btn");
var gloverBtn = $(".glover-btn");
var ansariBtn = $(".ansari-btn");
var crewPosition = $(".crew-position");
var crewName = $(".crew-name");
var crewDesc = $(".crew-desc");
var crewImg = $(".crew-img");
// tech var
var vehicleBtn = $(".tech-1");
var spaceportBtn = $(".tech-2");
var capsuleBtn = $(".tech-3");
var techImg = $(".tech-img-wrapper");
var techName = $(".tech-name");
var techDesc =$(".tech-vehicle-desc");

$(window).resize(function(){
    // changing between mobile, tablet and desktop sytle of navbar on resize
    var screen = [];
    screen.push($(window).width());
    var realScreenWidth = screen[screen.length - 1];
    if (realScreenWidth > 991){
        $(".numbers").removeClass("hide");
    }
    if (realScreenWidth < 767){
        $(".numbers").removeClass("hide");
    }
    if (realScreenWidth >= 767 && realScreenWidth <= 991) {
        $(".numbers").addClass("hide");  
    }
    if (realScreenWidth < 767) {

        if (hamburger.hasClass("hide") === true) {
            hamburger.removeClass("hide");
            naviLinks.removeClass("expandet");
        }
        if (close.hasClass("hide") === false){
            close.addClass("hide");
        }
        if (links.hasClass("hide") === false){
            links.addClass("hide");
        }
    }
    if (realScreenWidth > 767){
        if (hamburger.hasClass("hide") === false) {
            hamburger.addClass("hide");
            naviLinks.addClass("expandet");
        }
        if (close.hasClass("hide") === false) {
            close.addClass("hide");
        }
        if (links.hasClass("hide") === true) {
            links.removeClass("hide");
        }
    };
    console.log(screen[screen.length - 1]);
});
$("document").ready(function () {
    // cutting out numbers at tablet size in navbar
    if (screenWidth >= 767 && screenWidth <= 991) {
        $(".numbers").toggleClass("hide");  
    }

    // hide and show mobile navbar on load
    if (screenWidth < 767) {

        if (hamburger.hasClass("hide") === true) {
            hamburger.removeClass("hide");
            naviLinks.removeClass("expandet");
        }
        if (close.hasClass("hide") === false){
            close.addClass("hide");
        }
        if (links.hasClass("hide") === false){
            links.addClass("hide");
        }
    }
});
function openNav(){
   hamburger.addClass("hide");
   links.removeClass("hide");
   close.removeClass("hide"); 
   naviLinks.addClass("expandet");
};
function closeNav(){
    hamburger.removeClass("hide");
    links.addClass("hide");
    close.addClass("hide"); 
    naviLinks.removeClass("expandet");
};
function removePlanetActive(){
    marsBtn.removeClass("planet-active");
    moonBtn.removeClass("planet-active");
    europaBtn.removeClass("planet-active");
    titanBtn.removeClass("planet-active");
    
};
function moon(){
    removePlanetActive();
    moonBtn.addClass("planet-active");
    planetImg.attr("src", "assets/destination/image-moon.png");
    planetName.html("Moon");
    planetDesc.html("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");
    planetDistance.html("384,400 km");
    planetTraveltime.html("3 days");
};
function mars(){
    removePlanetActive();
    marsBtn.addClass("planet-active");
    planetImg.attr("src", "assets/destination/image-mars.png");
    planetName.html("Mars");
    planetDesc.html("Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!");
    planetDistance.html("225 mil. km");
    planetTraveltime.html("9 months");
};
function europa(){
    removePlanetActive();
    europaBtn.addClass("planet-active");
    planetImg.attr("src", "assets/destination/image-europa.png");
    planetName.html("Europa");
    planetDesc.html("The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.");
    planetDistance.html("628 mil. km");
    planetTraveltime.html("3 years");  
};
function titan(){
    removePlanetActive();
    titanBtn.addClass("planet-active");
    planetImg.attr("src", "assets/destination/image-titan.png");
    planetName.html("Titan");
    planetDesc.html("The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.");
    planetDistance.html("1.6 bil. km");
    planetTraveltime.html("7 years");  
};
function removeCrewActive(){
    hurleyBtn.removeClass("crew-active");
    shuttleworthBtn.removeClass("crew-active");
    gloverBtn.removeClass("crew-active");
    ansariBtn.removeClass("crew-active");
};
function hurley(){
    removeCrewActive(); 
    hurleyBtn.addClass("crew-active");
    crewImg.attr("src", "assets/crew/image-douglas-hurley.png"); 
    crewPosition.html("Commander");
    crewName.html("Douglas Hurley");
    crewDesc.html("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot  and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.")
};
function shuttleworth(){
    removeCrewActive(); 
    shuttleworthBtn.addClass("crew-active");
    crewImg.attr("src", "assets/crew/image-mark-shuttleworth.webp"); 
    crewPosition.html("Mission Specialist");
    crewName.html("Mark Shuttleworth");
    crewDesc.html("Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.")
};
function glover(){
    removeCrewActive();
    gloverBtn.addClass("crew-active");
    crewImg.attr("src", "assets/crew/image-victor-glover.png"); 
    crewPosition.html("Pilot");
    crewName.html("Victor Glover");
    crewDesc.html("Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.")
};
function ansari(){
    removeCrewActive();
    ansariBtn.addClass("crew-active");
    crewImg.attr("src", "assets/crew/image-anousheh-ansari.png"); 
    crewPosition.html("Flight Engineer");
    crewName.html("Anousheh Ansari");
    crewDesc.html("Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.")

};
function removeTechActive(){
    vehicleBtn.removeClass("tech-active");
    spaceportBtn.removeClass("tech-active");
    capsuleBtn.removeClass("tech-active");
};
function techVehicle(){
    removeTechActive();
    vehicleBtn.addClass("tech-active");
    if (screenWidth >  991 ) {
        techImg.css("background-image", "url(assets/technology/image-launch-vehicle-portrait.jpg)")
    } else if (screenWidth < 991) {
        techImg.css("background-image", "url(assets/technology/image-launch-vehicle-landscape.jpg)")
    }
    techDesc.html("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
    techName.html("Launch vehicle");
};
function techSpaceport(){
    removeTechActive();
    spaceportBtn.addClass("tech-active");
    if (screenWidth >  991 ) {
        techImg.css("background-image", "url(assets/technology/image-spaceport-portrait.jpg)")
    } else if (screenWidth < 991) {
        techImg.css("background-image", "url(assets/technology/image-spaceport-landscape.jpg)")
    }
    techDesc.html("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.");
    techName.html("Spaceport");
};
function techCapsule(){
    removeTechActive();
    capsuleBtn.addClass("tech-active");
    if (screenWidth >  991 ) {
        techImg.css("background-image", "url(assets/technology/image-space-capsule-portrait.jpg)")
    } else if (screenWidth < 991) {
        techImg.css("background-image", "url(assets/technology/image-space-capsule-landscape.jpg)")
    }
    techDesc.html("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.");
    techName.html("Space capsule");
};
