# Higher Order Timeouts

> Useful Use Of Higher Order Functions

![Higher Order Functions](https://raw.githubusercontent.com/alajfit/site.personal/master/images/higher-order-functions.png)

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
