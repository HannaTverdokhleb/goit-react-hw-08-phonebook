import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice'
import { selectFilterValue } from 'redux/contacts/selectors';
import { Box, Input, FormLabel } from '@chakra-ui/react';


const SearchFilter = () => {
    let dispatch = useDispatch();
    const searchValue = useSelector(selectFilterValue);

    const handleChange = e => {
        const { value } = e.target;
        dispatch(filterContacts(value));
    }
    
    return (
        <Box maxW='md' borderWidth='1px' borderRadius='lg' padding='20px 10px 20px 20px' marginTop='30px'>
            <FormLabel>
                Find contact by name
                <Input type="text" value={searchValue} onChange={handleChange} placeholder="Search..." />
            </FormLabel>
        </Box>
    )
}

export default SearchFilter;
