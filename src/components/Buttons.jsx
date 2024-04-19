import {useState} from 'react'
import { Button } from "@mui/material";
import { Delete } from '@mui/icons-material'

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
      }} size='small'   >
        Contained
      </Button>
      <Button color="success" variant="outlined" onClick={handleClick} 
      startIcon={<Delete/>}
      >
        { click ? "outlined" : "secondary"}
      </Button>
      <Button color="info" variant="text" 
        endIcon={<Delete/>}
      >
        text
      </Button>
      <Button color="error" variant="string"
        startIcon={<Delete/>}
        >
        disabled
        string
      </Button>
    </div>
  );
};

export default Buttons;
