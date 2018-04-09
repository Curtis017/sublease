import * as React from 'react';

interface Props {
  message: string;
  dismiss: () => void;
}

const Error: React.StatelessComponent<Props> = ({message, dismiss}) => (
  <div>
    {message}
    <button onClick={dismiss}>Dismiss</button>
  </div>
);

export default Error;