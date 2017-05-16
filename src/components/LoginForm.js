import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true }); //reset error state and set loading to true
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this)) //if successful
            .catch(() => { //if email and password don't exist or are incorrect
                firebase.auth().createUserWithEmailAndPassword(email, password) //create account
                    .then(this.onLoginSuccess.bind(this)) //if successful
                    .catch(this.onLoginFail.bind(this)); //if all fails
            });
    }

    onLoginSuccess() {
        this.setState({
            error: '',
            loading: false,
            email: '',
            password: ''
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false });
    }

    renderButton() { //decide whether to render button or spinner
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label="Email"
                        placeholder="example@mail.com"
                    />
                </CardSection>
                <CardSection>
                <Input
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    label="Password"
                    secureTextEntry //no need to specify ={true} because it is true by default
                    placeholder="password"
                />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
export default LoginForm;
