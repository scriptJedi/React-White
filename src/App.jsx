import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCheckSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCoffee, faCheckSquare, faTimes);

// import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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
