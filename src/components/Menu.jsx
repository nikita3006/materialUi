import  { useState } from 'react';
import { Link} from "react-router-dom";
import {Button, Menu, MenuItem} from '@mui/material'

const MenuPage = () => {
    const[click, setClick] = useState(null)
    const handleClick = () =>{
        setClick(!click)
    }
    const closeMenu = () =>{
        setClick(click)
    }
  return (
    <div> 
        <h1>Menu Page</h1>
       
       
       <Button
        variant='contained'
        style={{margin:'20px'}}
        onClick={handleClick}
       > Menus
           {
         <Menu 
            open={click} 
            onClose={closeMenu}
            style={{marginLeft:'100px'}}>
                        <MenuItem> <Link to='/home'>Home</Link></MenuItem>
                        <MenuItem> <Link to='/about'>About</Link></MenuItem>
                        
                     </Menu> 
           }
       </Button>
    </div>
  )
}

export default MenuPage

export function Home(){
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}
export function About(){
    return(
        <div>
            <h1>About</h1>
        </div>
    )
}