const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const commandRegex = /open (file manager|vs code|spotify|windows defender|adobe illustrator|adobe photoshop|adobe premier pro)/i;

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  const match = transcript.match(commandRegex);

  if (match) {
    const application = match[1].toLowerCase();
    openApplication(application);
  }
};

function openApplication(application) {
  switch (application) {
    case 'file manager':
      // Code to open file manager (e.g., using Node.js child_process module).
      break;
    case 'vs code':
      // Code to open VS Code.
      break;
    case 'spotify':
      // Code to open Spotify.
      break;
    case 'windows defender':
      // Code to open Windows Defender.
      break;
    case 'adobe illustrator':
      // Code to open Adobe Illustrator.
      break;
    case 'adobe photoshop':
      // Code to open Adobe Photoshop.
      break;
    case 'adobe premier pro':
      // Code to open Adobe Premiere Pro.
      break;
    default:
      console.log(`Application "${application}" not recognized.`);
  }
}

recognition.start();

// You can add more functionality and commands as needed.
