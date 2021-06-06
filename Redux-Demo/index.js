/**Basic Cakes example. */

const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

/**Action. Has mandatory 'type' property, other properties can be added as per requirement. */
// {
//     type: BUY_CAKE,
//     info: "Intention to buy the cake"
// }

/**Action Creators. Functions which return actions. */
function buyCakeAction() {
    return {
        type: BUY_CAKE,
        info: "Intention to buy the cake."
    }
}

/**Application state. */
const initialState = {
    numberOfCakes: 10
}

/**Reducer. Takes initial state and action as input, and returns new state. */
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default: return state;
    }
}

/**Redux store. One store for entire app. */
const store = createStore(reducer);

console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state: ', store.getState()));
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());

unsubscribe();