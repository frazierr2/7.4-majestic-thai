var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');
var _ = require('underscore');

var MenuItemCollection = require('../models/models').MenuItemCollection;

var MenuItems = React.createClass({
mixins: [Backbone.React.Component.mixin],

addItemToOrder: function(item){
  var selectedItem = {title: item.get('item'), price: item.get('price')};
this.props.addItemToOrder(selectedItem)
  // console.log('selectedItem', selectedItem);
},
render: function(){
var collection = this.getCollection();

var menuList = collection.map(function(model){
  var addItemToOrder = this.addItemToOrder.bind(this, model);
  return (
      <div className="menu-item" key={model.get('_id') || model.cid}>
        <h3 className="food-name"><strong>{model.get('item')}</strong></h3>
        <h3 className="price"><strong>{model.get('price')}</strong></h3>
        <p className="description">{model.get('description')}</p>
        <div className="select-btn">
        <button onClick={addItemToOrder} type="button" className="btn btn-primary btn-sm btn-select" >Select Item</button>
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
    <MenuItems addItemToOrder={this.props.addItemToOrder}/>
  );
}
});


module.exports = {
  // MenuItems: MenuItems,
  MenuContainer: MenuContainer
}
