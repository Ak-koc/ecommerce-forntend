import  React from 'react';
import ProductList from './ProductList'
import CategoriesList from './ProductCategories'

function index() {
  return (
    <React.Fragment>
      <div className='container'>
        <CategoriesList />
        <ProductList />
      </div>
    </React.Fragment>
  );
}
export default  index