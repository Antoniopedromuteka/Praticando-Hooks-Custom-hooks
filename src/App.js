import React from "react";
import useFecth from "./useFecth";
import useLocalStorage from './useLocalStorage';

function App() {

  const [produto, setProduto] = useLocalStorage('produto','');
  const {data, request, loading, error} = useFecth();

  React.useEffect(()=>{
    
    async function fetchData(){
      const {response, json} = await request("https://ranekapi.origamid.dev/json/api/produto/");
    }
    fetchData();
  }, [request]);
  

  console.log(data);


  function handleClick({target}){

    setProduto(target.innerText);

  }

  if(error) return <div><h1>{error}</h1></div>
  if(loading === true) return <div><h1>Carregando...</h1></div>
  if(!data) return null;
  return (

    <div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>


      <h1>produto : {produto}</h1>

      {data.map((produto)=><div key={produto.id}><h1>{produto.nome}</h1></div>)}

    </div>

  );
}

export default App;
