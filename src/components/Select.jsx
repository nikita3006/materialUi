import {useState} from 'react'
import { Select, MenuItem} from '@mui/material';

const SelectBox = () => {
    const[select, setSelect] = useState('')

    const handleChange =(e, value) =>{
        setSelect(e.target.value)
    }
  return (
    <div>
        <h1> Select </h1>
        <Select
        value={select} 
        displayEmpty 
        onChange={handleChange}
        >
        <MenuItem value='' variant='standard' >select</MenuItem>
            <MenuItem value={1} > Node</MenuItem>
            <MenuItem value={2}> fds</MenuItem>
            <MenuItem value={3}> Nosdfsde</MenuItem>
            <MenuItem value={4}> Nfsfode</MenuItem>
            <MenuItem value={5}> sdfs</MenuItem>
            <MenuItem value={6}> Nsdfsfode</MenuItem>
            <MenuItem value={7}> sdfsf</MenuItem>
            <MenuItem value={8}> sdfs</MenuItem>
            <MenuItem value={9}> dfs</MenuItem>
        </Select>
    </div>
  )
}

export default SelectBox