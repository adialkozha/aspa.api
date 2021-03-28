# Advanced DBMS

In this ReadMe will be introduced detailed discription of all process of implementation. We have changed our project.

## Team members:
* Abay Aruzhan
* Alkozha Adil
* Bayaliyev Bakdaulet

## Project Description
During this semester, our team is going to implement a website that will help people to see and find out the details of the product in advance and if the customer wants to buy it they can easily add it to their shopping cart and then get it. In our tern, our project will prevent such disadvantages in the time-consuming trips to stores where there may not even be the thing you need, or even cases where you seem to have purchased the necessary product, but it turned out to be the wrong size, for example, these problems can be forgotten. With this site, users will be able to quickly and in one place solve the problem of finding the things they need for some specific purpose.

We have chosen a medium-sized project that will perform the following functions:
```
- Authentication and authorization
- Add to baskets
- Remove from basket
- Search from the catalog
- View recommended items
- Ordering
- Purchase the selected items
- Admin can add, remove: products, users and shippers
```
ASP.NET CORE + MVC + Entity framework + Bootstrap 4.
For the backend, we chose the ASP.NET CORE platform.
ASP.NET Core is a technology from Microsoft designed to create various kinds of web applications, from small websites to large web portals and web services.

Entity Framework Core (EF Core) is an object-oriented, lightweight, and extensible technology from Microsoft for data access. EF Core is an object-relational mapping (ORM) tool. That is, EF Core allows you to work with databases, but it represents a higher level of abstraction: EF Core allows you to abstract from the database itself and its tables and work with data regardless of the type of storage. If at the physical level we operate with tables, indexes, primary and foreign keys, but at the conceptual level that Entity Framework offers us, we are already working with objects.

Entity Framework Core supports many different database systems. Thus, we can work with any DBMS through EF Core, if the required provider is available for it.
By default, Microsoft currently provides a number of built-in providers: for working with MS SQL Server, for SQLite, for PostgreSQL. There are also providers from third party providers, for example for MySQL.

Bootstrap is a free open source CSS framework for flexible front-end web development for mobile devices. It contains CSS and JavaScript based design templates for typography, forms, buttons, navigation and other interface components.

In MVC, models are represented by two main types: view models, which are used by views to display and transfer data, and domain models, which describe data manipulation logic.

Stack:
```
- ASP.NET CORE 
- MVC
- Entity framework
- Bootstrap 4
```




## Project Use-Case diagram and questions over the data
### UseCase diagram

![ASPA-UseCase-UML](https://user-images.githubusercontent.com/44058615/112758366-d822ca80-900f-11eb-8363-62ba82b57b0c.jpg)

### Questions:
1. Can the user have an account and be sure that the password will remain confidential?
2. Can we filter the goods by the rating of the product?
3. What if the product is popular enough and there are too many search results?
4. What if the customer is not sure about the purchase and wants to see what he is paying for?
5. If the client can not decide between the products, what can the site offer?
6. What is the average rating of a specific good in the list of the products?
7. What is the total price of all goods selected by the customer?
8. Find members who bought products from the 'Baby products' or 'Toys & Games'  category?
9. Find members who didn't buy products from the 'Toys & Games' category?
10. The customer wants to change the category of Toys & Games to baby products.
11. How can you help people who do not know which product is better and which is not?
12. Show the total amount of products in the category 'Electronics'
13. The vendedor wants to insert new product.
14. The customer wants to remove the product from the cart. 
15. The customer wants to filter the product by desc order.

##  Data modeling and database design
### DDL and DML queries are uploaded above.

### Table's description
There are a total of 6 tables in the project:
```
Products: --This table records products
-ProductId
-ProductName
-ProductCost
-ProductImage
-CategoryId

Categories --This table records the categories
-CategoryId
-CategoryName

Baskets: --This table records selected items to the basket
-BasketId
-ProductId
-UserId

Orders: --This table records selected items which is going to be ordered
-OrderId
-User
-Address
-ContactPhone
-BasketId

Users: --This table records all users 
-Id
-Email
-Password
-RoleId

Roles: --This table records roles of users
-Id
-Name

```
### ER-diagram 
This ER-diagram was constructed in the MSsql platform
![ASPA-ER-diagram](https://user-images.githubusercontent.com/44058615/112758441-3d76bb80-9010-11eb-85d2-dfb34bca0dd4.jpg)


## User-interface implementation and connection
This is the main page of the Online e-Shop. At the above of the page there is a menu
![main-page](https://user-images.githubusercontent.com/44058615/112759430-c2fc6a80-9014-11eb-825a-306e62c29d44.jpg)


To use some of the methods in the controller, you need to be authorized. After we go to the site, we have a link to the user page, where the information about the user is located. If the role of the admin then overrides the admin page (the admin has special features).
![photo_2021-03-28_22-32-37](https://user-images.githubusercontent.com/44058615/112759596-84b37b00-9015-11eb-8059-f94b8e372ff5.jpg)
![photo_2021-03-28_22-32-35](https://user-images.githubusercontent.com/44058615/112759597-85e4a800-9015-11eb-9d77-86246576d046.jpg)
![photo_2021-03-28_22-32-38](https://user-images.githubusercontent.com/44058615/112759598-85e4a800-9015-11eb-8598-dd272f372110.jpg)


The method for displaying products and sorting them:
![photo_2021-03-28_22-33-18](https://user-images.githubusercontent.com/44058615/112759614-99900e80-9015-11eb-817e-954655ef765f.jpg)
![photo_2021-03-28_22-33-41](https://user-images.githubusercontent.com/44058615/112759624-a7de2a80-9015-11eb-897f-4785d0c425e7.jpg)

The method for adding a product: 
![photo_2021-03-28_22-34-27](https://user-images.githubusercontent.com/44058615/112759643-c8a68000-9015-11eb-90db-9a158e6775be.jpg)
![photo_2021-03-28_22-34-28](https://user-images.githubusercontent.com/44058615/112759642-c6442600-9015-11eb-9bbc-a234532ba477.jpg)



