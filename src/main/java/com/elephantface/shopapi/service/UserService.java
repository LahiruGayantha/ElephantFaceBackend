package com.elephantface.shopapi.service;

import com.elephantface.shopapi.data.models.User;
import com.elephantface.shopapi.data.payloads.request.UserAuthRequest;
import com.elephantface.shopapi.data.payloads.request.UserRequest;
import com.elephantface.shopapi.data.payloads.response.MessageResponse;
import com.elephantface.shopapi.data.repository.IUserRepository;
import com.elephantface.shopapi.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {
    @Autowired
    IUserRepository userRepository;

    @Override
    public MessageResponse createUser(UserRequest userRequest) {
        User newUser = new User();
        newUser.setFirstName(userRequest.getFirstName());
        newUser.setLastName(userRequest.getLastName());
        newUser.setEmail(userRequest.getEmail());
        newUser.setPassword(userRequest.getPassword());
        newUser.setType(userRequest.getType());
        userRepository.save(newUser);
        return new MessageResponse("New user has successfully created");
    }

    @Override
    public Optional<User> updateUser(UserRequest userRequest, Integer id) throws ResourceNotFoundException {
        Optional<User> user = userRepository.findById(id);
        if(user.isEmpty()) throw new ResourceNotFoundException("User","id",id);
        else{
            user.get().setFirstName(userRequest.getFirstName());
            user.get().setLastName(userRequest.getLastName());
            user.get().setEmail(userRequest.getEmail());
            user.get().setPassword(userRequest.getPassword());
            user.get().setType(userRequest.getType());
            userRepository.save(user.get());
            return user;
        }
    }

    @Override
    public void deleteUser(Integer id)throws ResourceNotFoundException {
        Optional<User> user = userRepository.findById(id);
        if(user.isEmpty()) throw new ResourceNotFoundException("User","id",id);
        else userRepository.delete(user.get());
    }

    @Override
    public User getUserFromId(Integer id) throws ResourceNotFoundException {
       return userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User","id",id));
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
