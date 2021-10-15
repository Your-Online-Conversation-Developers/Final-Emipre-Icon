import React, { useEffect } from 'react';

const Thankyou = () => {

   useEffect(() => {
    window.gtag('event', 'conversion', {'send_to': 'AW-340247674/aFRHCMno0PsCEPqIn6IB'});
   }, []) 
    return (
    <div className="container">
        <div className="row">
        <h4 className="text-center" style={{padding:'130px'}}>Thank you for your message, We will contact you shortly.</h4>
        </div>
        </div>
    )
}

export default Thankyou;
