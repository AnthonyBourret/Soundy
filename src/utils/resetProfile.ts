import { ApolloClient } from '@apollo/client';

import {
  setCountry,
  setEmail,
  setName,
  setPicture,
  setToken,
  useAppDispatch,
} from '../redux';

type Props = {
  client: ApolloClient<object>;
  dispatch: ReturnType<typeof useAppDispatch>;
  newToast: (type: 'success' | 'error' | 'warning' | 'info' | undefined, message: string) => void
  successMessage: string;
};

function resetProfile(props: Props) {
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

  client.cache.modify({
    fields: {
      profile(_, { DELETE }) {
        return DELETE;
      },
    },
  });

  newToast('success', successMessage);
}

export default resetProfile;
