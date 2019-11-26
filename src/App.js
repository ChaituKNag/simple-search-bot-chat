import React from 'react';
import { Grid } from 'semantic-ui-react';
import Sidebar from './components/Sidebar';
import MessageList from './components/MessageList';
import AddMessage from './components/AddMessage';
function App() {
  return (
    <Grid stretched style={{minHeight: 'inherit', padding: '20px'}}>
      <Grid.Row>
        <Grid.Column width={3}>
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={13} stretched>  
          <MessageList />
          <AddMessage />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
