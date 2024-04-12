import { useState } from 'react'
import './App.css'

import EmojiPicker, {Emoji} from 'emoji-picker-react';

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState("")
  function handleEmojiClick(emojiData) {
    setSelectedEmoji(emojiData.unified)
  }
  return (
    <div>
      <h1>Emoji picker</h1>
      <div >
        {selectedEmoji ? 
          <Emoji unified={selectedEmoji} size={50} />
         : null
        }
      </div>
      <br />
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </div>
  );
}




export default App
