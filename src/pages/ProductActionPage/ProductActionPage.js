import React, { Component } from "react";
// import callAPI from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actUpdateProductRequest, actGetProductRequest } from './../../actions/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            namePr: '',
            pricePr: 0,
            statusPr: '',
        };
    }
    onChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = e => {
        var { id, namePr, pricePr, statusPr } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: namePr,
            price: pricePr,
            status: statusPr
        }
        e.preventDefault();
        if (id) {
            // callAPI(`products/${id}`, 'PUT', {
            //     name: namePr,
            //     price: pricePr,
            //     status: statusPr
            // }).then(res => {
            //     history.goBack();
            // })
            this.props.onUpdateProduct(product);
            history.goBack();
        } else {
            // callAPI('products', 'POST', {
            //     name: namePr,
            //     price: pricePr,
            //     status: statusPr
            // }).then(res => {
            //     history.goBack();
            // });

            this.props.onAddProduct(product);
            history.goBack();
        }
    }

    componentDidMount() {
        var { match } = this.props;
        // console.log(product);
        if (match) {
            let id = match.params.id;
            this.props.onGetProduct(id);
            // console.log(itemEditting); 
            // this.setState({
            //     id: itemEditting.id,
            //     namePr: itemEditting.name,
            //     pricePr: itemEditting.price,
            //     statusPr: itemEditting.status,
            // })
        }
    }
    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps');
        var { itemEditting } = nextProps;
        // console.log(itemEditting);
        this.setState({
            id: itemEditting.id,
            namePr: itemEditting.name,
            pricePr: itemEditting.price,
            statusPr: itemEditting.status,
        })
    }
    render() {
        var { namePr, pricePr, statusPr } = this.state;
        return (
            <div className="col-sm-6 col-md-6 col-lg-6 mt-4">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Tên sản phẩm: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="namePr"
                            value={namePr}
                            onChange={this.onChange}
                            placeholder="Nhập tên sản phẩm..." />
                    </div>
                    <div className="form-group">
                        <label >Giá: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="pricePr"
                            value={pricePr}
                            onChange={this.onChange}
                            placeholder="" />
                    </div>
                    <div className="form-group">
                        <label className="mr-5">Trạng thái: </label>
                        <label className="form-check-label">
                            <input type="checkbox"
                                className="form-check-input"
                                name="statusPr"
                                value={statusPr}
                                onChange={this.onChange}
                                checked={statusPr}
                            />
                            Còn hàng
                        </label>
                    </div>
                    <Link to="/products" className="btn btn-danger mr-3">Trở lại</Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        itemEditting: state.itemEditting,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product))
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product))
        },
        onGetProduct: id => {
            dispatch(actGetProductRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);

