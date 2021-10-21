package com.elephantface.shopapi.service;

import com.elephantface.shopapi.data.models.Item;
import com.elephantface.shopapi.data.payloads.request.ItemRequest;
import com.elephantface.shopapi.data.payloads.response.GetItemRelatedToOwnerResponse;
import com.elephantface.shopapi.data.payloads.response.MessageResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IItemService {
    MessageResponse createItem(ItemRequest itemRequest);
    MessageResponse updateItem(Integer id,ItemRequest itemRequest);
    MessageResponse deleteItem(Integer id);
    Item getItemFromId(Integer id);
    List<Item> getAllItems();
    List<GetItemRelatedToOwnerResponse> getAllItemsBelongsToUser(Integer userId);
}
