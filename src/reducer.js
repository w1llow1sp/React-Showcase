export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        case 'ADD_TO_CART': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === payload.id
            );
            let newOrder = null;

            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    amount: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            amount: orderItem.amount + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            };
        }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };
        case 'DECRIMENT_AMOUNT':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newAmount = el.amount + 1;
                        return {
                            ...el,
                            amount: newAmount,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'INCRIMENT_AMOUNT':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newAmount = el.amount - 1;
                        return {
                            ...el,
                            amount: newAmount >= 0 ? newAmount : 0,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };
        case 'TOGGLE_CART':
            return {
                ...state,
                isCartShow: !state.isCartShow,
            };
        default:
            return state;
    }
}
