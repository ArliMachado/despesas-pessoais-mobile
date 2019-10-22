import produce from 'immer';

/**
 * ACTION TYPES
 */

export const Types = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',

  SIGN_FAILURE: '@auth/SIGN_FAILURE',

  SIGN_UP_REQUEST: '@auth/SIGN_UP_REQUEST',

  SIGN_OUT: '@auth/SIGN_OUT',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SIGN_IN_REQUEST: {
        console.tron.log('teste');
        draft.loading = true;
        break;
      }
      case Types.SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case Types.SIGN_FAILURE: {
        draft.loading = false;
        break;
      }

      case Types.SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        break;
      }

      default:
    }
  });
}

/**
 * Action Creators
 */

export const Creators = {
  signInRequest: (email, password) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { email, password },
  }),

  signInSuccess: (token, user) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { token, user },
  }),

  signUpRequest: (name, email, password) => ({
    type: Types.SIGN_UP_REQUEST,
    payload: { name, email, password },
  }),

  signOut: () => ({
    type: Types.SIGN_OUT,
  }),

  signFailure: () => ({
    type: Types.SIGN_FAILURE,
  }),
};
