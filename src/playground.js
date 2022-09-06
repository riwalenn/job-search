const interval = setInterval(() => {
  console.log("hemlo !!");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
