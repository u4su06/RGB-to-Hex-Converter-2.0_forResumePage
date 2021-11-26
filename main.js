const container = document.querySelector(".container")
const redRange = document.querySelector("#redRange")
const greenRange = document.querySelector("#greenRange")
const blueRange = document.querySelector("#blueRange")
const hexNumber = document.querySelector("#hexNumber")

//function
function rgbToHex() {
  let redValue = Number(redRange.value).toString(16)
  let greenValue = Number(greenRange.value).toString(16)
  let blueValue = Number(blueRange.value).toString(16)
  return hexNumber.children[0].innerHTML = `#${redValue.padStart(2, "0")}${greenValue.padStart(2, "0")}${blueValue.padStart(2, "0")}`
}

function bgColor() {
  return document.body.style.backgroundColor = hexNumber.children[0].innerHTML
}

//主程式
container.addEventListener("mousemove", function (event) {
  if (event.target.matches(".custom-range")) {
    let value = event.target.value
    let rgbN = event.target.parentElement.nextElementSibling.children[0]
    rgbN.value = value
    rgbToHex()
    bgColor()
  }
})

container.addEventListener("input", function (event) {
  if (event.target.matches(".text-box")) {
    let value = event.target.value
    if (Number(value) >= 0 && Number(value) <= 255) {
      let rangeValue = event.target.parentElement.previousElementSibling.children[0]
      rangeValue.value = value
      rgbToHex()
      bgColor()
    } else {
      alert("請輸入 0 至 255 的數字")
    }
  }
})