import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('AUTH_TOKEN');

  // Return the headers to the context so HTTP link can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Authorization ${token}` : '',
    },
  };
});

const link = createHttpLink({
  uri: import.meta.env.VITE_APPOLO_URL,
  credentials: 'same-origin',
});

const appoloClient = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: import.meta.env.VITE_APPOLO_URL,
  link: authLink.concat(link),
});

export default appoloClient;
