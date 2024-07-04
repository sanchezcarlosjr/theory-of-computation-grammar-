import React from "react";
import { Login, LoginForm } from "react-admin";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Updated import to react-helmet-async

const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/app/#/grammars',
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID,
        TwitterAuthProvider.PROVIDER_ID
    ]
};

const SignInScreen = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()} />;

const CustomLoginForm = (props: any) => (
    <div>
        <LoginForm redirect="/app/#/grammars" {...props} />
        <SignInScreen />
    </div>
);

const LoginPage = (props: any) => (
    <main>
        <HelmetProvider> {/* Wrap your Helmet components with HelmetProvider */}
            <Helmet>
                <title>Login | Theory of computation</title>
                <meta name="description" content="Theory of computation - UABC | Carlos Eduardo Sanchez Torres" />
            </Helmet>
        </HelmetProvider>
        <Login {...props}>
            <CustomLoginForm {...props} />
        </Login>
    </main>
);

export default LoginPage;
