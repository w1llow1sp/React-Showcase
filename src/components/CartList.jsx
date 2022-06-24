import { useContext } from 'react';
import { ShowcaseContext } from '../context';
import { CartItem } from './CartItem';

function CartList() {
    const { order = [], hanldeCartShow = Function.prototype } =
        useContext(ShowcaseContext);

    const totalPrice = order.reduce((sum, element) => {
        return sum + element.regularPrice * element.amount;
    }, 0);

    return (
        <ul className='collection cart-list wrap-cart-list'>
            <i className='material-icons cart-close' onClick={hanldeCartShow}>
                close
            </i>
            <li className='collection-item active'>Корзина</li>
            <div className='scrollbar-handler'>
                {order.length ? (
                    order.map((item) => <CartItem key={item.id} {...item} />)
                ) : (
                    <li className='collection-item '> Корзина пуста</li>
                )}
            </div>
            <li className='collection-item active Heading-h6'>
                Общая стоимость: {totalPrice} руб.
            </li>
            <li className='collection-item '>
                <span className='secondary-conten'>
                    <button className=' btn small-btn'>Оформить</button>
                </span>
            </li>
        </ul>
    );
}

export { CartList };
