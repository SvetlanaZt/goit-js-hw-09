import Notiflix from 'notiflix';
  const form = document.querySelector('.form');

form.addEventListener('submit', onPromise);

function onPromise(evt) {
  evt.preventDefault();
  const amount = evt.target.amount.value;
  let firstDelay = Number(evt.target.delay.value);
  const step = Number(evt.target.step.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    firstDelay += step;
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}


  //     createPromise(2, 1500)
  //       .then((position, delay) => {
  //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  // })
  // .catch(( position, delay ) => {
  //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  // });

