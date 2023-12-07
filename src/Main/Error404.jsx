import { Alert } from 'antd'
import React from 'react'
import Marquee from 'react-fast-marquee';
import { Link, Routes } from 'react-router-dom';
function Error404() {
  return (

    <div className='notFound'>
      <Alert
      banner
      message={
        <Marquee pauseOnHover gradient={false}>
          Axtarışınız üzrə nəticə tapılmadı! Aşağıdaki linkdən əsas səhifəyə keçid edə bilərsiz!
        </Marquee>
      }
    />

    <Link to={"/pizzalar"}>Əsas Səhifə</Link>
    
    </div>

  )
}

export default Error404