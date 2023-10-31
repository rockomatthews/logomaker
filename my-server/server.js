const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const { exec } = require('child_process');

app.post('/design', (req, res) => {
  const designPrompt = req.body.prompt;
  if (!designPrompt) {
    return res.status(400).send('Design prompt is required');
  }

  exec(`osascript -e 'tell application "Adobe Illustrator" to do javascript "#include /Users/home/evolved/logomaker/my-server/scripts/illustratorScript.jsx"'`,
    (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error}`);
      console.error(`Standard Error: ${stderr}`);
      return res.status(500).send('Failed to create design');
    }
    console.log('Design Prompt:', designPrompt);
    console.log('Illustrator Script Output:', stdout);

    const pngPath = stdout.trim();
    const pngUrl = pngPath.replace('/path/on/server', 'http://localhost:3000');
    res.send({ graphicUrl: pngUrl });
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
