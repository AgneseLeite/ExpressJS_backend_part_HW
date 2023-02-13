CREATE USER 'blog_system_api'@'localhost' IDENTIFIED BY 'Password';

GRANT ALL PRIVILEGES ON blog_system.posts TO 'blog_system_api'@'localhost';

flush privileges;