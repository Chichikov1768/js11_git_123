import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// const Thumbnails = ({ images, current, onChange }) => {
//   return (
//     <div className="thumbnails">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Thumbnail ${index}`}
//           className={index === current ? "selected" : ""}
//           onClick={() => onChange(index)}
//         />
//       ))}
//     </div>
//   );
// };

// const Carousel = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const goToPrevious = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleThumbnailClick = (index) => {
//     setCurrentImageIndex(index);
//   };

//   return (
//     <div className="carousel">
//       <div className="main-image">
//         <img
//           src={images[currentImageIndex]}
//           alt={`Image ${currentImageIndex}`}
//           onClick={goToNext}
//         />
//         <div
//           className="click-area-left"
//           onClick={goToPrevious}
//         ></div>
//         <div className="click-area-right" onClick={goToNext}></div>
//       </div>
//       <Thumbnails
//         images={images}
//         current={currentImageIndex}
//         onChange={handleThumbnailClick}
//       />
//       <button onClick={goToPrevious}>Попереднє</button>
//       <button onClick={goToNext}>Наступне</button>
//     </div>
//   );
// };


const Content = ({page}) => 
<div style={{fontSize: '5em'}}>
    Сторінка №{page}
</div>

const Color = ({page}) =>
<div style={{color: `rgb(${page*16},${page*16},${page*16})`}}>
    {page}
</div>

const Pagination = ({render:Render, max}) => {
  const [currentPage,setcurrentPage]=useState(1);

  const firstButton='<<'
  const lastButton ='>>'

  const goToPage=(page)=>{
    //проверка страницы и присваивание значения текущей страницы 
    if(page>=1 && page<=max){
      setcurrentPage(page);
    }
  };

  const renderPaginationButtons = () =>{
    const buttons = [];
    for(let i = 1;i <= max; i++){
      buttons.push(
        <button key ={i} onClick={()=>goToPage(i)} disabled={i===currentPage}>
          {i}
        </button>
      );
    }
    return buttons;
  }

    return (
        <div>
            <Render page={currentPage} />
            <div>
              <button onClick={()=>goToPage(1)}>{firstButton}</button>
              <button onClick={(()=>goToPage(currentPage-1))} disabled={currentPage===1}>Previous</button>
              {renderPaginationButtons}
              <button onClick={()=>goToPage(currentPage+1)} disabled={currentPage===max}>Next</button>
              <button onClick={()=>goToPage(max)} disabled={currentPage===max}>{lastButton}</button>
            </div>
            
        </div>
    )
}



// <Pagination max={10} render={Content} />
// <Pagination max={16} render={Color} />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
