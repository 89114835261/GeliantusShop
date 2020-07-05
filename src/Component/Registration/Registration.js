import React from 'react';
import { connect } from 'react-redux';
import r from './Registration.module.scss';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { isOpenRegistrationModalAC } from './../redux/HeaderMenuReducer';
import { maxLength, required } from '../redux/ValidatorsForms';
import { Input } from '../Common/FormControl';

const MAX_LENGTH30 = maxLength(30);
const MAX_LENGTH12 = maxLength(12);

const RegistrationForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
                    <Field component={Input} validate={[required, MAX_LENGTH30]} type="text" name="name" placeholder="Как вас зовут?" />
                    <Field component={Input} validate={[required, MAX_LENGTH30]} type="text" name="lastName" placeholder="Фамилия" />
                    <Field component={Input} validate={[required, MAX_LENGTH30]} type="text" name="lastLastName" placeholder="Отчество" />
                    <Field component={Input} validate={[required, MAX_LENGTH30]} type="text" name="mail" placeholder="Email" />
                    <Field component={Input} validate={[required, MAX_LENGTH12]} type="text" name="phone" placeholder="Номер телефона" />
                    <Field component={Input} validate={[required, MAX_LENGTH30]} type="password" name="password" placeholder="Придумайте пароль" />
                    <Field component={Input} validate={[required, MAX_LENGTH30]} type="password" name="passwordRepeat" placeholder="Повторите пароль" />
                    <button type="submit">Зарегистрироваться</button>
        </form >
    )
}

const RegistrationReduxForm = reduxForm({form: 'registration'})(RegistrationForm);

class Registration extends React.Component {
    addNewuser(values) {
        console.log(values);
        
    }
    render() {
        return (
            <div className={r.registrationModal}>
            <div className={r.formBox}>
                <h3>Регистрация</h3>
                <p>Это займёт 1 минуту!</p>
                <NavLink to onClick={() => this.props.isOpenRegistrationModal(false)}>Закрыть</NavLink>
                <RegistrationReduxForm onSubmit={this.addNewuser}/>
                <NavLink to onClick={() => this.props.isOpenRegistrationModal(false)}>Закрыть</NavLink>
            </div>
        </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isOpenRegistration: state.HeaderMenu.isOpenRegistration
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        isOpenRegistrationModal: (booleanType = ' ') => {
            dispatch(isOpenRegistrationModalAC(booleanType));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Registration);
