import NavBar from "./components/NavBar"
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme/theme";

const link = new HttpLink({
  uri: "https://api.spacex.land/graphql/",
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});



const App = () => {
  return (
    <ApolloProvider client={client}>
       <ThemeProvider theme={theme}>
        <BrowserRouter>
        <CssBaseline />
          <NavBar />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
