package com.elephantface.shopapi.service;

import com.elephantface.shopapi.data.models.User;
import com.elephantface.shopapi.data.payloads.request.UserAuthRequest;
import com.elephantface.shopapi.data.payloads.response.AuthResponse;
import com.elephantface.shopapi.data.repository.IUserRepository;
import com.elephantface.shopapi.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserAuthService implements IUserAuthService {

    @Autowired
    IUserRepository userRepository;

    @Override
    public AuthResponse passwordValidation(UserAuthRequest authRequest) throws ResourceNotFoundException {
        AuthResponse ar = new AuthResponse();
        Optional<User> user = userRepository.findByEmailAddress(authRequest.getEmail());
        if (user.isEmpty()) throw new ResourceNotFoundException("User", "Email", authRequest.getEmail());
        if (user.get().getPassword().equals(authRequest.getPassword())) {
            ar.setAuthSuccess(true);
            ar.setFirstName(user.get().getFirstName());
            ar.setLastName(user.get().getLastName());
            ar.setEmail(user.get().getEmail());
            ar.setId(user.get().getId());
            ar.setType(user.get().getType());
            return ar;
        } else{
            ar.setAuthSuccess(false);
            return ar;
        }
    }
}
