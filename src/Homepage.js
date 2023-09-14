import React from 'react'
import Header from './Container/Header'
import Filter from './Container/Filter'
import Table from './Container/Table'
import Card from './Container/Card'

const Homepage = () => {
    return(
        <div>
            <Header/>
            <Table/>
            <Filter/>
            <Card/>
        </div>
    )
}
export default Homepage;