import React, { Component } from 'react';

class NotHave extends Component {
    constructor(props)
    {
        super(props);
        this.props = props;
    }
    render() { 
        let {msg} = this.props;
        return (  
            <p id="not-have">
                {msg ? (msg) : ('Nothink to display please add')}
            </p>
        );
    }
}
 
export default NotHave;