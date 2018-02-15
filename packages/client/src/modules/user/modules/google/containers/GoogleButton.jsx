import React from 'react';
import url from 'url';
import { Button } from '../../../../common/components/web/index';
import faGooglePlusSquare from '@fortawesome/fontawesome-free-brands/faGooglePlusSquare';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const { protocol, hostname, port } = url.parse(__BACKEND_URL__);
let serverPort = process.env.PORT || port;
if (__DEV__) {
  serverPort = '3000';
}

const googleLogin = () => {
  window.location = `${protocol}//${hostname}:${serverPort}/auth/google`;
};

const GoogleButton = () => {
  return (
    <Button color="primary" type="button" onClick={googleLogin} style={{ margin: 10 }}>
      Login with Google
    </Button>
  );
};

const GoogleLink = () => {
  return (
    <Button color="link" onClick={googleLogin} style={{ margin: 10 }}>
      Login with Google
    </Button>
  );
};

const GoogleIcon = () => {
  return <FontAwesomeIcon icon={faGooglePlusSquare} size="3x" style={{ margin: 10 }} onClick={googleLogin} />;
};

const GoogleComponent = props => {
  switch (props.type) {
    case 'button':
      return <GoogleButton />;
    case 'link':
      return <GoogleLink />;
    case 'icon':
      return <GoogleIcon />;
    default:
      return <GoogleButton />;
  }
};

export default GoogleComponent;
