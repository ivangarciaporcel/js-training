const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

function removeTodoAction(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

function toggleTodoAction(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

function addGoalAction(goal) {
    return {
        type: ADD_GOAL,
        goal,
    }
}

function removeGoalAction(id) {
    return {
        type: REMOVE_GOAL,
        id,
    }
}

/**
 * Reducers must be pure functions:
 * 1. Return the same result if the same arguments are passed in
 * 2. Depend solely on the arguments passed into them
 * 3. Do not produce side effects, such as API requests and I/O operations
 */

/**
 * Custom reducer method for todos
 * @param state
 * @param action
 * @returns {(*)[]|*[]}
 */
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case TOGGLE_TODO:
            return state.map(todo => todo.id !== action.id ? todo :
                Object.assign({}, todo, {complete: !todo.complete}))
        default:
            return state
    }
}

/**
 * Custom reducer method for goals
 * @param state
 * @param action
 * @returns {*[]}
 */
function goals(state = [], action) {
    switch (action.type) {
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return state.filter(goal => goal.id !== action.id)
        default:
            return state
    }
}

function rootReducer(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action)
    }
}

function createStore(reducer) {
    /*
        The store should have four parts
        1. The state
        2. Get the state.
        3. Listen to changes on the state
        4. Update the state
     */
    let state
    let listeners = []
    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)
        console.log('igp: listeners', listeners)
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}
