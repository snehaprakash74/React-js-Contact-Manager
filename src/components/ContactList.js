import React from 'react';
// import  ContactCard from './ContactCard';
import user from '../images/user.jpg';


const ContactList = (props) =>{
    console.log(props);

    const renderContactList = props.contacts.map((contact) =>{
        return(
          // <ContactCard  contacts={contact}/>
          <div className='item'> 
             
            <img className="ui avatar image " src={user} alt='user' />
            <div className='content'>
                
                <div className='header'>{contact.name}</div>
                <div >{contact.email}</div>
                
            </div>
            
              { console.log(contact)} 
            
              
            
          </div>
        )
    })
    return <div className='ui celled list'>{renderContactList}</div>
    
}

export default ContactList

