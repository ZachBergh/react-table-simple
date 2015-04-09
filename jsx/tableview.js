/** @jsx React.DOM */

var React = require('react');
var THEAD = require('./thead');
var TBODY = require('./tbody');

/**
 * Table view module
 * A simple sortable table component.
 **/
var S = String.fromCharCode(2);
Array.prototype.in_array = function(e) {
    var r = new RegExp(S + e + S);
    return (r.test(S + this.join(S) + S));
};

var TableView = React.createClass({
    parseFields: function() {
        var data = this.props.data,
            fields = new Array();
        for (var i in data) {
            for (j in data[i]) {
                if (!fields.in_array(j)) {
                    fields.push(j)
                }
            }
        }
        this.setState({fields: fields});
    },
    getInitialState: function() {
        return {
            data: this.props.data,
            fields: [],
            sortField: ''
        }
    },
    componentDidMount: function() {
        this.parseFields();
    },
    componentWillUnmount: function() {

    },
    render: function() {
        return (
            <div className="react-table-view"> 
                <table className="pure-table">
                    <THEAD data={this.state.fields}/>
                    <TBODY data={this.state.data}/>
                </table>
            </div>
        );
    }
});

module.exports = TableView;