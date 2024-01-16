import React, { useState, useEffect } from 'react';

// import icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCoffee, faCheckSquare, faTimes} from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
library.add(faCoffee, faCheckSquare, faTimes);

// import components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// import blocks
import Hero from "./blocks/Hero.jsx";

// import styles
import './assets/App.css'

function App() {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <main className="page">
                    <Hero/>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default App


// // App.js
// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import RegistrationForm from './components/Form';
// import * as Blocks from './blockImports'; // Импорт всех блоков из blockImports
//
// const App = () => {
//     const [blocks, setBlocks] = useState([]);
//
//     useEffect(() => {
//         // Создайте массив блоков с компонентами
//         const blockComponents = [
//             { blockComponent: Hero },
//             { blockComponent: Block2 },
//             // ... добавьте остальные блоки
//         ];
//
//         // Перемешайте массив
//         const shuffledBlocks = shuffle(blockComponents);
//
//         // Выберите первые 5 блоков из перемешанного массива
//         const selected = shuffledBlocks.slice(0, 5);
//
//         // Установите выбранные блоки в состояние
//         setBlocks(selected);
//     }, []);
//
//     return (
//         <div>
//             <Header />
//             <RegistrationForm />
//             {blocks.map((block, index) => (
//                 <Block key={index} blockComponent={block.blockComponent} />
//             ))}
//             <Footer />
//         </div>
//     );
// };
//
// export default App;
//
// // Функция для перемешивания массива
// function shuffle(array) {
//     let currentIndex = array.length,
//         randomIndex;
//
//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;
//
//         [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//     }
//
//     return array;
// }
