# Week 10

Congratulations on making it to Week 10!

### 📢 Updates & Reminders

- Assignment 4 is due Friday at 10pm!

### Today...

🔄 Hooks: useContext

💈 UI Testing (Cypress)

🎉 Revision or work on Ass4!

## MyExperience

Please complete MyExperience! MORE EXAM TIME :DDD

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

## UI Testing

> UI testing aims to test a "happy path" of how a user might interact with your application.

- UI testing allows us to simulate how a user might interact with
  our web page. We can simulate click events, typing, and can
  react to changes how a user might.

- UI tests are important because they cover what a user is most
  likely to notice.

**Getting started with Cypress**

- Cypress is a UI testing library. Begin by installing it by running:

`yarn add -D cypress`

- Run cypress with `yarn run cypress open` to open the test runner.

See demo `1.UI-testing`

## Bye bye

Thanks for the term! And good luck with your future endeavours! 🥳
