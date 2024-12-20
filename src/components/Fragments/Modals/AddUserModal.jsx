import React, { useRef } from "react"
import { MDBBtn, MDBInput, MDBCheckbox, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit"

import { setCommand } from "../../../redux/slices/commandSlice"
import { useDispatch } from "react-redux"
import { useAlert } from "../../../hooks"
import { ModalV2, ModalHeader } from "../../Elements/ModalV2"

const AddUserModal = (props)=>{
     const {addModal, setAddModal} = props
     const formRef = useRef()
     const dispatch = useDispatch()

     const handleSubmit = (event)=>{
          event.preventDefault()
          const password = event.target['password'].value
          const passwordConfirm = event.target['confirm-password'].value
          if (password != passwordConfirm){
               useAlert('password_not_match')
               return false
          }

          dispatch(setCommand({
               'command' : 'post',
               'form_id' : 'add-user-modal'
          }))
     }

     const handleBtnShowPassCheck = (event)=>{
          const form = document.getElementById('add-user-modal')
          const oldPassword = form['password']
          const newPassword = form['confirm-password']
          
          if (event.target.checked){
               oldPassword.type = 'text'
               newPassword.type = 'text'
          }else{
               oldPassword.type = 'password'
               newPassword.type = 'password'
          }
     }
     
     return(
          <ModalV2 open={addModal} onClose={()=>{setAddModal(false)}}>
               <ModalHeader title="Tambah pengguna"/>
               <MDBModalBody>
                    <form action="" onSubmit={handleSubmit} ref={formRef} id="add-user-modal">
                         <div>
                              <MDBInput label="username" id="username" type="text" className='mb-2' required/>
                              <MDBInput label="password" id="password" type="password" className='mb-2' required/>
                              <MDBInput label="konfirmasi password" id="confirm-password" type="password" className="mb-2" required/>
                              <MDBCheckbox label="Show password" onClick={handleBtnShowPassCheck}/>
                         </div>

                         <div>
                              <MDBInput label="nama awal" id="first-name" type="text" className='mb-2 mt-4' required/>
                              <MDBInput label="nama akhir" id="last-name" type="text" className='mb-2' required/>
                              <MDBInput label="alamat email" id="email-address" type="text" className='mb-4' required/>
                         </div>

                         <div>
                              <MDBCheckbox name='flexCheck' value='active' id='is-active' label='active'/>
                              <MDBCheckbox name='flexCheck' value='active' id='is-superuser' label='super user status'/>
                         </div>
                         <MDBInput label="nomor telepon" id="phone-number" type="text" className='mb-2 mt-4' required/>
                         
                         <label htmlFor="">foto profil</label>
                         <MDBInput type="file" id="file" className='mb-2' required/>
                    </form>
               </MDBModalBody>
               <MDBModalFooter>
                    <MDBBtn color="secondary" size="sm" onClick={(event)=>{setAddModal(false)}}>Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' form="add-user-modal">Tambah pengguna</MDBBtn>
               </MDBModalFooter>
          </ModalV2>
     )
}

export default AddUserModal