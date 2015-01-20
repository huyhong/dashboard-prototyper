var React = require('react');
var ChartMixin = require('../mixins/rdb-chart-mixin.js');
var BaseWidget = require('./rdb-base-widget.jsx');

var Widget = React.createClass({
  mixins: [ChartMixin],

  componentDidMount: function () {
    this.createChart({ type : 'bar' });
  },
  
  render: function() {
    
    var style = { padding : '1rem' },
        widget = (
          <div style={ style }>
            <div className="rdb-widget">
              <div id={this.props._id}></div>
            </div> 
          </div>);

    return (
      <BaseWidget {...this.props} widget={widget}/>
    );
  }
});

module.exports = Widget;