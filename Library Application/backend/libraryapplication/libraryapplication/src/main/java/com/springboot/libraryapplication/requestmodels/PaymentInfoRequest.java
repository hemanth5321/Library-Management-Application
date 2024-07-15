package com.springboot.libraryapplication.requestmodels;

import lombok.Data;

@Data
public class PaymentInfoRequest {

    private int amount;
    private String currency;
    private String receiptEmail;
    
    
	public PaymentInfoRequest() {
		super();
		// TODO Auto-generated constructor stub
	}


	public PaymentInfoRequest(int amount, String currency, String receiptEmail) {
		super();
		this.amount = amount;
		this.currency = currency;
		this.receiptEmail = receiptEmail;
	}


	public int getAmount() {
		return amount;
	}


	public void setAmount(int amount) {
		this.amount = amount;
	}


	public String getCurrency() {
		return currency;
	}


	public void setCurrency(String currency) {
		this.currency = currency;
	}


	public String getReceiptEmail() {
		return receiptEmail;
	}


	public void setReceiptEmail(String receiptEmail) {
		this.receiptEmail = receiptEmail;
	}
    
    
}
