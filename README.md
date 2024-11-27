# Vapi Voice Selection Component

## Overview
This React component provides a voice selection interface for a Vapi-powered voice assistant. Users can choose from predefined voice options and initiate the voice assistant.

## Features
- Voice selection dropdown
- Dynamic voice option loading from JSON
- Integration with Vapi AI voice assistant
- Asynchronous voice assistant start functionality

## Prerequisites
- React 16.8+ (with Hooks support)
- @vapi-ai/web library
- voiceOptions.json configuration file

## Installation
1. Install dependencies:
```bash
npm install react @vapi-ai/web
```

2. Ensure you have a `voiceOptions.json` file with the following structure:
```json
{
  "options": [
    {
      "label": "Voice Name",
      "value": {...voice configuration}
    }
  ]
}
```

## Configuration
- Replace `"api-key"` with your Vapi API key
- Update the Vapi assistant ID `"assistantid"`
- Modify the voice update endpoint URL as needed

## Environment Variables
Recommended to store sensitive information like API keys in `.env` files:
```
REACT_APP_VAPI_API_KEY=your_vapi_api_key
REACT_APP_ASSISTANT_ID=your_assistant_id
```

## Usage
```jsx
import SelectOption from './SelectOption';

function App() {
  return (
    <div>
      <SelectOption />
    </div>
  );
}
```

## Error Handling
- Requires voice selection before starting assistant
- Handles API request errors
- Disables start button during loading

## Dependencies
- React
- Vapi Web SDK
- Tailwind CSS (for styling)

## License
[Add your license information]

## Author
[Your Name/Organization]
