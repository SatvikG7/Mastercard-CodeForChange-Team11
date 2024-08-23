import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Image from 'react-bootstrap/Image';
export function Impact(props) {
    

    return (
        <>
        <Navbar page = "impact"/>
        <div className=" overflow-scroll py-26 bg-gradient-to-r from-[orange] to-white rounded-2xl px-8 mt-5">
        <Image className="mt-5" src="https://www.y4d.ngo/admin/uploads/widgets/Website_change_updated.jpg" fluid />;
        </div>
           <Footer/> 
        </>
    )
}
export default Impact