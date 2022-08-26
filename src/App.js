import './App.css';
import { useState,useEffect } from 'react';
import NumberFormat from 'react-number-format';


function App() {

  const [prestate, setPrestate] = useState("")
  const [curState, setCurState] = useState("")
  const [first, setFirst] = useState(0)
  const [operator, setOperator] = useState(null)
  const [total, setTotal] = useState(false)
  
  const inputNum =(e)=>{
    if (curState.includes(".") && e.target.innerText ===  ".") return

    if ( total ){
      setPrestate("")
    }

    curState ? setCurState ((pre) => pre + e.target.innerText)
    : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect (()=>{
    setFirst(curState)
  },[curState])

  useEffect (()=>{
    setFirst("0")
  },[])

  const equals =(e)=>{
    if (e?.target.innerText === "*"){
      setTotal(true)
    };
    let cal 
  switch (operator) {
    case "/":
      cal = String(parseFloat(prestate)/ parseFloat(curState));     
      break;
    case "+":
        cal = String(parseFloat(prestate)+ parseFloat(curState));     
      break;
    case "X":
        cal = String(parseFloat(prestate)* parseFloat(curState));     
      break;
    case "-":
      cal = String(parseFloat(prestate)- parseFloat(curState));     
      break;
      default:
        return
  }
  setFirst("")
  setPrestate(cal)
  setCurState("")
  };

  

  const operatorType =(e)=>{
    setTotal(false)
    setOperator(e.target.innerText)
    if (curState === "") return
    if (prestate !== "") {
      equals()
    }setPrestate(curState)
    setCurState("")
  }

  const reset =()=>{
    setPrestate("")
    setCurState("")
    setFirst("0")
  }

  const showDot =(e)=>{
    setFirst( "." + e.target.innerText)
  }

  return (
    <>
      <div className=' mx-auto my-4'>
        
        

        <div className='col-lg-5 col-md-12 p-5 rounded mx-auto'>
          <div className='container'>
            <div className='row'>
            <div className='col-lg-12 col-sm-12 form-control p-3 mx-auto' style={{height:"100px"}}>
              <p className='text-end display-6'>
                <b>
                {first !=="" || first === "0" ? 
                  <NumberFormat 
                    value={first}
                    displayType={"text"} 
                    thousandSeparator={true}
                  />
              :   <NumberFormat 
                    value={prestate}
                    displayType={"text"}
                    thousandSeparator={true}
                 />
                }</b>
                </p>
            </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={inputNum}><b>7</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light mx-auto p-3 form-control shadow-sm' onClick={inputNum}><b>8</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light mx-auto p-3 form-control shadow-sm' onClick={inputNum}><b>9</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-danger mx-auto p-3 form-control shadow-sm' onClick={reset}><b>Del</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={inputNum}><b>4</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={inputNum}><b>5</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light mx-auto p-3 form-control shadow-sm' onClick={inputNum}><b>6</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={operatorType}><b>+</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={inputNum}><b>1</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={inputNum}><b>2</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={inputNum}><b>3</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={operatorType}><b>-</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={showDot}><b>.</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={inputNum}><b>0</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={operatorType}><b>/</b></button>
              </div>
              <div className='col-lg-3 w-25  p-2'>
                <button className='text-center btn btn-light  mx-auto p-3 form-control shadow-sm' onClick={operatorType}><b>X</b></button>
              </div>
              <div className='col-lg-6   p-2'>
                <button className='text-center text-light btn btn-info  mx-auto p-3 form-control shadow-sm' onClick={reset}><b>AC</b></button>
              </div>
              <div className='col-lg-6   p-2'>
                <button className='text-center text-light btn btn-warning  mx-auto p-3 form-control shadow-sm'onClick={equals}><b> =</b></button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
