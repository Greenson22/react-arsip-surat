import React from 'react'
import {TableBody, RowAction} from '../../Elements/Table'
import { useSelector } from 'react-redux'

const OutgoingMailTableBody = (props)=>{
     const {data} = props
     const page = useSelector(state=>state.paginationSlice.page)
     const pageSize = useSelector(state=>state.paginationSlice.pageSize)

     return(
          <TableBody>
               {data.map((surat, index)=>{
                         return(
                              <tr key={surat.id}>
                                   <td>{index+1+((page-1)*pageSize)}</td>
                                   <td>{surat.agenda_number}</td>
                                   <td>{surat.letter_date}</td>
                                   <td>{surat.destination}</td>
                                   <td>{surat.letter_number}</td>
                                   <td>{surat.subject}</td>
                                   <td>
                                        <RowAction view_target='#view-mail-modal' 
                                                       edit_target='#edit-outgoingmail-modal' 
                                                       index={index}
                                                       id={surat.id}/>
                                   </td>
                              </tr>
                         )
                    })}               
          </TableBody>
     )
} 

export default OutgoingMailTableBody