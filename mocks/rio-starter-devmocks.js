Object.defineProperty(exports, '__esModule', { value: true });

require('dotenv').config({ path: '.env.development' });
const express = require('express');
const bodyParser = require('body-parser');

const DEV_SERVER_PORT = 3001;

const mockUserSettings = (app) => {
    app.use(express.static(__dirname + '/static'));

    app.get('/menu', (req, res) => {
        res.send(
            '<!DOCTYPE html>\n' +
                '<html lang="en">\n' +
                '<head>\n' +
                '    <meta charset="UTF-8">\n' +
                '    <title>Mocked Menu</title>\n' +
                '</head>\n' +
                '<body>\n' +
                '<div>Mock Application Menu</div>\n' +
                '</body>\n' +
                '</html>'
        );
    });
}

// Convenience export to use all available mocks
const mockAll = (app) => {
    mockUserSettings(app);
}

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mockAll(app);

app.listen(DEV_SERVER_PORT, () => console.log(`Express dev server is running on localhost:${DEV_SERVER_PORT}`));

exports.mockUserSettings = mockUserSettings;
exports.mockAll = mockAll;
