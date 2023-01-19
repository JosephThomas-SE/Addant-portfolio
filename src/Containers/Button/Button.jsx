import React from 'react';


import './button.css';


const Button = () => {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-3 col-sm-3">

        </div>

        <div className="btn-group col-lg-4 col-md-6 col-sm-6 .d-md-block .d-lg-block .d-xl-block .d-none" role="group" aria-label="Basic example">
          <button type="button" id="#pdp" className="firstbutton btn">Kiosk & Touchscreen</button>
          <button type="button" className="secondbutton btn">Mobile Development</button>
        </div>
       {/* <div className="btn-group col-lg-4 col-md-6 col-sm-6 .d-block .d-sm-none" role="group" aria-label="Basic example">
          <button type="button" className="firstbutton btn">Kiosk & Touchscreen</button>
          <button type="button" className="secondbutton btn">Mobile Development</button>
        </div> */}

        <div className="col-lg-4 col-md-3 col-sm-3">

        </div>
      </div>
    );
};

export default Button;