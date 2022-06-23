import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { Alert } from './Alert';

function Showcase() {
    const [goods, setGoods] = useState([]);
    const [loadind, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    // Открываем или скрываем корзину
    const [isCartShow, setCartShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    //* Функция для товаров в корзине: подсчет товаров, вывод итоговой стоимости
    const addToCart = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );
        // получили в функцию addToCart объект с id, названием и ценой (функция выше)

        // проверяем, добавляли ли мы его ранее (ниже)
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                amount: 1,
            };
            setOrder([...order, newItem]);
            // Если нет -- добавляем новый (условие выше)
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        amount: orderItem.amount + 1,
                    };
                    // Если ранее был добавлен -- точечно ищем его позицию, добавляем к amount еще единичку
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.name);
    };
    //Спускаем ее в Cart, чтобы при клике на корзину могло нечто появиться в ней. Функцию addToCart мы должны поймать в GoodsList

    //*--------------------- Создаем функцию удаления товаров из корзины----------
    const removeFromCart = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    };
    //Эту функцию мы спускаем в общий список и будем ловить ее в CartItem

    //*--------------------- Создаем функцию изменение количества товара в корзине (+)--

    const incrimentAmount = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newAmount = el.amount + 1;
                return {
                    ...el,
                    amount: newAmount,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    //*--------------------- Создаем функцию изменение количества товара в корзине (-)--

    const decrimentAmount = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newAmount = el.amount - 1;
                return {
                    ...el,
                    amount: newAmount >= 0 ? newAmount : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    //*--------------------- Создаем функцию управлению показа корзины-------------
    const hanldeCartShow = () => {
        setCartShow(!isCartShow);
    };
    // Функцию hanldeCartShow мы передаем в Cart, чтобы открывать и закрывать ее

    //*--------------------- Создаем функцию закрытия алерта -------------

    const closeAlert = () => {
        setAlertName('');
    };

    useEffect(function getGoods() {
        console.log(API_KEY);
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            });
    }, []);

    //Спускаем функцию addToCart в общий список

    return (
        <main className='container content'>
            <Cart amount={order.length} hanldeCartShow={hanldeCartShow} />
            {loadind ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToCart={addToCart} />
            )}
            {isCartShow && (
                <CartList
                    order={order}
                    hanldeCartShow={hanldeCartShow}
                    removeFromCart={removeFromCart}
                    incrimentAmount={incrimentAmount}
                    decrimentAmount={decrimentAmount}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
}
export { Showcase };
