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
We chose a web application for the theme of the project. Our stack for implementing are Moleculer + VueJS + MySQL. MySQL is the perfect choice for working with MoleculerJS. We chose MySQL. We use MoleculerJS because it's easy to set up a server for a web application also widely used among the developers. Also makes it possible to use the same language on the client and server. We are thinking of making a microservice architecture to make it easier to scale the project.

Stack:
```
- MoleculerJSs
- VueJS / NuxtJS
- MySQL
```
Dataset size: 18.71 MB
Structure of dataset

```
- uniq_id
- product_name
- brand_name
- asin
- category
- upc_ean_code
- list_price
- selling_price
- quantity
- model_number
- about_product
- product_specification
- technical_details
- shipping_weight
- product_dimensions
- image
- variants
- sku
- product_url
- stock
- product_details
- dimensions
- color
- ingredients
- direction_to_use
- is_amazon_seller
- size_quantity_variant
- product_description
```
We also created additional 10 tables (which you can see on our ER diagram) They are closely interconnected, thereby simplifying the task for developers. They are:
1) Category
2) ProductCategory
3) ProductReview
4) NewProductSlider
5) Cart
6) CartItem
7) Order_Table
8) OrderItem
9) User
10) Transaction_Table

![ASPA-ER-diagram](https://user-images.githubusercontent.com/44058615/110231980-fd5a7680-7f44-11eb-8b82-d8b975a419ca.png)



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
10. .
11. How can you help people who do not know which product is better and which is not?
12. .
13. .
14. .
15. How will the payment for the goods be processed?


!!!Later we will get to know them in more detail. (:
