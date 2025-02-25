import { useState ,useEffect} from 'react'
import './App.css'
import ContactsTable from './components/ContactsTable'
import { useDispatch } from 'react-redux'
import { setContactsArr } from './features/contactSlice';
import BasePanel from './components/BasePanel';


function App() {

let dispatch=useDispatch();

  useEffect(() => {
   fetch('/db.json')
   .then(response => response.json())
   .then(data => dispatch(setContactsArr(data.contacts)))
   .catch(error => console.error(error))
  }
  , [])
  return (
    <>
    <BasePanel/>
    <ContactsTable />
    </>
  )
}

export default App
