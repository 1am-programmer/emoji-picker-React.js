# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---

# React Emoji Picker

React Emoji Picker is a customizable emoji picker component built with React.js. It allows users to easily select emojis from a predefined set for use in their applications.

## Features

- **Easy Integration:** Simply import the component and add it to your React application.
- **Customizable:** Customize the appearance and behavior of the emoji picker to suit your application's needs.
- **Search Functionality:** Quickly find emojis by searching for keywords or phrases.
- **Emoji Categories:** Organize emojis into different categories for easier navigation.
- **Lightweight:** Built with performance in mind, ensuring smooth usage even in large-scale applications.

## Installation

You can install the React Emoji Picker package via npm:

```
npm install react-emoji-picker
```

## Usage

1. Import the EmojiPicker component into your React application:

```javascript
import EmojiPicker from 'react-emoji-picker';
```

2. Add the EmojiPicker component to your JSX markup:

```javascript
<EmojiPicker onEmojiSelect={handleEmojiSelect} />
```

3. Handle the emoji selection event:

```javascript
const handleEmojiSelect = (emoji) => {
  // Do something with the selected emoji
  console.log("Selected emoji:", emoji);
};
```

## Props

The EmojiPicker component accepts the following props:

- **onEmojiSelect**: Function called when an emoji is selected. It receives the selected emoji as an argument.

## Example

```javascript
import React, { useState } from 'react';
import EmojiPicker from 'react-emoji-picker';

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div>
      <h1>React Emoji Picker Example</h1>
      <EmojiPicker onEmojiSelect={handleEmojiSelect} />
      <div>
        {selectedEmoji && (
          <p>You selected: {selectedEmoji}</p>
        )}
      </div>
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

