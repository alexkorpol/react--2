import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { FiSearch } from 'react-icons/fi';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => setQuery(e.target.value);

  const onFormSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '25ch',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      {/*<button type="submit">*/}
      {/*  <FiSearch size="16px" />*/}
      {/*</button>*/}

      <TextField
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={onChange}
        value={query}
      />
    </Box>
  );
};
