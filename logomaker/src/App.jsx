import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import DesignComponent from './components/DesignComponent.jsx';

function App() {
  const [designPrompt, setDesignPrompt] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/design', { prompt: designPrompt });
      console.log('Server Response:', response.data);
      // TODO: Handle the server response
    } catch (error) {
      console.error('Error sending design prompt to server:', error);
      // TODO: Handle the error
    }
  };

  return (
    <Container component="main" maxWidth="sm" style={{ padding: '16px' }}>
    
      <Typography variant="h2" component="h1" gutterBottom>
        Design Your Graphic
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter your design details"
          multiline
          rows={4}
          fullWidth
          value={designPrompt}
          onChange={(e) => setDesignPrompt(e.target.value)}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Design
        </Button>
      </form>
      <DesignComponent />
    </Container>
  );
}

export default App;
