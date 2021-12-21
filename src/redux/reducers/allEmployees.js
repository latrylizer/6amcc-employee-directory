import { SET_ALL_EMPLOYEES } from '../types'

const AllEmployeeReducers = (state = [], action = {}) => {
    switch (action.type) {
        case SET_ALL_EMPLOYEES:
            return {
                employees: {
                    ...state,
                    ...action.payload,
                },
            }
        default:
            return state
    }
}
export default AllEmployeeReducers
