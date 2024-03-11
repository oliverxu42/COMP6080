# Week 5

Hi everyone! Welcome to Week 5! :D

### 📢 Updates & Reminders

- Assignment 1 marks released! Any issues, let me know asap!
- Assignment 2 marks out soon!
- Assignment 3 (Vanilla JS) has been released! Due Friday Week 7, 10pm! Make sure you get started on it early :))

### Today...

📦 Local Storage

🛠️ Promises + Fetch

🧶 Async / Await

## Local Storage

> Allows you to save data in the browser and have it persist across browser sessions.

```Javascript
// Data is stored as key/value pairs.
localStorage.setItem("[key]", "[value]");

// Set/get data:
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme"); //"dark"

// Delete items:
localStorage.removeItem("theme");

// Delete all items:
localStorage.clear();

```

## Promises

> A Promise is an object representing the eventual completion or failure of an asynchronous operation. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

A Promise is in one of three states:

- `pending:` initial state, neither fulfilled nor rejected.
- `fulfilled:` meaning that the operation was completed successfully.
- `rejected:` meaning that the operation failed.

```Javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('you promised me');
  }, 5000);
});

promise.then((res) => {
  console.log(res);
});
```

Fetching data using the fetch API:

```Javascript
fetch(url).then((res) => {
  return res.json();
}).then((data) => {
    console.log(data);
});
```

Demo, see `2.fetch`

## Async/Await

Easier way to deal with promises:

```Javascript
const asyncFunc = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('you promised me async');
    }, 5000);
  });

  const msg = await promise; // wait for promise to be resolved before continuing
  console.log(msg);
};

asyncFunc();

```

Can't use for assignment 3, sorryyy :((
