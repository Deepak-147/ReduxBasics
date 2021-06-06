/**Cake and Ice cream example, having multiple reducers. */

const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAMS = "BUY_ICECREAMS"

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

function buyIceCreamAction() {
    return {
        type: BUY_ICECREAMS,
        info: "Intention to buy ice cream."
    }
}

/**Application state. */
const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIceCreams: 20
}

/**Reducer. Takes initial state and action as input, and returns new state. */
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }   

        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAMS: 
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }

        default: return state;
    }
}

/**Combining multiple reducers. */
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

/**Redux store. One store for entire app. */
const store = createStore(rootReducer);

console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state: ', store.getState()));
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyIceCreamAction());
store.dispatch(buyIceCreamAction());
store.dispatch(buyIceCreamAction());

unsubscribe();