import employees from './employees.js'

export default {
    getEmployees(employeeLength) {
        let employeeObj = []
        for (let num1 = 0; num1 < employeeLength; num1++) {
            let employee = {
                name: employees.getEmployeesName(),
                position: employees.getPosition(),
                status: employees.getStatus(),
                paidLeaves: employees.getPaidLeaves(),
                sickLeaves: employees.getSickLeaves(),
                lates: employees.getLates(),
                email: employees.getEmail(),
                mobileNumber: employees.getMobileNumber(),
                address: employees.getAddress(),
                dateOfBirth: employees.getDateOfBirth(),
            }
            employeeObj.push(employee)
        }
        return employeeObj
    },
}
