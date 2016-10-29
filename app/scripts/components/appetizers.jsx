var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');


var appetizers = React.createClass({
mixins: [Backbone.React.Component.mixin],

render: function(){
  var catItem = this.props.collection.map(function(model){
    return (
      <div class="menu-item" >
        <h3 class="food-name"><strong>Spring Rolls</strong></h3>
        <h3 class="price"><strong>4.95</strong></h3>
        <p class="description">Crispy vegetarian deep-fried spring rolls served with
        Thai sweet & sour sauce.</p>
    </div>
    )
  })
};



});

module.exports = {
  appetizers
}
