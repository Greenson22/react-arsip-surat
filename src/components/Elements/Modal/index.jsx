import React from "react"
import { MDBBtn } from "mdb-react-ui-kit"

export const Modal = (props)=>{
     const {children, id} = props
     return(
          <div className="modal fade" id={id} >
               <div className="modal-dialog">
                    <div className="modal-content">
                         {children}
                    </div>
               </div>
          </div>
     )
}

export const ModalHeader = (props)=>{
     const {children, title} = props
     return(
          <div className="modal-header">
               {children}
               <h1 className="modal-title fs-5">{title}</h1>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
     )
}

export const ModalBody = (props)=>{
     const {children} = props
     return(
          <div className="modal-body">
               {children}
          </div>
     )
}

export const ModalFooter = (props)=>{
     const {children} = props
     return(
          <div className="modal-footer">
               {children}
          </div>
     )
}