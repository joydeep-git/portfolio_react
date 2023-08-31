import calculator from "../Image/calculator.png";
import chatApp from "../Image/chat-app.png";
import clipboardLanding from "../Image/clipboard-landing.png";
import formValidation from "../Image/form-validation.png";
import fyloLanding from "../Image/fylo-landing-page.png";
import guessNumber from "../Image/number-game.png";
import orderSummary from "../Image/order-summary.png";
import rockPaper from "../Image/rock-paper-scissor.png";
import taskManager from "../Image/task-manager.png";
import testimonialGrid from "../Image/testimonial-grid.png";
import toDoList from "../Image/to-do-list.png";
import weatherApp from "../Image/weather-app.png";
import elecdroidStore from "../Image/elecdroid-store.png";
import youtubeClone from "../Image/youtube-clone.png";
import shoppingCart from "../Image/shopping-cart.png";
import authCrud from "../Image/auth-crud.png";

import {
    FaReact as ReactIcon,
    FaHtml5 as HtmlIcon,
    FaCss3Alt as CssIcon,
} from "react-icons/fa";

import { IoLogoJavascript as JavascriptIcon } from "react-icons/io5";

import {
    SiFirebase as FirebaseIcon,
    SiTailwindcss as TailwindIcon,
    SiRedux as ReduxIcon,
} from "react-icons/si";

import { BsFiletypeScss as ScssIcon } from "react-icons/bs";

import { v4 as uuidv4 } from "uuid";

export const projectDetails = [

    {
        id: uuidv4(),
        name: "ElecDroid Store",
        image: elecdroidStore,
        techUsed: [
            <ReactIcon title="REACT.JS" />,
            <JavascriptIcon title="JAVASCRIPT" />,
            <ScssIcon title="SCSS" />,
            <HtmlIcon title="HTML" />,
            <FirebaseIcon title="FIREBASE" />,
        ],
        github: "https://github.com/joydeep-git/elecdroid-store_react",
        liveUrl: "https://jd-elecdroid-store-react.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "YouTube Clone",
        image: youtubeClone,
        techUsed: [
            <ReactIcon title="REACT.JS" />,
            <JavascriptIcon title="JAVASCRIPT" />,
            <TailwindIcon title="TAILWIND CSS" />,
            <HtmlIcon title="HTML" />,
            <FirebaseIcon title="FIREBASE" />,
        ],
        github: "https://github.com/joydeep-git/youtube-clone_react",
        liveUrl: "https://jd-youtube-clone-react.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Task Manager",
        image: taskManager,
        techUsed: [
            <ReactIcon title="REACT.JS" />,
            <JavascriptIcon title="JAVASCRIPT" />,
            <CssIcon title="CSS" />,
            <HtmlIcon title="HTML" />,
            <FirebaseIcon title="FIREBASE" />
        ],
        github: "https://github.com/joydeep-git/task-manager_react",
        liveUrl: "https://jd-taskmanager-react.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Shopping App",
        image: shoppingCart,
        techUsed: [
            <ReactIcon title="REACT.JS" />,
            <ReduxIcon title="REDUX" />,
            <JavascriptIcon title="JAVASCRIPT" />,
            <CssIcon title="CSS" />,
            <HtmlIcon title="HTML" />
        ],
        github: "https://github.com/joydeep-git/shopping-cart_react",
        liveUrl: "https://jd-shopping-app-react.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Authentication",
        image: authCrud,
        techUsed: [
            <ReactIcon title="REACT.JS" />,
            <JavascriptIcon title="JAVASCRIPT" />,
            <CssIcon title="CSS" />,
            <HtmlIcon title="HTML" />
        ],
        github: "https://github.com/joydeep-git/authentication-crud_react",
        liveUrl: "https://jd-auth-crud-react.netlify.app/",
    },

    {
        id: uuidv4(),
        name: " To-Do List",
        image: toDoList,
        techUsed: [
            <ReactIcon title="REACT.JS" />,
            <JavascriptIcon title="JAVASCRIPT" />,
            <CssIcon title="CSS" />,
            <HtmlIcon title="HTML" />
        ],
        github: "https://github.com/joydeep-git/to-do-list_react",
        liveUrl: "https://jd-todolist-react.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Weather App ",
        image: weatherApp,
        techUsed: [
            <HtmlIcon title="HTML" />,
            <CssIcon title="CSS" />,
            <JavascriptIcon title="JAVASCRIPT" />,
        ],
        github: "https://github.com/joydeep-git/weather-app_js",
        liveUrl: "https://jd-weatherapp-js.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Form Validation",
        image: formValidation,
        techUsed: [
            <HtmlIcon title="HTML" />,
            <CssIcon title="CSS" />,
            <JavascriptIcon title="JAVASCRIPT" />,
        ],
        github: "https://github.com/joydeep-git/Form-Validation_js",
        liveUrl: "https://jd-formvalidation-js.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Rock Paper Scissor",
        image: rockPaper,
        techUsed: [
            <HtmlIcon title="HTML" />,
            <CssIcon title="CSS" />,
            <JavascriptIcon title="JAVASCRIPT" />,
        ],
        github: "https://github.com/joydeep-git/rock-paper-scissor_js",
        liveUrl: "https://jd-rockpaperscissor-js.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Calculator App",
        image: calculator,
        techUsed: [
            <HtmlIcon title="HTML" />,
            <CssIcon title="CSS" />,
            <JavascriptIcon title="JAVASCRIPT" />,
        ],
        github: "https://github.com/joydeep-git/calculator-app_js",
        liveUrl: "https://jd-calculator-js.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Number Game",
        image: guessNumber,
        techUsed: [
            <HtmlIcon title="HTML" />,
            <CssIcon title="CSS" />,
            <JavascriptIcon title="JAVASCRIPT" />,
        ],
        github: "https://github.com/joydeep-git/guess-the-number_js", liveUrl: "https://jd-guessthenumber-js.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Clipboard Page",
        image: clipboardLanding,
        techUsed: [
            <HtmlIcon title="HTML" />,
            <CssIcon title="CSS" />,
        ],
        github: "https://github.com/joydeep-git/clipboard-landing-page_css",
        liveUrl: "https://jd-clipboardpage-css.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Fylo Webpage",
        image: fyloLanding,
        techUsed: [
            <HtmlIcon title="HTML" />,
            <CssIcon title="CSS" />,
        ],
        github: "https://github.com/joydeep-git/fylo-landing-page_css",
        liveUrl: "https://jd-fylopage-css.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Chat App",
        image: chatApp,
        techUsed: [
            <HtmlIcon title="HTML" />,
            <CssIcon title="CSS" />,
        ],
        github: "https://github.com/joydeep-git/chat-app_css",
        liveUrl: "https://jd-chatapp-css.netlify.app/",
    },

    {
        id: uuidv4(),
        name: "Order Summary",
        image: orderSummary,
        techUsed: [
            <HtmlIcon title="HTML" />,
            <CssIcon title="CSS" />,
        ],
        github: "https://github.com/joydeep-git/order-summary_css",
        liveUrl: "https://jd-ordersummary-css.netlify.app/",
    },

    {
        id: uuidv4(), name: "Testimonial Page ",
        image: testimonialGrid,
        techUsed: [
            <HtmlIcon title="HTML" />,
            <CssIcon title="CSS" />,
        ],
        github: "https://github.com/joydeep-git/testimonials-grid_css",
        liveUrl: "https://jd-testimonialgrid-css.netlify.app/",
    }

];
