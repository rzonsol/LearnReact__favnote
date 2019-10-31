import axios from 'axios';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';

export const removeItem = (itemType, id) => {
	return {
		type: REMOVE_ITEM,
		payload: {
			itemType,
			id,
		},
	};
};

export const addItem = (itemType, itemContent) => {
	const getId = () => Math.random();
	return {
		type: ADD_ITEM,
		payload: {
			itemType,
			item: {
				id: getId(),
				...itemContent,
			},
		},
	};
};

export const authenticate = (username, password) => dispatch => {
	dispatch({
		type: AUTHENTICATE_REQUEST,
	});
	return axios
		.post('http://localhost:9000/api/user/login', { username, password })
		.then(response =>
			dispatch({
				type: AUTHENTICATE_SUCCESS,
				payload: response,
			}),
		)
		.catch(error =>
			dispatch({
				type: AUTHENTICATE_FAILURE,
				payload: error,
			}),
		);
};
