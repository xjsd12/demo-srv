export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            locale: {
                enable: true,
            },
        }],
    ],
    routes: [{
        path: '/',
        component: './Hello',
    }],
};
