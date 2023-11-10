import { Box } from '@mui/material';
import React, { FormEventHandler, useState } from 'react';
import styles from '../../scss/components/modals/signIn.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { authUser, setOpenModal, setTypeModal } from '../../redux/authSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { userType } from '../../types/MainTypes';

interface ISignIn {}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const SignIn: React.FC<ISignIn> = React.forwardRef<React.Ref<HTMLDivElement>, ISignIn>(
  (_props, ref) => {
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, catchError] = useState('');

    const auth = getAuth();

    const signInHandler: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, email, pass)
        .then((user) => {
          console.log(user);
          setEmail('');
          setPass('');
          catchError('');
          dispatch(setOpenModal(false));
        })
        .catch((error) => {
          catchError(error.message);
        });
    };

    return (
      <Box sx={style} ref={ref} tabIndex={-1}>
        <form className={styles.form} onSubmit={signInHandler}>
          <h2 className={styles.title}>Sign In</h2>
          <hr />
          <br />
          <div className={styles.inputs}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.email}
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              className={styles.pass}
              id="password"
              type="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="password"
              required
            />
            <button className={styles.submit} type="submit">
              Sign In
            </button>
          </div>
          {error && <p className={styles.error}>The password entered is incorrect, try again.</p>}
          <p className={styles.register}>
            Dont have account
            <span
              onClick={() => {
                dispatch(setTypeModal(true));
              }}>
              Register
            </span>
          </p>
        </form>
      </Box>
    );
  },
);

export default SignIn;
