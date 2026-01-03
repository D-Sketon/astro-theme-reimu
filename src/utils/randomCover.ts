import covers from "../covers";

let shuffledCovers: string[] = [];
let currentIndex = 0;

// Fisher-Yates 洗牌算法
function shuffleArray(array: string[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default () => {
  if (!covers || covers.length === 0) {
    return null;
  }

  if (shuffledCovers.length === 0 || currentIndex >= shuffledCovers.length) {
    shuffledCovers = shuffleArray(covers);
    currentIndex = 0;
  }

  const cover = shuffledCovers[currentIndex];
  currentIndex++;

  return cover;
};
