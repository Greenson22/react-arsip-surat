import React, { useEffect, useRef } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import AnalisisIndicator from "../AnalisisIndicator"
import { useSubmitHandleEditIncomingMailModal, useEditIncomingMailModalEffect } from '../../../hooks'

const EditIncomingMailModal = (props)=>{
     const {letter, setCommand} = props
     const formRef = useRef()
     const onSubmitHandle = (event)=>{useSubmitHandleEditIncomingMailModal(event, letter, setCommand)}
     useEditIncomingMailModalEffect(formRef, letter)
     
     return(
          <Modal id="editMailModal">
               <ModalHeader title="Ubah surat masuk"/>
               <ModalBody>
                    <form action="" id='edit-incomingmail-form' onSubmit={onSubmitHandle} ref={formRef}>
                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id='agenda-number' label="Nomor agenda" type="text" className='mb-3' defaultValue={letter.agenda_number}/>
                                   <MDBInput id='letter-number' label="Nomor surat" type="text" className='mb-3' defaultValue={letter.letter_number}/>
                                   <MDBInput id='source' label="Asal surat" type="text" className='mb-3' defaultValue={letter.source}/>
                              </div>
                              <div className="col-6">
                                   <MDBInput id='letter-date' label="Tanggal surat" type="date" className='mb-3' defaultValue={letter.letter_date}/>
                                   <MDBInput id='received-date' label="Tanggal terima" type="date" className='mb-3' defaultValue={letter.received_date}/>
                                   <MDBInput id='recipient' label="Penerima" type="text" className='mb-3' defaultValue={letter.recipient}/>
                              </div>
                         </div>
                         <MDBInput id='subject' label="Perihal" type="text" defaultValue={letter.subject}/>
                    </form>

               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' data-bs-dismiss="modal" form='edit-incomingmail-form'>Simpan perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditIncomingMailModal