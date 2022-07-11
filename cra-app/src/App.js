import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [textError, setTextError] = useState('Поле не должно быть пустым')
  const [empty, setEmpty] = useState(true)
  const [send, setSend] = useState(false)
  const [sendMessage, setSendMessage] = useState('Сообщение успешно отправлено')
  const [blur, setBlur] = useState(false)

  const handleText = (e) => {
    setText(e.target.value);
    setEmpty(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(text)
    setText('')
    setEmpty(true)
    setSend(true)
    setBlur(false)
  }


  const handleBlur = () => {
    setBlur(true)
    setSend(false)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleText} onBlur={handleBlur}/>
        <button disabled={empty} type="submit">send</button>
      </form>
      {(empty && blur) && <div>{textError}</div>}
      {(send && sendMessage) && <div>{sendMessage}</div>}
    </div>
  );
}

export default App;
