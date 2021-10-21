package com.elephantface.shopapi.data.repository;

import com.elephantface.shopapi.data.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ICartRepository extends JpaRepository<Cart,Integer> {
    @Query(value = "SELECT * FROM cart where user_id= ?1", nativeQuery = true)
    List<Cart> findByUserId(Integer itemId);
}
