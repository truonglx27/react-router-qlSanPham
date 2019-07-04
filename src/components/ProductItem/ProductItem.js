import React, { Component } from "react";
import {Link} from 'react-router-dom';
class ProductItem extends Component {


    onDelete =(id)=>{
        if(confirm('Bạn có chắc chắn muốn xóa không ?')){ //eslint-disable-line
            this.props.onDelete(id);
        }
        
    }
    render() {
        let { product, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                    <span
                        className={product.status ? "badge badge-warning" : "badge badge-info"}
                    >
                        {product.status ? 'Còn hàng' : 'Hết hàng'}
                    </span>
                </td>
                <td>
                    <Link to={`product/${product.id}/edit`} className="btn btn-success">Sửa</Link>
                    <button
                        type="button"
                        className="btn btn-danger ml-2"
                        onClick={()=>this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>

            </tr>
        );
    }
}

export default ProductItem;
