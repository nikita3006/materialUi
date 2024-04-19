import {useState} from 'react';
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const CheckBoxes = () => {
    const [name, setName] = useState([])
    const getValue =(e) =>{
        let data= name;
        data.push(e.target.value)
      console.warn(data)
    }
  return (
    <div>
         <h1>
            <Checkbox 
            color='secondary' 
            value= 'nikita'
            onChange={(e)=>{getValue(e)}}
            />
             <Checkbox 
            color='secondary' 
            value= 'geeta'
            onChange={(e)=>{getValue(e)}}
            />
             <Checkbox 
            color='secondary' 
            value= 'seeta'
            onChange={(e)=>{getValue(e)}}
            />
             <Checkbox 
            color='secondary' 
            indeterminate
            onChange={(e)=>{getValue(e)}}
            />
            <Checkbox 
            color='primary' 
            icon={<FavoriteBorder/>}
            checkedIcon={<Favorite/>}
            onChange={(e)=>{getValue(e)}}
            />
            <Checkbox 
            color='secondary' 
            icon={<Favorite/>}
            checkedIcon={<Favorite/>}
            onChange={(e)=>{getValue(e)}}
            />
         </h1>
    </div>
  )
}

export default CheckBoxes;