/* eslint-disable react/prop-types */
function Button({ text_button, disabled, on_click }) {
  return (
    <button disabled={disabled} onClick={on_click} className="margin">
      {text_button}
    </button>
  );
}

export default Button;
