import { Switch } from '@mui/material'
import React from 'react'

const SwitchPage = () => {
  return (
    <div>
        <h1>SwitchPage</h1>
        <Switch
        color='secondary'
        defaultChecked='false'
        />
        <Switch
         color='success'
         disableRipple ="false"
        />
    </div>
  )
}

export default SwitchPage