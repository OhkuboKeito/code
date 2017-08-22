set names utf8;
set foreign_key_checks=0;

DROP DATABASE if EXISTS pon; /*DB削除*/
CREATE DATABASE pon; /*DB作成*/
/*DBを一旦消して再度作成することでデータの重複を防ぐ*/
use pon; /*DBを使う*/

create table genre(
  genre_id int not null auto_increment,
  info_genre varchar(100) not null unique,
  registration_date datetime not null default current_timestamp,
  updated_date datetime not null default current_timestamp,
  primary key(genre_id)
);

create table place(
  place_id int not null auto_increment,
  info_place varchar(100) not null unique,
  registration_date datetime not null default current_timestamp,
  updated_date datetime not null default current_timestamp,
  primary key(place_id)
);

create table info(
  info_id int not null auto_increment,
  info_title varchar(225) not null,
  genre_id varchar(100) not null,
  info_artist varchar(100),
  place_id varchar(100),
  info_start_date date not null,
  info_end_date date not null,
  info_time varchar(100),
  info_fee varchar(100),
  info_text text,
  info_url verchar(225),
  info_company verchar(100),
  primary key(info_id),
);

 insert into genre(info_genre)
   values(

   )

 )
