export const state = () => ({
    counter:0,
})

export const mutation = {
    increment(state) {
        state.counter++
    },
}