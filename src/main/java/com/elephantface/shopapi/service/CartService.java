package com.elephantface.shopapi.service;

import com.elephantface.shopapi.data.models.Cart;
import com.elephantface.shopapi.data.models.Item;
import com.elephantface.shopapi.data.models.User;
import com.elephantface.shopapi.data.payloads.request.CartRequest;
import com.elephantface.shopapi.data.payloads.response.CartItemsResponse;
import com.elephantface.shopapi.data.payloads.response.MessageResponse;
import com.elephantface.shopapi.data.repository.ICartRepository;
import com.elephantface.shopapi.data.repository.IItemRepository;
import com.elephantface.shopapi.data.repository.IUserRepository;
import com.elephantface.shopapi.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cartItems")
public class CartService implements ICartService {
    @Autowired
    ICartRepository cartItemRepo;

    @Autowired
    IItemRepository itemRepository;

    @Autowired
    IUserRepository userRepo;


    @Override
    public MessageResponse createCartsItems(CartRequest cartsItemsRequest) throws RuntimeException {
        Optional<Item> item = itemRepository.findById(cartsItemsRequest.getItemId());
        Optional<User> user = userRepo.findById(cartsItemsRequest.getUserId());
        if (item.isEmpty()) throw new ResourceNotFoundException("Item", "id", cartsItemsRequest.getItemId());
        if (user.isEmpty()) throw new ResourceNotFoundException("USer", "id", cartsItemsRequest.getUserId());
        else {
            Cart cartItem = new Cart();
            cartItem.setItem(item.get());
            cartItem.setItemQty(cartsItemsRequest.getItemQty());
            cartItem.setUpdatedDate(new Date());
            cartItem.setUser(user.get());
            cartItemRepo.save(cartItem);
            return new MessageResponse("Cart item has successfully added");
        }

    }

    @Override
    public List<CartItemsResponse> getCartsItemsFromUserId(Integer userId) {
        List<CartItemsResponse> reCreatedCart = new ArrayList<>();
        for (Cart cart : cartItemRepo.findByUserId(userId)) {
            CartItemsResponse cartRes = new CartItemsResponse();
            cartRes.setItem(cart.getItem());
            cartRes.setItemQty(cart.getItemQty());
            cartRes.setId(cart.getId());
            cartRes.setUpdatedDate(cart.getUpdatedDate());
            reCreatedCart.add(cartRes);
        }
        return reCreatedCart;
    }

    @Override
    public MessageResponse updateCartItemsById(CartRequest cartItem ,Integer id) throws ResourceNotFoundException {
        Optional<Cart> cItem = cartItemRepo.findById(id);
        if (cItem.isEmpty()) throw new ResourceNotFoundException("Cart", "id", id);
        else {
            cItem.get().setItemQty(cartItem.getItemQty());
            cItem.get().setUpdatedDate(new Date());
            cartItemRepo.save(cItem.get());
            return new MessageResponse("Cart has been updated");
        }
    }

    @Override
    public void deleteItem(Integer id) throws ResourceNotFoundException {
        Optional<Cart> item = cartItemRepo.findById(id);
        if (item.isEmpty()) throw new ResourceNotFoundException("CartItem", "id", id);
        else cartItemRepo.deleteById(id);
    }
}
