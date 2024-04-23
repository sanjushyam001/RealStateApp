import React from 'react'
import { listData } from '../../lib/dummydata.js'
import "./List.scss"
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import Map from '../../components/map/Map.jsx'
const List = () => {
    return (
        <div className='list'>
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {
                        listData.map((item) => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
            <div className="mapContainer">
                <Map items={listData} />
            </div>
        </div>
    )
}

export default List
