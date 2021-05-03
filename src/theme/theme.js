
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#21ce99' }, // Purple and green play nicely together.
    secondary: { main: '#fff' }, // This is just green.A700 as hex.
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          color: '#21ce99',
        },
        body: {
          'scrollbar-base-color': '#efefef',
          'scrollbar-face-color': 'gray',
          'scrollbar-3dlight-color': 'gray',
          'scrollbar-highlight-color': 'gray',
          'scrollbar-track-color': 'black',
          'scrollbar-arrow-color': 'gray',
          'scrollbar-shadow-color': 'gray',
          'scrollbar-dark-shadow-color': 'gray',
        },
        '*::-webkit-scrollbar': {
          width: '0.89em',
        },
        '*:hover::-webkit-scrollbar': {
          width: '0.8rem'
        },
        '*::-webkit-scrollbar-track': {
          background: '#111',
          borderRadius: '6px',
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'gray',
          borderRadius: '6px',
          border: '1px solid #111',
          '&:hover': {
            backgroundColor: '#ccc',
            border: '3px solid #ccc',
          }
        }
      }
    }
  }
});
export default theme;