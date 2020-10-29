/**
 * Change the flow of the execution of the following snippet.
 * It should log ‘Wearing PPE` first.
 *
 * Conditions:
 *  1. You cannot change the timeout value
 *  2. You cannot call fightCorona inside
 *     the `then()` method of `wearPPE()`
 */

function wearPPE() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Wearing PPE"), 2000);
  });
}
function fightCorona() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Fighting Corona"), 1000);
  });
}

/**
 * @return {undefined}
 * @description using async await keywords enable asynchronous
 *
 */

async function execute() {
  await wearPPE().then(result => console.log(result));
  fightCorona().then(result => console.log(result));
}

execute();
