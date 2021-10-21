package com.elephantface.shopapi.service;


import com.elephantface.shopapi.data.models.Cart;
import com.elephantface.shopapi.data.payloads.request.CartRequest;
import com.elephantface.shopapi.data.payloads.response.CartItemsResponse;
import com.elephantface.shopapi.data.payloads.response.MessageResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICartService {
    MessageResponse createCartsItems(CartRequest cartItem);
    List<CartItemsResponse> getCartsItemsFromUserId(Integer userId);
    MessageResponse updateCartItemsById(CartRequest cartItem,Integer id);
    void deleteItem(Integer id);
}
