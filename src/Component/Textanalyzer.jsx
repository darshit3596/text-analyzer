import React from "react";
export default function Textanalyzer(props) {
  const [newtext, setText] = React.useState("");

  const onCapital = () => {
    let Text = newtext.toUpperCase();
    setText(Text);
  };

  const textChange = (event) => {
    setText(event.target.value);
  };

  const onLowercase = () => {
    let Text = newtext.toLowerCase();
    setText(Text);
  };

  const onClear = () => {
    let Text = "";
    setText(Text);
  };

  const oncopy = () => {
    navigator.clipboard
      .writeText(newtext) // modern way
      .then(() => {
        alert("Text copied to clipboard 📋");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  function onCapitalcase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div className="container mt-4">
        <h3>TextMagic</h3>
        <div className="input-group">
          <textarea
            className="form-control mt-2"
            rows={10}
            aria-label="With textarea"
            onChange={textChange}
            value={newtext}
          ></textarea>
        </div>
        <button className="btn btn-primary mt-2 " onClick={onCapital}>
          ToUpperCase
        </button>
        <button className="btn btn-primary mt-2 ms-2" onClick={onLowercase}>
          To LowerCase
        </button>
        <button className="btn btn-primary mt-2 ms-2" onClick={onCapitalcase}>
          To Capitalizer
        </button>
        <button className="btn btn-success mt-2 ms-2" onClick={oncopy}>
          Copy{" "}
        </button>

        <button className="btn btn-danger mt-2 ms-2" onClick={onClear}>
          To Clear{" "}
        </button>
        <div className="container mt-3">
          <h5>Summery of Text : </h5>
          <h7>
            {" "}
            {newtext.split(" ").length} Words and {newtext.length} Charecters.{" "}
          </h7>
          <h5 className="mt-2"> {0.010 * newtext.split(" ").length} Minutes to read. </h5>
          <p><strong>Preview :</strong></p>
          <p >{newtext.length > 0 ? newtext : " "}</p>
        </div>
      </div>
      
              



         

    </>
  );
}
