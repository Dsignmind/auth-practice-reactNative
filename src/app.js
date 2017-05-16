import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
//we don't have to specify the index.js file because it is looked at automatically
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD9RsJWOMQT_ZUoh-l5-6dgiaK-BkxC8xE',
            authDomain: 'authapp-1d2a9.firebaseapp.com',
            databaseURL: 'https://authapp-1d2a9.firebaseio.com',
            projectId: 'authapp-1d2a9',
            storageBucket: 'authapp-1d2a9.appspot.com',
            messagingSenderId: '893186171796'
        });

        //below will return user object if user is logged in or null/undefined if not
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
                <View>
                    <Header headerText="Authentication" />
                    {this.renderContent()}
                </View>
        );
    }
}

export default App;
