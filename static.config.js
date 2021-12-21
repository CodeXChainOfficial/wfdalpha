// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at https://react-static.js.org

export default {
    disablePreload: true,
    silent: true,
    plugins: ['react-static-plugin-sass'],
    getSiteData: async ({ dev }) => ({
        title: 'LoTerra is a lottery contract, buy tickets as a player or join the governance! DAO allows making decisions together! Manage the casino 🎰 Set the prize 🏆 Up the ticket price or go cheap 🏷 Extract max profits 🤑 Keep the vault secure at all times!',
        lastBuilt: Date.now(),
    }),
    //maxThreads: 1, // Remove this when you start doing any static generation
    getRoutes: async ({ dev }) => [
        //  simple route
        {
            path: '/',
            template: 'src/pages/Index',
        },
        {
            path: 'esignedit',
            template: 'src/pages/EsignEdit',
        },
        {
            path: 'create',
            template: 'src/pages/CreateProject',
        },
        {
            path: 'backproject',
            template: 'src/pages/BackProject',
        },
        // {
        //     path: 'explore',
        //     template: 'src/pages/Explorer',
        // },
        // {
        //     path: 'prjdetail',
        //     template: 'src/pages/ProjectDetail',
        // },
        // A 404 component
        {
            path: '404',
            template: 'src/pages/NotFound',
        },
    ],
}
