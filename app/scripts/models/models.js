var Backbone = require('backone');

var MenuItem = Backbone.Model.extend({
  idAttribute: '_id',
  defaults:{
    item:'',
    price:'',
    category:'',
    description:''
  }
});

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem,
  url:'https://tiny-lasagna-server.herokuapp.com/collections/mathai'
});
 module.exports={
   MenuItem: MenuItem,
   MenuItemCollection: MenuItemCollection
 };
