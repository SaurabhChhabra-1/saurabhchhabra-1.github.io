const menu = [
    {
        id: 1,
        title: "Shoe Store",
        link: '/shoe-store',
        img: "./project-images/item-1.png",
    },
    {
        id: 2,
        title: "Food Menu",
        link: '/food-menu',
        img: "./project-images/item-2.png",
    },
    {
        id: 3,
        title: "Office",
        link: '/office',
        img: "./project-images/item-3.png",
    },
    {
        id: 4,
        title: "Random Quotes",
        link: '/random-quotes',
        img: "./project-images/item-4.png",
    },
    {
        id: 5,
        title: "Store",
        link: '/store',
        img: "./project-images/item-5.png",
    },
    {
        id: 6,
        title: "The Message",
        link: '/TheMessage',
        img: "./project-images/item-6.png",
    },
    {
        id: 7,
        title: "Color Change",
        link: '/background-color',
        img: "./project-images/item-7.png",
    },
    {
        id: 8,
        title: "Design Template",
        link: '/Design-Template',
        img: "./project-images/item-8.png",
    },
    {
        id: 9,
        title: "Web Development Agency",
        link: '/WebDevelopmentAgency',
        img: "./project-images/item-9.png",
    },
    {
        id: 10,
        title: "Contact Form",
        link: '/ContactForm',
        img: "./project-images/item-10.png",
    },
    {
        id: 11,
        title: "Guess My Number",
        link: '/GuessMyNumber',
        img: "./project-images/item-11.png",
    },
    {
        id: 12,
        title: "Modal",
        link: '/Modal',
        img: "./project-images/item-12.png",
    },
    {
        id: 13,
        title: "Pig Game",
        link: '/PigGame',
        img: "./project-images/item-13.png",
    },
    {
        id: 14,
        title: "Bankist",
        link: '/Bankist',
        img: "./project-images/item-14.png",
    },
    {
        id: 15,
        title: "Background-Color and Counter",
        link: '/BackgroundColor&Counter',
        img: "./project-images/item-15.png",
    },
    {
        id: 16,
        title: "Z function",
        link: '/Zfunction/zfunc.html',
        img: "./project-images/item-16.png",
    },
    {
        id: 17,
        title: "ToDo App",
        link: '/ToDoApp',
        img: "./project-images/item-17.png",
    },
    {
        id: 18,
        title: "Clients Review",
        link: '/clientsReview',
        img: "./project-images/item-18.png",
    },
    {
        id: 19,
        title: "Clients Review 2",
        link: '/clientsReview2',
        img: "./project-images/item-19.png",
    },
    {
        id: 20,
        title: "Different Content Table",
        link: '/DifferentContentTable',
        img: "./project-images/item-20.png",
    },
    {
        id: 21,
        title: "FAQ Box",
        link: '/faqBox',
        img: "./project-images/item-21.png",
    },
    {
        id: 22,
        title: "Grocery List",
        link: '/GroceryList',
        img: "./project-images/item-22.png",
    },
    {
        id: 23,
        title: "Modal 2",
        link: '/Modal2',
        img: "./project-images/item-23.png",
    },
    {
        id: 24,
        title: "Random Text",
        link: '/RandomText',
        img: "./project-images/item-24.png",
    },
    {
        id: 25,
        title: "Responsive NavBar",
        link: '/ResponsiveNavBar',
        img: "./project-images/item-25.png",
    },
    {
        id: 26,
        title: "Restaurant Menu",
        link: '/RestaurantMenu',
        img: "./project-images/item-26.png",
    },
    {
        id: 27,
        title: "Scroll Project",
        link: '/ScrollProject',
        img: "./project-images/item-27.png",
    },
    {
        id: 28,
        title: "Side Bar",
        link: '/SideBar',
        img: "./project-images/item-28.png",
    },
    {
        id: 29,
        title: "Video Player",
        link: '/VideoPlayer',
        img: "./project-images/item-29.png",
    },
    {
        id: 30,
        title: "Cocktails Project",
        link: 'https://cocktails-projectreact.netlify.app/',
        img: "./project-images/item-30.png",
    },
    {
        id: 31,
        title: "Cart React Redux Project",
        link: 'https://cart-react-reduxapp.netlify.app/',
        img: "./project-images/item-31.png",
    },
    {
        id: 32,
        title: "ToDo React Project",
        link: 'https://todo-reactapp-project.netlify.app/',
        img: "./project-images/item-32.png",
    },
    {
        id: 33,
        title: "Movies React Project",
        link: 'https://movies-reactapplication.netlify.app/',
        img: "./project-images/item-33.png",
    },
    {
        id: 34,
        title: "React Routing Project",
        link: 'https://react-routingproject.netlify.app/',
        img: "./project-images/item-34.png",
    },
    {
        id: 35,
        title: "UserName Age React Project",
        link: 'https://username-react-project.netlify.app/',
        img: "./project-images/item-35.png",
    },
    {
        id: 36,
        title: "Bank Balance Redux Project",
        link: 'https://bank-balance-redux-app.netlify.app/',
        img: "./project-images/item-36.png",
    },
    {
        id: 37,
        title: "Login Page with ToDo App Project",
        link: 'https://login-page-with-todo-app.netlify.app/',
        img: "./project-images/item-37.png",
    },
    {
        id: 38,
        title: "Text Utility React Project",
        link: 'https://text-utility-react-app.netlify.app/',
        img: "./project-images/item-38.png",
    },

    
];

const addHtml = function (img, name, link) {
    const html = `<div class="items">
    <a href=${link} >
    <img src=${img} alt="" />
    <div class="content">
      <div class="info">
        <p class="name">${name}</p>
      </div>
    </div>
    </a>
  </div>`;
  
    document.querySelector(".content-box").insertAdjacentHTML("beforeend", html);
  };
  
  const all = document.querySelectorAll(".btn");
  
  const renderContent = function (e) {
    document.querySelector(".content-box").innerHTML = "";
  
  
    menu
      .forEach((item) => {
        addHtml(item.img, item.title, item.link );
      });
  };
  
  all.forEach((item) => item.addEventListener("click", renderContent));
  
  renderContent();
  