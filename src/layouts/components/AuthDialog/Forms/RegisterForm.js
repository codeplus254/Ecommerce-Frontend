import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import {Button, InputAdornment, withStyles} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/VpnKey';
import NameIcon from '@material-ui/icons/Person';
import {TextFieldFormsy} from '../../../../components/Formsy';
import Formsy from 'formsy-react';
import styles from './styles';
import * as customerActions from '../../../../store/actions/customer';
import * as alertActions from '../../../../store/actions/alerts';

class RegisterForm extends Component {

    form = React.createRef();
    constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
      this.props.createNewCustomer(data);
      this.props.hideAuth();
    }
    render() {
        return (
            <div className="w-full flex flex-row justify-center">
                <Formsy
                    onValidSubmit={this.onSubmit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    ref={(form) => this.form = form}
                    className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
                    id="registerForm"
                >
                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="text"
                        name="name"
                        label="Name"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><NameIcon className="text-20" color="action"/></InputAdornment>
                        }}
                        variant="outlined"
                        helperText=''
                        required
                    />

                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="text"
                        name="email"
                        label="Email"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><EmailIcon className="text-20" color="action"/></InputAdornment>
                        }}
                        variant="outlined"
                        helperText=''
                        required
                    />

                    <TextFieldFormsy
                        className="w-full mb-4"
                        type="password"
                        name="password"
                        label="Password"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><PasswordIcon className="text-20"
                                                                                       color="action"/></InputAdornment>
                        }}
                        variant="outlined"
                        helperText=''
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full mx-auto normal-case"
                        aria-label="LOG IN"
                        value="legacy"
                        id="btnFormRegister"
                    >
                        Register
                    </Button>

                </Formsy>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      createNewCustomer: customerActions.createNewCustomer,
      hideAuth: alertActions.hideAuth,
  }, dispatch);
}

function mapStateToProps({customer}) {
  return {
      customer: customer,
  }
}

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterForm)));
