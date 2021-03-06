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
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on routes, check out:
 * http://links.sailsjs.org/docs/config/routes
 */

module.exports.routes = {


  // Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, etc. depending on your
  // default view engine) your home page.
  //
  // (Alternatively, remove this and add an `index.html` file in your `assets` directory)
  '/': {
    view: 'homepage'
  },

  // Email routes
  'post /email/subscribe': 'EmailController.subscribe',

  // Campaign routes
  'post /campaign/:id/admin/:user': 'CampaignController.addAdmin',
  'delete /campaign/:id/admin/:user': 'CampaignController.removeAdmin',

  // Action routes
  'get /campaign/:id/action/': 'ActionController.find',
  'post /campaign/:id/action': 'ActionController.create',
  'put /campaign/:id/action/:childid': 'ActionController.update',
  'delete /campaign/:id/action/:childid': 'ActionController.destroy',

  // Public routes
  'get /campaign/:id/action/:childid': {
     controller: "ActionController",
     action: "findOne",
     cors: true
  },
  'get /campaign/:id/action/:childid/public': {
     controller: "ActionController",
     action: "feedPublic",
     cors: true
  },
  'get /campaign/:id/action/:childid/private': {
     controller: "ActionController",
     action: "feedPrivate"
  },
  'post /petition/:id': {
     controller: "PetitionController",
     action: "create",
     cors: true
  }
  // If a request to a URL doesn't match any of the custom routes above,
  // it is matched against Sails route blueprints.  See `config/blueprints.js`
  // for configuration options and examples.

};
