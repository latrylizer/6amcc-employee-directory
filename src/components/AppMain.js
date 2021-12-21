import React from 'react'
import MainPage from './MainPage/MainPage'
import Navigation from './Navigation/Navigation'

const AppMain = () => {
    return (
        <div className="overflow-Hidden">
            <div className="row">
                <Navigation />
                <div className="col-md-2" style={{ zIndex: '-10' }}></div>
                <MainPage />
            </div>
        </div>
    )
}
export default AppMain
