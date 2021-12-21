import { SET_ALL_EMPLOYEES } from '../types'

const initialState = [
    {
        id: 1,
        name: 'Latryll Alimes',
        position: 'Remote Team Member',
        email: 'latrylizer@gmail.com',
        hireDate: 'November 16',
        contact: 555325481,
        department: '6AMCC',
    },
    {
        id: 2,
        name: 'Kyn Jupilou Empremiado',
        position: 'Remote Team Member',
        email: 'latrylizer@gmail.com',
        hireDate: 'November 16',
        contact: 555325481,
        department: '6AMCC',
    },
    {
        id: 3,
        name: 'Sheanne Noreen Bernardino',
        position: 'Remote Team Member',
        email: 'latrylizer@gmail.com',
        hireDate: 'November 16',
        contact: 555325481,
        department: '6AMCC',
    },
]

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
