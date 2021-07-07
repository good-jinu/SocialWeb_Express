CREATE DATABASE `SocialWeb`;

use `SocialWeb`;

drop table if exists `users`;

create table `users` (
  `user` varchar(25) not null,
  `password` varchar(30) not null,
  primary key(`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists `contents`;

create table `contents` (
  `contentCode` int(11) not null,
  `title` varchar(50) not null,
  `main_content` text,
  `user` varchar(25) not null,
  primary key(`contentCode`, `user`),
  foreign key (`user`) references `users`(`user`) on update CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
