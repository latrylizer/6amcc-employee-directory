import { SET_EMPLOYEE_INFO } from '../types'

export function setEmployeeInfo(payload) {
    return {
        type: SET_EMPLOYEE_INFO,
        payload,
    }
}
