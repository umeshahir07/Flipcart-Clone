const abc = []

export const myReducer = (state = abc, action) => {
    switch (action.type) {
        case "ADD": {
            const abc = state.find(item => item.id === action.payload.id);
            if (abc) {
                return state.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item);
            }
            return [...state, { ...action.payload, qty: 1 }];
        }
        case "INC": {
            return state.map(item => item.id === action.payload ? { ...item, qty: item.qty + 1 } : item);
        }
        case "DEC": {
            return state.map(item => item.id === action.payload && item.qty>1 ? { ...item, qty: item.qty - 1 } : item);
        }
        case "REMOVE": {
            return state.filter(item => item.id !== action.payload);
        }
        default: {
            return state;
        }
    }
}
