const slide = () => {
  let slideValue = document.getElementById("slider").value;
  document.getElementById("red").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
  console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");
}