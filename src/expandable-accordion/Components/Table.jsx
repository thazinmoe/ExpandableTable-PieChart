import React from "react";
import { info } from "../data/info.js";
export const Table = () => {
  return (
    <div>
      {info.map((personDetails, index) => (
        <React.Fragment key={index} >
          <div className='d-flex container-fluid bg-primary'>
                <div className="col-6">
                  <h6 className='text-white mx-2 pl-4'>{personDetails.name}</h6>
                </div>
                <div className='text-white col-3 pl-3'>30 kW</div>
                <div className='text-white col-3 pl-4'>25.0 kWh</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

