import './App.css';
import { Button } from "@material-tailwind/react";
import ComplexNavbar from './ComplexNavbar';

function App() {
  return (
    <div className="App">
      
      <script src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"></script>

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet" />
      
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossOrigin="anonymous" />

      <ComplexNavbar />

      <Button>Button</Button>
    </div>
  );
}

export default App;
