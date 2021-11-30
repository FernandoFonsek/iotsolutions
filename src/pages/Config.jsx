import React from 'react'
import ConfigDevice from '../components/ConfigDevice/ConfigDevice'
import Header from '../custom/Header/Header'

const Config = () => {
    return (
        <div className="">
            <Header/>
            <div className="bg-primary h-screen">
                <ConfigDevice/>
            </div>
        </div>
    )
}

export default Config
