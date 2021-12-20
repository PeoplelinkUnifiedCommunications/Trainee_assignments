const initial = [];

export default function reducer(state = initial, action) {
    const { type, payload } = action;
    switch (type) {
        case "ADD":
            return [...state, payload];
        default:
            return state;
    }
}
