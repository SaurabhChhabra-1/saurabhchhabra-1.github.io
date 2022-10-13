// const fish = fetch("https://www.fishwatch.gov/api/species")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// console.log(fish);

const person = [
  {
    id: 1,
    name: "susan smith",
    designation: "web developer",
    src: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    description:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    designation: "web designer",
    src: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    description:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    designation: "intern",
    src: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    description:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    designation: "the boss",
    src: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    description:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
let i = 0;
const uiChanges = function (i) {
  document.querySelector(".img").src = person[i].src;
  document.querySelector(".name").textContent = person[i].name;
  document.querySelector(".designation").textContent = person[i].designation;
  document.querySelector(".description").textContent = person[i].description;
};
uiChanges(i);

document.querySelector(".buttons-plus").addEventListener("click", function () {
  ++i;
  if (i > person.length - 1) {
    i = 0;
  }
  uiChanges(i);
});
document.querySelector(".buttons-minus").addEventListener("click", function () {
  --i;
  if (i < 0) {
    i = person.length - 1;
  }
  uiChanges(i);
});

document.querySelector(".surprise").addEventListener("click", function () {
  const randomPerson = Math.trunc(Math.random() * person.length);
  uiChanges(randomPerson);
});
