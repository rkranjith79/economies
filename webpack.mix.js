const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('vendor/almasaeed2010/adminlte/plugins/jquery/jquery.min.js', 'public/plugins/jquery')
    .js('vendor/almasaeed2010/adminlte/dist/js/adminlte.min.js', 'public/dist/js')
    .js('vendor/almasaeed2010/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js', 'public/plugins/bootstrap/js/')
    
    .css('vendor/almasaeed2010/adminlte/plugins/fontawesome-free/css/all.min.css', 'public/plugins/fontawesome-free/css')
    .css('vendor/almasaeed2010/adminlte/dist/css/adminlte.min.css', 'public/dist/css')

    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ]);

if (mix.inProduction()) {
    mix.version();
}
