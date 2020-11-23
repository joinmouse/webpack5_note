import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import x from './images/x.jpg'

function Search() {
    return (
        <div className="serach-text">
            Search Text....React
            <img alt="x" src={x} />
        </div>
    )
}

ReactDOM.render(
    <Search />,
    document.querySelector('#app')
)