import "./style.css";

import { SceneManager } from "./scene.js";

const app = document.getElementById("app");

const scene = new SceneManager(app);

scene.start();