import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../api';
import { toast } from 'react-toastify';

const ProductForm = ({ product, setSelectedProduct, setRefresh }) => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData({
        name: '',
        code: '',
        description: '',
        price: ''
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product) {
        await updateProduct(product.id, formData);
        toast.success('Product updated successfully!');
      } else {
        await createProduct(formData);
        toast.success('Product created successfully!');
      }
      setFormData({
        name: '',
        code: '',
        description: '',
        price: ''
      });
      setSelectedProduct(null);
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error('Failed to save product:', error);
      toast.error('Failed to save product!');
    }
  };

  return (
    <div className="form-background">
      <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Product Name"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Product Code</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="input"
            placeholder="Product Code"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input"
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <label className="label">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input"
            placeholder="Price"
            required
          />
        </div>
        <button type="submit" className="button">
          {product ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
