import React from 'react'
const Header = () => {
    return(
        <div>
            <nav className='navbar navbar-light bg-light'>
                <h2 className='navbar-brand'>Restaurant</h2>
                    <button className='btn btn-primary'>Orders
                        <span className='badge btn btn-secondary'>0</span>
                    </button>
            </nav>
        </div>
    )
}
export default Header;