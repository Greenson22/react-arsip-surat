import React from "react"
import { MDBBtn, MDBListGroupItem, MDBBadge } from "mdb-react-ui-kit"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faCheck } from "@fortawesome/free-solid-svg-icons"

const List = (props)=>{
     const {children, status} = props
     let statusElement = <p></p>
     switch(status){
          case 'download':
               statusElement = <MDBBtn size="sm"><FontAwesomeIcon icon={faDownload}/></MDBBtn>
               break
          case 'check':
               statusElement = <MDBBadge><FontAwesomeIcon icon={faCheck} style={{color: "#63E6BE",}}/></MDBBadge>
               break
          case 'spinner':
               statusElement = <div className="spinner-border spinner-border-sm text-primary"></div>
               break
     }

     return (
          <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
               {children}
               {statusElement}
          </MDBListGroupItem>
     )
}

export default List
