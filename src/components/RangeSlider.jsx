import {useState} from 'react';
import { Slider } from "@mui/material";

const RangeSliderPage = () => {
    const[range, setRange] = useState([40, 50])
    const handleChange =(e, val)=>{
        setRange(val)
    }
  return (
    <div>
      <h1> Range Slider</h1>
    <div style={{width:'300px', marginLeft:'10rem'}}>
            <Slider
            value={range}
            max={200}
            onChange={handleChange}
            valueLabelDisplay='auto'
            />
    </div>
    </div>
  );
};

export default RangeSliderPage;
