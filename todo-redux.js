const redux = require("redux");

// Actions
const ADD_TODO = "ADD TODO";
const TOGGLE_TODO = "TOGGLE TODO";

// Action Creators
const addToDo = (text) => ({text, type: ADD_TODO})
const toggleToDo = (index) => ({ index, type: TOGGLE_TODO})

// Initial State
const initialState = {
    todos:[]
}

// Reducer
function todoReducer(state=initialState, action) {

    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text:action.text,
                        completed:false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if(i==action.index) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}

// Create Store
const store = redux.createStore(todoReducer);

// dispatch actions
store.dispatch(addToDo("Study at 8"));
store.dispatch(addToDo("office at 9"));
store.dispatch(toggleToDo(0));

// Read Data from the store
console.log(store.getState());