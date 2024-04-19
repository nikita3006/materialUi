import {useState} from 'react'
import { TextField } from '@mui/material';

const TextFieldPage = () => {
    const [click, setClick] = useState('')
    const handleChange = (e) =>{
        console.log(e.target.value)
    }
  return (
    <div>
        <h1>Text Field</h1>
            <TextField
            label ='enter name'
            color= 'secondary'
            variant = 'standard'
            onChange={handleChange}
            multiline = {true}
            />
             <TextField
            label ='enter name'
            color= 'secondary'
            variant = 'filled'
            type='password'
            size='small'
            />
             <TextField
            label ='enter name'
            color= 'secondary'
            variant = 'outlined'
            type='number'
            />
    </div>
  )
}

export default TextFieldPage