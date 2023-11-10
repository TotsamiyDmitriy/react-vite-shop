import React from 'react';
import { Box, Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { getAuth, signOut } from 'firebase/auth';

interface IPopupAccount {}

const PopupAccount: React.FC<IPopupAccount> = ({}) => {
  const { email } = useAuth();

  const handlerSignOut = () => {
    const auth = getAuth();
    signOut(auth);
  };
  return (
    <Box sx={{ p: 20 }}>
      {email}
      <Button variant="outlined" onClick={handlerSignOut}>
        Sign Out
      </Button>
    </Box>
  );
};

export default PopupAccount;
