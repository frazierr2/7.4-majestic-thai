var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');
var _ = require('underscore');


var SelectedOrder = React.createClass({
 placeOrder: function(){
   alert('Your Order Was Placed Successfully');
   window.location.reload();
 },
  render: function(){
    var collection = this.props.customersSelection;
    // console.log(collection);
    var itemList = collection.map(function(item){
      return(
        <div key={item.get('_id') || item.cid}>
          <span>{item.get('title')}</span>
          <span className="order-screen-price">{item.get('price')}</span>
        </div>
      );
    });
    var numberArray = collection.map(function(item){
      return item.get('price');
    });
    // console.log(numberArray);
    var stringToNum = numberArray.map(Number);
    // console.log(stringToNum);
    // console.log(itemList.length);
    var total = stringToNum.reduce(function(originalValue, previousValue){
      return originalValue + previousValue
    },0);
      // console.log(total);
    return (
      <div className="well affix col-md-4 col-md-offset-1 order-screen">
       <h1 className="text-center order">Your Order</h1>
       <div className="order-box">
       <div className="items-added">
          {itemList}
       </div>
       <h3 className="total"><strong>Total: $</strong></h3>
       <h3 className="order-price"><strong>{total.toFixed(2)}</strong></h3>
       <button onClick={this.placeOrder} type="button" className="btn btn-primary btn-lg btn-block">Place Order</button>
       </div>
     </div>

    )
  }
});

var OrderScreen = React.createClass({
render: function(){
  return(
    <SelectedOrder customersSelection={this.props.customersSelection} />
  )
}
});

module.exports = {
  OrderScreen: OrderScreen
}
