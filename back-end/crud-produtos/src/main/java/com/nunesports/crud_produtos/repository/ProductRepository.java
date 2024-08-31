package com.nunesports.crud_produtos.repository;

import com.nunesports.crud_produtos.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
