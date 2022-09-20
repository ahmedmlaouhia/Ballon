import "./style.scss"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="background">
    <img src="/ball.png" alt="ball" class="ball" id="ball"/>
  </div>
`
document.getElementById("ball")!.addEventListener("mousedown", e => {
  const ball = e.target as HTMLImageElement
  const { left, top } = ball.getBoundingClientRect()
  const dx = e.clientX - left
  const dy = e.clientY - top
  const move = (e: MouseEvent) => {
    ball.style.left = e.clientX - dx + "px"
    ball.style.top = e.clientY - dy + "px"
  }
  function sleep() {
    return new Promise(resolve => setTimeout(resolve, 4))
  }

  const drop = async () => {
    while (ball.style.top < window.innerHeight - 105 + "px") {
      ball.style.top = parseInt(ball.style.top) + 1 + "px"
      await sleep()
    }
  }

  document.addEventListener("mousemove", move)
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", move)
    drop()
  })
})

//new changes in this commit
