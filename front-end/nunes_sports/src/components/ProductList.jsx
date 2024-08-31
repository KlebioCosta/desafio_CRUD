import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api';
import ProductForm from './ProducForm';
import { toast } from 'react-toastify';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [refresh]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      toast.error('Failed to fetch products!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setRefresh(!refresh);
      toast.success('Product deleted successfully!');
    } catch (error) {
      console.error('Failed to delete product:', error);
      toast.error('Failed to delete product!');
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="form-container">
      <ProductForm product={selectedProduct} setSelectedProduct={setSelectedProduct} setRefresh={setRefresh} />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.code}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button className="button button-primary" onClick={() => handleEdit(product)}>Edit</button>
                <button className="button button-secondary" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
