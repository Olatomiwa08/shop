// Your javascript goes here
function toggleMenu(){
  let user = document.getElementById('usertoggle')
  let closeMenu = document.querySelector('.store')
  user.addEventListener('click', ()=>{
    user.classList.toggle('focus')
    closeMenu.classList.toggle('openMenu')
   
    closeMenutwo.classList.remove('openMenu')
    
    // toggleButton.style.display = 'none'
  })
  let collectionContent = document.getElementById('collectionContent')
  collectionContent.addEventListener('click', ()=>{
    closeMenu.classList.remove('openMenu')
  })
  let toggleButton = document.querySelector('.toggleButton')
  let closeMenutwo = document.querySelector('.notification')
  toggleButton.addEventListener('click', ()=>{
    toggleButton.classList.toggle('focus')
    closeMenutwo.classList.toggle('openMenu')
    closeMenu.classList.remove('openMenu')
  }) 
}
function closePlan(){
  let closeContent = document.getElementById('plan')
  closeContent.classList.add('close')
  console.log(closeContent)

}
function toggleAccordion() {
  let toggle = document.getElementById('toggle')
  toggle.classList.toggle('transform')
  var summary = document.getElementById('dropdown-content');
  summary.classList.toggle('show');
  
}


function toggleAccordionItem(header) {
  var content = header.nextElementSibling;
  var accordionItem = header.parentNode;

  // Remove 'active' class from all accordion items
  var allAccordionItems = document.querySelectorAll(".accordion-item");
  allAccordionItems.forEach(function (item) {
    if (item !== accordionItem) {
      item.querySelector(".accordion-item-content").classList.remove("active");
      item.classList.remove("active-bg");
    }
  });

  // Toggle 'active' class for the clicked accordion item
  content.classList.add("active");
  accordionItem.classList.add("active-bg");
}




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


// let search = document.getElementById('adminsearch')
// search.addEventListener('keydown', function(event){
//   if(event.key === "")
// })

toggleMenu()

