import React, { Component } from "react";
class ProductList extends Component {
    render() {
        return (
            <div className="card border-primary mt-4">
                <div className="card-body p-0">
                    <h4 className="card-header alert alert-primary">Danh sách sản phẩm</h4>
                    <div className="card-text">
                        <table className="table table-hover">
                            <thead className="thead-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Mã</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;
