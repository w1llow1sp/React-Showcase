import { useContext } from 'react';
import { ShowcaseContext } from '../context';

function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price,
        displayAssets,
    } = props;
    const { addToCart } = useContext(ShowcaseContext);

    const img = displayAssets.map((el) => el.full_background);

    return (
        <div className='card' id={id}>
            <div className='card-image'>
                <img src={img[0]} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>

            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToCart({
                            id,
                            name,
                            regularPrice: price.regularPrice,
                        })
                    }
                >
                    Купить
                </button>
                <span className='right'>{price.regularPrice} руб.</span>
            </div>
        </div>
    );
}

export { GoodsItem };
