import React from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import AppMain from './components/AppMain'
import './css/App.scss'
const App = () => {
    // const employees = useSelector((state) => state.employees)
    // const dispatch = useDispatch()

    // const allEmployees = useSelector((state) => state.allEmployees)

    // const handleOnClick = (type) => {
    //     if (type === 'name') {
    //         dispatch(setEmployeeInfo({ name: 'Boss Paigot' }))
    //     } else if (type === 'age') {
    //         dispatch(setEmployeeInfo({ age: 18 }))
    //     } else {
    //         dispatch(setEmployeeInfo({ gender: 'Male' }))
    //     }
    // }
    // console.log('employees', employees)
    // console.log('AllEmployees', allEmployees)

    return (
        <div>
            {/* <button onClick={() => handleOnClick('name')}>Add Name</button>
            <button onClick={() => handleOnClick('age')}>Add Age</button>
            <button onClick={() => handleOnClick('gender')}>Add Gender</button> */}
            <AppMain />
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         employees: state.employees,
//     }
// }

// const mapDispatch = (dispatch) => {
//     return bindActionCreators(
//         {
//             setEmployeeInfo,
//         },
//         dispatch
//     )
// }

// export default connect(mapStateToProps, mapDispatch)(App)
export default App
