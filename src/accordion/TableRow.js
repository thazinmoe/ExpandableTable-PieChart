import React from 'react'

export const TableRow = ({ personDetails }) => {
  // const { email, name, phone } = info[0];
  // console.log("info",email);
  return (
      <tr>
        <td className='text-mute'>{personDetails.email}</td>
        <td className='text-mute'>{personDetails.name}</td>
        <td className='text-mute'>{personDetails.phone}</td>
        {/* <td className='text-white'>{personDetails.country}</td>
        <td className='text-white'>{personDetails.alphanumeric}</td> */}
      </tr>
  )
}

// import React from 'react';

// export const TableRow = ({ personDetails, info }) => {
//   const { email, name, phone } = info.length > 0 ? info[0] : {};
  
//   return (
//     <tr>
//       {/* <td className='text-white'>{personDetails.email}</td>
//       <td className='text-white'>{personDetails.name}</td>
//       <td className='text-white'>{personDetails.phone}</td> */}
//       <td className='text-white'>{email}</td>
//       <td className='text-white'>{name}</td>
//       <td className='text-white'>{phone}</td>
//     </tr>
//   );
// };

