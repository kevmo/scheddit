define(['handlebars'], function(handlebars){
var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- HTML Template -->\r\n<div style=\"height:80px\"></div>\r\n<div class=\"container\">\r\n\r\n  <h1> Prescheduled reddit posting??</h1>\r\n  <h2>That's right.</h2>\r\n  <h3>Welcome to the Karma Factory.</h3>\r\n\r\n  <div id=\"howItWorks\">\r\n    <h3> HOW IT WORKS </h3>\r\n    <ol>\r\n      <li>Sign in with your reddit account.</li>\r\n      <li>Prepare a link or post submission, the same way you would on reddit.</li>\r\n      <li>Schedule the date and time you want it sent.</li>\r\n      <li>?????</li>\r\n      <li>Profit.</li>\r\n    </ol>\r\n  </div>\r\n\r\n  <div id=\"whoItsFor\">\r\n    <h3>WHO ITS FOR</h3>\r\n    <ol>\r\n      <li>Moderators</li>\r\n      <li>Really cool people.</li>\r\n      <li>Everyone who had a brilliant idea for a post at 2AM, but wants more upvotes than the Australians can offer.</li>\r\n    </ol> \r\n  </div>\r\n\r\n  <div id=\"clearfix\"></div>\r\n\r\n  \r\n\r\n    <div id='loginButton'>\r\n      <a href=\"/api/login\"><img src=\"img/login.png\" ></a>\r\n    </div>\r\n  <div id=\"warning\">\r\n  <h4> Oh yea...</h4>\r\n  <p>We should probably tell you:<p>\r\n  <ol>\r\n    <li><a href=\"http://www.reddit.com/r/scheddit/comments/1ojaz9/just_so_you_know_we_dont_store_your_password_or/\"> We don't store your password... or even have access to it.  You can revoke our access anytime you'd like.</a></li>\r\n    <li>Your profile alerts you if a post failed for some reason.</li>\r\n    <li>We have not yet enabled CAPTCHA functionality.  We will let you know if your post cannot be posted because of a CAPTCHA.</li>\r\n\r\n  </ol>\r\n\r\n  </div>\r\n\r\n<!--\r\n  <div class=\"frontPage whatsIt\">\r\n   \r\n  </div>\r\n\r\n  <div id=\"frontPage work\">\r\n    <h2>How it works</h2>\r\n    <img src=\"img/how_it_works.png\">\r\n    <div class='howItWorksOutter'>\r\n      <div class='howItWorksInner'>Thing 1</div>\r\n      <div class='howItWorksInner'>Thing 2</div>\r\n    </div>\r\n    <div class='howItWorksOutter'>\r\n      <div class='howItWorksInner'>Thing 3</div>\r\n      <div class='howItWorksInner'>Thing 4</div>\r\n    </div>\r\n  </div>\r\n-->\r\n\r\n  <div id=\"frontPage team\" style=\"display: none\">\r\n    <h2>Meet the team</h2>\r\n    <p>sfhdsjfhdsjkfdfhsdjfshdsjkdf</p>\r\n  </div>\r\n</div>\r\n";
  })
return template
});
