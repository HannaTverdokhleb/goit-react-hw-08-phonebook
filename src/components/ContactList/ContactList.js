import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/contacts/selectors'
import { UnorderedList } from '@chakra-ui/react';

const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const searchValue = useSelector(selectFilterValue);

    return (
        <>
            <h2>Your contactlist</h2>
            <UnorderedList>
                {contacts && contacts
                .filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase())) 
                .map(contact => {
                    return (
                        <ContactListItem key={contact.id} contact={contact} />
                    )
                })}
            </UnorderedList>
        </>
    )
}

export default ContactList;
