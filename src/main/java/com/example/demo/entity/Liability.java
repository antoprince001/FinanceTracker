package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table
public class Liability {
	
	@Id
    @GeneratedValue
    private int id;
	
	@Column(nullable = false)
	private float amount;
	
	@Column(nullable = false)
	private String source;
	
	@Column(nullable = false)
	private int entryDay;
	
	@Column(nullable = false)
	private int entryMonth;
	
	@Column(nullable = false)
	private int entryYear;
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}
	
	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public int getEntryDay() {
		return entryDay;
	}

	public void setEntryDay(int entryDay) {
		this.entryDay = entryDay;
	}

	public int getEntryMonth() {
		return entryMonth;
	}

	public void setEntryMonth(int entryMonth) {
		this.entryMonth = entryMonth;
	}

	public int getEntryYear() {
		return entryYear;
	}

	public void setEntryYear(int entryYear) {
			this.entryYear = entryYear;
	}

}
