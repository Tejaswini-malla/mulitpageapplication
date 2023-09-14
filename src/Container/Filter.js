import React from 'react';
const Filter = () => {
    const prod = ["All Items","Rice items","Cold Drinks","Pizza","Hot Drinks"];
    const [filter,setFilter] = React.useState("All Items");
    return(
        <div>
            <center className='mt-3'>
                <span className='h4 m-2'>Restaurant items</span>
                <select name="filter" className='p-1' onChange={(e)=> setFilter(e.target.value)}>
                    {prod.map((item,index)=>(
                         <option value={item} key={index}>{item}</option>

                    ))}
                          
                      
                </select>
                <button className='btn btn-sm btn-primary m-1'>Startorder</button>
            </center>
        </div>
    )
}
export default Filter;