/** React-Table-View: thead **/

var React = require("react");
var TR = require("./tr")

var Tbody = React.createClass({displayName: "Tbody",
    parseData : function(props){
        var data = props ? props.data : this.props.data,
            result = [];
        for(var i in data){
            var temp = [];
            for(var j in data[i]){
                temp.push(data[i][j]);
            }
            result.push(temp);
        }
        this.setState({data: result});
    },
    getInitialState: function(){
        return {
            data: []
        };
    },
    componentDidMount: function(){
        this.parseData();
    },
    componentWillReceiveProps: function(newProps){
        if(this.state.data != [] && this.props != newProps){
            this.parseData(newProps);
        }
    },
    render: function(){
        return (
            React.createElement("tbody", null, 
            
                this.state.data.map(function(d) {
                    return (
                        React.createElement(TR, {data: d})
                    );
                }.bind(this))
            
            )
        );
    }
});

module.exports = Tbody;