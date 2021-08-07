package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Expense;
import com.example.demo.entity.Income;

@Repository 
public interface ExpenseRepository extends JpaRepository<Expense,Integer> {
	@Query("FROM Expense WHERE entryMonth = ?1 and entryYear=?2")
    List<Expense> findByDate(int month,int year);
}
