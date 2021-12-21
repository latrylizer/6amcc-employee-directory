import { SET_ALL_EMPLOYEES } from '../types'

export function setAllEmployees(payload) {
    return {
        type: SET_ALL_EMPLOYEES,
        payload,
    }
}
