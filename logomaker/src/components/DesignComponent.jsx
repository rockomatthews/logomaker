import { useState } from 'react';
import axios from 'axios';

function DesignComponent() {
  const [graphicUrl, setGraphicUrl] = useState(null);

  async function handleSubmit(designPrompt) {
    try {
      const response = await axios.post('http://localhost:3000/design', { prompt: designPrompt });
      console.log('Server Response:', response.data);
      setGraphicUrl(response.data.graphicUrl);
    } catch (error) {
      console.error('Error sending design prompt to server:', error);
      // TODO: Handle the error
    }
  }

  return (
    <div>
      {/* ... other parts of your component */}
      {graphicUrl && <img src={graphicUrl} alt="Generated Graphic" />}
    </div>
  );
}

export default DesignComponent;
