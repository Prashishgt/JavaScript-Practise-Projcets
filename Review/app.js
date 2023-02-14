// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const imgvar = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


// for buttons
const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

let currentItem = 0;
let reviewsLength = reviews.length;
console.log(reviewsLength);

window.addEventListener("DOMContentLoaded", ()=>{
  const item = reviews[currentItem];
  imgvar.src = item.img;
  console.log(item[0]);
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
})

function Person(person) {
  const item = reviews[person];
  imgvar.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextbtn.addEventListener('click', ()=>{
  currentItem++;
  if (currentItem > 0){
    currentItem = reviewsLength - 1;
  }
  Person(currentItem);
})

prevbtn.addEventListener('click', ()=>{
  currentItem--;
  if (currentItem < 0){
    currentItem = reviewsLength - 1;
  }
  Person(currentItem);
})

randombtn.addEventListener('click',  ()=>{
  console.log("random");

  currentItem = Math.floor(Math.random() * reviewsLength);
  Person(currentItem)
})