import React from 'react'
import { Link, useParams } from 'react-router-dom'

function MainSelect() {
  const param = useParams()
  console.log();
  return (
    <div className="mainSelect bgSilver">
        <ul id='selectMenu'>
            <li><Link to={`/menu/${param.prop}`} href="#">Hamısı</Link></li>
            <li><Link to={`/menu/${param.prop}/toyuqlu`} href="#">Toyuqlu</Link></li>
            <li><Link to={`/menu/${param.prop}/etli`} href="#">Ət ilə</Link></li>
            <li><Link to={`/menu/${param.prop}/vegan`} href="#">Vegetarian</Link></li>
            <li><Link to={`/menu/${param.prop}/acilli`} href="#">Acılı</Link></li>
        </ul>
    </div>
  )
}

export default MainSelect