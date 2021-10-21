package com.elephantface.shopapi.service;

import com.elephantface.shopapi.data.models.User;
import com.elephantface.shopapi.data.payloads.request.UserRequest;
import com.elephantface.shopapi.data.payloads.response.MessageResponse;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface IUserService {
    MessageResponse createUser(UserRequest userRequest);
    Optional<User> updateUser(UserRequest userRequest, Integer id);
    void deleteUser(Integer id);
    User getUserFromId(Integer id);
    List<User> getAllUsers();
}
