import { useState } from 'react';
import './App.css';

function CalcDisplay({ dispValue }) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({ buttonLabel, onClick, className }) {
  return (
    <button className={`Button ${className || ''}`} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState('0');

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (value === 'C' || value === 'CLR') {
      setDisp('0');
    } else if (value === '=') {
      let expression = disp.replaceAll('÷', '/').replaceAll('x', '*');
      try {
        setDisp(String(eval(expression)));
      } catch (error) {
        setDisp('Error');
      }
    } else {
      if (disp === '0' || disp === 'Error') {
        setDisp(value);
      } else {
        setDisp(disp + value);
      }
    }
  };

  return (
    <div className='App'>
      <h1 className='Header'>Calculator of Chelsea Jaena Mangulabnan - WMD3A</h1>
      
      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />
        
        <div className='Keypad'>
          <CalcButton buttonLabel={7} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={8} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={9} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={'÷'} onClick={buttonClickHandler} />
          
          <CalcButton buttonLabel={4} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={5} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={6} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={'x'} onClick={buttonClickHandler} />
          
          <CalcButton buttonLabel={1} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={2} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={3} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={'-'} onClick={buttonClickHandler} />
          
          <CalcButton buttonLabel={'C'} className='ClearButton' onClick={buttonClickHandler} />
          <CalcButton buttonLabel={0} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={'='} className='EqualsButton' onClick={buttonClickHandler} />
          <CalcButton buttonLabel={'+'} onClick={buttonClickHandler} />
        </div>

        <div className='NameBadge'>
          MANGULABNAN
        </div>
      </div>
    </div>
  );
}

export default App;