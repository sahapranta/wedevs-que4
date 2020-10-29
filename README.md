# Que: 4

Change the flow of the execution of the following snippet. It should log `Wearing PPE` first.

Conditions: 

1. You cannot change the timeout value 
2. You cannot call fightCorona inside the `then()` method of `wearPPE()`

**Solution**

```js
async function execute() {
  await wearPPE().then(result => console.log(result));
  fightCorona().then(result => console.log(result));
}

execute(); 
//Output
Wearing PPE
Fighting Corona
```

