import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { ListItem, Button } from '@chakra-ui/react';

const ContactListItem = ({contact}) => {
    const dispatch = useDispatch();

    return (
        <ListItem padding='10px' key={contact.id} >
            {contact.name}: {contact.number}
            <Button marginLeft='20px' colorScheme='purple' value={contact.name} onClick={() => dispatch(deleteContact(contact.id))} >Delete</Button>
        </ListItem>
    )
}

export default ContactListItem;

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired
}