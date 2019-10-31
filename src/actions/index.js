export const removeItem = (itemType, id) => {
	return {
		type: 'REMOVE_ITEM',
		payload: {
			itemType,
			id,
		},
	};
};

export const addItem = (itemType, itemContent) => {
	const getId = () => Math.random();
	return {
		type: 'ADD_ITEM',
		payload: {
			itemType,
			item: {
				id: getId(),
				...itemContent,
			},
		},
	};
};
