var React = require('react');
var MenuItemCollection = require('../models/models').MenuItemCollection;
var MenuContainer = require('./menu.jsx').MenuContainer;
var OrderScreen = require('./orderscreen.jsx').OrderScreen;
var ItemsCollection = require('../models/orders').ItemsCollection;


var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;

    var collection = new MenuItemCollection();
    collection.fetch().then(function(item){
      self.setState({collection: collection})
    });
      var customersSelection = new ItemsCollection();
    return{
      collection: collection,
      customersSelection: customersSelection
    }

  },
  selectedItemToOrder: function(item){
    // this.state.customersSelection.add()
  },
  render: function(){
    return (
      <div>
      <MenuContainer collection={this.state.collection} />
      <OrderScreen />
      </div>
    )
  }
});


module.exports = {
  AppComponent: AppComponent
}
