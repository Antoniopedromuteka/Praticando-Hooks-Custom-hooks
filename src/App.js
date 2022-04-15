import React from "react";
import useLocalStorage from './useLocalStorage';

function App() {

  const [produto, setProduto] = useLocalStorage('produto','');

  function handleClick({target}){

    setProduto(target.innerText);

  }

  return (

    <div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>


      <h1>produto : {produto}</h1>

    </div>

  );
}

export default App;
