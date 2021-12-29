import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import citylight from '../../dev/citylight.json'
import corelend from '../../dev/corelend.json'
import crestcore from '../../dev/crestcore.json'
import sixamcc from '../../dev/onshoreEmployees.json'
import { setAllEmployees } from '../../redux/actions/allEmployees'
import EventEmitter from '../../utils/emitter'

const Navigation = () => {
    const dispatch = useDispatch()
    const [activeNavItem, setActiveNavItem] = useState(0)

    const removeActive = () => {
        const element = document.getElementsByClassName('list-group')[0]
        for (let num1 = 0; num1 < element.children.length; num1++) {
            if (element.children[num1].classList.contains('active')) {
                element.children[num1].classList.remove('active')
            }
        }
    }

    const handleOnClick = (type) => {
        if (type === '6AMCC') {
            const department = {
                department: 'Onshore',
                employees: sixamcc,
            }
            removeActive()
            setActiveNavItem(1)
            dispatch(setAllEmployees(sixamcc.employees))
            EventEmitter.emit('employees', department)
            console.log('list of employees', sixamcc)
        } else if (type === 'CITYLIGHT') {
            const department = {
                department: 'Citylight',
                employees: citylight,
            }
            setActiveNavItem(2)
            dispatch(setAllEmployees(citylight.employees))
            EventEmitter.emit('employees', department)
            console.log('list of employees', citylight)
        } else if (type === 'CORELEND') {
            const department = {
                department: 'Corelend',
                employees: corelend,
            }
            setActiveNavItem(3)
            dispatch(setAllEmployees(corelend.employees))
            EventEmitter.emit('employees', department)
            console.log('list of employees', corelend)
        } else if (type === 'CRESTCORE') {
            const department = {
                department: 'Crestcore',
                employees: crestcore,
            }
            setActiveNavItem(4)
            dispatch(setAllEmployees(crestcore.employees))
            EventEmitter.emit('employees', department)
            console.log('list of employees', crestcore)
        }
    }

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
                            className={
                                'list-group-item ' +
                                (activeNavItem === 1 ? 'active' : '')
                            }
                        >
                            6AMCC
                        </li>
                        <li className="list-group-item">COREASSIST</li>
                        <li
                            onClick={() => handleOnClick('CITYLIGHT')}
                            className={
                                'list-group-item ' +
                                (activeNavItem === 2 ? 'active' : '')
                            }
                        >
                            CITYLIGHT
                        </li>
                        <li
                            onClick={() => handleOnClick('CORELEND')}
                            className={
                                'list-group-item ' +
                                (activeNavItem === 3 ? 'active' : '')
                            }
                        >
                            CORELEND
                        </li>
                        <li
                            onClick={() => handleOnClick('CRESTCORE')}
                            className={
                                'list-group-item ' +
                                (activeNavItem === 4 ? 'active' : '')
                            }
                        >
                            CRESTCORE
                        </li>
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
