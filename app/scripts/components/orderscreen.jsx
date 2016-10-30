var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');
var _ = require('underscore');


var SelectedOrder = React.createClass({
  render: function(){
    return (
      <div className="well affix col-md-4 col-md-offset-1 order-screen">
       <h1 className="text-center order">Your Order</h1>
       <div className="order-box">
       <div className="items-added"></div>
       <h3 className="total"><strong>Total: $</strong></h3>
       <h3 className="order-price"><strong>0.00</strong></h3>
       <button type="button" className="btn btn-primary btn-lg btn-block">Place Order</button>
       </div>
     </div>

    )
  }
});

var OrderScreen = React.createClass({
render: function(){
  return(
    <SelectedOrder />
  )
}
});

module.exports = {
  OrderScreen: OrderScreen
}
