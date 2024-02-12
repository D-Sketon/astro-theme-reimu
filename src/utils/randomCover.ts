import fs from "fs";
import yaml from "js-yaml";

const covers = yaml.load(fs.readFileSync("src/covers.yml", "utf8")) as string[];
const length = covers.length;

export default () => covers[Math.floor(Math.random() * length)];
