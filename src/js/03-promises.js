const form = document.querySelector('.form')
// const amount = document.getElementsByTagName('.amount')

form.addEventListener('submit', onPromise)

let result = null;
let i;

function onPromise(evt) {
  for (let i = 1; i <= evt.currentTarget.amount.value; i++) {
    setTimeout(() => {
          result = evt.currentTarget.delay.value + evt.currentTarget.step.value;
      createPromise(i, result);
  
    }, result)
  }
}  
function createPromise(position, delay) {
      return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        delay = result;
        position = i;
        if (shouldResolve) {
          resolve(i, result)
        }
        reject(i, result)
      });
  }
createPromise(2, 1500)
  .then(( position, delay ) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(( position, delay ) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });


