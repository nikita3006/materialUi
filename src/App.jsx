import { Routes, Route } from "react-router-dom";
import Buttons from "./components/Buttons.jsx";
import CheckBoxes from "./components/CheckBoxes.jsx";
import LayoutPage from "./components/Layout.jsx";
import MenuPage, { About, Home } from "./components/Menu.jsx";
import RadioButton from "./components/RadioButton.jsx";
import RangeSliderPage from "./components/RangeSlider.jsx";
import SelectBox from "./components/Select.jsx";
import SliderPage from "./components/Slider.jsx";
import SwitchPage from "./components/Switch.jsx";
import TabPage from "./components/TabPanel.jsx";
import TextFieldPage from "./components/TextField.jsx";

const App = () => {
  return (
    <div>
      <h1>React UI</h1>
      <Routes>
        <Route exact path="/" element={
          <>
            <Buttons />
            <CheckBoxes />
            <RadioButton />
            <SliderPage />
            <RangeSliderPage />
            <SelectBox />
            <TextFieldPage />
            <SwitchPage />
            <LayoutPage />
            <TabPage />
            <MenuPage />
          </>
        } />
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>

    </div>
  );
};

export default App;
