package com.example.demo.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Income;


@Repository 
public interface IncomeRepository extends JpaRepository<Income,Integer> {
	@Query("FROM Income WHERE entryMonth = ?1 and entryYear=?2")
    List<Income> findByDate(int month,int year);
}
