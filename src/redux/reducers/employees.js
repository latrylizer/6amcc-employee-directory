import { SET_EMPLOYEE_INFO } from '../types'

const initialState = {
    info: {
        name: 'Bibot Polangkoi',
        department: '6AMCC',
        position: 'Remote Team Member',
    },
}

const employeesReducers = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_EMPLOYEE_INFO:
            return {
                ...state,
                info: {
                    ...state.info,
                    ...action.payload,
                },
            }

        default:
            return state
    }
}

export default employeesReducers
