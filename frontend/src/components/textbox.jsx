const TextBox = () => {
    const [text, setText] = useState('');

    return (
      <div>
        <label htmlFor="text-box">Enter text:</label>
        <br />
        <input
          id="text-box"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    );
  };