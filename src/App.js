 import './App.scss';
import { ConfigProvider, Select } from 'antd';
import Home from './Pages/Home/Home'; 
import { ThemeProvider } from 'styled-components'; 
import { useColorConfig } from './Config/UseColorConfig';
import {  Components, getAntTheme, getColor } from './Config/Variable';

function App() {
  const [handleChange, themeColor] = useColorConfig(); 
    
  return ( 
    <ConfigProvider
      theme={{
        token: getAntTheme(themeColor),
        components: Components(themeColor),
        
      }}  
  >
    <ThemeProvider theme={getColor(themeColor)}>
    <Select
      defaultValue="black"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        {
          value: 'black',
          label: 'Black',
        },
        {
          value: 'green',
          label: 'Green',
        },
        {
          value: 'red',
          label: 'Red',
        },
      ]}
    />
    <Home />
    </ThemeProvider>
  </ConfigProvider>
  );
}

export default App;
