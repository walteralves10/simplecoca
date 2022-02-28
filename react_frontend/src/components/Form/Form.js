//import React from "react";
// import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.css';

// import API from "../../services/Api";
// import Alert from '../Alert/Alert';

//export default class FormCashier extends React.Component {

      //constructor(props) {
            //super(props)
      
            // Setting up functions
            /*
            this.onChangeValor = this.onChangeValor.bind(this);
            this.onChangeDescricao = this.onChangeDescricao.bind(this);
            this.onChangeStatus = this.onChangeStatus.bind(this);
            */
           // this.onChangeForm = this.onChangeForm.bind(this);
            //this.onSubmit = this.onSubmit.bind(this);
        
            // Setting up state
            // this.state = {
            //   formData: {              
            //     valor: '',
            //     descricao: '',
            //     status: ''
            //   },
            //   validationError: false
            // }
      } 
    
      /*onChangeValor(e) {
        this.setState({formData: {valor: e.target.value}})
      }
    
      onChangeDescricao(e) {
        this.setState({descricao: e.target.value})
      }
    
      onChangeStatus(e) {
        this.setState({status: e.target.value})
      }*/

      // onChangeForm = (field) => (e) => {
      //   this.setState({
      //     formData: Object.assign(this.state.formData, { [field]: e.target.value })
      //   })
      // }
    
      // onSubmit(e) {
      //   e.preventDefault()

      //   //validation      
      //   if(!this.state.formData.valor || !this.state.formData.descricao || !this.state.formData.status) {
      //     this.setState({validationError: true});
      //     return;
      //   } else {
      //     this.setState({validationError: false});
      //   }

      //   const caixaObject = {
      //     valor: parseFloat(this.state.formData.valor),
      //     descricao: this.state.formData.descricao,
      //     status_movimento: this.state.formData.status,
      //     data_insercao: new Date().toLocaleDateString() 
      //   };
        
      //   API.post("/caixas", caixaObject)
      //   .then(res => {
      //     console.log(res.data);
      //   });
    
      //   this.setState({formData: {valor: '', descricao: '', status: ''}});
      //   this.props.handleClose();
      // }

    // render() {
    //     return(

    //     );
    // }

}