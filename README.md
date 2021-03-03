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

## Questions:
1. Can the user have an account and be sure that the password will remain confidential?
2. Can we filter the goods by the rating of the product?
3. What if the product is popular enough and there are too many search results?
4. What if the customer is not sure about the purchase and wants to see what he is paying for?
5. If the client can not decide between the products, what can the site offer?
6. What are the goals of this project?
7. The client does not know what product he wants, but knows the category, how can he find a suitable category if the client's description differs from the description on the site?(Prints CELLPHONE when on the website it is SMARTPHONE)
8. Why is this project considered relevant?
9. Sometimes users are looking for information not about the product, but about the store, deliveries, what happens in this case?
10. Why does the store have such a direction?
11. How can you help people who do not know which product is better and which is not?
12. What happens when errors occur? Does it expect a fatal crash, with an unexpected request?
13. How can the user understand how to use the site?
14. What caused the complications? Is it possible to make the site better?How?
15. How does this work correspond to the tasks set?
16. How will the payment for the goods be processed?


!!!Later we will get to know them in more detail. (:
