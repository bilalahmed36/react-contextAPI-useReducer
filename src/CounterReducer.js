const CounterReducer = (action, state) => {
    switch(action.type) {
        case "Add":
            return {
                state: state + 1
            }
    }
}