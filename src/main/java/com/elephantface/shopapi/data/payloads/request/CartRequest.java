package com.elephantface.shopapi.data.payloads.request;


import com.elephantface.shopapi.data.models.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

public class CartRequest {

    @NotBlank
    @NotNull
    private Integer itemId;
    @NotBlank
    @NotNull
    private Integer itemQty;
    @NotBlank
    @NotNull
    private Integer userId;


    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

    public Integer getItemQty() {
        return itemQty;
    }

    public void setItemQty(Integer itemQty) {
        this.itemQty = itemQty;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
