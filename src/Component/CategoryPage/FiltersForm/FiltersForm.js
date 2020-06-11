import React from 'react';
import F from './FiltersForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {setSpecificationsActionCreator} from './../../redux/FiltersForm-reducer';


let FiltersBox = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'login'} component={'input'} />
            {props.remapForm}
            <button>sda</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'filters'})(FiltersBox);

class FiltersForm extends React.Component {
    constructor(props) { //Constructor можно не писать, если мы кроме super ничего не передаём
        super(props); // Это происходит по умолчанию
    }
        componentDidMount() {
            let specificationList = [
                {id: 1, technicalName: 'Diametr', name: 'Диаметр', type: 'checkbox'},
                {id: 2, name: 'Cvet', value: 'Цвет', type: ''},
                {id: 4, name: 'Uzor', value: 'Узор', type: ''}
            ]
        this.props.setSpecificationForm (specificationList);
    }



        render() {
        let remapForm = this.props.specification.map( f => 
        <div className={F.blockFiltersElement}><span>{f.name}</span> 
        <Field type={f.type} name={f.name} placeholder={f.name} component={'input'} /></div>);
        return(
            <div>
                <div>asdasdasdasd   </div>
                <LoginReduxForm remapForm={remapForm} specificationForm={this.props.specification} />
            </div>
        );
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