/**Async actions creators, using thunk. */

const redux = require('redux');
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUserRequestAction = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
};

const fetchUsersSuccessAction = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};

const fetchUsersFailureAction = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
};

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequestAction());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //response.data
                const users = response.data.map(user => user.id);
                dispatch(fetchUsersSuccessAction(users));
            })
            .catch(error => {
                //error.message
                const errorMsg = error.message
                dispatch(fetchUsersFailureAction(errorMsg));
            })
    }
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchUsers());