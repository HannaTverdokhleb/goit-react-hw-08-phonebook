import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Box, Button, Input, FormLabel, FormControl } from '@chakra-ui/react';


export default function AddContactForm() {

    const dispatch = useDispatch();
    const stateContacts = useSelector(selectContacts);
    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();
    const [ contactName, setName] = useState('');
    const [ contactNumber, setNumber] = useState('');

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'name' :
                setName(value);
                break;

            case 'number' :
                setNumber(value);
                break;

            default: return;
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        let isExist = stateContacts.find(contact => contactName === contact.name);
        if (isExist) {
            alert(contactName + " is allready in contacts");
            return
        };

        dispatch(addContact({
            name: contactName,
            number: contactNumber
        }));
        reset();  
    }

    const reset = () => {
        setNumber('');
        setName('');
    }

    return (
        <form onSubmit={handleOnSubmit}  autoComplete='off'>
            <Box maxW='md' borderWidth='1px' borderRadius='lg' padding='20px'>
                
                <FormLabel htmlFor={ nameInputId } >
                    Name
                <Input
                    type="text"
                    name="name"
                    value={contactName}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={ nameInputId }
                    
                />
                </FormLabel>
                <FormLabel htmlFor={ numberInputId }>
                    Number
                <Input
                    type="tel"
                    name="number"
                    value={contactNumber}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id={numberInputId}
                    
                />
                </FormLabel>
                <Button marginTop='20px' colorScheme='blue' size='lg' type='submit'>Add contact</Button>
            </Box>
        </form>
    )
}
