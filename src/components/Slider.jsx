import { Slider } from '@mui/material';

const SliderPage = () => {
    const mark =[
        {
            value:0,
            label:'start'
        },
        {
            value:50,
            label:'half-mid'
        },
        {
            value:100,
            label:'mid'
        },
        {
            value:150,
            label:'max-mid'
        },
        {
            value:200,
            label:'end'
        }
    ]

    const getValue = (e, val) =>{
            console.log(val)
    }
  return (
    <div>
        <h1>Slider</h1>
        <div style={{width:'300px',marginLeft:'5rem', height:'300px'}}>
        <Slider 
            color='success'
            defaultValue={100}
            valueLabelDisplay='auto'
            max={200} 
            step={50}
            marks={mark}
            onChange={getValue}
            orientation='vertical'
           />
        </div>
    </div>
  )
}

export default SliderPage;