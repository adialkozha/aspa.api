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

Stack:
```
- ASP.NET CORE 
- MVC
- Entity framework
- Bootstrap 4
```
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

[![Here the demo video of the website](https://youtube.com/watch?v=dYQW7dXVd7E&feature=share)


## Questions:
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


!!!Later we will get to know them in more detail. (:
