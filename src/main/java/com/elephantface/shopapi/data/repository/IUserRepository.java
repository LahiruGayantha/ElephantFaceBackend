package com.elephantface.shopapi.data.repository;

import com.elephantface.shopapi.data.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User,Integer> {
    @Query(value = "SELECT * FROM User WHERE email = ?1", nativeQuery = true)
    Optional<User> findByEmailAddress(String emailAddress);
}
