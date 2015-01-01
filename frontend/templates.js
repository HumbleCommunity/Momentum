angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/partials/about.html","<div id=\"about\" class=\"container\"><h2>About</h2><p>Momentum is an open source CRM (customer relationship manager) that is focused on engaging spcific user groups with meaningful and creative online actions and in turn discovering who is really dedicated to your cause. The second most important pripity is re-engagement with those users and testing what works and what doesn\'t through rapid interation. </p><p>This tool is designed to make it quick for developers to create online campaign tools. This means it is cost effective to create mutiple campaigns with variosu actions targeted to a variety of demographics. Single campaigns with a vague message and a broard audience are not effective but this is usually the most cost effective option. This software makes it possible to enagage a range of different audiences with highly relevant online content. </p><p>Even though you can create 10 different campaigns, it is all managed by a single admin panel. This means your online campaigns can be as complex and diverse as you like without making it complicated to track and engage with the progress of various campaigns and re-engage the audiences who interact with the camapign.</p></div>");
$templateCache.put("/partials/nav.html","<div id=\"nav\"><a id=\"nav-toggle\" href=\"\" data-ng-click=\"navCtrl.toggleNav()\" data-ng-class=\"{ \'ion-ios-close-outline\': navCtrl.nav, \'ion-navicon\' : !navCtrl.nav}\"></a><div id=\"nav-menu\" data-ng-show=\"navCtrl.nav\"><ul><li> <a href=\"\" data-ng-click=\"navCtrl.goTo(\'home\')\">Home </a></li><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'about\')\">About</a></li></ul><ul data-ng-if=\"navCtrl.isAuthenticated()\"><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'profile\')\">Profile</a></li><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'campaigns\')\">Campaigns</a></li><li><a href=\"\" data-ng-click=\"navCtrl.logout()\">Logout</a></li></ul><ul data-ng-if=\"!navCtrl.isAuthenticated()\"><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'login\')\">Login</a></li><li><a href=\"\" data-ng-click=\"navCtrl.goTo(\'signup\')\">Signup</a></li></ul></div></div>");
$templateCache.put("/partials/auth/login.html","<div id=\"login\" class=\"view\"><div class=\"container\"><div class=\"row\"><div class=\"center-form\"><div class=\"panel-body\"><h2 class=\"text-center\">Log in</h2><form method=\"post\" data-ng-submit=\"loginCtrl.login()\" name=\"loginForm\"><div class=\"form-group has-feedback\"><input type=\"text\" name=\"email\" data-ng-model=\"loginCtrl.email\" placeholder=\"Email\" required=\"required\" autofocus=\"autofocus\" class=\"form-control input-lg\"/><span class=\"ion-at form-control-feedback\"></span></div><div class=\"form-group has-feedback\"><input type=\"password\" name=\"password\" data-ng-model=\"loginCtrl.password\" placeholder=\"Password\" required=\"required\" class=\"form-control input-lg\"/><span class=\"ion-key form-control-feedback\"></span></div><button type=\"submit\" data-ng-disabled=\"loginForm.$invalid\" class=\"btn btn-lg btn-block btn-primary\">Log in</button></form><p class=\"text-center\"><br/><a href=\"#\" class=\"small\">Forgot your password?</a><p class=\"small text-center text-muted\"><small>Don\'t have an account yet? <a href=\"/#/signup\">Sign up</a></small></p></p></div></div></div></div></div>");
$templateCache.put("/partials/auth/signup.html","<div id=\"signup\" class=\"view\"><div class=\"container\"><div class=\"row\"><div class=\"center-form\"><div class=\"panel-body\"><h2 class=\"text-center\">Sign up</h2><form method=\"post\" data-ng-submit=\"vm.signup()\" name=\"signupForm\"><div data-ng-class=\"{ \'has-error\' : signupForm.email.$invalid &amp;&amp; signupForm.email.$dirty }\" class=\"form-group has-feedback\"><input type=\"email\" id=\"email\" name=\"email\" data-ng-model=\"vm.email\" placeholder=\"Email\" required=\"required\" class=\"form-control input-lg\"/><span class=\"ion-at form-control-feedback\"></span><div data-ng-if=\"signupForm.email.$dirty\" data-ng-messages=\"signupForm.email.$error\" class=\"help-block text-danger\"><div data-ng-message=\"required\">Your email address is required.</div><div data-ng-message=\"pattern\">Your email address is invalid.</div></div></div><div data-ng-class=\"{ \'has-error\' : signupForm.password.$invalid &amp;&amp; signupForm.password.$dirty }\" class=\"form-group has-feedback\"><input password-strength=\"password-strength\" type=\"password\" name=\"password\" data-ng-model=\"vm.password\" placeholder=\"Password\" required=\"required\" class=\"form-control input-lg\"/><span class=\"ion-key form-control-feedback\"></span><div data-ng-if=\"signupForm.password.$dirty\" data-ng-messages=\"signupForm.password.$error\" class=\"help-block text-danger\"><div data-ng-message=\"required\">Password is required.</div></div></div><p class=\"text-center text-muted\"> <small>By clicking on Sign up, you agree to <a href=\"#\">terms & conditions</a> and <a href=\"#\">privacy policy</a></small></p><button type=\"submit\" data-ng-disabled=\"signupForm.$invalid\" class=\"btn btn-lg btn-block btn-primary\">Sign up</button><br/><p class=\"small text-center text-muted\">Already have an account? <a href=\"/#/login\">Log in now</a></p></form></div></div></div></div></div>");
$templateCache.put("/partials/campaigns/edit.html","<div class=\"view\"><div class=\"container\"><div class=\"row\"> <div id=\"create\" data-ng-if=\"!cc.editing\" class=\"col-sm-4\"><h2>Add a Campaign</h2><form method=\"post\" data-ng-submit=\"cc.create()\" name=\"createForm\"><div data-ng-include=\"\'/partials/campaigns/form.html\'\"></div><button class=\"btn btn-lg btn-success btn-block\">Save</button></form></div><div class=\"col-sm-8\"><div id=\"campaigns\" class=\"row\"><div data-ng-repeat=\"campaign in cc.campaigns | orderBy:\'-createdAt\' \" class=\"repeat-animation campaign-item col-sm-6 col-lg-4 col-md-4\"><a href=\"\" data-ng-click=\"/#/admin/campaigns/{{campaign.id}}/actions\" class=\"thumbnail\"><img src=\"http://placehold.it/320x150\" alt=\"\"/></a><div class=\"campaign-info\"><h4 href=\"\" data-ng-click=\"cc.edit(campaign)\">({{campaign.id}}) {{campaign.title | limitTo:30}}</h4><p>{{campaign.description | limitTo:70 }}...</p><div class=\"campaign-buttons\"><a href=\"\" data-ng-click=\"cc.edit(campaign)\" data-title=\"Edit\" bs-tooltip=\"bs-tooltip\" class=\"ion-ios-gear\"></a><a href=\"/#/admin/campaigns/{{campaign.id}}/actions\" data-title=\"Actions\" bs-tooltip=\"bs-tooltip\" class=\"ion-ios-flask\"></a><a href=\"#\" data-title=\"Users\" bs-tooltip=\"bs-tooltip\" class=\"ion-ios-person\"></a><a href=\"\" data-ng-click=\"cc.destroy(campaign.id)\" data-title=\"Delete\" bs-tooltip=\"bs-tooltip\" class=\"ion-ios-close-empty\"></a></div></div></div></div></div><div id=\"edit\" data-ng-if=\"cc.editing\" class=\"col-sm-4\"><h2>Edit {{cc.oldcampaign.title}}</h2><form method=\"post\" data-ng-submit=\"cc.update(cc.newcampaign)\" name=\"editForm\"><div data-ng-include=\"\'/partials/campaigns/form.html\'\"></div><div class=\"row\"><div class=\"col-sm-4\"><button data-ng-click=\"cc.reset()\" class=\"btn btn-lg btn-google-plus btn-block\">Cancel</button></div><div class=\"col-sm-8\"><button class=\"btn btn-lg btn-success btn-block\">Update</button></div></div></form></div></div></div></div>");
$templateCache.put("/partials/campaigns/form.html","<div><div class=\"form-group\"><input type=\"text\" data-ng-model=\"cc.newcampaign.title\" data-ng-required=\"true\" placeholder=\"Title\" class=\"form-control\"/></div><div class=\"form-group\"><textarea data-ng-model=\"cc.newcampaign.description\" data-ng-required=\"true\" placeholder=\"Description\" class=\"form-control\"></textarea></div></div>");
$templateCache.put("/partials/home/home.html","<div id=\"home\" class=\"view\"><a href=\"#/search\" class=\"search-btn ion-ios7-search\"></a><div class=\"content\"><div id=\"large-header\" class=\"large-header\"><div id=\"intro-text\"><h1 class=\"main-title\">Momentum</h1><p>A new way to campaign online</p><br/><form name=\"subscribe\" style=\"max-width:400px;width:90%;margin:0 auto;\" data-ng-submit=\"homeCtrl.joinUp()\" class=\"form-group\"><div class=\"input-group\"><input type=\"email\" placeholder=\"Your Email\" data-ng-model=\"homeCtrl.email\" style=\"text-transform: none !important\" class=\"form-control input-xlg\"/><span class=\"input-group-btn\"><button type=\"submit\" data-ng-disabled=\"!homeCtrl.email\" class=\"btn btn-primary btn-xlg\">Request Invite</button></span></div></form></div></div></div></div>");
$templateCache.put("/partials/home/search.html","<div id=\"search\"><a data-ng-click=\"vm.back()\" class=\"view-close ion-ios7-close-outline\"></a><div class=\"container\"><div id=\"search-field\" class=\"row padd-lg\"><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"Search all activity here...\" class=\"noshadow\"/></div><div class=\"col-sm-2\"><button class=\"ion-ios7-search\"></button></div></div><div class=\"row\"><div class=\"col-sm-4\"><h4>Organisations</h4></div><div class=\"col-sm-4\"><h4>Campaigns</h4></div><div class=\"col-sm-4\"><h4>Events</h4></div></div></div></div>");
$templateCache.put("/partials/user/profile.html","<div class=\"container\"><div class=\"row\"><div class=\"center-form\"><div class=\"text-center\"><img id=\"profile-img\" src=\"\" class=\"img-circle\"/></div><h2 class=\"text-center\">Edit My Profile</h2><form method=\"post\" data-ng-submit=\"profileCtrl.update()\"><div class=\"form-group\"><input type=\"text\" data-ng-model=\"profileCtrl.user.first_name\" placeholder=\"First Name\" class=\"form-control\"/></div><div class=\"form-group\"><input type=\"text\" data-ng-model=\"profileCtrl.user.last_name\" placeholder=\"Last Name\" class=\"form-control\"/></div><div class=\"form-group\"><input type=\"text\" data-ng-model=\"profileCtrl.user.dob\" placeholder=\"Date of birth (dd/mm/yyyy)\" class=\"form-control\"/></div><div class=\"form-group\"><input type=\"hidden\" data-ng-model=\"profileCtrl.user.image\" class=\"form-control\"/></div><div class=\"form-group\"><input type=\"email\" data-ng-model=\"profileCtrl.user.email\" placeholder=\"Email\" class=\"form-control\"/></div><button class=\"btn btn-lg btn-success btn-block\">Update Information  </button></form><h2 id=\"link-heading\" class=\"text-center\">Link Account</h2><button data-ng-if=\"!profileCtrl.user.facebook\" data-ng-click=\"profileCtrl.link(\'facebook\')\" class=\"btn btn-lg btn-facebook btn-block\">Link with Facebook</button><button data-ng-if=\"profileCtrl.user.facebook\" data-ng-click=\"profileCtrl.unlink(\'facebook\')\" class=\"btn btn-lg btn-facebook btn-block\">Unlink from Facebook</button></div></div></div>");
$templateCache.put("/partials/campaigns/actions/edit.html","<div class=\"view\"><div class=\"container\"><div class=\"row\"> <div id=\"create\" data-ng-if=\"!ac.editing\" class=\"col-sm-4\"><h2>Add an action</h2><form method=\"post\" data-ng-submit=\"ac.create()\" name=\"createForm\"><div data-ng-include=\"\'/partials/campaigns/actions/form.html\'\"></div><button class=\"btn btn-lg btn-success btn-block\">Save</button></form></div><div class=\"col-sm-8\"><div id=\"actions\" class=\"row\"><div data-ng-repeat=\"action in ac.actions | orderBy:\'-createdAt\' \" class=\"repeat-animation campaign-item col-sm-6 col-lg-4 col-md-4\"><a href=\"\" class=\"thumbnail\"><span>{{ ac.count(action.submissions.length) }}</span><br/> Submissions</a><div class=\"campaign-info\"><h4 href=\"\" data-ng-click=\"ac.edit(action)\">({{action.id}}) {{action.title}}</h4><p>{{action.type }}  </p><div class=\"campaign-buttons\"><a href=\"\" data-ng-click=\"ac.edit(action)\" data-title=\"Edit\" bs-tooltip=\"bs-tooltip\" class=\"ion-ios-gear\"></a><a href=\"#\" data-title=\"View\" bs-tooltip=\"bs-tooltip\" class=\"ion-ios-flask\"></a><a href=\"\" data-ng-click=\"ac.destroy(action.id)\" data-title=\"Delete\" bs-tooltip=\"bs-tooltip\" class=\"ion-ios-close-empty\"></a></div></div></div></div></div><div id=\"edit\" data-ng-if=\"ac.editing\" class=\"col-sm-4\"><h2>Edit {{ac.oldaction.title}}</h2><form method=\"post\" data-ng-submit=\"ac.update(ac.newaction)\" name=\"editForm\"><div data-ng-include=\"\'/partials/campaigns/actions/form.html\'\"></div><div class=\"row\"><div class=\"col-sm-4\"><button data-ng-click=\"ac.reset()\" class=\"btn btn-lg btn-google-plus btn-block\">Cancel</button></div><div class=\"col-sm-8\"><button class=\"btn btn-lg btn-success btn-block\">Save</button></div></div></form></div></div></div></div>");
$templateCache.put("/partials/campaigns/actions/form.html","<div><div class=\"form-group\"><input type=\"text\" data-ng-model=\"ac.newaction.title\" data-ng-required=\"true\" placeholder=\"Title\" class=\"form-control\"/></div><div class=\"form-group\"><textarea data-ng-model=\"ac.newaction.description\" data-ng-required=\"true\" placeholder=\"Description\" class=\"form-control\"></textarea></div><div class=\"form-group\"><select data-ng-model=\"ac.newaction.type\" data-ng-required=\"true\" class=\"form-control\"><option value=\"signature\">signature</option><option value=\"image\">image</option><option value=\"message\">message</option><option value=\"email\">email</option></select></div></div>");}]);