
import './App.css';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoSite from './logo.png';
import { Component, useEffect } from 'react';
import api from './api'
import React, {useState} from 'react';
function App() {

  const [dados, setDados] = useState([]);
  const [numero, setNumeros] = useState([]);

  
  const dadosArr = Object.values(dados);
 

  console.log(dadosArr);

  useEffect(()=>{

    api.get(`http://localhost:3001/encomendas/${numero}`).then((response) => {
      setDados(response.data);
    })

  }, [dados], [numero]);
return(

   <div className="homePage">
    <Container>
    <div className="imagem-logo">
    <img src={logoSite}/>
    </div>
    <div className="form-busca">
      <Form>
    <Form.Group className="col-md-6" controlId="consulta">
      <Form.Label className="consulta">Consulte sua encomenda</Form.Label>
      <div className="input-busca">
      <Form.Control type="text" placeholder="Digite um numero do pedido" onChange={(e)=>setNumeros(e.target.value)} />
      </div>
      <Button variant="primary" type="submit" >
      <FontAwesomeIcon icon={faSearch} />
    </Button>
    </Form.Group>
    </Form></div>
    <div className="dados-busca">
      
      {dadosArr.map(dado=>(
        <div >
        <div className="dados">
          <h3>{dado.nome}</h3>
          <h3>{dado.id}</h3>
        </div>
        <div className="dados">
          <h3>{dado.data}</h3>
          
          <h3>{dado.entregue}</h3>
          
        </div>
        </div>
      ))}
        
    </div>
  </Container>
    </div>
    
  
  );
}

export default App;
