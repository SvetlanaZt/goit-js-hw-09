const form = document.querySelector('.form')
// const amount = document.getElementsByTagName('.amount')

form.addEventListener('submit', onPromise)
let sum = null;

function onPromise(evt) {
  evt.preventDefault();
  const amount = evt.target.amount.value;
  let firstDelay = Number(evt.target.delay.value);
  let step = Number(evt.target.step.value);    

  for (let i = 1; i <= amount; i++) {
    sum = firstDelay + step;
  
       setTimeout(() => {
      createPromise(i, sum)
        .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(( { position, delay } ) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
             }, sum)
  }
}  
function createPromise(position, delay) {
  console.log(position)
    console.log(delay)
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay })
    }
    reject({ position, delay })
      });
  }



  //     createPromise(2, 1500)
  //       .then((position, delay) => {
  //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  // })
  // .catch(( position, delay ) => {
  //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  // });