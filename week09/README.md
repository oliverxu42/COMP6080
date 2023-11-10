# Week 9

Welcome to Week 9!

### 📢 Updates & Reminders

- Assignment 3 marks released! Last day to follow up if you have have any queries!
- Assignment 4 (AirBrb) is due next week Friday 17th of November at 10pm!

### Today...

🔄 Hooks: useEffect & useContext

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

## Hooks: useContext

What are some issues with the following code?

```Javascript

function Component1() {
  const [user, setUser] = useState("Bob");

  return (
    <>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

```

Prop-drilling! We have to pass the user down many levels of the component tree.

> useContext is a way for React to manage global state and share state between multi-levels of nested components without the need for prop-drilling.

```Javascript

// Create the context
const UserContext = createContext()


function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  // Wrap child components in the "context provider", all components within the tree will have access to the "UserContext".
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}


function Component5() {

  // We can access the user in the nested component through useContext.
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
```

- useContext is a great way to manage sessions and keep track of tokens! See: https://dayvster.com/blog/use-context-for-auth

## React Component Testing

We will use the following libraries to test React components:

- Jest: a Javascript testing framework
- React Testing Library: allows us to test React components

These are pre-installed with `create-react-app`

See `2.component-testing`
