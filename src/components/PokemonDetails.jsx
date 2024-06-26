import {useParams} from 'react-router-dom'



const PokemonDetails = (props) => {
    const params = useParams();
   
    return (
      <>
        <h2>Pokemon Details</h2>
        <dl>
          <dt>Weight:</dt>
          <dd></dd>
          <dt>Height:</dt>
          <dd></dd>
        </dl>
      </>
    );
  };
  
  export default PokemonDetails;