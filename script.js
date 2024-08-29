
// function smoothscrolling(){
//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//   });
  
  
//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
  
// }
function loaderpart(){
  var timeLine=gsap.timeline();
timeLine.from(".content h1",{
    opacity:0,
    y:1000,
    stagger:0.2,
    duration:0.6,
    delay:0.2
})

let counter=0;
setInterval(()=>{
  if(counter<100){
    counter++;
    document.getElementById("h1incontent").textContent=counter;
  }else{
    document.getElementById("h1incontent").textContent=counter;
  }
},25);
timeLine.from(".line-first-h1 h5",{
  opacity:0,
 
})
 timeLine.to(".loader",{
  delay:2,
  display:"none",

 })
 timeLine.from(".section-first",{
  delay:0.2,
  y:1600,
  duration:1,
  ease:Power4,
 })
 timeLine.from(".navbar",{
  delay:0.5,
  opacity:0
 })

 timeLine.from(".hero-section h1",{
  y:150,
  duration:0.89,
  opacity:0,
  stagger:0.2
 })
 timeLine.from(".section-second",{
  opacity:0,

 },"-=2")
 timeLine.from("#flag",{
  opacity:0,
 })

}

function cursorAndMagnet(){
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

Shery.makeMagnet(".navbarright h3");
Shery.makeMagnet(".mainu_bar svg");
Shery.makeMagnet("#closemenu");
}




function videocursor(){
  const videoContainer=document.querySelector(".video_container");
  const playbtn=document.querySelector(".play-btn");
  videoContainer.addEventListener('mousemove',(dimension)=>{
 
    gsap.to(".play-btn",{
      left:dimension.x,
      top:dimension.y,
    })
    gsap.to(".mousefollower",{
      visibility:"hidden",
    })
  })
  videoContainer.addEventListener('mouseleave',()=>{
    gsap.to(".play-btn",{
      left:"69vw",
      top:"17%",
    })
    gsap.to(".mousefollower",{
       visibility:"visible",
    })
  })
  let flag = 0;

playbtn.addEventListener('click', () => {
  if (flag === 0) {
    gsap.to(".play-btn", {
      scale: 0.8,
    });
    document.querySelector(".play-btn").innerHTML=` <i class="ri-pause-line"></i>`
    document.querySelector(".video_container img").style.display = "none";
    document.querySelector(".video_container video").play();
    flag = 1;
  }
   else {
    gsap.to(".play-btn", {
      scale: 1,
    });
    document.querySelector(".play-btn").innerHTML=` <i class="ri-play-line"></i>`
    document.querySelector(".video_container img").style.display = "block";
    document.querySelector(".video_container video").pause();
    flag = 0;
  }
});

}
 function flaganimation(){
 
 document.querySelector(".flag-class").addEventListener('mousemove',(dimension)=>{
 
    gsap.to("#flag",{
      left:dimension.x,
      top:dimension.y,
      opacity:5,
    })
   
  })
  document.querySelector(".flag-class").addEventListener('mouseleave',(dimension)=>{
 
    gsap.to("#flag",{
     opacity:0,
    })
   
  })

 }

function imgeffect(){

  Shery.imageEffect(".flex-item",{
    style:5,
     config:
    {"a":{"value":2,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9025437727122564},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    gooey:true
 })



}

function hovertextanimation() {
    const h5s1 = document.querySelectorAll("#box1 h5");
    const h5s2 = document.querySelectorAll("#box2 h5");
    const h5s3 = document.querySelectorAll("#box3 h5");
    const h5s4 = document.querySelectorAll("#box4 h5");
    const h5s5 = document.querySelectorAll("#box5 h5");
    const h5s6 = document.querySelectorAll("#box6 h5");
    const elems1 = document.querySelector("#box1");
    const elems2 = document.querySelector("#box2");
    const elems3 = document.querySelector("#box3");
    const elems4 = document.querySelector("#box4");
    const elems5 = document.querySelector("#box5");
    const elems6 = document.querySelector("#box6");

    let index = 0;

    elems1.addEventListener("mouseover", () => {
        if (index < h5s1.length - 1) {
            gsap.to(h5s1[index], {
                top: "-100%", // Move out of view
                duration: 0.2,
                ease: Expo.easeInOut ,
                opacity: 0,
            });
            index++;
            gsap.to(h5s1[index], {
                top: "0", // Move into view
                duration: 0.5,
                ease: Expo.easeInOut ,
                opacity: 1,
            });
        }
    });

    elems1.addEventListener("mouseleave", () => {
        if (index > 0) {
            gsap.to(h5s1[index], {
                top: "100%", // Move out of view
                duration: .5,
                ease: Expo.easeInOut ,
                opacity: 0,
            });
            index--;
            gsap.to(h5s1[index], {
                top: "0%", // Move into view
                duration: .5,
                ease: Expo.easeInOut ,
                opacity: 1,
            });
        }
    });

    elems2.addEventListener("mouseover", () => {
      if (index < h5s2.length - 1) {
          gsap.to(h5s2[index], {
              top: "-100%", // Move out of view
              duration: 0.2,
              ease: Expo.easeInOut ,
              opacity: 0,
          });
          index++;
          gsap.to(h5s2[index], {
              top: "0", // Move into view
              duration: 0.5,
              ease: Expo.easeInOut ,
              opacity: 1,
          });
      }
  });

  elems2.addEventListener("mouseleave", () => {
      if (index > 0) {
          gsap.to(h5s2[index], {
              top: "100%", // Move out of view
              duration: .5,
              ease: Expo.easeInOut ,
              opacity: 0,
          });
          index--;
          gsap.to(h5s2[index], {
              top: "0%", // Move into view
              duration: .5,
              ease: Expo.easeInOut ,
              opacity: 1,
          });
      }
  });

  elems3.addEventListener("mouseover", () => {
    if (index < h5s3.length - 1) {
        gsap.to(h5s3[index], {
            top: "-100%", // Move out of view
            duration: 0.2,
            ease: Expo.easeInOut ,
            opacity: 0,
        });
        index++;
        gsap.to(h5s3[index], {
            top: "0", // Move into view
            duration: 0.5,
            ease: Expo.easeInOut ,
            opacity: 1,
        });
    }
});

elems3.addEventListener("mouseleave", () => {
    if (index > 0) {
        gsap.to(h5s3[index], {
            top: "100%", // Move out of view
            duration: .5,
            ease: Expo.easeInOut ,
            opacity: 0,
        });
        index--;
        gsap.to(h5s3[index], {
            top: "0%", // Move into view
            duration: .5,
            ease: Expo.easeInOut ,
            opacity: 1,
        });
    }
});

elems4.addEventListener("mouseover", () => {
  if (index < h5s4.length - 1) {
      gsap.to(h5s4[index], {
          top: "-100%", // Move out of view
          duration: 0.2,
          ease: Expo.easeInOut ,
          opacity: 0,
      });
      index++;
      gsap.to(h5s4[index], {
          top: "0", // Move into view
          duration: 0.5,
          ease: Expo.easeInOut ,
          opacity: 1,
      });
  }
});

elems4.addEventListener("mouseleave", () => {
  if (index > 0) {
      gsap.to(h5s4[index], {
          top: "100%", // Move out of view
          duration: .5,
          ease: Expo.easeInOut ,
          opacity: 0,
      });
      index--;
      gsap.to(h5s4[index], {
          top: "0%", // Move into view
          duration: .5,
          ease: Expo.easeInOut ,
          opacity: 1,
      });
  }
});

elems5.addEventListener("mouseover", () => {
  if (index < h5s5.length - 1) {
      gsap.to(h5s5[index], {
          top: "-100%", // Move out of view
          duration: 0.2,
          ease: Expo.easeInOut ,
          opacity: 0,
      });
      index++;
      gsap.to(h5s5[index], {
          top: "0", // Move into view
          duration: 0.5,
          ease: Expo.easeInOut ,
          opacity: 1,
      });
  }
});

elems5.addEventListener("mouseleave", () => {
  if (index > 0) {
      gsap.to(h5s5[index], {
          top: "100%", // Move out of view
          duration: .5,
          ease: Expo.easeInOut ,
          opacity: 0,
      });
      index--;
      gsap.to(h5s5[index], {
          top: "0%", // Move into view
          duration: .5,
          ease: Expo.easeInOut ,
          opacity: 1,
      });
  }
});

elems6.addEventListener("mouseover", () => {
  if (index < h5s6.length - 1) {
      gsap.to(h5s6[index], {
          top: "-100%", // Move out of view
          duration: 0.2,
          ease: Expo.easeInOut ,
          opacity: 0,
      });
      index++;
      gsap.to(h5s6[index], {
          top: "0", // Move into view
          duration: 0.5,
          ease: Expo.easeInOut ,
          opacity: 1,
      });
  }
});

elems6.addEventListener("mouseleave", () => {
  if (index > 0) {
      gsap.to(h5s6[index], {
          top: "100%", // Move out of view
          duration: .5,
          ease: Expo.easeInOut ,
          opacity: 0,
      });
      index--;
      gsap.to(h5s6[index], {
          top: "0%", // Move into view
          duration: .5,
          ease: Expo.easeInOut ,
          opacity: 1,
      });
  }
});
}
function footertextanimation() {
  var textElement = document.querySelector(".footer-div h1");
  var text = textElement.textContent;
  var splited = text.split("");
  var cluter = "";
  
  splited.forEach((elem) => {
    cluter += `<span>${elem}</span>`;
  });
  
  textElement.innerHTML = cluter;
  let flag = 0; 



  textElement.addEventListener("mouseover", function() {
    if (flag === 0) {
      gsap.to(".footer-div h1 span", {
        duration:.5, // Duration for smoothness
        ease: "power2.inOut", // Smooth transition
        css: {
          fontFamily: "silk serif",
          WebkitTextStroke: "1px #fff",
          color: "transparent",
          fontWeight: 500
        },
        stagger: 0.05
      });
      flag = 1; // Toggle flag
    }
  });
  
 textElement.addEventListener("mouseleave", function() {
    if (flag === 1) {
      gsap.to(".footer-div h1 span", {
        duration: .5, // Duration for smoothness
        // ease: "power2.inOut", // Smooth transition
        css: {
          fontFamily: "plain light",
          color: "#fff"
        },
        stagger: 0.05
      });
      flag = 0; // Toggle flag
    }
  });

  

  
}

function burgurmenu(){
  const menu=document.querySelector(".mainu_bar svg");
  const closemenu=document.querySelector("#closemenu");
  const main= document.querySelector(".main");
  const sidenav=document.querySelector(".sidenav");
  menu.addEventListener("click",()=>{
       sidenav.style.display="flex";
      gsap.from(".sidenav",{
        delay:0.3,
        duration:1,
        y:-1000,
        
      })
     
      // main.querySelector(".main").style.display="none";
  })

  closemenu.addEventListener("click",()=>{
    sidenav.style.display="none";
    gsap.from(".main",{
      y:1000,
      duration:0.8,
    })
  
    // main.querySelector(".main").style.display="block";
  })
       
   }


loaderpart();
cursorAndMagnet();
videocursor();
imgeffect();
flaganimation();
hovertextanimation();
footertextanimation();

burgurmenu();