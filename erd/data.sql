use book_store_online_sprint_2;

insert into accounts(username,password)
values 
("admin123456","$2a$12$wMT2EYEwdWJ3mxa4kRRTIeDhcWqhz5zA.sMX5pQYLUkkfjW0v9JAi"),
("user123456","$2a$12$wMT2EYEwdWJ3mxa4kRRTIeDhcWqhz5zA.sMX5pQYLUkkfjW0v9JAi");

insert into roles(name)
values 
("ROLE_ADMIN"),
("ROLE_USER");

insert into account_roles(account_id,role_id)
values 
(1,1),
(1,2),
(2,2);

insert into discounts(percent)
values 
(0.1);

insert into authors(name)
values 
("Nguyễn Nhật Ánh");

insert into books(name,price,intro,content,imagbookse,quantity,author_id,discount_id)
values 
("Tôi Thấy Hoa Vàng Trên Cỏ Xanh",130000,"Ta bắt gặp trong Tôi Thấy Hoa Vàng Trên Cỏ Xanh một thế giới đấy bất ngờ và thi vị non trẻ với những suy ngẫm giản dị thôi nhưng gần gũi đến lạ. Câu chuyện của Tôi Thấy Hoa Vàng Trên Cỏ Xanh có chút này chút kia, để ai soi vào cũng thấy mình trong đó, kiểu như lá thư tình đầu đời của cu Thiều chẳng hạ ngây ngô và khờ khạo.","Cuốn sách viết về tuổi thơ nghèo khó ở một làng quê, bên cạnh đề tài tình yêu quen thuộc, lần đầu tiên Nguyễn Nhật Ánh đưa vào tác phẩm của mình những nhân vật phản diện và đặt ra vấn đề đạo đức như sự vô tâm, cái ác. 81 chương ngắn là 81 câu chuyện nhỏ của những đứa trẻ xảy ra ở một ngôi làng: chuyện về con cóc Cậu trời, chuyện ma, chuyện công chúa và hoàng tử, bên cạnh chuyện đói ăn, cháy nhà, lụt lội, “Tôi thấy hoa vàng trên cỏ xanh”hứa hẹn đem đến những điều thú vị với cả bạn đọc nhỏ tuổi và người lớn bằng giọng văn trong sáng, hồn nhiên, giản dị của trẻ con cùng nhiều tình tiết thú vị, bất ngờ và cảm động trong suốt hơn 300 trang sách. Cuốn sách, vì thế có sức ám ảnh, thu hút, hấp dẫn không thể bỏ qua.","https://salt.tikicdn.com/cache/750x750/ts/product/d5/56/6b/506b4f5baeed19a459dce7cea095787e.jpg.webp",40,1,1),
("Những Người Hàng Xóm",130000,"Như một cuốn phim đầy màu sắc với âm điệu dịu dàng, êm ả. Cuộc sống bình yên của những người yêu thương nhau. Bài học về tình người đứng phía sau bài học về nghề viết, và cả trong câu chuyện về… một lối kinh doanh nhà cực kỳ đặc biệt! ","Câu chuyện đi theo lời kể của một anh chàng mới lấy vợ, chuẩn bị đi làm và có ý thích viết văn. Anh chàng yêu vợ theo cách của mình, khen ngợi sùng bái người yêu cũng theo cách của mình, nhưng nhìn cuộc đời theo cách sống của những người hàng xóm. Sống trong tình yêu của vợ đầy mùi thơm và nhiều vị ngọt. Chứng kiến tình yêu của anh cảnh sát với cô bạn gái ngành y; mối tình thứ hai của người phụ nữ tốt bụng phát thanh viên ngôn ngữ ký hiệu. Và được chiêm nghiệm trong tình yêu đắm đuối mỗi ngày của ông họa sĩ già thương nhớ người vợ xinh đẹp-người mẫu, nàng thơ của ông.","https://salt.tikicdn.com/cache/750x750/ts/product/a2/f0/e7/d7bc5cb5e12fac78066eb630a077ae95.jpg.webp",40,1,1),
("Còn chút gì để nhớ",130000,"","Đó là những kỷ niệm thời đi học của Chương, lúc mới bước chân vào Sài Gòn và làm quen với cuộc sống đô thị. Là những mối quan hệ bạn bè tưởng chừng hời hợt thoảng qua nhưng gắn bó suốt cuộc đời. Cuộc sống đầy biến động đã xô dạt mỗi người mỗi nơi, nhưng trải qua hàng mấy chục năm, những kỷ niệm ấy vẫn luôn níu kéo Chương về với một thời để nhớ.","https://salt.tikicdn.com/cache/750x750/ts/product/5d/33/2f/c9f34abe1b95dd67a364bf72c54bad29.jpg.webp",40,1,1),
("Bàn Có Năm Chỗ Ngồi",130000,"","Tác giả quen thuộc của thiếu nhi, của tuổi ô mai. Những tập truyện của anh luôn dí dỏm, hài hước, đem lại nhiều cảm xúc, nhiều bài học nhẹ nhàng cho lứa tuổi học trò. Hãy đọc để cùng gặp những nhân vật rất dễ thương, hoặc phải vượt qua những hoàn cảnh khó khăn, hoặc sẵn lòng chia sẻ với bạn bè, người thân… Thậm chí cả những nhân vật tạm gọi là “phe xấu” với nhiều trò đùa nghịch… cũng mang dáng dấp hồn nhiên. Tất cả hướng về CHÂN – THIỆN – MỸ. Họ là năm người bạn với năm cá tính và hoàn cảnh khác nhau cùng chung trong một lớp học. Những trò nghịch ngợm trẻ con đôi khi gây ra mâu thuẫn, nhưng trên tất cả đó là những đứa trẻ ham học, giàu lòng nhân ái và biết quan tâm đến bạn bè. Cảm thông với hoàn cảnh của nhau, từng bạn nghĩ ra cách giúp đỡ bạn mình theo khả năng để tình bạn ấy lớn dần theo năm tháng.","https://salt.tikicdn.com/cache/750x750/ts/product/68/bc/67/3ed5b5da03a5b8745a5678b225f13be4.jpg.webp",40,1,1),
("Con Chó Nhỏ Mang Giỏ Hoa Hồng",130000,"","Câu chuyện về 5 chú chó đầy thú vị và cũng không kém cảm xúc lãng mạn- tác phẩm mới nhất của nhà văn bestseller Nguyễn Nhật Ánh sẽ khiến bạn thay đổi nhiều trong cách nhìn về loài thú cưng số 1 thế giới này.","https://salt.tikicdn.com/cache/750x750/ts/product/2d/ff/93/cf76ac4703f587c3188c5438dfb55af3.jpg.webp",40,1,1),
("Làm Bạn Với Bầu Trời",130000,"Một câu chuyện giản dị, chứa đầy bất ngờ cho tới trang cuối cùng. Vẻ đẹp lộng lẫy, vì lòng vị tha và tình yêu thương, khiến mắt rưng rưng vì một nỗi mừng vui hân hoan. Cuốn sách như một đốm lửa thắp lên lòng khát khao sống tốt trên đời.","Viết về điều tốt đã không dễ, viết sao cho người đọc có thể đón nhận đầy cảm xúc tích cực, và muốn được hưởng, được làm những điều tốt dù nhỏ bé mới thật là khó. Làm bạn với bầu trời của Nguyễn Nhật Ánh đã làm được điều này. Như nhà văn từng phát biểu “điểm mạnh của văn chương nằm ở khả năng thẩm thấu. Bằng hình thức đặc thù của mình, văn chương góp phần mài sắc các ý niệm đạo đức nơi người đọc một cách vô hình. Bồi đắp tâm hồn và nhân cách một cách âm thầm và bền bỉ, đó là chức năng gốc rễ của văn chương, đặc biệt là văn chương viết cho thanh thiếu niên.”","https://salt.tikicdn.com/cache/750x750/ts/product/af/a1/4b/92477ec9b6688060b2b5d2022a60d3e6.jpg.webp",40,1,1)
;
insert into carts(quantity,account_id,book_id)
values 
(3,2,1),
(2,2,2),
(1,2,3)
;
