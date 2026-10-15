const isMobileCursorDisabled = () =>
  window.matchMedia("(max-width: 768px)").matches;

const customCursor = (e) => {
  const cursor = document.querySelector(".js-cursor");
  const hoverEl = document.querySelectorAll(".js-cursor-hover");
  const hoverLink = document.querySelectorAll(".js-cursor-hover-link");
  const hoverDownload = document.querySelectorAll(".js-cursor-hover-download");

  if (!cursor || isMobileCursorDisabled()) {
    if (cursor) {
      cursor.style.display = "none";
    }
    return;
  }

  const { pageX: posX, pageY: posY } = e;

  //MAIN--------
  const runMouseOver = () => {
    cursor.style.transform = "scale(3.5)";
    cursor.style.background = "rgba(52, 31, 255, 1)";
    cursor.style.mixBlendMode = "difference";
  };
  hoverEl.forEach((hover) =>
    hover.addEventListener("mouseenter", runMouseOver),
  );

  const runMouseLeave = () => {
    cursor.style.transform = "";
    cursor.style.background = "";
  };
  hoverEl.forEach((hover) =>
    hover.addEventListener("mouseleave", runMouseLeave),
  );

  //LINK-------
  const runMouseOverLink = () => {
    cursor.style.transform = "scale(3.5)";
    cursor.style.background = "rgba(52, 31, 255, 1)";

    cursor.style.mixBlendMode = "normal";
    document.getElementById("right-arrow-cursor").style.display = "block";
  };
  hoverLink.forEach((hover) =>
    hover.addEventListener("mouseenter", runMouseOverLink),
  );

  const runMouseLeaveLink = () => {
    cursor.style.transform = "";
    cursor.style.background = "";
    document.getElementById("right-arrow-cursor").style.display = "none";
  };
  hoverLink.forEach((hover) =>
    hover.addEventListener("mouseleave", runMouseLeaveLink),
  );

  //DOWNLOAD-----
  const runMouseOverDownload = () => {
    cursor.style.transform = "scale(5)";
    cursor.style.background = "rgba(52, 31, 255, 1)";

    cursor.style.mixBlendMode = "normal";
    document.getElementById("file-cursor").style.display = "block";
  };
  hoverDownload.forEach((hover) =>
    hover.addEventListener("mouseenter", runMouseOverDownload),
  );

  const runMouseLeaveDownload = () => {
    cursor.style.transform = "";
    cursor.style.background = "";
    document.getElementById("file-cursor").style.display = "none";
  };
  hoverDownload.forEach((hover) =>
    hover.addEventListener("mouseleave", runMouseLeaveDownload),
  );

  return (
    (cursor.style.left = `${posX - 10}px`),
    (cursor.style.top = `${posY - 10}px`)
  );
};

window.addEventListener("resize", () => {
  const cursor = document.querySelector(".js-cursor");
  if (!cursor) return;

  if (isMobileCursorDisabled()) {
    cursor.style.display = "none";
    return;
  }

  cursor.style.display = "block";
});

window.addEventListener("load", () => {
  const cursor = document.querySelector(".js-cursor");
  if (cursor && isMobileCursorDisabled()) {
    cursor.style.display = "none";
  }
});

document.addEventListener("mousemove", customCursor);
