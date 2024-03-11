import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default Amplify UI styles
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import AudioRec  from "./components/AudioRec";
Amplify.configure(awsExports);


function App() {
  return (
    <>
  <AudioRec/> 
    </>
  );
}

export default withAuthenticator(App);
