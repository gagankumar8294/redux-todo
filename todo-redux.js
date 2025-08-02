const redux = require("redux");

// Actions
const ADD_TODO = "ADD TODO";
const TOGGLE_TODO = "TOGGLE TODO";

// Action Creators
const addToDo = (text) => ({text, type: ADD_TODO})
const toggleToDo = (index) => ({ index, type: TOGGLE_TODO})

// Initial State
const initialState = {
    todo:[]
}

// Reducer
function todoReducer(state=initialState, action) {

    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todo,
                    {
                        text:action.text,
                        completed:false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: todos.map((todo, i) => {
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
