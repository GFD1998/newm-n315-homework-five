import GameObjectData from "../gameObjects.json" assert {type: "json"};
import GalleryManager from "../GalleryManager.js";
import UserSettings from "./user-settings.js";
import SPAManager from "../SPAManager.js";
import Model from "./model-module.js";

var gallery = new GalleryManager(GameObjectData);

// var whiteRabbit = new SPAManager(new Model(new UserSettings));