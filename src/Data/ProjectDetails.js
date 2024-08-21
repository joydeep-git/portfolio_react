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
            <FirebaseIcon title="FIREBASE" />
        ],
        github: "https://github.com/joydeep-git/task-manager_react",
        liveUrl: "https://jd-taskmanager-react.netlify.app/",
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
    }

];
