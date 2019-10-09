import React from "react";
import PropTypes from "prop-types";
import {withStyles, InputBase, Badge, Drawer, Hidden, IconButton, Button, Toolbar, AppBar} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/icons/Menu';
import {
    NavDropdown,
} from 'react-bootstrap';
import { Link }  from 'react-router-dom';
import styles from './styles';
import * as alertActions from "../../../../store/actions/alerts";
import * as categoriesActions from '../../../../store/actions/categories';
import * as departmentsActions from '../../../../store/actions/departments';
import * as productsActions from '../../../../store/actions/products';
import './style.css';

class NavBar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        mobileOpen: false
      };
      console.log(this.props)
      this.props.getAllDepartments();
    }
    
    onDepartmentClick(id) {
      this.props.getAllCategoriesInDepartment({
        department_id: id,
      })
    }

    async onCategoryClick(id) {
      const data = await this.props.getAllProductsInCategory({
        category_id: id,
        page: 1,
        limit: 9,
        description_length: 120
      });
      this.forceUpdate();
      console.log('category clicked',data)
      
    }

    handleDrawerToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    }

    componentDidMount(){
      window.addEventListener('scroll', (event) => {
        const scrollpos = window.scrollY;
         if(scrollpos > 10){
           this.setState({
              activeClass: 'is-scrolled'
           })
         }else{
             this.setState({
                activeClass: 'is-ontop'
             })
         }
      });
    }

    componentDidUpdate() {
      console.log('componentDidUpdate', this.props)
      this.props.products.length > 0 && this.props.callbackFromParent(this.props.products);
    }

    render() {
        console.log('Navbar index props:', this.props)
        const {
            classes,
            brand,
            departments,
            categories,
        } = this.props;
        const brandComponent =
        <Link to={'/'} className={classes.brand}>
          {brand}
        </Link>

        return (
            <div>
                <AppBar className={`mainHeaderHolder ${classes.navBar + ' ' + this.state.activeClass}`}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.flex}>
                            {brandComponent}
                        </div>
                        <Hidden mdDown>
                        <div className={`departments categories ${classes.linksContainer}`}>
                          {departments.length>0 && departments.map((department) => {
                                              return (
                                                <NavDropdown 
                                                  title= {department.name}
                                                  className="department navDropdown"
                                                  onClick={() => {this.onDepartmentClick(department.department_id)}}
                                                  >
                                                  {categories.length>0 && categories.map((category) => {
                                                    return (
                                                      <NavDropdown.Item
                                                        onClick={() => {this.onCategoryClick(category.category_id)}}
                                                        className="category"
                                                    >
                                                        {category.name}
                                                    </NavDropdown.Item>
                                                    )
                                                  })}
                                                </NavDropdown>
                                              )
                                            
                                            })}
                        </div>
                        </Hidden>
                        <Hidden mdDown>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                name="search"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        </Hidden>
                        <Hidden mdDown>
                            <div className={classes.iconContainer} onClick={() => {this.props.showCart()}}>
                                <Badge classes={{
                                    badge: classes.badge
                                }}
                                    id="menuCartQuantity"
                                    badgeContent={2}
                                    color="primary">
                                    <img alt="Shopping Cart Icon" src="/assets/icons/shopping-cart-white.svg"/>
                                </Badge>
                            </div>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle.bind(this)}
                            >
                                <Menu />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                    <Hidden mdUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={"right"}
                            className="py-12"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle.bind(this)}
                        >
                        <Button classes={{
                                    root: classes.button
                                }}>
                                    <Link to={`/department/1`} className={classes.navDrawerLink} >
                                        Regional
                                    </Link>
                                </Button>
                        </Drawer>
                    </Hidden>
                </AppBar>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    brand: PropTypes.string.isRequired,
    fixed: PropTypes.bool,
    absolute: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showCart: alertActions.showCart,
        getAllCategoriesInDepartment: categoriesActions.getAllCategoriesInDepartment,
        getAllDepartments: departmentsActions.getAllDepartments,
        getAllProductsInCategory: productsActions.getAllProductsInCategory,
    }, dispatch);
}

function mapStateToProps(state) {
  const { departments, categories, products } = state;
  return {
      departments: departments.all.data,
      categories: categories.allCategoriesIndepartment.data.rows,
      products: products.allProductsIncategory.data.rows,
  }
  }

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(NavBar));
