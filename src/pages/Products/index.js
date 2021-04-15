import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import ProductList from '@/components/ProductList/index';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function addItem() {
    const item = { name: 'dva', id: products.length+1, key: products.length+1 }
    dispatch({
      type: 'products/add',
      payload: item,
    });
  }
  return (
    <div className="home">
      <h2 className="test">List of Products</h2>
      <Button onClick={addItem}>新增</Button>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);
