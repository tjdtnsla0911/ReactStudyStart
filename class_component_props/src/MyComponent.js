import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
        
   

    render() {
        
        const {name, favoriteNumer , children} = this.props;
        console.log('name = ',name);
        return (
            <div>
                <h1>보이냐</h1>
            </div>
        );
    }
}

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumer : PropTypes.number.isRequired
}

MyComponent.defaultProps = {
    name : '기본이름'
}

export default MyComponent;