const horses = ["secr", "ecli", "west", "fox", "seab"];

const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const run = (horse) => {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
};

const promises = horses.map((horse) => run(horse));
//console.log(promises);

Promise.race(promises).then(({ horse, time }) => {
  console.log(winner);
});

Promise.all(promises).then((results) => {
  console.log(results);
});
