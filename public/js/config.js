/**
 * Created by zc on 2015/4/17.
 */

requirejs.config({
    baseUrl: '/public/js',
    paths: {
        app: 'app',
        jquery: 'lib/jquery/jquery',
        angular: 'lib/angularjs/angular'
    },
    shim: {
        angular : { exports : 'angular'}
    }
});
requirejs(['app'], function(app) {
    //app.hello();
});
