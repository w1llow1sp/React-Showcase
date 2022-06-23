import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
    const { goods = [], addToCart = Function.prototype } = props;
    //здесь он будет получать по умолчанию массив

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} addToCart={addToCart} />
            ))}
        </div>
    );
    // передадим ее еще и в GoodsItem
}

export { GoodsList };
