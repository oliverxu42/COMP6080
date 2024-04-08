# Week 9

Welcome to Week 9!

### 📢 Updates & Reminders

- Assignment 3 marks released! Last day to follow up if you have have any queries!
- Assignment 4 (Presto) is due next week Friday 19th of April at 10pm!

### Today...

🔄 Hooks: useEffect & creating custom hooks

🧪 Component Testing: React Testing Library

## Hooks: useEffect

> The useEffect hook allows react to trigger a function when certain conditions are met such as when a variable changes.

- It is commonly used to fetch data when a component is mounted.

```Javascript
const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
    // Runs when the count variable is changed.
    }, [count])

    useEffect(() => {
    // Runs once when the component mounts.
    }, [])

    useEffect(() => {
    // Runs on every render.
    })
}
```
## Hooks: custom hooks
We can also create custom hooks, here's a simple hook that allows for easier fetching of data from local storage...

```Javascript
export const useLocalStorage = () => {
  const [value, setValue] = useState(null);

  const setItem = (key, value) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  const getItem = (key) => {
    const value = localStorage.getItem(key);
    setValue(value);
    return value;
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
};

// Usage
const { getItem, setItem } = useLocalStorage();

setItem('user', 'bob');

const user = getItem('user'); // 'bob'
```

See: `exercises/react-custom-hook`

## React Component Testing

We will use the following libraries to test React components:

- Jest: a Javascript testing framework
- React Testing Library: allows us to test React components

These are pre-installed with `create-react-app`

See `2.component-testing`
