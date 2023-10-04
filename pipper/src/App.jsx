import { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import ExpandingTextarea from "./components/ExpandingTextarea";
import Button from "./components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Pip from "./components/Pip";

function App() {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [avatarSeed, setAvatarSeed] = useState(
    Math.floor(Math.random() * 1000000)
  );
  const [piips, setPiips] = useState([]);

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  const postPiip = () => {
    const newPiip = {
      nickname,
      message,
      avatarSeed,
    };

    const updatedPiips = [newPiip, ...piips];
    setPiips(updatedPiips);
  };

  return (
    <main className="flex min-h-screen max-w-screen-xl mx-auto bg-neutral-50">
      <div className="w-64 p-4">
        <img src="/logo.svg" className="w-36" />
      </div>
      <div className="flex-grow border-neutral-200 border-l border-r bg-white p-4">
        <div className="flex gap-4 border-neutral-200 border-b">
          <Avatar
            key={`avatar-${avatarSeed}`}
            seed={avatarSeed}
            onClick={() => {
              setAvatarSeed(Math.floor(Math.random() * 1000000));
            }}
          />
          <div className="flex-grow">
            <ExpandingTextarea
              key="message-input"
              className="w-full resize-none focus:outline-none"
              onChange={handleTextChange}
              value={message}
            />
            <hr className="py-2" />
            <div className="flex gap-2 pb-4">
              <input
                type=""
                placeholder="Indtast et passende kaldenavn :)"
                value={nickname}
                className="w-full focus:outline-none"
                onChange={(e) => setNickname(e.target.value)}
              />
              <Button onClick={postPiip}>
                <FontAwesomeIcon icon={faTwitter} />
                Send Pip
              </Button>
            </div>
          </div>
        </div>
        {piips.map((pip, i) => (
          <Pip
            key={`pip-${i}`}
            nickname={pip.nickname}
            avatarSeed={pip.avatarSeed}
          >
            {pip.message}
          </Pip>
        ))}
      </div>
      <div className="w-64"></div>
    </main>
  );
}

export default App;
