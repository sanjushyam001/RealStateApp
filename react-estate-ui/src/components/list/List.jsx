import React from 'react'
import { listData } from "../../lib/dummydata.js"
import Card from "../card/Card.jsx"
import "./List.scss"
function List() {
    return (
        <div className='list1'>
            {listData.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}
export default List
