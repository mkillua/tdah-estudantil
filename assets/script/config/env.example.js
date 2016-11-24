angular.module('Tdah').config(function(envServiceProvider) {
    // set the domains and variables for each environment
    envServiceProvider.config({
        domains: {
            development: ['tdah-api.dev', 'dev.local'],
            production: ['acme.com', 'acme.net', 'acme.org']
            // anotherStage: ['domain1', 'domain2'],
            // anotherStage: ['domain1', 'domain2']
        },
        vars: {
            development: {
                apiUrl: '//tdah-api.dev/',
                staticUrl: '//tdah-api.dev/'
                // antoherCustomVar: 'lorem',
                // antoherCustomVar: 'ipsum'
            },
            production: {
                apiUrl: '//api.acme.com/v2',
                staticUrl: '//static.acme.com'
            }
        }
    });

    // run the environment check, so the comprobation is made
    // before controllers and services are built
    envServiceProvider.check();
});