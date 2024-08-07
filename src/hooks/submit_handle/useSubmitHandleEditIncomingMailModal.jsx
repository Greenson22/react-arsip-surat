const useSubmitHandleEditIncomingMailModal = (event, letter, setCommand)=>{
     event.preventDefault()
     const formData = new FormData()
     const form = event.target
     formData.append('agenda_number', form['agenda-number'].value)
     formData.append('letter_number', form['letter-number'].value)
     formData.append('source', form['source'].value)
     formData.append('letter_date', form['letter-date'].value)
     formData.append('received_date', form['received-date'].value)
     formData.append('recipient', form['recipient'].value)
     formData.append('subject', form['subject'].value)

     setCommand({
          'command': 'put',
          'id': letter.id,
          'data': formData
     })
}

export default useSubmitHandleEditIncomingMailModal