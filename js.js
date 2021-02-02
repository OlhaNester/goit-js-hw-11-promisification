// Задание 3
// Перепиши функцию makeTransaction() так, чтобы она не использовала callback -
//   функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};
//makeTransaction({ transaction }).then(logSuccess).catch(logError);

const logSuccess = (resultResolve) => {
  console.log(
    `Transaction ${resultResolve.id} processed in ${resultResolve.time}ms`
  );
};

const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */

let objTest = { id: 70, amount: 150 };
makeTransaction(objTest).then(logSuccess).catch(logError);

const Foo = function () {
  return { id: 71, amount: 230 };
};

let objTest1 = Foo();

makeTransaction(objTest1).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
