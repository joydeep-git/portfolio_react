import calculator from "../Image/calculator.png";
import chatApp from "../Image/chat-app.png";
import clipboardLanding from "../Image/clipboard-landing.png";
import formValidation from "../Image/form-validation.png";
import fyloLanding from "../Image/fylo-landing-page.png";
import guessNumber from "../Image/guess-the-number.png";
import orderSummary from "../Image/Order-summary.png";
import rockPaper from "../Image/rock-paper-scissor.png";
import taskManager from "../Image/task-manager-react.png";
import testimonialGrid from "../Image/testimonial-grid.png";
import toDoList from "../Image/to-do-list.png";
import weatherApp from "../Image/weather-app.png";

import { v4 as uuidv4 } from "uuid";

export const projectDetails = [

    { id: uuidv4(), name: "YouTube Clone" , image: taskManager, techUsed: "React.js, Tailwind CSS & Rapid API", github: "https://github.com/joydeep-git/youtube-clone_react", liveUrl: "https://jd-youtube-clone-react.netlify.app/",},

    { id: uuidv4(), name: "Shopping App" , image: taskManager, techUsed: "React.js & Redux", github: "https://github.com/joydeep-git/shopping-cart_react", liveUrl: "https://jd-shopping-app-react.netlify.app/",},
    
    { id: uuidv4(), name: "Authentication & CRUD" , image: taskManager, techUsed: "React.js", github: "https://github.com/joydeep-git/authentication-crud_react", liveUrl: "https://jd-auth-crud-react.netlify.app/",},
    
    { id: uuidv4(), name: "Task Manager" , image: taskManager, techUsed: "React.js  & Firebase", github: "https://github.com/joydeep-git/task-manager_react", liveUrl: "https://jd-taskmanager-react.netlify.app/",},

    { id: uuidv4() , name: " To-Do List" , image: toDoList, github: "https://github.com/joydeep-git/to-do-list_react", liveUrl: "https://jd-todolist-react.netlify.app/", techUsed: "React.js"},

    { id: uuidv4(), name: "Weather App " , image: weatherApp, github: "https://github.com/joydeep-git/weather-app_js", liveUrl: "https://jd-weatherapp-js.netlify.app/", techUsed:" HTML, CSS & JS", },

    { id: uuidv4(), name: "Form Validation", image: formValidation, github: "https://github.com/joydeep-git/Form-Validation_js", liveUrl: "https://jd-formvalidation-js.netlify.app/", techUsed:" HTML, CSS & JS",},

    { id: uuidv4(), name: "Rock Paper Scissor", image: rockPaper, github: "https://github.com/joydeep-git/rock-paper-scissor_js", liveUrl: "https://jd-rockpaperscissor-js.netlify.app/", techUsed:" HTML, CSS & JS",},

    { id: uuidv4(), name: "Calculator App", image: calculator,  github: "https://github.com/joydeep-git/calculator-app_js", liveUrl: "https://jd-calculator-js.netlify.app/" , techUsed:" HTML, CSS & JS",},

    { id: uuidv4() , name: "Number Game", image: guessNumber, github: "https://github.com/joydeep-git/guess-the-number_js", liveUrl: "https://jd-guessthenumber-js.netlify.app/", techUsed:" HTML, CSS & JS",},
    
    {id: uuidv4(),name: "Clipboard Page", image: clipboardLanding, github: "https://github.com/joydeep-git/clipboard-landing-page_css", liveUrl: "https://jd-clipboardpage-css.netlify.app/", techUsed:" HTML & CSS",},

    { id: uuidv4(), name: "Fylo Webpage", image: fyloLanding, github: "https://github.com/joydeep-git/fylo-landing-page_css", liveUrl: "https://jd-fylopage-css.netlify.app/", techUsed:" HTML & CSS",},

    { id: uuidv4(), name: "Chat App", image: chatApp,  github: "https://github.com/joydeep-git/chat-app_css", liveUrl: "https://jd-chatapp-css.netlify.app/", techUsed:" HTML & CSS",},

    { id: uuidv4(), name: "Order Summary", image: orderSummary, github: "https://github.com/joydeep-git/order-summary_css", liveUrl: "https://jd-ordersummary-css.netlify.app/",techUsed:" HTML & CSS",},

    { id: uuidv4(), name: "Testimonial Page " , image: testimonialGrid, github: "https://github.com/joydeep-git/testimonials-grid_css", liveUrl: "https://jd-testimonialgrid-css.netlify.app/",techUsed:" HTML & CSS",}

];
