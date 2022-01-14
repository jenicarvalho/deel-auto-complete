# Questions

Answers for the questions.

1. The difference is that Pure component implements shouldComponentUpdate, and make a shallow comparison of state and props. It prevents a lot of re-renders. If there is someone new to the project and did not understand the use of Pure Component that might be a little tricky to get why the state is not updated or even using sort of Context API that is not working.

2. ShouldComponentUpdate interferon the context, not letting the child receive the right state.

3. You can pass a function as a prop from parent tp child, and use that prop to receive the data. You can pass a useState function from the parent to child. You can use Context API.

4. Wrap your component on a `React.memo`. Use `React.PureComponent`.

5. Fragment is a ghost tag to wrap 2 or more JSX tags. We need it because only 1 tag can be returned. 

6. The `.map()` function is a HOC. We can use HOC also to receive a component and return a new one and this new component will receive the parents `props`. Also HOC can be passed to regular functions to reuse the code.

7. In promises we can use `.catch` to handle errors.
In callbacks and Promises we can use a block of `try...catch`

8. It takes 2 arguments, the first is an object and the second a function that runs after the setState.
It is async for the DOM to reconcile the changes and apply them.


9. Rewrite the first line, like:
```js 
class Hi extends React.Component
```
to:
```js 
function Hi()
```
remove the render function inside the class
```js 
render() { }
```

the full code would be something like this: 
```js 
function Hi() {
  return (
    <h1>Hello there!</h1>
  )
}
```
If there is any state only change the method
```js
this.setState({ myState: 'hey'})
```
to hook useState:
```js
const [myState, setMyState] = ('')

setMyState('Hey');
```
and instead of doing this `this.state.myState` only call the state `myState`.
also instead of calling method like this `this.myMethod` you can just call the method `myMethod`.


10. Regular CSS modules, SASS or some CSS-in-JS solution, like Styled components.

11. Using dangerouslySetInnerHTML, but it is also better to use some sanitize solution to prevent XSS.