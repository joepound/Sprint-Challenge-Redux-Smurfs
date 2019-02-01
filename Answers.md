# 1 Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

The `Array` object (and `Objects` in general) in Javascript has several methods that allow for data manipulation without side effects on these array objects.

## `.map(|callback|)`

Returns a new array of the same length as the original. _Some variation of the original element's values_ (determined by the callback argument) will be used as the new element's value - these values are also 'mapped' to the same array indices.

## `.filter(|callback|)`

Returns a new array <= the length of the original. The _callback argument will return a Boolean value that determines whether or not an element from the original array should be included in the new array_ to be returned by `.filter`.

## `Object.assign(|target|, |...sources|)`

This method takes in the target object's key-value pairs, creates a new object with the same key-value pairs, and then assigns key-value pairs from a variable number of source arguments to the new Object. _Arrays (and strings) will have their indices used as keys_, and _primitives will be ignored_. The new Object will be returned, without modifications to any of the method arguments.

# 2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a Redux application?

## Actions

An `action` is essentially an object with a string (conventionally a STRING_CONSTANT) indicating its `type` and an _optional_ `payload` (a value to be used in a reducer, usually for updates). It is akin to **instructions** to be used by reducers.

## Reducers

A `reducer` is a function without side effects that is essentially a representation of the `state`. In effect, they _take in the current `state` and an `action`_, and _return a new state `Object` with the updated values_.

## Store (Redux)

The `store` is essentially a container for the immutable state object to be used by the entire application (hence making it a **global reference** for getting application state values), along with the corresponding set of `action`s and `reducer`s.

# 3. What is the difference between application state and component state? When would be a good time to use one over the other?

An **application state** is a _global `state`_ that can be accessed by _any component_ in the application. A **component state**, on the other hand, is _local_ to (only accessible in) the component (or sometimes component groups, via 'prop-drilling' - passing `props` to other components).

**Local component states** would be useful for _short-term storage of values that might be frequently and quickly changed_, including data that may even be used for operations on the application state. On the other hand, the **global application** state would be useful for _persisting information throughout the current page load_ (particularly noticeable for full-on SPA's), especially as a _global reference of state values and data pulled from outside sources_.

# 4. What is `middleware`

'Middleware' are software tools used for _intercepting processes_ inside a given program, _manipulating its behavior_ in some form.

# 5. Describe `redux-thunk`, what does it allow us to do? How does it change our action creators?

`redux-thunk` is a **middleware tool** that allows for the utilization of **thunks** (a return value that is a function) in Redux. It does not exactly change what the action creators do; rather, _it makes them behave **asynchronously**_ (not in sequence - earlier/later than other code, depending on connection & processing time).

# 6. Which `react-redux` method links up our `components` with our `redux store`?

`connect()` is a function (using the **HOC** composition pattern) used to link up a component to the redux store. This effectively copies over actions and state values - _not all of them though, but just the ones that are needed_.