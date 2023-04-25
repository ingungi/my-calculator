import { useState } from "react";

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const mathOps = ['/', '*', '+', '-'];

  const updateCalc = (val) => {
    if (val === '=') {
      if (calc === '') {
        return;
      }
      try {
        setResult(eval(calc));
      } catch {
        setResult("Error");
      }
      setCalc('');
      return;
    }
    if (val === 'AC') {
      setResult('');
      setCalc('');
      return;
    }
    const lastChar = calc[calc.length - 1];
    if (mathOps.includes(val) && mathOps.includes(lastChar)) {
      setCalc(calc.slice(0, -1) + val);
    } else {
      setCalc(calc + val);
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i <= 9; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="container">
      
      <div className="wrapper">
        <div className="screen">
          {result ? <span>({result})</span> : ''}
          {calc || '0'}
        </div>
        <div className="inputs">
          <div className="operators">
            <button onClick={() => updateCalc('*')}>×</button>
            <button onClick={() => updateCalc('-')}>−</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('/')}>÷</button>
            <button onClick={() => updateCalc('AC')}>AC</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={() => updateCalc('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
