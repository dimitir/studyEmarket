export const SIGN_UP_SET_EMAIL = 'SIGN_UP_SET_EMAIL';
export const SIGN_UP_SET_PASSWORD = 'SIGN_UP_SET_PASSWORD';

export const setEmail = email => ({
    type: SIGN_UP_SET_EMAIL,
    payload: email
});

export const setPassword = password => ({
    type: SIGN_UP_SET_PASSWORD,
    payload: password
});