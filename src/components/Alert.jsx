import { useEffect, useContext } from 'react';
import { ShowcaseContext } from '../context';

function Alert() {
    const { alertName: name = '', closeAlert = Function.prototype } =
        useContext(ShowcaseContext);

    //отрисовываем по необходимости
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);
    // сама подсказка что что-то добавлено
    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    );
}

export { Alert };
