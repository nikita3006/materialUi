import Buttons from "./components/Buttons.jsx"
import CheckBoxes from "./components/CheckBoxes.jsx"
import RadioButton from "./components/RadioButton.jsx"
import RangeSliderPage from "./components/RangeSlider.jsx"
import SelectBox from "./components/Select.jsx"
import SliderPage from "./components/Slider.jsx"
import TextFieldPage from "./components/TextField.jsx"



const App = () => {
  return (
    <div>
      <h1>REact UI</h1>
       <Buttons/>
       <CheckBoxes/>
       <RadioButton/>
       <SliderPage/>
       <RangeSliderPage/>
       <SelectBox/>
       <TextFieldPage/>
    </div>
  )
}

export default App