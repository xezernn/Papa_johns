import React from 'react'
import { CiCircleRemove } from "react-icons/ci";

function SebetItem() {
    return (
        <div className="sebetItem">
            <div className="listLeft"><img src="https://www.papajohns.az/uploads/images/chicken_parmesan_item.jpg" alt="" /></div>
            <div className="listRight">
                <div className='listText'>
                    <h2>Ciken Parmezan</h2>
                    <p>30 sm</p>
                </div>
                <div className="listBtn">
                    <button>+</button>
                    <input type="text" disabled />
                    <button>-</button>
                </div>
                <div className="pul">
                    119M
                    <CiCircleRemove className='removeBtn' />
                </div>
            </div>
        </div>
    )
}

export default SebetItem