// hoa đào

for(let i=0;i<50;i++){

let petal=document.createElement("div")

petal.className="petal"

petal.innerHTML="🌸"

petal.style.left=Math.random()*100+"vw"

petal.style.animationDuration=6+Math.random()*6+"s"

document.body.appendChild(petal)

}

// mở hộp quà

let gift=document.getElementById("giftBox")
let card=document.getElementById("card")
let music=document.getElementById("music")

gift.onclick=function(){

gift.classList.add("open")

setTimeout(()=>{

card.style.display="block"

music.play()

},800)

}

// mở thiệp

card.onclick=function(){

card.classList.toggle("open")

}

// pháo hoa

const canvas=document.getElementById("fireworks")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

function firework(){

let x=Math.random()*canvas.width
let y=Math.random()*canvas.height/2

for(let i=0;i<120;i++){

particles.push({

x:x,
y:y,
angle:Math.random()*Math.PI*2,
speed:Math.random()*7+2,
life:120

})

}

}

function update(){

ctx.fillStyle="rgba(0,0,0,0.12)"
ctx.fillRect(0,0,canvas.width,canvas.height)

particles.forEach((p,i)=>{

p.x+=Math.cos(p.angle)*p.speed
p.y+=Math.sin(p.angle)*p.speed

p.life--

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`
ctx.fillRect(p.x,p.y,3,3)

if(p.life<=0)particles.splice(i,1)

})

requestAnimationFrame(update)

}

setInterval(firework,1400)

update()