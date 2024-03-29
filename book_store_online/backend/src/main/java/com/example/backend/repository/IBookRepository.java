package com.example.backend.repository;

import com.example.backend.dto.book.IBookDto;
import com.example.backend.model.book.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IBookRepository extends JpaRepository<Book, Integer> {
    @Query(value = "select b.id as id, b.name as name,b.image as image, b.intro as intro, b.content as content, b.quantity as quantity, b.price as price, a.name as nameAuthor, b.sale_price as salePrice\n" +
            "from books as b\n" +
            "join authors as a\n" +
            "on b.author_id=a.id\n" +
            "where b.is_delete = 0 and b.name like :name and a.name like :author and (b.sale_price between :minPrice and :maxPrice) and b.category_id like :idCategory", nativeQuery = true)
    Page<IBookDto> showList(Pageable pageable, @Param("name") String name, @Param("author") String author, @Param("minPrice") String minPrice, @Param("maxPrice") String maxPrice,@Param("idCategory") String idCategory);

    @Modifying
    @Transactional
    @Query(value = "update books set is_delete = true where id= :id", nativeQuery = true)
    void deleteBook(@Param("id") Long id);

    @Query(value = "select * from books where is_delete = false and id= :id", nativeQuery = true)
    Book findBookById(@Param("id") Long id);
    @Query(value = "select b.id as id, b.name as name,b.image as image, b.intro as intro, b.content as content, b.quantity as quantity, b.price as price, a.name as nameAuthor, b.sale_price as salePrice\n" +
            "from books as b\n" +
            "join authors as a\n" +
            "on b.author_id=a.id\n" +
            "join order_details as o\n" +
            "on b.id=o.book_id\n" +
            "join orders as od\n" +
            "on o.order_id=od.id\n" +
            "where od.date_buy >= curdate() - interval 30 day\n" +
            "group by o.book_id\n" +
            "order by sum(o.quantity) desc",nativeQuery = true)
    Page<IBookDto> showListBestSell(Pageable pageable);
    @Query(value = "select b.id as id, b.name as name,b.image as image, b.intro as intro, b.content as content, b.quantity as quantity, b.price as price, a.name as nameAuthor, b.sale_price as salePrice\n" +
            "from books as b\n" +
            "join authors as a\n" +
            "on b.author_id=a.id\n" +
            "group by b.id\n" +
            "order by sum(b.price-b.sale_price) desc",nativeQuery = true)
    Page<IBookDto> showListDiscountBook(Pageable pageable);
}
