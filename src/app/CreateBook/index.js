import React, { useContext, useState, useEffect } from 'react'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { GlobalContext } from '../common/store/DataProvider';
import { createBookRequest } from './api';

const CreateBook = () => {
  const { addBook } = useContext(GlobalContext);
  const [open, setStateModal] = useState(false);

  const onAddBook = (data) => {
    addBook(data);
    setStateModal(true);
    createBookRequest(data);
  }

  const onHandleChange = () => setStateModal(!open)

  return (
    <Container maxWidth="sm">
      <FormContainer
        onSuccess={data => onAddBook(data)}
      >
        <TextFieldElement name="author" label="author" required/>
        <TextFieldElement name="country" label="country" required/>
        <TextFieldElement name="language" label="language" required/>
        <TextFieldElement name="imageLink" label="imageLink"/>
        <TextFieldElement name="link" label="link"/>
        <TextFieldElement name="pages" label="pages"/>
        <TextFieldElement name="title" label="title" required/>
        <TextFieldElement name="year" label="year" required/>
        <Button type={'submit'} color={'primary'}>
          Submit
        </Button>
      </FormContainer>
      <Dialog onClose={onHandleChange} open={open}>
        <DialogTitle>Data added</DialogTitle>
      </Dialog>
      <Link to={`/`}>Return to home</Link>
      </Container>
    )
}

export default CreateBook