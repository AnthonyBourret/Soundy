import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// WIP following appolo docs

const link = createHttpLink({
  uri: import.meta.env.VITE_APPOLO_URL,
  credentials: 'same-origin',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: import.meta.env.VITE_APPOLO_URL,
  link,
});

export default client;
