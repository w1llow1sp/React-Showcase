// Список всего что есть в корзине
import { CartItem } from './CartItem';

function CartList(props) {
    const {
        order = [],
        hanldeCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        decrimentAmount,
        incrimentAmount,
    } = props;

    const totalPrice = order.reduce((sum, element) => {
        return sum + element.regularPrice * element.amount;
    }, 0);

    return (
        <ul className='collection cart-list wrap-cart-list'>
            <i className='material-icons cart-close' onClick={hanldeCartShow}>
                close
            </i>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <CartItem
                        key={item.id}
                        removeFromCart={removeFromCart}
                        decrimentAmount={decrimentAmount}
                        incrimentAmount={incrimentAmount}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item '> Корзина пуста</li>
            )}

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
