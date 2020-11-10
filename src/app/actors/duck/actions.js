import types from './types'


const add = item => ({
    type: types.ADD_ACTOR, item
})

const reset = () => ({
    type: types.RESET_ACTORS
})


export default {
    add,
    reset
}
