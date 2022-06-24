import { useContext } from 'react';
import { ShowcaseContext } from '../context';

function Cart(props) {
    const { order, hanldeCartShow = Function.prototype } =
        useContext(ShowcaseContext);

    const amount = order.length;

    return (
        <div
            className='cart   teal darken-1  white-text'
            onClick={hanldeCartShow}
        >
            <i className='material-icons'>shopping_basket</i>
            {amount ? (
                <span className='cart-amount cart-number'>{amount}</span>
            ) : null}
        </div>
    );
}

// Функцию hanldeCartShow нужна для вызова полученой функции
// При клике в любом месте

export { Cart };
