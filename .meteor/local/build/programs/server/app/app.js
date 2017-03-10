var require = meteorInstall({"model":{"server.coffee.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// model/server.coffee.js                                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                     // 1
  'surveys.drop': function() {                                       //
    return Surveys.remove({});                                       //
  }                                                                  //
});                                                                  //
                                                                     //
///////////////////////////////////////////////////////////////////////

},"surveys.coffee.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// model/surveys.coffee.js                                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.Surveys = new Mongo.Collection('surveys');                      // 1
                                                                     //
Surveys.allow({                                                      // 3
  remove: (function(_this) {                                         //
    return function() {                                              //
      return true;                                                   // 4
    };                                                               //
  })(this)                                                           //
});                                                                  //
                                                                     //
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".coffee"]});
require("./model/server.coffee.js");
require("./model/surveys.coffee.js");
//# sourceMappingURL=app.js.map
