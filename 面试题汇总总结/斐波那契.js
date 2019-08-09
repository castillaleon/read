// 循环
function fibonacci(n) {
  let cache = []
  for (let i = 0; i <= n; i++) {
    if (i === 0) cache[i] = 0
    if (i > 0 && i <= 2) cache[i] = 1
    if (i > 2) {
      cache[i] = cache[i - 1] + cache[i - 2]
    }
  }

  return cache[n]
}

console.log(fibonacci(10))

// 递归
function fib(n) {
  if (!fib.cache) fib.cache = []
  if (fib.cache[n]) return fib.cache[n]
  if (n === 0) fib.cache[n] = 0
  if (n > 0 && n <= 2) fib.cache[n] = 1
  if (n > 2) {
    fib.cache[n] = fib(n - 2) + fib(n - 1)
  }

  return fib.cache[n]
}

const fib1 = (() => {
  let cache = []
  return function(n) {
    if (cache[n]) return cache[n]
    if (n === 0) cache[n] = 0
    if (n > 0 && n <= 2) cache[n] = 1
    if (n > 2) {
      cache[n] = fib(n - 2) + fib(n - 1)
    }

    return cache[n]
  }
})()

console.log(fib1(10))
