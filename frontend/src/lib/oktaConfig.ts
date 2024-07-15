export const oktaConfig = {
    clientId: '0oahff9ntj6MGL0415d7',
    issuer: 'https://dev-48222681.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}