import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default Amplify UI styles
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import AudioRec  from "./components/AudioRec";

Amplify.configure(awsExports);


async function App( { signOut, user } ) {
 
  return (
    <>
    <h1>Welcome {user.username}!</h1>
    <button onClick={signOut}>Sign out</button>
    <h1>Audio Recorder</h1>
    <p>Record your voice and upload it to S3</p>
    <p>You can also upload a file from your computer</p>
  <AudioRec/> 
    </>
  );
}
export default withAuthenticator(App);
