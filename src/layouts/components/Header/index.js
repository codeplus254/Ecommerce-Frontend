import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

class Header extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        categoryProducts: null,
      };
      //this.props.getAllDepartments();
    }

    componentDidMount() {
      console.log('componentDidMount')
      
    };
    
    myCallback = (dataFromChild) => {
      console.log(dataFromChild)
      this.setState({categoryProducts: dataFromChild})
    };

    render() {

        const {
            classes,
            brand,
            categories,
            products
        } = this.props;
        console.log('header index props:', this.props)
        return (
            <div>
                <TopBar />
                <NavBar classes={classes} brand={brand} categories={categories} products={products} callbackFromParent={this.myCallback} />
            </div>
        );
    }
}

Header.defaultProps = {
    categories: {
        rows: []
    }
};

Header.propTypes = {
    classes: PropTypes.object,
    brand: PropTypes.string
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

function mapStateToProps({categories}) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
