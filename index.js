// Toggle set Up guide

let dropdown = document.getElementsByClassName('toggle-up')[0];
let dropdown2 = document.getElementsByClassName('toggle-down')[0];

dropdown.onclick = () => {
    let elements =  document.getElementsByClassName('items-cont')
    let elementsArray = Array.from(elements)
    elementsArray.slice(0, 5).forEach(function(element) {
        element.style.display = 'none';
    })
    dropdown.style.display = 'none'
    dropdown2.style.display = 'block'
};



dropdown2.onclick = () => {
  let elements =  document.getElementsByClassName('items-cont')
  let elementsArray = Array.from(elements)
  elementsArray.slice(0, 5).forEach(function(element) {
    element.style.display = 'block';
})
    dropdown2.style.display = 'none'
    dropdown.style.display = 'block'
};

// Main items


function showItemBody(key){
   document.getElementsByClassName('item-content')[key].style.display = 'flex'
   document.getElementsByClassName('items-cont')[key].style.backgroundColor = '#F3F3F3'

   let clickedItem = document.getElementsByClassName('items')[key].nextElementSibling;
   let otherItemContent = document.querySelectorAll('.item-content')
   let items = document.querySelectorAll('.items-cont')
   
   otherItemContent.forEach((elem) => {
    if (clickedItem !== elem){
        elem.style.display = 'none'
    }
   })

   items.forEach((elem) => {
    if (clickedItem.parentElement !== elem){
        elem.style.backgroundColor = '#fff'
    }
   })

}

// cancel header

let cancel = document.getElementById('cancel')

cancel.onclick = () => {
    document.getElementsByClassName('section-header')[0].style.display = 'none'
    document.getElementsByClassName('placeholder')[0].style.display = 'block'
}

// tracking progress bar
let count = document.getElementById('count')
let progressBar = document.getElementById('myProgressBar')

const createCounter = () => {
    let countTracker = 0

    return {
      getCount: () => countTracker,
      increment: () => {
        countTracker++;
      },
      decrement: () => {
        countTracker--;
      },
      reset: () => {
        countTracker = 0;
      }
    }
  }

  const counter = createCounter()
  count.innerHTML = counter.getCount().toString()


// Checking items
let img1 = document.getElementsByClassName('img-1')
let img2 = document.getElementsByClassName('img-2')
let img3 = document.getElementsByClassName('img-3')
let img4 = document.getElementsByClassName('img-4')



function handleChange(){
    
    counter.increment()
    count.innerHTML = counter.getCount().toString()
    handleProgressBar(counter.getCount())
}

function reverseChange(){
  

    if (counter.getCount() > 0){
    counter.decrement()
    count.innerHTML = counter.getCount().toString()
    handleProgressBar(counter.getCount())
    }
}

function handleProgressBar(count){
    if(count == 1){
        progressBar.style.width = '20%'
    }
    else if(count == 2){
        progressBar.style.width = '40%'
    }
    else if(count == 3){
        progressBar.style.width = '60%'
    }
    else if(count == 4){
        progressBar.style.width = '80%'
    }
    else if (count == 5){
        progressBar.style.width = '100%'
    }
    else {
        progressBar.style.width = '0%'
    }
}


// alert-bell

let alertBell = document.getElementsByClassName('alert-bell')[0]
let alert = document.getElementsByClassName('alert')[0]
let profileModal = document.getElementsByClassName('profile-modal')[0]
let profileCont = document.getElementsByClassName('profile-cont')[0]
let profAbbr = document.getElementsByClassName('prof-mobile')[0]


alertBell.onclick = () => {
    alert.classList.toggle('active')
    if(!profileModal.classList.contains('active')){
        profileModal.classList.toggle('active')
    }
}
// profile modal 

profileCont.onclick = () => {
    profileModal.classList.toggle('active')
    if(!alert.classList.contains('active')){
        alert.classList.contains('active')
    }
}

profAbbr.onclick = () => {
    profileModal.classList.toggle('active')
    if(!alert.classList.contains('active')){
        alert.classList.contains('active')
    }
}

//

function navigateTo(){
    window.location.href = 'https://shopify.com/pricing'
}

// Keyboard navigation

let keyVal = 0
let checkCompleted = false

document.onkeydown = (e) => {
    if (e.key === 'Enter') {
        if (!checkCompleted) {
        handleChange(keyVal)
        keyVal = (keyVal + 1) % 6;
        }
    }

    if (e.key === 'ArrowRight'){

    }
    if (e.key === 'ArrowUp'){
        let elements =  document.getElementsByClassName('items-cont')
        let elementsArray = Array.from(elements)
        elementsArray.slice(0, 5).forEach(function(element) {
            element.style.display = 'none';
        })
        dropdown.style.display = 'none'
        dropdown2.style.display = 'block'
    }

    if (e.key === 'ArrowDown'){
        let elements =  document.getElementsByClassName('items-cont')
        let elementsArray = Array.from(elements)
        elementsArray.slice(0, 5).forEach(function(element) {
          element.style.display = 'block';
      })
          dropdown2.style.display = 'none'
          dropdown.style.display = 'block'
    }
}

