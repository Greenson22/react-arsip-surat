import React, { useState } from 'react'
import { Card , CardHeader, CardBody} from "../Elements/Card"
import { Table, TableHead } from "../Elements/Table"
import { MDBBtn } from 'mdb-react-ui-kit'
import { useDispatch, useSelector } from 'react-redux'
import { TitleBar, TableFilter, TableAction, IncomingMailTableBody } from '../Fragments'
import { useSetPage } from "../../hooks"
import ClassifyLetterTableBody from '../Fragments/TableBody/ClassifyLetterTableBody'

const ClassifyLetterLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Penerima", "Kategori","Tindakan"]
     const {data} = props
     const iData = useSelector(state=>state.dataSlice.iData)
     const api = import.meta.env.VITE_INCOMINGMAIL_API_KEY
     const dispatch = useDispatch()
     const [addModal, setAddModal] = useState(false)
     const [addMultipleModal, setMultipleModal] = useState(false)
     
     return (
          <div>
               <TitleBar>Klasifikasi Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         <MDBBtn className='float-end'>Klasifikasi Semua</MDBBtn>
                    </CardHeader>
                    <CardBody>
                         <TableFilter api={api} />
                         <Table add_class="table-sm">
                              <TableHead columns={columns} />
                              <ClassifyLetterTableBody data={data['results']} ></ClassifyLetterTableBody>
                         </Table>
                         <MDBBtn onClick={() => { useSetPage(data['previous'], dispatch) } }>prev</MDBBtn>
                         <MDBBtn onClick={() => { useSetPage(data['next'], dispatch) } }>next</MDBBtn>
                    </CardBody>
               </Card>
          </div>
     )
}

export default ClassifyLetterLayout