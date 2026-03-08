// hoa đào rơi

for(let i=0;i<40;i++){

let petal=document.createElement("div")

petal.className="petal"

petal.innerHTML="🌸"

petal.style.left=Math.random()*100+"vw"

petal.style.animationDuration=6+Math.random()*6+"s"

document.body.appendChild(petal)

}

// mở quà

let btn=document.getElementById("giftBtn")

btn.onclick=function(){

document.getElementById("gift").style.display="block"

document.getElementById("music").play()

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

for(let i=0;i<100;i++){

particles.push({

x:x,

y:y,

angle:Math.random()*Math.PI*2,

speed:Math.random()*6+2,

life:100

})

}

}

function update(){

ctx.fillStyle="rgba(0,0,0,0.1)"

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

setInterval(firework,1500)

update()