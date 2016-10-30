var Backbone = require('backbone');

var Items = Backbone.Model.extend({
  idAttribute: '_id',

});

var ItemsCollection = Backbone.Collection.extend({
  model: Items,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mathai-orders'
});
 module.exports={
   Items: Items,
   ItemsCollection : ItemsCollection
 };
