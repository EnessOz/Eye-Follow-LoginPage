import { useState, useEffect } from 'react';
import './App.css';
import { Input } from 'antd';
import { BiSolidShow, BiSolidHide } from "react-icons/bi"
import { FiGithub } from "react-icons/fi"

function App() {

  const [inputMailLength, setInputMailLength] = useState(0);
  const [inputPassLength, setInputPassLength] = useState(0)
  const [totalLenght, setTotalLength] = useState(0)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false)

  function handleMailInputChange(event) {
    const value = event.target.value;
    if (value.length <= 9) {
      setInputMailLength(value.length);
    }
  }

  function handlePassInputChange(event) {
    const value2 = event.target.value;
    if (value2.length <= 3) {
      setInputPassLength(value2.length)
    }
  }

  useEffect(() => {
    setTotalLength(inputMailLength + inputPassLength);
  }, [inputMailLength, inputPassLength]);

  function togglePasswordVisibility() {
    setPasswordVisible((prevState) => !prevState);
    if (passwordVisible === false) {
      setTotalLength(1001)
    }
    else {
      setTotalLength(inputMailLength + inputPassLength)
    }
  }
  function toggleDivVisibility() {
    setLoginVisible(!loginVisible)
    if (loginVisible === false) {
      window.open("https://github.com/EnessOz", "_blank")
    }

  }
  return (
    <div className="App">
      <img src={`/gif-frames/pt${totalLenght}.png`} alt="GIF"></img>
      <div className="passwordInput">
        <Input onChange={handleMailInputChange} placeholder="E-Mail" />
        <div className='inputNbutton'>
          <Input.Password
            placeholder="Password"
            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
            onChange={handlePassInputChange}
          />
          <button className='showHidebtn' onClick={togglePasswordVisibility}>
            <div className='icons'>
              {passwordVisible ? <BiSolidShow /> : <BiSolidHide />}
            </div>
          </button>
        </div>
        <button className='logInBtn' onClick={toggleDivVisibility}>
          {loginVisible ? (
            <>
              Logout <FiGithub />
            </>
          ) : (
            <>
              Login <FiGithub />
            </>
          )}
        </button>

      </div>

    </div>
  );
}

export default App;
