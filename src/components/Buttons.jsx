import {useState} from 'react'
import { Button } from "@mui/material";

const Buttons = () => {
  const [click, setClick] = useState('')

  const handleClick = () =>{
    setClick(!click)
  }
  return (
    <div>
      <h1>Buttons</h1>
      <button>send me</button>
      <Button color="secondary" variant="contained" onClick={()=>{
        alert("button clicked")
      }}>
        Contained
      </Button>
      <Button color="success" variant="outlined" onClick={handleClick}>
        { click ? "outlined" : "secondary"}
      </Button>
      <Button color="info" variant="text">
        text
      </Button>
      <Button color="error" variant="string">
        disabled
        string
      </Button>
    </div>
  );
};

export default Buttons;
