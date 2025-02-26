import { useDispatch } from "react-redux";
import { addContact } from "../features/contactSlice";

const ContactForm = () => {
    let dis=useDispatch()


    return ( 
        <>
        ................
        <button onClick={()=>dis(addContact( {
      "id": 44,
      "isMain": false,
      "isActive": true,
      "firstName": "lllllllllllllllllll",
      "lastName": "llllllllllllllllllll",
      "role": "HR Manager",
      "contactType": "Employee",
      "address": "Office 3, Ramat Aviv 15, Tel Aviv",
      "tags": ["Recruitment", "People Management"],
      "contactDetails": {
        "preferredLanguage": "Hebrew",
        "phoneNumbers": [
          {"number": "050-2223344", "type": "Work"}
        ],
        "emails": [
          {"email": "noa.baron@company.com", "type": "Work"}
        ],
        "country": "Israel"
      },
      "billingInformation": "Ramat Aviv 15",
      "mailingAddress": "Ramat Aviv 15",
      "accountingRef": "55555",
      "vatNumber": "112233",
      "avatar": "https://example.com/avatar4.jpg"
    }))}>add-try</button>
        </>
     );
}
 
export default ContactForm;