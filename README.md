# Advanced DBMS

In this ReadMe will be introduced detailed discription of all process of implementation. We have changed our project.

## Team members:
* Abay Aruzhan
* Alkozha Adil
* Bayaliyev Bakdaulet

## Project Description
During this semester, our team is going to implement a website that will help people to see and find out the details of the product in advance and if the customer wants to buy it they can easily add it to their shopping cart and then get it. In our tern, our project will prevent such disadvantages in the time-consuming trips to stores where there may not even be the thing you need, or even cases where you seem to have purchased the necessary product, but it turned out to be the wrong size, for example, these problems can be forgotten. With this site, users will be able to quickly and in one place solve the problem of finding the things they need for some specific purpose.

We have chosen a medium-sized project that will perform the following functions:
```bash
- Authentication and authorization
- Add to basket
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
- MoleculerJS
- VueJS / NuxtJS
- MySQL
```
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
!!!Later we will get to know them in more detail. (:
