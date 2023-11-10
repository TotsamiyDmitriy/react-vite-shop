import { Box } from '@mui/material';
import React, { FormEventHandler, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from '../../scss/components/modals/signUp.module.scss';
import { setTypeModal, setOpenModal } from '../../redux/authSlice';
import { useAppDispatch } from '../../redux/hooks';

interface ISignUp {}

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

const SignUp: React.FC<ISignUp> = React.forwardRef<React.Ref<HTMLDivElement>, ISignUp>(
  (_props, ref) => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [error, catchedError] = useState('');
    const auth = getAuth();

    const signUpHandler: FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          setEmail('');
          setPass('');
          catchedError('');
          dispatch(setOpenModal(false));
          // ...
        })
        .catch((error) => {
          if (error.message.includes('(auth/weak-password)')) {
            catchedError('Password should be at least 6 characters.');
            return error;
          } else if (error.message.includes('auth/email-already-in-use')) {
            catchedError('This is email already in use.');
            return error;
          }
        });
    };

    return (
      <Box sx={style} ref={ref} tabIndex={-1}>
        <form className={styles.form} onSubmit={signUpHandler}>
          <h2 className={styles.title}>Register</h2>
          <hr />
          <br />
          <div className={styles.inputs}>
            <label htmlFor="name">Name</label>
            <input
              className={styles.name}
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="name"
              required
            />
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
              Register
            </button>
          </div>
          {error !== '' ? <p className={styles.error}>{error}</p> : ''}
          <p className={styles.register}>
            Already have an account?
            <span
              onClick={() => {
                dispatch(setTypeModal(false));
              }}>
              SignIn
            </span>
          </p>
        </form>
      </Box>
    );
  },
);

export default SignUp;
