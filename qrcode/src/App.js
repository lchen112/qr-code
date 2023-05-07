import "./App.css";
import QrCode from "./image-qr-code.png";

function App() {
  return (
    <div className="App-background">
      <div className="Qrcode-container">
        <img alt="qr code" className="Qrcode" src={QrCode} />
        <div className="Title-text">
          Improve your front-end skills by building projects
        </div>
        <div className="Subtitle-text">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
}

export default App;
