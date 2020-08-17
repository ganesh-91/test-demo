import React, { useState } from 'react'
import './ToReadList.css';
import ToReadItem from '../toReadItem';

const ToReadList = () => {
    const [toRead] = useState([
        {
            name: 'Hair Care',
            imagSrc: 'https://miro.medium.com/max/700/1*BoIkAVSloc4lcxiR-0G8Rw.jpeg',
            srNo: '01',
            redirectUrl: 'https://blog.bitsrc.io/10-ways-to-optimize-your-react-apps-performance-e5e437c9abce'
        },
        {
            name: 'Passing Arrays as Function Arguments',
            imagSrc: 'https://miro.medium.com/max/700/1*s1FHNp89E14FI4ZDvz5ZNg.png',
            srNo: '02',
            redirectUrl: 'https://medium.com/swlh/usefetch-a-custom-react-hook-36d5f5819d8'
        },
        {
            name: 'Passing Arrays as Function Arguments',
            imagSrc: 'https://miro.medium.com/max/700/1*s1FHNp89E14FI4ZDvz5ZNg.png',
            srNo: '03',
            redirectUrl: 'https://medium.com/swlh/usefetch-a-custom-react-hook-36d5f5819d8'
        },
        {
            name: 'Passing Arrays as Function Arguments',
            imagSrc: 'https://miro.medium.com/max/700/1*s1FHNp89E14FI4ZDvz5ZNg.png',
            srNo: '04',
            redirectUrl: 'https://medium.com/swlh/usefetch-a-custom-react-hook-36d5f5819d8'
        },
        {
            name: 'Passing Arrays as Function Arguments',
            imagSrc: 'https://miro.medium.com/max/700/1*s1FHNp89E14FI4ZDvz5ZNg.png',
            srNo: '05',
            redirectUrl: 'https://medium.com/swlh/usefetch-a-custom-react-hook-36d5f5819d8'
        }
    ])
    return (
        <div className='to-read-list'>
            <div className='to-read-list-wrapper'>
                {toRead.map((el) => {
                    return (<ToReadItem data={el} />)
                })}
            </div>
        </div>
    )
}

export default ToReadList
