import sound from "../../sound/Notification.mp3";
import useSound from "use-sound";

const PracticeFile = () => {
  const [play] = useSound(sound);

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => play()}>Play</button>
    </>
  );
};

export default PracticeFile;
