import { createStore } from 'redux';

//Action generators - functions that return action objects
// payload = {} set up default object
const incrementCount = ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( { count } ) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// destructuring example:
// const add = ({a, b}, c) => {
//     return a + b + c;
// };
// console.log(add({ a:1, b:2}, 100));

//Reducer: it does not change state or count, just returns new object
const countReducer = ( state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
    // if (action.type === 'INCREMENT') {
    //     return {
    //         count: state.count + 1
    //     };
    // } else {
    //     return state;
    // }
}

const store = createStore(countReducer);

//subscribe is called all the time when the state is changing
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

console.log(store.getState());

//to incrememnt the count. As many time we repeat the code below, that many times we will increase our count (dispatch actions)

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount());

store.dispatch(resetCount());
// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(setCount({ count: 3101 }));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

unsubscribe();

