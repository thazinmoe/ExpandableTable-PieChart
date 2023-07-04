import React,{ useState } from 'react'
import { ExpandableButton } from './ExpandableButton'
import useOpenController from './Hooks/useOpenController'
import { Table } from './Components/Table';

export const MainAccordion = () => {
  const { isOpen, toggle } = useOpenController(false);

  return (
    <React.Fragment>
            <div className='d-flex bg-primary p-3'>
              <div className='col-6'>
                  <h6 className='text-white d-inline mx-2'>Total Solar Generation</h6>
                  <ExpandableButton className="d-inline" isOpen={isOpen} toggle={toggle} />
              </div>
              <div className='text-white col-3'>30 kW</div>
              <div className='text-white col-3'>25.0 kWh</div>
            </div>
          {isOpen && <Table />}
   </React.Fragment>
  )
}
