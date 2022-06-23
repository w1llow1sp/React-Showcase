function Cart(props) {
    const { amount = 0, hanldeCartShow = Function.prototype } = props;

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
