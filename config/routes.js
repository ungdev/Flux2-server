/**
/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
    *                                                                          *
    * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
    * etc. depending on your default view engine) your home page.              *
    *                                                                          *
    * (Alternatively, remove this and add an `index.html` file in your         *
    * `assets` directory)                                                      *
    *                                                                          *
    ***************************************************************************/

    '/': {
        view: 'homepage'
    },

    /***************************************************************************
    *                                                                          *
    * Custom routes here...                                                    *
    *                                                                          *
    * If a request to a URL doesn't match any of the custom routes above, it   *
    * is matched against Sails route blueprints. See `config/blueprints.js`    *
    * for configuration options and examples.                                  *
    *.                                                                         *
    * Sails automatically create following routes for each controllers
    * 'get /user': 'UserController.find',
    * 'get /user/:id': 'UserController.findOne',
    * 'post /user': 'UserController.create',
    * 'put /user/:id': 'UserController.update',
    * 'delete /user/:id': 'UserController.destroy',
    *                                                                          *
    ***************************************************************************/


    'put /alert/:id/users': 'AlertController.updateAssignedUsers',
    'post /alert/subscribe': 'AlertController.subscribe',
    'post /alert/unsubscribe': 'AlertController.unsubscribe',

    'post /alertbutton/alert': 'AlertButtonController.createAlert',
    'post /alertbutton/subscribe': 'AlertButtonController.subscribe',
    'post /alertbutton/unsubscribe': 'AlertButtonController.unsubscribe',

    'post /login/ip': 'AuthController.ipLogin',
    'get  /login/oauth': 'AuthController.oauthLogin',
    'post /login/oauth/submit': 'AuthController.oauthLoginSubmit',
    'post /login/jwt': 'AuthController.jwtLogin',
    'get  /login/roles': 'AuthController.getRoles',
    'post /login/as/:id': 'AuthController.loginAs',
    'post /logout': 'AuthController.logout',

    'put /barrel/location': 'BarrelController.setLocation',
    'post /barrel/subscribe': 'BarrelController.subscribe',
    'post /barrel/unsubscribe': 'BarrelController.unsubscribe',

    'post /barreltype/barrel': 'BarrelTypeController.setBarrelNumber',
    'post /barreltype/subscribe': 'BarrelTypeController.subscribe',
    'post /barreltype/unsubscribe': 'BarrelTypeController.unsubscribe',

    'post /bottleaction/subscribe': 'BottleActionController.subscribe',
    'post /bottleaction/unsubscribe': 'BottleActionController.unsubscribe',
    'get /bottleaction/count': 'BottleActionController.count',

    'post /bottletype/subscribe': 'BottleTypeController.subscribe',
    'post /bottletype/unsubscribe': 'BottleTypeController.unsubscribe',

    'post /developer/refresh': 'DeveloperController.refresh',

    'get /message/channels': 'MessageController.getChannels',
    'post /message/subscribe': 'MessageController.subscribe',
    'post /message/unsubscribe': 'MessageController.unsubscribe',

    'post /team/subscribe': 'TeamController.subscribe',
    'post /team/unsubscribe': 'TeamController.unsubscribe',

    'get /user/etuutt': 'UserController.etuuttFind',
    'get /user/avatar/:id': 'UserController.getAvatar',
    'post /user/avatar/:id': 'UserController.uploadAvatar',
    'post /user/subscribe': 'UserController.subscribe',
    'post /user/unsubscribe': 'UserController.unsubscribe',

    'post /session/open': 'SessionController.open',
    'post /session/subscribe': 'SessionController.subscribe',
    'post /session/unsubscribe': 'SessionController.unsubscribe',
};
