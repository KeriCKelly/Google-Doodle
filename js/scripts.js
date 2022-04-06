// GSAP included in `index.html`
console.log('OK');

gsap.from(".hair", {
  rotation: -2.5,
  duration: 0.5,
  x: 1,
  y: -1,
  repeat: "-1",
  yoyo: true
});

gsap.from(".tailHair", {
  rotation: 6,
  duration: 0.6,
  x: 6,
  y: -3,
  repeat: "-1",
  yoyo: true
});

gsap.from(".tailRope", {
  rotation: -4,
  duration: 0.6,
  x: -2,
  y: -1,
  repeat: "-1",
  yoyo: true
});

kick.onclick = function legup() {
  gsap
    .timeline()
    .from(".frontLegTopForward", {
      rotation: 0,
      x: 0,
      duration: 0
    })
    .to(".frontLegTopForward", {
      rotation: 90,
      x: 45,
      duration: 0.5
    })
    .to(".frontLegTopForward", {
      rotation: 0,
      x: 0,
      duration: 0.2
    });
  gsap
    .timeline()
    .from(".frontLegBottomForward", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 0
    })
    .to(".frontLegBottomForward", {
      rotation: 0,
      x: -30,
      y: -2,
      duration: 0.1
    })
    .to(".frontLegBottomForward", {
      rotation: -25,
      x: -50,
      y: -15,
      duration: 0.1
    })
    .to(".frontLegBottomForward", {
      rotation: -25,
      x: -65,
      y: -35,
      duration: 0.1
    })
    // top
    .to(".frontLegBottomForward", {
      rotation: -20,
      x: -65,
      y: -60,
      duration: 0.2
    })
    // back down
    .to(".frontLegBottomForward", {
      rotation: -25,
      x: -55,
      y: -16,
      duration: 0.05
    })
    .to(".frontLegBottomForward", {
      rotation: 0,
      x: -28,
      y: -2,
      duration: 0.05
    })
    .to(".frontLegBottomForward", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 0.05
    });
};

face.onclick = function bow() {
  // head moves down
  gsap
    .timeline()
    .from(face, {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    })
    .to(face, {
      rotation: -5,
      x: -73,
      y: 25,
      duration: 0.5
    })
    .to(face, {
      rotation: -100,
      x: -70,
      y: 170,
      duration: 1
    })
    .to(face, {
      rotation: -5,
      x: -73,
      y: 25,
      duration: 0.1
    })
    // back to original
    .to(face, {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    });
  // neck moves down
  gsap
    .timeline()
    .from(".neck", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    })
    .to(".neck", {
      rotation: -40,
      x: -70,
      y: 40,
      duration: 0.5
    })
    .to(".neck", {
      rotation: -90,
      x: -83,
      y: 130,
      duration: 1
    })
    .to(".neck", {
      rotation: -40,
      x: -70,
      y: 40,
      duration: 0.1
    })
    // back to original
    .to(".neck", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    });
  // horn moves down
  gsap
    .timeline()
    .from(".horn", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    })
    .to(".horn", {
      rotation: -5,
      x: -80,
      y: 25,
      duration: 0.5
    })
    .to(".horn", {
      rotation: -100,
      x: -120,
      y: 220,
      duration: 1
    })
    .to(".horn", {
      rotation: -5,
      x: -80,
      y: 25,
      duration: 0.1
    })
    // back to original
    .to(".horn", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    });
  gsap
    .timeline()
    .from(".ears", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    })
    .to(".ears", {
      rotation: -5,
      x: -83,
      y: 25,
      duration: 0.5
    })
    .to(".ears", {
      rotation: -100,
      x: -155,
      y: 176,
      duration: 1
    })
    .to(".ears", {
      rotation: -5,
      x: -83,
      y: 25,
      duration: 0.1
    })
    // back to original
    .to(".ears", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    });
  gsap
    .timeline()
    .from(".bangs", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    })
    .to(".bangs", {
      rotation: -5,
      x: -78,
      y: 25,
      duration: 0.5
    })
    .to(".bangs", {
      rotation: -90,
      x: -95,
      y: 160,
      duration: 1
    })
    .to(".bangs", {
      rotation: -5,
      x: -73,
      y: 25,
      duration: 0.1
    })
    // back to original
    .to(".bangs", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    });
  gsap
    .timeline()
    .from(".hair", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    })
    .to(".hair", {
      rotation: -30,
      x: -80,
      y: 25,
      duration: 0.5
    })
    .to(".hair", {
      rotation: -90,
      x: -118,
      y: 125,
      duration: 1
    })
    .to(".hair", {
      rotation: -25,
      x: -73,
      y: 25,
      duration: 0.1
    })
    // back to original
    .to(".hair", {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1
    });
  gsap
    .timeline()
    .from("body", {
      background: "#0A2D68",
      duration: 1
    })
    .to("body", {
      background: "#0A2D68",
      duration: 1.2
    })
    .to("body", {
      background: "#DAE5FB",
      duration: 0.1
    })
    .to("body", {
      background: "#495ECB",
      duration: 30
    })
    // back to original
    .to("body", {
      background: "#0A2D68",
      duration: 10
    });
};

const playSound = (e) => {
  let keyCode;
  if (e.type === "keydown") {
    keyCode = e.keyCode;
  } else {
    keyCode =
      e.target.getAttribute("data-key") ||
      e.target.parentNode.getAttribute("data-key");
  }
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);
window.addEventListener("touchstart", playSound);
window.addEventListener("click", playSound);