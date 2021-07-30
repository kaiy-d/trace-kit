const initialState = {
	explorer: {
		loading: false,
		complete: false,
		error: null,
		value: {
		},
	},
	profile: {
		loading: false,
		complete: false,
		error: null,
		value: {
		},
	},
}

const traceReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE':
			let section = {...state[action.key]}
			if (action.loading !== undefined) {
				section.loading = action.loading
			}
			if (action.complete !== undefined) {
				section.complete = action.complete
			}
			if (action.error !== undefined) {
				section.error = action.error
			}
			console.log("UPDATE action.value", action.value)
			if (action.value !== undefined) {
				section.value = action.value
			}
			let update = {}
			update[action.key] = section
			console.log("UPDATE update", update)
			let next = Object.assign({}, state, update)
			console.log("UPDATE next", next)
			return next
		default:
			return state
	}
}

export default traceReducer;
