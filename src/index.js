document.addEventListener('DOMContentLoaded',() =>{
   
 //***************************Show More************************* */   

    const expandsMore = document.querySelectorAll('[expand-more]')

 function expand(){
    const showContent = document.getElementById(this.dataset.target)
    if(showContent.classList.contains('expand-active')){
        this.innerHTML= this.dataset.showtext
        console.log('more');
    }
    else{
        this.innerHTML= this.dataset.hidetext
        console.log('less'); 
    }
    showContent.classList.toggle('expand-active')
 }

expandsMore.forEach(expandMore => {
    expandMore.addEventListener('click', expand)
})

//***************************Hamburger Button************************* */ 

const hamburgerBtn = document.getElementById('hamburger')
const sideList = document.getElementById('sidebar')

function toggleButton(){
    sideList.classList.toggle('show')
}

hamburgerBtn.addEventListener('click', toggleButton)

//***************************Image Scroll************************* */ 

//const imageContainer = document.getElementById('img-container')

let backgroundImg = document.getElementById('background-img')
let imgCount = 1
const imageRight = document.getElementById('img-right')

function moveForward(){
    console.log("Next Image");
    if(imgCount>=5){
        imgCount=0
    }
    imgCount++
    backgroundImg.setAttribute('src','images/image-'+imgCount+'.jpg')
}

imageRight.addEventListener('click', moveForward)


const imageLeft = document.getElementById('img-left')

function moveBackward(){
    console.log("Previous Image");
    if(imgCount<=1){
        imgCount=6
    }
    imgCount--
    backgroundImg.setAttribute('src','images/image-'+imgCount+'.jpg')
}

imageLeft.addEventListener('click', moveBackward)







})