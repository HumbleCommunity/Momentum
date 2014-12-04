angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/partials/nav.html","<div id=\"nav\"><div id=\"nav-toggle\" data-ng-click=\"navCtrl.toggleNav()\" data-ng-class=\"{ \'ion-ios7-close-outline\': navCtrl.nav, \'ion-navicon\' : !navCtrl.nav}\"></div><div id=\"nav-menu\" data-ng-show=\"navCtrl.nav\"><ul><li> <a href=\"\" data-ng-click=\"navCtrl.goTo(\'home\')\">Home </a></li><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'about\')\">About</a></li><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'search\')\">Search</a></li></ul><ul data-ng-if=\"navCtrl.isAuthenticated()\"><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'profile\')\">Profile</a></li><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'campaigns\')\">Campaigns</a></li><li><a href=\"\" data-ng-click=\"navCtrl.logout()\">Logout</a></li></ul><ul data-ng-if=\"!navCtrl.isAuthenticated()\"><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'login\')\">Login</a></li><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'signup\')\">Signup</a></li></ul></div></div>");
$templateCache.put("/partials/auth/login.html","<div id=\"login\" class=\"view\"><div class=\"container\"><div class=\"row\"><div class=\"center-form\"><div class=\"panel-body\"><h2 class=\"text-center\">Log in</h2><form method=\"post\" data-ng-submit=\"loginCtrl.login()\" name=\"loginForm\"><div class=\"form-group has-feedback\"><input type=\"text\" name=\"email\" data-ng-model=\"loginCtrl.email\" placeholder=\"Email\" required=\"required\" autofocus=\"autofocus\" class=\"form-control input-lg\"/><span class=\"ion-at form-control-feedback\"></span></div><div class=\"form-group has-feedback\"><input type=\"password\" name=\"password\" data-ng-model=\"loginCtrl.password\" placeholder=\"Password\" required=\"required\" class=\"form-control input-lg\"/><span class=\"ion-key form-control-feedback\"></span></div><button type=\"submit\" data-ng-disabled=\"loginForm.$invalid\" class=\"btn btn-lg btn-block btn-primary\">Log in</button></form><p class=\"text-center\"><br/><a href=\"#\" class=\"small\">Forgot your password?</a><p class=\"small text-center text-muted\"><small>Don\'t have an account yet? <a href=\"/#/signup\">Sign up</a></small></p></p></div></div></div></div></div>");
$templateCache.put("/partials/auth/signup.html","<div id=\"signup\" class=\"view\"><div class=\"container\"><div class=\"row\"><div class=\"center-form\"><div class=\"panel-body\"><h2 class=\"text-center\">Sign up</h2><form method=\"post\" data-ng-submit=\"vm.signup()\" name=\"signupForm\"><div data-ng-class=\"{ \'has-error\' : signupForm.email.$invalid &amp;&amp; signupForm.email.$dirty }\" class=\"form-group has-feedback\"><input type=\"email\" id=\"email\" name=\"email\" data-ng-model=\"vm.email\" placeholder=\"Email\" required=\"required\" class=\"form-control input-lg\"/><span class=\"ion-at form-control-feedback\"></span><div data-ng-if=\"signupForm.email.$dirty\" data-ng-messages=\"signupForm.email.$error\" class=\"help-block text-danger\"><div data-ng-message=\"required\">Your email address is required.</div><div data-ng-message=\"pattern\">Your email address is invalid.</div></div></div><div data-ng-class=\"{ \'has-error\' : signupForm.password.$invalid &amp;&amp; signupForm.password.$dirty }\" class=\"form-group has-feedback\"><input password-strength=\"password-strength\" type=\"password\" name=\"password\" data-ng-model=\"vm.password\" placeholder=\"Password\" required=\"required\" class=\"form-control input-lg\"/><span class=\"ion-key form-control-feedback\"></span><div data-ng-if=\"signupForm.password.$dirty\" data-ng-messages=\"signupForm.password.$error\" class=\"help-block text-danger\"><div data-ng-message=\"required\">Password is required.</div></div></div><p class=\"text-center text-muted\"> <small>By clicking on Sign up, you agree to <a href=\"#\">terms & conditions</a> and <a href=\"#\">privacy policy</a></small></p><button type=\"submit\" data-ng-disabled=\"signupForm.$invalid\" class=\"btn btn-lg btn-block btn-primary\">Sign up</button><br/><p class=\"small text-center text-muted\">Already have an account? <a href=\"/#/login\">Log in now</a></p></form></div></div></div></div></div>");
$templateCache.put("/partials/campaigns/edit.html","<div class=\"view\"><div class=\"container\"><div class=\"row\"> <div class=\"col-sm-4\"><h2>Add a Campaign</h2><form method=\"post\" data-ng-submit=\"campCtrl.addCampaign()\" name=\"createForm\"><div class=\"form-group\"><input type=\"text\" data-ng-model=\"campCtrl.newcampaign.title\" data-ng-required=\"true\" placeholder=\"Title\" class=\"form-control\"/></div><div class=\"form-group\"><textarea data-ng-model=\"campCtrl.newcampaign.description\" data-ng-required=\"true\" placeholder=\"Description\" class=\"form-control\"></textarea></div><button class=\"btn btn-lg btn-success btn-block\">Add New Campaign</button></form></div><div class=\"col-sm-8\"><div id=\"campaigns\" class=\"row\"><div data-ng-repeat=\"campaign in campCtrl.campaigns | orderBy:\'-createdAt\'\" class=\"repeat-animation campaign-item col-sm-6 col-lg-4 col-md-4\"><div class=\"thumbnail\"><a href=\"#\" class=\"ion-ios7-gear-outline\"></a><div class=\"caption\"><h2 class=\"dark\">{{campaign.title}}</h2><a href=\"\" data-ng-click=\"deleteJob($index, job.id)\" class=\"ion-ios7-trash-outline\"></a><a href=\"\" class=\"ion-ios7-upload-outline\"></a></div></div></div></div></div></div></div></div>");
$templateCache.put("/partials/campaigns/form.html","<div class=\"form-group\"><input type=\"text\" data-ng-model=\"campCtrl.newcampaign.title\" data-ng-required=\"true\" placeholder=\"Title\" class=\"form-control\"/></div><div class=\"form-group\"><textarea data-ng-model=\"campCtrl.newcampaign.description\" data-ng-required=\"true\" placeholder=\"Description\" class=\"form-control\"></textarea></div>");
$templateCache.put("/partials/home/home.html","<div id=\"home\" class=\"view\"><a href=\"#/search\" class=\"search-btn ion-ios7-search\"></a><div class=\"content\"><div id=\"large-header\" class=\"large-header\"><div id=\"intro-text\"><h1 class=\"main-title\">Momentum</h1><p>A new way to campaign online</p><br/><form name=\"subscribe\" style=\"max-width:400px;width:90%;margin:0 auto;\" data-ng-submit=\"homeCtrl.joinUp()\" class=\"form-group\"><div class=\"input-group\"><input type=\"email\" placeholder=\"Your Email\" data-ng-model=\"homeCtrl.email\" style=\"text-transform: none !important\" class=\"form-control input-xlg\"/><span class=\"input-group-btn\"><button type=\"submit\" data-ng-disabled=\"!homeCtrl.email\" class=\"btn btn-primary btn-xlg\">Request Invite</button></span></div></form></div></div></div></div>");
$templateCache.put("/partials/home/search.html","<div id=\"search\"><a data-ng-click=\"vm.back()\" class=\"view-close ion-ios7-close-outline\"></a><div class=\"container\"><div id=\"search-field\" class=\"row padd-lg\"><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"Search all activity here...\" class=\"noshadow\"/></div><div class=\"col-sm-2\"><button class=\"ion-ios7-search\"></button></div></div><div class=\"row\"><div class=\"col-sm-4\"><h4>Organisations</h4></div><div class=\"col-sm-4\"><h4>Campaigns</h4></div><div class=\"col-sm-4\"><h4>Events</h4></div></div></div></div>");
$templateCache.put("/partials/user/profile.html","<div class=\"container\"><div class=\"row\"><div class=\"center-form\"><h2 class=\"text-center\">Edit My Profile</h2><form method=\"post\" data-ng-submit=\"vm.updateProfile()\"><div class=\"form-group\"><input type=\"text\" data-ng-model=\"vm.user.first_name\" placeholder=\"First Name\" class=\"form-control\"/></div><div class=\"form-group\"><input type=\"text\" data-ng-model=\"vm.user.last_name\" placeholder=\"Last Name\" class=\"form-control\"/></div><div class=\"form-group\"><input type=\"email\" data-ng-model=\"vm.user.email\" placeholder=\"Email\" class=\"form-control\"/></div><button class=\"btn btn-lg btn-success btn-block\">Update Information</button></form></div></div></div>");}]);