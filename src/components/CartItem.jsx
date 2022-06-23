// Один элемент корзины

function CartItem(props) {
    const {
        id,
        name,
        regularPrice,
        amount,
        removeFromCart = Function.prototype,
        incrimentAmount = Function.prototype,
        decrimentAmount = Function.prototype,
    } = props;

    return (
        <li className='collection-item '>
            {name}{' '}
            <i
                className='material-icons cart-amount'
                onClick={() => decrimentAmount(id)}
            >
                remove
            </i>{' '}
            x {amount}{' '}
            <i
                className='material-icons cart-amount'
                onClick={() => incrimentAmount(id)}
            >
                add
            </i>{' '}
            = {regularPrice * amount} руб.
            <span
                className='secondary-content'
                onClick={() => removeFromCart(id)}
            >
                <i className='material-icons cart-delete'>close</i>
            </span>
        </li>
    );
}

export { CartItem };
