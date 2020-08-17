import React from 'react'
import './ToReadItem.css';

const ToReadItem = (props) => {
    return (
        <div className='to-read-item'>
            <div className="image">
                <span className="badge">{props.data.srNo}</span>
                <img
                    height='100%'
                    width='100%'
                    src={props.data.imagSrc}
                    alt="" />
            </div>
            <div className="info">
                <a className="info-content" href={props.data.redirectUrl}>
                    <div className="">{props.data.name}</div>
                    {">"}
                </a>
            </div>
        </div>
    )
}

export default ToReadItem
