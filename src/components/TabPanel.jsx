import { Tab, Tabs, AppBar  } from '@mui/material'
import {useState} from 'react'

const TabPage = () => {
    const [click, setClick] = useState(0)

    const handleChange = (e, val) =>{
        setClick(val)
       
    }
  return (
    <div>
        <h1>TabPanel</h1>
       <AppBar position='static' color='warning'>
        <Tabs onChange={handleChange} value={click} color='success' >
            <Tab label='item-1'  > </Tab>
            <Tab label='item-2' > </Tab>
            <Tab label='item-3' > </Tab>
        </Tabs>
       </AppBar>
      <TabPanel value={click} index={0}>one</TabPanel>
      <TabPanel value={click} index={1}>two</TabPanel> 
      <TabPanel value={click} index={2}>three</TabPanel>
    </div>
  )
}

export default TabPage;

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div>
            {value === index && (
                <h1>{children}</h1>
            )}
        </div>
    );
}