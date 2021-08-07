package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Liability;


@Repository 
public interface LiabilityRepository extends JpaRepository<Liability,Integer> {
	@Query("FROM Liability WHERE entryMonth = ?1 and entryYear=?2")
    List<Liability> findByDate(int month,int year);
}