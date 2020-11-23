import React from 'react'
import ReactDOM from 'react-dom'
import './search.css'

function Search() {
    return (
        <div className="serach-text">Search Text....React</div>
    )
}

ReactDOM.render(
    <Search />,
    document.querySelector('#app')
)