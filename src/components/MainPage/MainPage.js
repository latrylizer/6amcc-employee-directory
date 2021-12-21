import React, { useEffect, useState } from 'react'
import EventEmitter from '../../utils/emitter'
const MainPage = () => {
    const [employees, setEmployees] = useState(0)

    useEffect(() => {
        const listener = EventEmitter.addListener('employees', (data) => {
            console.log('Datas', data.employees)
            setEmployees(data)
        })
        return () => {
            listener.remove()
        }
    }, [])

    const AllEmployees = employees
    if (AllEmployees.length > 0) {
        return (
            <div className="col-md-10">
                <div className="row">
                    {AllEmployees.map((employee, index) => {
                        const imgLocation =
                            '/img/Onshore/' + employee.name + '.jpg'

                        return (
                            <div
                                className="card mt-3 ml-3"
                                style={{ width: '18rem' }}
                            >
                                <img
                                    className="card-img-top"
                                    src={process.env.PUBLIC_URL + imgLocation}
                                    alt=""
                                />
                                <div className="card-body">
                                    <header className="lead font-weight-normal text-orange">
                                        {employee.name}
                                    </header>
                                    <p className="lead">
                                        {employee.department}
                                    </p>
                                    <p className="lead">{employee.position}</p>
                                </div>
                                <div className="card-footer border-0 bg-white">
                                    <button
                                        className="btn btn-orange btn-block"
                                        data-toggle="modal"
                                        data-target={'#card' + index}
                                    >
                                        See More
                                    </button>
                                </div>
                                <div
                                    className="modal fade"
                                    id={'card' + index}
                                    tabIndex="-1"
                                    role="dialog"
                                    aria-labelledby="exampleModalCenterTitle"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="modal-dialog modal-dialog-centered"
                                        role="document"
                                    >
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5
                                                    className="modal-title text-orange"
                                                    id="exampleModalLongTitle"
                                                >
                                                    {employee.name}
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="close"
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                >
                                                    <span aria-hidden="true">
                                                        &times;
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <p>ID: {employee.id}</p>
                                                <p>Born: November 16, 1997</p>
                                                <p>
                                                    Department:{' '}
                                                    {employee.department}
                                                </p>
                                                <p>
                                                    Position:{' '}
                                                    {employee.position}
                                                </p>
                                                <p>Email: {employee.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}
export default MainPage
