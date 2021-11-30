import React from 'react'
import Header from '../custom/Header/Header'
import Map from '../components/Map/Map'

const Tracker = () => {
    return (
        <div className="h-screen  bg-primary w-full">
            <div className="bg-primary ">
                <Header/>
            </div>
            <div className="mt-20 flex justify-evenly items-center flex-wrap text-center">
                <h3 className="w-full bg-fourth mx-10 rounded-lg">actual position</h3>
                <h3 className="w-5/12 bg-fourth mt-2 mx-2 rounded-t-lg">Longitude</h3>
                <h3 className="w-5/12 bg-fourth mt-2 mx-2 rounded-t-lg">latitude</h3>
                <h3 className="w-5/12 bg-gray mx-2 rounded-b-lg">7.1170</h3>
                <h3 className="w-5/12 bg-gray mx-2 rounded-b-lg">-73.125</h3>
            </div>
            {/* <div className="flex justify-evenly items-center flex-wrap text-center">
                <h3 className="1/2 bg-gray px-5 rounded-b-lg">7.1170</h3>
                <h3 className="1/2 bg-gray px-5 rounded-b-lg">-73.125</h3>
            </div> */}
            <div className="">
                <Map/>
            </div>
        </div>
    )
}

export default Tracker
