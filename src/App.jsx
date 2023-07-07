import { useState } from "react";
import "./app.css";

import Header from "./components/Header";
import Button from "./components/Button";
import Text from "./components/Text";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState("");
  const [reset, setReset] = useState("disabled");

  function handleClickTambah() {
    if (counter == 10) {
      setCounter("Done!");
      setDisabled("disabled");
      setReset("");
    } else {
      setCounter(counter + 1);
      setDisabled("");
    }
  }

  function handleClickKurang() {
    if (counter == 0) {
      setCounter("Done!");
      setDisabled("disabled");
      setReset("");
    } else {
      setCounter(counter - 1);
      setDisabled("");
    }
  }

  function handleClickReset() {
    setCounter(0);
    setDisabled("");
    setReset("disabled");
  }

  return (
    <div>
      <Header name="React" />
      <div className="container">
        <div className="flex_display">
          <Button
            text_button="-"
            disabled={disabled}
            on_click={handleClickKurang}
          />
          <Text text={counter} />
          <Button
            text_button="+"
            disabled={disabled}
            on_click={handleClickTambah}
          />
        </div>
        <div className="btn_reset">
          <Button
            text_button="Reset"
            disabled={reset}
            on_click={handleClickReset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
