import { ApolloClient } from '@apollo/client';

import {
  setCountry,
  setEmail,
  setName,
  setPicture,
  setToken,
  useAppDispatch,
} from '../redux';

type ResetQueryCacheProps = {
  client: ApolloClient<object>;
  queryNames: string[];
};

export function resetQueryCache(props: ResetQueryCacheProps) {
  const {
    client,
    queryNames,
  } = props;

  queryNames.forEach((queryName) => {
    client.cache.modify({
      fields: {
        [queryName](_, { DELETE }) {
          return DELETE;
        },
      },
    });
  });
}

type ResetProfileProps = {
  client: ApolloClient<object>;
  dispatch: ReturnType<typeof useAppDispatch>;
  newToast: (type: 'success' | 'error' | 'warning' | 'info' | undefined, message: string) => void
  successMessage: string;
};

export function resetProfile(props: ResetProfileProps) {
  const {
    client,
    dispatch,
    newToast,
    successMessage,
  } = props;

  dispatch(setToken(null));
  dispatch(setCountry(null));
  dispatch(setEmail(null));
  dispatch(setName(null));
  dispatch(setPicture(null));

  resetQueryCache({
    client,
    queryNames: ['profile', 'songs'],
  });

  newToast('success', successMessage);
}
