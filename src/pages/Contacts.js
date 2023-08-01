import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList/ContactList';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div style={{display:'flex', marginTop:'50px'}}>{isLoading ? 'Request in progress...' :
        <>
          <div>
            <AddContactForm />
            <SearchFilter />
          </div>
          <div style={{paddingLeft:'40px'}}>
            <ContactList />
          </div>
        </>
      }</div>
    </>
  );
}
