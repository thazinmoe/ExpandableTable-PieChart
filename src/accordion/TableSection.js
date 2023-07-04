import React from 'react'
import { TableRow } from './TableRow'
import { ExpandableButton } from './ExpandableButton'
import useOpenController from './Hooks/useOpenController'

export const TableSection = ({ personDetails, index }) => {

    const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
        <tr>
            <td className='button-td'>
                <ExpandableButton isOpen={isOpen} toggle={toggle} />
            </td>
            <td>
                <b className='text-white'>Person: {index} </b>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        {isOpen && <TableRow personDetails={personDetails} />}
    </tbody>
  )
}
