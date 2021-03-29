import NavBar from "./components/NavBar"
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

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
      <BrowserRouter>     
        <NavBar />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
