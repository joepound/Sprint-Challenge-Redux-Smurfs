# 1 Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

The Array object (and Objects in general) in Javascript has several methods that allow for data manipulation without side effects on these array objects.

## `.map(|callback|)`

Returns a new array of the same length as the original. Some variation of the original element's values (determined by the callback argument) will be used as the new element's value - these values are also 'mapped' to the same array indices.

## `.filter(|callback|)`

Returns a new array <= the length of the original. The callback argument will return a Boolean value that determines whether or not an element from the original array should be included in the new array to be returned by `.filter`.

## `Object.assign(|target|, |...sources|)`

This method takes in the target object's key-value pairs, creates a new object with the same key-value pairs, and then assigns key-value pairs from a variable number of source arguments to the new Object. Arrays (and strings) will have their indices used as keys, and primitives will be ignored. The new Object will be returned, without modifications to any of the method arguments.

# 2. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a Redux application?

## Actions

An action

## Reducers



## Store (Redux)



# 3. What is the difference between application state and component state? When would be a good time to use one over the other?



# 4. What is `middleware`

'Middleware' are software tools used for intercepting processes inside a given program, manipulating its behavior in some form.

# 5. Describe `redux-thunk`, what does it allow us to do? How does it change our action creators?

`redux-thunk` is a middleware tool that allows for the utilization of thunks (a return value that is a function) in Redux. It does not exactly change what the action creators do; rather, it makes them behave asynchronously (not in sequence - earlier/later than other code, depending on connection & processing time).

# 6. Which `react-redux` method links up our `components` with our `redux store`?

`connect()` is a function (under the HOC pattern) used to link up a component to the redux store. This effectively copies over actions and state values - not all of them though, but just the ones that are needed.