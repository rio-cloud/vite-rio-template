import { rest } from 'msw';

// See https://mswjs.io/docs/basics/request-matching
// for details on how to define the matching URL
const randomUserHandler = rest.get('https://randomuser.me/api', (req, res, ctx) => {
    return res(
        ctx.json({
            results: [
                {
                    name: { title: 'Mr', first: 'Tage', last: 'Lunde' },
                    email: 'tage.lunde@example.com',
                    picture: {
                        large: 'https://randomuser.me/api/portraits/men/1.jpg',
                        medium: 'https://randomuser.me/api/portraits/med/men/1.jpg',
                        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
                    },
                },
                {
                    name: { title: 'Mrs', first: 'Amanda', last: 'Oliveira' },
                    email: 'amanda.oliveira@example.com',
                    picture: {
                        large: 'https://randomuser.me/api/portraits/women/78.jpg',
                        medium: 'https://randomuser.me/api/portraits/med/women/78.jpg',
                        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/78.jpg',
                    },
                },
                {
                    name: { title: 'Mr', first: 'Pat', last: 'Grant' },
                    email: 'pat.grant@example.com',
                    picture: {
                        large: 'https://randomuser.me/api/portraits/men/38.jpg',
                        medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
                        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg',
                    },
                },
                {
                    name: { title: 'Ms', first: 'Sharron', last: 'Campbell' },
                    email: 'sharron.campbell@example.com',
                    picture: {
                        large: 'https://randomuser.me/api/portraits/women/22.jpg',
                        medium: 'https://randomuser.me/api/portraits/med/women/22.jpg',
                        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/22.jpg',
                    },
                },
                {
                    name: { title: 'Miss', first: 'Tracy', last: 'Mills' },
                    email: 'tracy.mills@example.com',
                    picture: {
                        large: 'https://randomuser.me/api/portraits/women/47.jpg',
                        medium: 'https://randomuser.me/api/portraits/med/women/47.jpg',
                        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/47.jpg',
                    },
                },
            ],
            info: { seed: '63cc20538b9bb1fe', results: 10, page: 1, version: '1.4' },
        })
    );
});

export const handlers = [randomUserHandler];
