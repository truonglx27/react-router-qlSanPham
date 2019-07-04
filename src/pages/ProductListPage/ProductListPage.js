import React, { Component } from "react";
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
// import callAPi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actFetchProductRequest,actDeleteProductRequest } from './../../actions/index';
class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        // callAPi('products', 'GET', null).then(res => (
        //     // this.setState({
        //     //     products: res.data
        //     // }) k sử  dung redux

        //     this.props.fetchAllProducts(res.data)
        // ));

        this.props.fetchAllProducts();
    }
    onDelete = id => {
        // var { products } = this.state;
        // callAPi(`products/${id}`, 'DELETE', null).then(res => {
        //     if (res.status === 200) {
        //         let index = this.findIndex(products, id);
        //         if (index !== -1) {
        //             products.splice(index, 1);
        //             this.setState({
        //                 products: products
        //             })
        //         }
        //     }
        // });
        this.props.onDeleteProduct(id);
    }   
    
    showProducts = (products) => {
        let result = null;
        if (products.length) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            });
        }
        return result;
    }

    render() {
        var { products } = this.props;
        return (
            <div className="col-sm-12 col-md-12 col-lg-12">
                <Link className="btn btn-primary mt-4" to='/product/add'>Thêm sản phẩm</Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

}
const mapStateToProps = state => {
    return {
        products: state.products,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductRequest())
        },
        onDeleteProduct: id =>{
            dispatch(actDeleteProductRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
