import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Showcase } from './components/Showcase';

function App() {
    return (
        <>
            <Header />
            <Showcase />
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
