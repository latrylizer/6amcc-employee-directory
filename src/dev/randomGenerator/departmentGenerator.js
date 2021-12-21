import employeeGenerator from './employeeGenerator.js'
import employees from './employees.js'
export default {
    getDepartment() {
        let departments = []
        for (let num1 = 0; num1 < 10; num1++) {
            let d = {
                departmentName: 'Department ' + (num1 + 1),
                employees: employeeGenerator.getEmployees(
                    employees.getEmployeeLength()
                ),
            }
            departments.push(d)
        }
        return departments
    },
}
