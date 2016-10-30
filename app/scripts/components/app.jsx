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
      // console.log(customersSelection);
    return{
      collection: collection,
      customersSelection: customersSelection
    }

  },
  addItemToOrder: function(item){
    this.state.customersSelection.create(item);
    this.setState({customersSelection: this.state.customersSelection})
    // console.log('customersSelection',this.state.customersSelection);
  },
  render: function(){
    return (
      <div>
      <MenuContainer collection={this.state.collection} addItemToOrder={this.addItemToOrder}/>
      <OrderScreen customersSelection ={this.state.customersSelection}/>
      </div>
    )
  }
});


module.exports = {
  AppComponent: AppComponent
}
