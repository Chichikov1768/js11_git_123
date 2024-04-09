import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect,useRef} from 'react';


const Spoiler = ({children,header='+',open:defaultOpen}) => {
  const [open, setOpen] = useState(defaultOpen)
  

  return (<>
    <div onClick={() => setOpen(!open)}> {header}</div>
      <div >
          
          {open && children}
      </div>
      </>
  )
}

// const RangeInput = ({ value, onChange, min, max, ...restProps }) => {
  //   const [text, setText] = useState(value);
  
  //   useEffect(() => {
  //     setText(value);
  //   }, [value]);
  
  //   const handleTextChange = (event) => {
  //     const newText = event.target.value;
  //     setText(newText);
  //     onChange(newText);
  //   };
  
  //   const inputStyle = {
  //     borderColor: text.length < min || text.length > max ? 'red' : 'initial',
  //   };
  
  //   return (
  //     <input
  //       type="text"
  //       value={text}
  //       onChange={handleTextChange}
  //       style={inputStyle}
  //       {...restProps}
  //     />
  //   );
  // };



  const RangeInput = ({ min, max, ...restProps }) => {
    const [text,setText] = useState("test")
      useEffect(() => { 
        console.log(text)
              })
    
    const inputStyle = {
                borderColor: text.length < min || text.length > max ? 'red' : 'initial',
              };


    

    return  <input type="text" 
    value={text} 
    onChange={e => setText(e.target.value)}
    style = {inputStyle}
    {...restProps}
    
     />
  };

  // const RangeInput = ({ value, onChange, min, max, ...restProps }) => {
  //   const [text, setText] = useState(value);
  
  //   useEffect(() => {
  //     setText(value);
  //   }, [value]);
  
  //   const handleTextChange = (event) => {
  //     const newText = event.target.value;
  //     setText(newText);
  //     onChange(newText);
  //   };
  
  //   const inputStyle = {
  //     borderColor: text.length < min || text.length > max ? 'red' : 'initial',
  //   };
  
  //   return (
  //     <input
  //       type="text"
  //       value={text}
  //       onChange={handleTextChange}
  //       style={inputStyle}
  //       {...restProps}
  //     />
  //   );
  // };
  

  
  const LoginForm = ({ onLogin, min:minInp, max:maxInp,...restProps }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const loginRef = useRef({ touched: false });
    const passwordRef = useRef({ touched: false });
  
    const handleLoginChange = (e) => {
      if (!loginRef.current.touched) {
        loginRef.current.touched = true;
      }
      const newLogin = e.target.value;
      if (/^[a-zA-Z]*$/.test(newLogin)) {
        setLogin(newLogin);
      }
      
    };
  
    const handlePasswordChange = (e) => {
      if (!passwordRef.current.touched) {
        passwordRef.current.touched = true;
      }
      const newPassword = e.target.value;
      if (/^[a-zA-Z]*$/.test(newPassword)) {
        setPassword(newPassword);
      }
      setPassword(e.target.value);
    };

  
    const loginInputStyle = {
      borderColor: ((loginRef.current.touched)&&(login.length < minInp || login.length > maxInp || !/^[a-zA-Z]+$/.test(login))) ? 'red' : 'initial',
    };
  
    const passwordInputStyle = {
      borderColor: ((passwordRef.current.touched)&&(password.length < minInp || password.length > maxInp || !/^[a-zA-Z]+$/.test(password))) ? 'red' : 'initial',
    };

    
    
  
    // const handleLoginChange = (e) => {
    //   const newLogin = e.target.value;
    //   if (/^[a-zA-Z]*$/.test(newLogin)) {
    //     setLogin(newLogin);
    //   }
    // };
  
    // const handlePasswordChange = (e) => {
    //   const newPassword = e.target.value;
    //   if (/^[a-zA-Z]*$/.test(newPassword)) {
    //     setPassword(newPassword);
    //   }
    // };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (login.trim() !== '' && password.trim() !== '') {
        onLogin(login, password);
      } else {
        alert('Please enter login and password');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login:</label>
          <input
            min={minInp}
            max={maxInp}
            {...restProps}
            value={login}
            style={loginInputStyle}
            onChange={handleLoginChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            min={minInp}
            max={maxInp}
            type="password"
            value={password}
            style={passwordInputStyle}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" disabled={login.length < minInp || login.length > maxInp || password.length < minInp || password.length > maxInp}>Login</button>
      </form>
    );
    };
  

  // const PasswordConfirm =({min:minInp,max:maxInp,...restProps})=>{

  //   retutn (
  //     <form>
  //       <label>Type your password</label>
  //     </form>
  //   )

  // }



  const PasswordConfirm = ({ min:minInp=2,max:maxInp=10,onConfirm,...restProps}) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const passwordRef = useRef({ touched: false });
    const confirmPasswordRef = useRef({ touched: false });
    
  
    const handleChangePassword = (e) => {
      if (!passwordRef.current.touched) {
        passwordRef.current.touched = true;
      }
      setPassword(e.target.value);
    };
  
    const handleChangeConfirmPassword = (e) => {
      if (!confirmPasswordRef.current.touched) {
        confirmPasswordRef.current.touched = true;
      }
      setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (confirmPassword.trim() !== '' && password.trim() !== '') {
        onConfirm(confirmPassword, password);
      } else {
        alert('Please enter password and Confirm Password ');
      }
    };

    // const passwordInputStyle = {
    //   borderColor: ((passwordRef.current.touched)&&(password.length < minInp || password.length > maxInp || !/^[a-zA-Z]+$/.test(password))) ? 'red' : 'initial',
    // };

    // const confirmPasswordStyle = {
    //   borderColor: ((confirmPasswordRef.current.touched)&&(confirmPassword.length < minInp ||confirmPassword.length > maxInp || !/^[a-zA-Z]+$/.test(confirmPassword))) ? 'red' : 'initial',
    // };

   

    
  
    const isValid = () => {
      
      if ((password.length < minInp || confirmPassword.length < minInp ||confirmPassword.length > maxInp ||password.length>maxInp)) {
        return false;
      }
      
      if (password !== confirmPassword) {
        return false;
      }
      if ((!/[a-zA-Z]/.test(password) || !/\d/.test(password))) {
        return false;
      }
      return true;
    };

    const passwordInputStyle = {
      borderColor: passwordRef.current.touched && !isValid() ? 'red' : 'initial',
    };
    
    const confirmPasswordStyle = {
      borderColor: confirmPasswordRef.current.touched && !isValid() ? 'red' : 'initial',
    };

   

  
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={handleChangePassword} style={passwordInputStyle} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type='password' value={confirmPassword} onChange={handleChangeConfirmPassword} style={confirmPasswordStyle} />
        </div>
        {((confirmPasswordRef.current.touched&&passwordRef.current.touched)&&!isValid()) && <p style={{ color: 'red' }}>Passwords do not match or are too short or are to long</p>}
        <button type="submit"  disabled={(!isValid())}>Confirm</button>
        </form>
      </div>
    );
  };

////
const Thumbnails = ({ images, current, onChange }) => {
  return (
    <div className="thumbnails">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index}`}
          className={index === current ? "selected" : ""}
          onClick={() => onChange(index)}
          style={{width:'4em',height:'2em',padding:'1em'}}
        />
      ))}
    </div>
  );
};

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const goToPrevious = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handleThumbnailClick = (index) => {
      setCurrentImageIndex(index);
    };
  
    return (
      <div className="carousel">
        <div className="main-image">
          <img
            src={images[currentImageIndex]}
            // alt={`Image ${currentImageIndex}`}
            onClick={goToNext}
            style={{width:'100%',height:'50%'}}
          />
          <div
            className="click-area-left"
            onClick={goToPrevious}
          ></div>
          <div className="click-area-right" onClick={goToNext}></div>
        </div>
        <Thumbnails
          images={images}
          current={currentImageIndex}
          onChange={handleThumbnailClick}
        />
        <button onClick={goToPrevious}>Попереднє/Previous</button>
        <button onClick={goToNext}>Наступне/Next</button>
      </div>
    );
  };

  // const Content = ({ page }) => (
  //   <div style={{ fontSize: '5em' }}>
  //     Сторінка №{page}
  //   </div>
  // );
  
  // const Color = ({ page }) => (
  //   <div style={{ color: `rgb(${page * 16},${page * 16},${page * 16})` }}>
  //     {page}
  //   </div>
  // );
  
  // const Pagination = ({ render: Render, max }) => {
  //   const [currentPage, setCurrentPage] = useState(1);

  //   const firstButton='<<'
  //   const lastButton ='>>'
  
  //   const goToPage = (page) => {
  //     if (page >= 1 && page <= max) {
  //       setCurrentPage(page);
  //     }
  //   };
  
  //   const renderPaginationButtons = () => {
      
  //     const buttons = [];
  //     for (let i = 1; i <= max; i++) {
  //       buttons.push(
  //         <button key={i} onClick={() => goToPage(i)} disabled={i === currentPage}>
  //           {i}
  //         </button>
  //       );
  //     }
  //     return buttons;
  //   };
  
  //   return (
  //     <div>
  //       <Render page={currentPage} />
  //       <div>
  //         <button onClick={() => goToPage(1)} disabled={currentPage === 1} >{firstButton}  </button>
  //         <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
  //         {renderPaginationButtons()}
  //         <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === max}>Next</button>
  //         <button onClick={() => goToPage(max)} disabled={currentPage === max} >{lastButton}</button>
  //       </div>
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
                {renderPaginationButtons()}
                <button onClick={()=>goToPage(currentPage+1)} disabled={currentPage===max}>Next</button>
                <button onClick={()=>goToPage(max)} disabled={currentPage===max}>{lastButton}</button>
              </div>
              
          </div>
      )
  }






function App() {
  const handleLogin = (login, password) => {
    //  логика входа
    console.log('Login:', login);
    console.log('Password:', password);
  };

  const handlePasswordApp = (password, confirmPassword) => {
    //  логика Confirm
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };


  const images = [
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Spoiler header={<h1>Заголовок</h1>} open>
          Контент 1
          <p>
          "Цели никогда не должны быть простыми. Они должны быть неудобными, чтобы заставить вас работать" 
        </p>
      </Spoiler>
      <Spoiler>
          <h2>Контент 2</h2>
          <p>
              Такие дела. Мне кажется, это девиз нашей домашки.
          </p>
      </Spoiler>
      <RangeInput min={2} max ={10}></RangeInput>
      <RangeInput min={3} max ={7}></RangeInput>
      <LoginForm onLogin={handleLogin} min={4} max ={10}></LoginForm>
      <PasswordConfirm onConfirm = {handlePasswordApp} min={2} max={10}/>
      <Carousel images={images} />
      <Pagination max={10} render={Content} />
      <Pagination max={16} render={Color} />
      
    </div>
  );
}

export default App;
