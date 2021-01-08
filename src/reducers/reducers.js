let defaultState = {
	test: null
};

const reducers = (state = defaultState, action) => {
	switch (action.type) {
		case 'DATA':
			return {
				...state,
				data: action.payload
			}
		default: return state;
	}
}

export default reducers;