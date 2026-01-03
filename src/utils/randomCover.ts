import covers from "../covers";

const length = covers.length;

export default () => covers[Math.floor(Math.random() * length)];
