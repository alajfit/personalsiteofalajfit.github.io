# Higher Order Timeouts

> Useful Use Of Higher Order Functions

## The Method
```js
function startTimer () {
    const start = performance.now();

    return () => performance.now() - start;
}
```

## The Execution
```js
const endTimer = startTimer();
setTimeout(() => console.log(endTime()), 2000);
```
