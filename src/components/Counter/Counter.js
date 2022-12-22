import React, {useState, useRef} from 'react';

function Counter(props) {     
    
    let [num, setNum]= useState(0);
    const inputRef = useRef(null);

    let incNum = () =>{
        if(num<10)
        {
            setNum(Number(num)+1);
        }
    };
    let decNum = () => {
        if(num>0)
        {
            setNum(num - 1);
        }
    }
    let handleChange = (e)=>{
        setNum(e.target.value);
    }


    return(
        <div className="counter">
            <button className={'counter__btn'} onClick={decNum}>-</button>
            <input id={'counter'} className={'counter__value'} type="text" value={num} ref={inputRef} onChange={handleChange} readOnly="readonly" />
            <button className={'counter__btn'} onClick={incNum}>+</button>
        </div>
    );
}

export default Counter;