var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');
var _ = require('underscore');

var MenuItemCollection = require('../models/models').MenuItemCollection;

var MenuItems = React.createClass({
mixins: [Backbone.React.Component.mixin],

selectMenuItem: function(item){
this.props.addItemToOrder
  console.log(item.get('price'));
},
render: function(){
var collection = this.getCollection();

var menuList = collection.map(function(model){
  var selectMenuItem = this.selectMenuItem.bind(this, model);
  return (
      <div className="menu-item" key={model.get('_id')}>
        <h3 className="food-name"><strong>{model.get('item')}</strong></h3>
        <h3 className="price"><strong>{model.get('price')}</strong></h3>
        <p className="description">{model.get('description')}</p>
        <div className="select-btn">
        <button onClick={selectMenuItem} type="button" className="btn btn-primary btn-sm btn-select" >Select Item</button>
        </div>
      </div>
    )
}.bind(this));

return(
  <div className="col-md-6 menu">
    {menuList}
  </div>
)
}
});

var MenuContainer = React.createClass({
mixins: [Backbone.React.Component.mixin],
// getDefaultProps: function(){
//   var collection = new MenuItemCollection();
//   collection.fetch();
//   return {
//     collection: collection
//   }
// },
render: function(){
  return(
    <MenuItems />
  );
}
});


module.exports = {
  // MenuItems: MenuItems,
  MenuContainer: MenuContainer
}
