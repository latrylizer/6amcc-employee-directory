export default {
    getEmployeesName() {
        let employeeName = ''
        let index = Math.floor(Math.random() * 5 + 1)
        switch (index) {
            case 1:
                employeeName = 'Latryll B. Alimes'
                break
            case 2:
                employeeName = 'Kyn Jupilou Empremiado'
                break
            case 3:
                employeeName = 'Sheanne Noreen Bernardino'
                break
            case 4:
                employeeName = 'Zamantha Dolus'
                break
            case 5:
                employeeName = 'Owen Pilonggo'
                break
        }
        return employeeName
    },
    getPosition() {
        let position = ''
        let index = Math.floor(Math.random() * 5 + 1)
        switch (index) {
            case 1:
                position = 'Accounting'
                break
            case 2:
                position = 'IT Staff'
                break
            case 3:
                position = 'Customer Service'
                break
            case 4:
                position = 'Marketing'
                break
            case 5:
                position = 'Sales'
                break
        }
        return position
    },
    getStatus() {
        let status = ''
        let index = Math.floor(Math.random() * 5 + 1)
        switch (index) {
            case 1:
                status = 'Not Logged In'
                break
            case 2:
                status = 'Present'
                break
            case 3:
                status = 'Late'
                break
            case 4:
                status = 'Lunch'
                break
            case 5:
                status = 'Break'
                break
        }
        return status
    },
    getEmployeeLength() {
        let employeeLength = Math.floor(Math.random() * 20 + 1)
        return employeeLength
    },
    getPaidLeaves() {
        let paidLeaves = Math.floor(Math.random() * 64 + 1)
        return paidLeaves
    },
    getSickLeaves() {
        let sickLeaves = Math.floor(Math.random() * 64 + 1)
        return sickLeaves
    },
    getLates() {
        let lates = Math.floor(Math.random() * 8 + 1)
        return lates
    },
    getAddress() {
        let address = ''
        let index = Math.floor(Math.random() * 5 + 1)
        switch (index) {
            case 1:
                address = 'G/F P L D T Building Reposo Street 1200'
                break
            case 2:
                address = '674 Tomas Mapua Street Sta. Cruz 1000'
                break
            case 3:
                address = 'UNIT 1006 HERRERA TOWER, HERRERA ST., MAKATI CITY'
                break
            case 4:
                address =
                    'Sunview Palace Condominium 1015 M.H. Del Pilar cor. T.M. Kalaw St.'
                break
            case 5:
                address = '817 Edsa 1100'
                break
        }
        return address
    },
    getMobileNumber() {
        let mobileNumber = ''
        let index = Math.floor(Math.random() * 5 + 1)
        switch (index) {
            case 1:
                mobileNumber = '+63-923-5552-743'
                break
            case 2:
                mobileNumber = '+63-929-5556-745'
                break
            case 3:
                mobileNumber = '+63-280-5551-862'
                break
            case 4:
                mobileNumber = '+63-928-5556-750'
                break
            case 5:
                mobileNumber = '+63-283-5551-932'
                break
        }
        return mobileNumber
    },
    getEmail() {
        let emailGenerator = ''
        let index = Math.floor(Math.random() * 5 + 1)
        switch (index) {
            case 1:
                emailGenerator = 'pflorimi_fcbd@eyesandfeet.com'
                break
            case 2:
                emailGenerator = '1morfefq@dongphucsomi.com'
                break
            case 3:
                emailGenerator = '8andrey.lapotcko4@honglove.ml'
                break
            case 4:
                emailGenerator = '2b_my_destin@bugs.su'
                break
            case 5:
                emailGenerator = 'rederson_cerque@narsan.ru'
                break
        }
        return emailGenerator
    },
    getDateOfBirth() {
        let dateOfBirth = ''
        let index = Math.floor(Math.random() * 5 + 1)
        switch (index) {
            case 1:
                dateOfBirth = '02/01/1992'
                break
            case 2:
                dateOfBirth = '19/01/1993'
                break
            case 3:
                dateOfBirth = '05/05/1994'
                break
            case 4:
                dateOfBirth = '06/09/1995'
                break
            case 5:
                dateOfBirth = '17/01/1997'
                break
        }
        return dateOfBirth
    },
}
