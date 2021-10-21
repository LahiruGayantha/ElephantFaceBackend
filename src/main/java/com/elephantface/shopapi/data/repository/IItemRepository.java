package com.elephantface.shopapi.data.repository;

import com.elephantface.shopapi.data.models.Item;
import com.elephantface.shopapi.data.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface IItemRepository extends JpaRepository<Item,Integer> {
    @Query(value = "SELECT * FROM item where owner_id = ?1", nativeQuery = true)
    List<Item> findItemByOwnerId(Integer id);
}
