// see https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    const target = `http://localhost:${import.meta.env.DEV_SERVER_PORT}/`;

    app.use(createProxyMiddleware('/usersettings', { target }));
    app.use(createProxyMiddleware('/menu', { target }));
};
