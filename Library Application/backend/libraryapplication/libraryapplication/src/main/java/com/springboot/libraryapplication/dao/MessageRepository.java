package com.springboot.libraryapplication.dao;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.springboot.libraryapplication.entity.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

    Page<Message> findByUserEmail(@Param("user_email") String userEmail, Pageable pageable);

    Page<Message> findByClosed(@Param("closed") boolean closed, Pageable pageable);

}
