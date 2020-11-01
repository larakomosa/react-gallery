CREATE TABLE "galleryItems" (
	"id" serial primary key,
	"path" varchar(50),
	"description" varchar(250),
	"likes" integer
);

INSERT INTO "galleryItems" ("path", "description", "likes")
VALUES 
('images/1.png', 'Lara and twin sister, Casey, at Sacramento Bridge Dinner', 0),
('images/2.png', 'Mike and Lara, fall 2020', 0),
('images/3.png', 'Gabe, Oliver and Liam, summer 2018', 0),
('images/4.png', 'Oliver dressed as Cupid on Halloween, fall 2019', 0),
('images/5.png', 'Liam James Komosa, 07/22/2016-01/27/2017', 0),
('images/6.png', 'Our house all wrapped for Christmas, winter 2019', 0),
('images/7.png', 'Visiting Liam on his 4th Birthday, summer 2020', 0),
('images/8.png', 'Gabe looking cute while waiting for a flu shot, fall 2020', 0),
('images/9.png', 'Gabe(8) and Lara(32) on our shared Birthday, winter 2019', 0),
('images/10.png', 'Big brother Gabe and little brother Oliver , fall 2019', 0),
('images/11.png', 'World Kindness Day - Kindness4Liam, November 2019', 0),
('images/12.png', 'Weekly Garden haul from the garden of Mike Komosa, Summer 2020', 0)
