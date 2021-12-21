import React from 'react'
import { useDispatch } from 'react-redux'
import employer from '../../dev/onshoreEmployees.json'
import { setAllEmployees } from '../../redux/actions/allEmployees'
import EventEmitter from '../../utils/emitter'

const Navigation = () => {
    const dispatch = useDispatch()
    const handleOnClick = (type) => {
        if (type === '6AMCC') {
            dispatch(setAllEmployees(employer.employees))
            EventEmitter.emit('employees', employer.employees)
            console.log('list of employees', employer)
        }
    }

    const employees = [
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
    return (
        <div
            className="col-md-2 pr-0 bg-dark text-light main-navigation position-fixed"
            style={{ height: '1080px' }}
        >
            <div className="col-md pr-0 pl-0">
                <div className="w-100 d-flex justify-content-center">
                    <img
                        src={process.env.PUBLIC_URL + '/img/6amcore logo.svg'}
                        style={{ width: '12rem' }}
                        alt=""
                    />
                </div>
                <div className="col-md">
                    <header className="lead font-weight-normal">
                        Employee Directory
                    </header>
                    <hr className="bg-light" />
                </div>
            </div>
            <div className="container h-100 pl-0 pr-0 d-flex flex-column">
                <div className="col-md  pl-0 pr-0">
                    <ul className="list-group">
                        <li
                            onClick={() => handleOnClick('6AMCC')}
                            className="list-group-item active"
                        >
                            6AMCC
                        </li>
                        <li className="list-group-item">COREASSIST</li>
                        <li className="list-group-item">CITYLIGHT</li>
                        <li className="list-group-item">CORELEND</li>
                        <li className="list-group-item">CRESTCORE</li>
                    </ul>
                </div>

                <div
                    className="col-md pl-0 pr-0"
                    style={{ height: '200px !important' }}
                >
                    <hr className="bg-light" />
                    <ul className="list-group">
                        <li className="list-group-item">ADD EMPLOYEE</li>

                        <li className="list-group-item">REMOVE EMPLOYEE</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navigation
