import {useState} from 'react'

import { Radio } from '@mui/material';

const RadioButton = () => {
    const[ btn, setBtn] = useState('')

    const handleClick =(e)=>{
        setBtn(e.target.value)
    }
  return (
    <div>
        <h1> Radio button </h1>
        <div>
            <Radio
            value='male'
            color='info'
            checked={btn === "male"}
            onChange={handleClick}/>
            <span>Male</span>
        </div>

       <div>  
            <Radio
            value='female' 
            color='secondary'
            checked={btn === "female"}
            onChange={handleClick}/>
            <span>FeMale</span>
        </div>

        <div>  
            <Radio
            value='other' 
            color='secondary'
            checked={btn === "other"}
            onChange={handleClick}/>
            <span>Other</span>
        </div>
    </div>
  )
}

export default RadioButton