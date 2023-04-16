// all modules
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
const amountInput = document.querySelector('[name="amount"]');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const amount = parseInt(amountInput.value);
  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  
  // Вызываем промис
  for (let i = 0; i < amount; i++) {
    createPromise(i, delay + (i * step))
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});


