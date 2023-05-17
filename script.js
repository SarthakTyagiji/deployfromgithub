const body = document.querySelector('body')
const btn = document.querySelector('.btn')
const colors = ["green","yellow","pink","orange","grey"]
btn.addEventListener('click',function(){
    let x = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[x]
})


