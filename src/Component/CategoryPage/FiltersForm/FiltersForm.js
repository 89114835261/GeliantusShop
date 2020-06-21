import React from 'react';
import F from './FiltersForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {setSpecificationsActionCreator} from './../../redux/FiltersForm-reducer';
import Axios from 'axios';


let FiltersBox = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            
            {props.remapForm}
            <button type='submit'>sda</button>
        </form>
    );  
}

const LoginReduxForm = reduxForm({form: 'filters'})(FiltersBox);

class FiltersForm extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }
        componentDidMount() {
        Axios.get('/Specification.json').then(response => {this.props.setSpecificationForm(response.data)})

    
    }



        render() {
            
            if(this.props.specification) {
        let remapForm = this.props.specification.map( f => 
        <div className={F.blockFiltersElement}><span>{f.name}</span> 
        <Field type={f.type} name={f.id + '-' + f.name} placeholder={f.name} component={'select'}>
        {f.value && f.value.map((g, i) => i == 0 ? <option hidden label={g} value={g}></option> : <option label={g} value={g}></option>)}
            </Field></div>);
        const onSubmit = (formData) => { //formData - то, что выбрал юзер. Отправится на сервер
            console.log(formData); //здесь делаем колбэк, который делает запрос
        }
       return(
            <div>
                <LoginReduxForm onSubmit={onSubmit} remapForm={remapForm} specificationForm={this.props.specification} />
            </div>
        );   } else return <div></div>
    }
}

let mapSateToProps = (state) => {
    return {
        specification: state.FiltersForm.specifications
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setSpecificationForm: (specifications) => {
            dispatch(setSpecificationsActionCreator (specifications));
        }
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(FiltersForm);