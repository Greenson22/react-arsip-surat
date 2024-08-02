import React, { useEffect, useRef } from "react"
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"

const EditUserModal = (props)=>{
     const { user, setCommand } = props
     const formRef = useRef()
     const handleSubmit = ()=>{}

     useEffect(()=>{
          formRef.current['username-edit'].value = user.username
          formRef.current['first-name-edit'].value = user.first_name
          formRef.current['last-name-edit'].value = user.last_name
          formRef.current['email-address-edit'].value = user.email
          formRef.current['active-edit'].checked = user.is_active
          formRef.current['is-superuser-edit'].checked = user.is_superuser
          formRef.current['phone-number-edit'].value = user.phone_number
     })

     return(
          <Modal id="editUserModal">
               <ModalHeader title="Ubah pengguna"/>
               <ModalBody>
                    <form action="" onSubmit={handleSubmit} id="edit-user-modal" ref={formRef}>
                         <div>
                              <MDBInput label="username" id="username-edit" type="text" className='mb-2' defaultValue={' '}/>
                              {/* <MDBInput label="password" id="password-edit" type="password" className='mb-2' disabled/>
                              <MDBInput label="konfirmasi password" id="confirm-password-edit" type="password" className='mb-4' disabled/> */}
                         </div>

                         <div>
                              <MDBInput label="nama awal" id="first-name-edit" type="text" className='mb-2' defaultValue={' '}/>
                              <MDBInput label="nama akhir" id="last-name-edit" type="text" className='mb-2' defaultValue={' '}/>
                              <MDBInput label="alamat email" id="email-address-edit" type="text" className='mb-4' defaultValue={' '}/>
                         </div>

                         <div>
                              <MDBCheckbox name='flexCheck' id='active-edit' label='active'/>
                              <MDBCheckbox name='flexCheck' id='is-superuser-edit' label='super user status'/>
                         </div>
                         <MDBInput label="nomor telepon" id="phone-number-edit" type="text" className='mb-2 mt-4' defaultValue={' '}/>
                         
                         <label htmlFor="">foto profil</label>
                         <MDBInput type="file" id="fileE" className='mb-2'/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn color="secondary" data-bs-dismiss="modal" size="sm">Tutup</MDBBtn>
                    <MDBBtn color="warning" size="sm">Simpan perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditUserModal