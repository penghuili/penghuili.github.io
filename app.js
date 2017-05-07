function show18(data) {
  let el = document.querySelector(".ph-button--18");
  if (data.country_code !== "DE") {
    el.style.display = "inline-block";
  } else {
    let parent = document.querySelector(".ph-mobile");
    parent.removeChild(el);
  }
}