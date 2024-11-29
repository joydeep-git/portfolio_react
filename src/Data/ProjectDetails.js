
// Images
import rockPaper from "../images/rock-paper-scissor.png"
import taskManager from "../images/task-manager.png";
import elecdroidStore from "../images/elecdroid-store.png";
import youtubeClone from "../images/youtube-clone.png";

// Icons
import { ReactJsIcon, JavaScriptIcon, ScssIcon, FirebaseIcon, TailwindIcon,CssIcon, HTMLIcon } from "../icons/IconPack";

import { v4 as uuidv4 } from "uuid";

const skills = {
  react: <ReactJsIcon title="REACT.JS" />,
  js: <JavaScriptIcon title="JAVASCRIPT" />,
  scss: <ScssIcon title="SCSS" />,
  firebase: <FirebaseIcon title="FIREBASE" />,
  tailwind: <TailwindIcon title="TAILWIND CSS" />,
  css: <CssIcon title="CSS" />,
  html: <HTMLIcon title="HTML" />
};


export const projectDetails = [

  {
    id: uuidv4(),
    name: "ElecDroid Store",
    image: elecdroidStore,
    techUsed: [
      skills.react,
      skills.js,
      skills.scss,
      skills.firebase,
    ],
    github: "https://github.com/joydeep-git/elecdroid-store_react",
    liveUrl: "https://jd-elecdroid-store-react.netlify.app/",
  },

  {
    id: uuidv4(),
    name: "YouTube Clone",
    image: youtubeClone,
    techUsed: [
      skills.react,
      skills.js,
      skills.tailwind,
      skills.firebase,
    ],
    github: "https://github.com/joydeep-git/youtube-clone_react",
    liveUrl: "https://jd-youtube-clone-react.netlify.app/",
  },

  {
    id: uuidv4(),
    name: "Task Manager",
    image: taskManager,
    techUsed: [
      skills.react,
      skills.js,
      skills.css,
      skills.firebase
    ],
    github: "https://github.com/joydeep-git/task-manager_react",
    liveUrl: "https://jd-taskmanager-react.netlify.app/",
  },

  {
    id: uuidv4(),
    name: "Rock Paper Scissor",
    image: rockPaper,
    techUsed: [
      skills.html,
      skills.css,
      skills.js
    ],
    github: "https://github.com/joydeep-git/rock-paper-scissor_js",
    liveUrl: "https://jd-rockpaperscissor-js.netlify.app/",
  }

];
