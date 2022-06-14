This repository consist of following React hooks example which bring out the clarity on it for the beginners. So lets start:

1. ## useState: 

    It is a Hook that allows you to have state variables in functional components, so basically useState is the ability to encapsulate local state in a functional component. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.

2. ## useReducer: 
    
    It is a Hook in React, used to state management in React. It is an alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. It is used, when we have complex state like involves objects or arrays, next state is depend on previous one, data share among the components and update state more complex.

3. ## useEffect: 

    It is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.
                                                
    ```useEffect(callback[, dependencies])```

    - callback is the function containing the side-effect logic. callback is executed right after changes were being pushed to DOM.
    - dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.

    **Note:** _Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect()._

4. ## useLayoutEffect: 

    The useLayoutEffect works similarly to useEffect but rather working asynchronously like useEffect hook, it fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM. The hook works in the same phase as componentDidMount and componentDidUpdate methods.
                                                
    ```useLayoutEffect(callback[, dependencies])```

    **Note:** _We should only use useLayoutEffect if useEffect isn’t outputting the expected result._

5. ## useImperativeHandle: 

    It works in the similar phase of useRef hook but only it allows us to modify the instance that is going to be passed with the ref object which provides a reference to any DOM element. Although this hook is used in rare cases, it has some most advanced functionality.

    ```useImperativeHandle(ref, createHandle, [deps])```

6. ## useContext:

    The context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component. It is designed to share data that can be considered as global data for a tree of React components, It accepts the value provided by React.createContext and then re-render the component whenever its value changes but you can still optimize its performance by using memorization.

    ```const context = useContext(initialValue);```

7. ## useRef:

    It is a hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.

    ```const ref = useRef();```

    **Note:**

        - The value of the reference is persisted (stays the same) between component re-renderings;
        - Updating a reference doesn't trigger a component re-rendering.

8. ## useMemo:

    It is a built-in React hook that accepts 2 arguments — a function compute that _computes_ a result and the depedencies array.

    ```const memoizedResult = useMemo(compute, dependencies);```

    During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.

    If during next renderings the dependencies don't change, then useMemo() doesn't invoke compute but returns the memoized value.

9. ## useCallback: 

    It is used when you have a component in which the child is rerendering again and again without need. _useCallback_ will return a memoized version of the callback that only changes if one of the dependencies has changed.

    ```const memoizedCallback = useCallback(() => { doSomething(a, b) },[a, b]);```