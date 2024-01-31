window.onload = () => {
  console.info("Page successfully loaded");
  const blob = document.getElementById("blob");
  const outlinedBtn1 = document.getElementById("outlinedBtn1");
  const outlinedBtn2 = document.getElementById("outlinedBtn2");
  var ctaBtn = document.getElementById("ctaBtn");
  var ctaBtnTxt = document.getElementById("ctaBtnTxt");

  window.onpointermove = (event) => {
    const { clientY, clientX } = event;

    blob.animate(
      {
        top: `${clientY}px`,
        left: `${clientX}px`,
      },
      { duration: 3500, fill: "forwards" }
    );
  };
  setTimeout(() => {
    outlinedBtn1.classList.remove("outlinedOnPageLoad");
    outlinedBtn2.classList.remove("outlinedOnPageLoad");
  }, 1010);

  ctaBtn.onmouseenter = () => {
    ctaBtn.onmousemove = (event) => {
      const { clientY, clientX } = event;

      var animateX = clientX / 5 - 155,
        animateY = clientY / 6 - 80;

      ctaBtnTxt.animate(
        {
          transform: `translate(${animateX}px, ${animateY}px)`,
          fontSize: "2rem",
        },
        { duration: 1000, fill: "forwards" }
      );
    };
    ctaBtn.onmouseleave = () => {

      ctaBtnTxt.animate(
        {
          transform: "translate(0px, 0px)",
          fontSize: "1.2rem",
        },
        { duration: 1, fill: "forwards" }
      );
    };
  };
};
