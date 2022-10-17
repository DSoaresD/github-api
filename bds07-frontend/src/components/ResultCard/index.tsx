import './styles.css';

type Props = {
  url: string;
  followers: number;
  location: string;
  nome: string;
  avatar: string;
};

const ResultCard = ({ url, followers, location, nome, avatar }: Props) => {
  return (
    <div className="container result-container">
      <div>
        <img src={avatar} alt={nome} />
      </div>
      <div className="result-container-items">
        <h1 className="text-primary">informações</h1>
        <div className="container result-container-atributtes">
          <h3 className="result-perfil">Perfil: {url}</h3>
          <h3 className="result-seguidores">Seguidores: {followers}</h3>
          <h3 className="result-localidade">Localidade: {location}</h3>
          <h3 className="result-nome">Nome: {nome}</h3>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
