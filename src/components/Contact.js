import { useHistory } from "react-router-dom";

export default function Contact() {
  const history = useHistory();

  function handleClickBack() {
    history.goBack();
  }

  function handleGoHome() {
    history.push("/");
  }

  return (
    <div>
      <h2>Contact</h2>
      <a href="https://github.com/eduardoccmelo">Github</a>
      <p>Kölnstr. 10000, Köln, DE</p>
      <p>+49 151 515151</p>
      <button onClick={handleClickBack}>Take me Back</button>
      <button onClick={handleGoHome}>Go Home</button>
    </div>
  );
}
