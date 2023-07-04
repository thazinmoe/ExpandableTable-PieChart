import React,{ useState } from 'react'
import { info } from './data/info'
// import { TableSection } from './TableSection'
import { ExpandableButton } from './ExpandableButton'
// import useOpenController from './Hooks/useOpenController'
import { TableRow } from './TableRow'

export const Table1 = () => {
  // const { isOpen, toggle } = useOpenController(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  {{console.log("index",info)}}
  return (
    <React.Fragment>
      {/* <table className="table table-striped border"> */}
        {/* <thead>
            <tr>
            <th scope='col' className='text-white col-4 button-td'><ExpandableButton isOpen={isOpen} toggle={toggle} /></th>
            <th scope='col' className='text-white col-4'><b className='text-white'>Person: {info[0].id} </b></th> */}
            {/* {info.map((person, index) => (
            <th scope='col' className='text-white' key={index}>
              <b className='text-white'>Person: {person.id}</b>
            </th>
          ))} */}
            {/* <th scope='col' className='text-white col-4'>Phone</th> */}
            {/* <th scope='col' className='text-white'>Country</th>
            <th scope='col' className='text-white'>Alphanumeric</th> */}
            {/* </tr>
            {isOpen && <TableRow info={info} />}
        </thead> */}
        {/* {info.map((personDetails,index)=>(
            <TableSection key={index} personDetails={personDetails} index={index} />
        ))} */}
    {/* </table> */}
    {info.map((personDetails, index) => (
      <table key={index} className="table table-striped border">
        <thead>
          <tr>
            <th scope='col' className='text-white col-4 button-td'>
              {/* <ExpandableButton isOpen={isOpen} toggle={toggle} /> */}
              <ExpandableButton isOpen={openIndex === index} toggle={() => handleToggle(index)} />
            </th>
            <th scope='col' className='text-white col-4'><b className='text-secondary'>Person: {personDetails.id} </b></th>
            <th scope='col' className='text-secondary col-4'>Phone</th>
            {/* <th scope='col' className='text-white'>Country</th>
            <th scope='col' className='text-white'>Alphanumeric</th> */}
          </tr>
          {/* {isOpen && <TableRow personDetails={personDetails} />} */}
          {openIndex === index && <TableRow personDetails={personDetails} />}
        </thead>
      </table>
    ))}
   </React.Fragment>
  )
}
