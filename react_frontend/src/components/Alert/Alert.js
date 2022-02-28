import Alert from 'react-bootstrap/Alert';

export default function AlertCashier(props) {
    return(
      <Alert style={{margin: "10px", height: "50px"}} variant="danger">
        <p>
          Erro: Preencher todos os campos!
        </p>
      </Alert>
    );
  }