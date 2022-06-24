import { useContext } from 'react';
import { ShowcaseContext } from '../context';

// Один элемент корзины

function CartItem(props) {
    const { id, name, regularPrice, amount } = props;

    const { removeFromCart, incrimentAmount, decrimentAmount } =
        useContext(ShowcaseContext);

    return (
        <li className='collection-item name container-cart '>
            <div className='name'>{name}</div>{' '}
            <i
                className='material-icons cart-amount delete'
                onClick={() => incrimentAmount(id)}
            >
                remove
            </i>
            <div className='amount'> x {amount}</div>
            <i
                className='material-icons cart-amount add'
                onClick={() => decrimentAmount(id)}
            >
                add
            </i>{' '}
            <div className='total-price'>= {regularPrice * amount} руб.</div>
            <span
                className='secondary-content delete-all'
                onClick={() => removeFromCart(id)}
            >
                <i className='material-icons cart-delete delete-button'>
                    close
                </i>
            </span>
        </li>
    );
}

export { CartItem };
