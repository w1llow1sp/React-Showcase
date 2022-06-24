import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Showcase } from './components/Showcase';
import { ContextProvider } from './context';

function App() {
    return (
        <>
            <Header />
            <ContextProvider>
                <Showcase />
            </ContextProvider>
            <Footer />
        </>
    );
}

export default App;

//TODO: 1.Добавить пагинацию
//TODO: 2.Добавить localstorage
//TODO: 3.Сделать простенький лого для своих работ
//// 4.Исправить косяк с CartList.jsx
//// 5.Исправить Alert.jsx (слишком сильно липнет к низу на мобилке)
//// 6.Исправить цвет у корзинки (сливается)
//// 7.Исправить расположение элементов  корзины (ломается при 470px) (сливается)
//// 8.Сделать скроллбар для корзины
