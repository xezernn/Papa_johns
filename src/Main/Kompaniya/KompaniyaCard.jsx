import React from 'react'

function KompaniyaCard({ id, category, img, compasition }) {
    return (
        <div className="kompaniyaCard">
            <div className="komCardTop">
                <img src={img} alt="" />
            </div>
            <div className="stocItem">
                {compasition}
            </div>
            <div className="komCardBottom">
                <button className='btn'>ƏTRAFLI MƏLUMAT</button>
            </div>
        </div>
    )
}

export default KompaniyaCard