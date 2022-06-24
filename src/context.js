import { createContext, useReducer } from 'react';
import { reducer } from './reducer';
// создаем константу, которую мы будем в дальнейшем экспортировать

export const ShowcaseContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isCartShow: false,
    alertName: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };

    value.addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    value.incrimentAmount = (itemId) => {
        dispatch({ type: 'INCRIMENT_AMOUNT', payload: { id: itemId } });
    };

    value.decrimentAmount = (itemId) => {
        dispatch({ type: 'DECRIMENT_AMOUNT', payload: { id: itemId } });
    };

    value.removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
    };

    value.hanldeCartShow = () => {
        dispatch({ type: 'TOGGLE_CART' });
    };

    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data });
    };

    return (
        <ShowcaseContext.Provider value={value}>
            {children}
        </ShowcaseContext.Provider>
    );
};
