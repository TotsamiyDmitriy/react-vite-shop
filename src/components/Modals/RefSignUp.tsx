import React, { ElementType } from 'react';
import SignUp from './SignUp';

interface ISignUp {
  state: any;
  toggleModal: any;
}

const RefSignUp = React.forwardRef<ElementType, ISignUp>((props, ref) => {
  return <SignUp props={props} ref={ref}></SignUp>;
});

export default RefSignUp;
