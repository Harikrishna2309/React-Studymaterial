import logo from './logo.svg';
import './App.css';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import{Button, Typography} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { green} from '@material-ui/core/colors';


const theme= createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    h3: {
      fontSize: '3rem',
      fontWeight: 300,
      fontFamily: 'Roboto, sans-serif'
    }
  }
})
function App() {
  return (
    <div className="App-header">
   <center>
    <ThemeProvider theme={theme}>
      <Typography variant='h3'>Theming Example</Typography>
      <Button variant='contained' color='primary' style={{margin: "10px"}}>
        Click here!
      </Button>
      <Button variant='contained' color='secondary' style={{margin: "10px"}}>
        Click here!
      </Button>
    </ThemeProvider>
   </center>
    </div>
  );
}

export default App;
