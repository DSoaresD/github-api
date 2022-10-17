import './styles.css';

import ResultCard from 'components/ResultCard';
import React, { useState } from 'react';
import axios from 'axios';


type FormData = {
  usuario: string;
};

type GitData = {
  html_url: string;
  followers: number;
  location: string;
  name: string;
  avatar_url: string;
}


const CepSearch = () => {

  const [gitData, setGitData] = useState<GitData>()

  const [formData, setFormData] = useState<FormData>({
    usuario: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value= event.target.value;

    setFormData( { ...formData, [name]:value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    axios
    .get(`https://api.github.com/users/${formData.usuario}`)
    .then((response) => {
      setGitData(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      setGitData(undefined);
      console.log(error);
    });
};
  
  
  return (
    <div className="cep-search-container">
      
      <div className="container search-container">
      <h1>Encontre um perfil github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              name="usuario"
              value={formData.usuario}
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
        {gitData &&
        <ResultCard url={gitData.html_url} followers={gitData.followers} location={gitData.location} nome={gitData.name} avatar={gitData.avatar_url}  />
        }
      </div>
    </div>
  );
};

export default CepSearch;
