-- SQLite
CREATE TABLE Product (
Uniq_Id char(25),
Product_Name char(25) NOT NULL,	
Brand_Name char(25),	
Asin char(25),
Category char(250),	
Upc_Ean_Code char(250),	
List_Price decimal(3,0),	
Selling_Price char(25),	
Quantity decimal(3,0),
Model_Number char(25),	
About_Product char(500),	
Product_Specification char(2083),	
Technical_Details char(2083),	
Shipping_Weight char(250),	
Product_Dimensions char(250),	
Image VARCHAR(2083),	
Variants VARCHAR(2083),	
Sku VARCHAR(2083),
Product_Url VARCHAR(2083),
Stock char(25),	
Product_Details char(25),
Dimensions char(25),
Color char(25),
Ingredients char(25),
Direction_To_Use char(2),	
Is_Amazon_Seller char(2),
Size_Quantity_Variant char(2),
Product_Description char(2),
PRIMARY KEY (Uniq_Id),
FOREIGN KEY (Uniq_Id) REFERENCES user(product_id));

CREATE TABLE Category (
Category_id char(25) PRIMARY KEY,
Title char(25),
Meta_Title char(25),
Slug char(25),
Description char(500),
Created_At INT,
Updated_At INT);


CREATE TABLE ProductCategory(
Product_category_id char(25) PRIMARY KEY,
Product_id char(25),
Category_id char(25),
Created_At INTEGER, 
Updated_At INTEGER,
FOREIGN KEY (Product_id) REFERENCES product(uniq_id),
FOREIGN KEY (Category_id) REFERENCES Category(Category_id)
);

drop TABLE Category;

CREATE TABLE ProductReview(
Review_id char(25),
Product_id char(25),
Title  char(25),
Rating char(25),
Published char(25),
Created_at int,
Updated_at int,
PRIMARY KEY(PRODUCT_ID),
FOREIGN KEY(Product_id) REFERENCES Product(Uniq_Id));


CREATE TABLE NewProductSlider (
New_product_ID char(25),
Title char(25),
Text char(25),
Description char(500),
Created_at INTEGER,
Updated_at INTEGER,
Enabled char(25),
PRIMARY KEY(New_product_id),
FOREIGN KEY(NEW_PRODUCT_ID) REFERENCES Product(Uniq_Id));


CREATE TABLE Cart (
Cart_id char(25),
User_id char(25),
Access_code char(25),
Session_id char(25),
Token char(25),
Status char(25),
Street char(25),
City char(25),
Province char(25),
Code char(25),
Country char(25),
Created_at INTEGER,
Updated_at INTEGER,
PRIMARY KEY(cart_id),
FOREIGN KEY(user_id) REFERENCES user(user_id));


CREATE TABLE CartItem(
Cart_item_ID char(25) PRIMARY KEY,
Product_ID char(25),
Cart_ID char(25),
Sku char(25),
Price char(25),
Discount char(25),
Quantity char(25),
Active char(25),
Created_at int,
Updated_at int,
FOREIGN KEY(Cart_ID) REFERENCES cart(cart_id),
FOREIGN KEY(product_id) REFERENCES Product(Uniq_Id));


CREATE TABLE Order_table(
ORDER_id char(25) PRIMARY KEY,
User_id char(25),
Session_id char(25),
Token char(25),
Status_o char(25),
Sub_Total char(25),
Item_Discount char(25),
Tax char(25),
Shippin char(25),
Total char(25),
Promo char(25),
Discount char(25),
grand_Total char(25),
First_Name char(25),
Last_Name char(25),
Mobile char(25),
Code_o char(25),
Status char(25),
Street char(25),
City char(25),
Province char(25),
Code char(25),
Country char(25),
Created_at int,
Updated_at int, 
Enabled char(25),
FOREIGN KEY(user_id) REFERENCES user(user_id));


CREATE TABLE OrderItem(
order_item_id char(25),
product_id char(25),
SKU char(25),
Price char(25),
Discount char(25),
Quantity char(25),
Content char(25),
Created_at int,
Updated_at int,
PRIMARY KEY (order_item_id),
FOREIGN KEY (product_id) REFERENCES Product(Uniq_Id),
FOREIGN KEY (order_item_id) REFERENCES ORDER_table(order_id)
);

create table User(
user_id char(25),
product_id char(25),
First_Name char(25),
Second_Name char(25),
Email char(25),
Mobile char(25),
password char(25),
Created_at int,
Updated_at int,
Enabled char(25),
Is_Client numeric,
Is_Vendor numeric,
Last_Login char(25),
Profile char(25),
Intro char(25),
PRIMARY KEY(user_id));

CREATE TABLE Transaction_Table(
Transaction_id char(25) PRIMARY KEY,
User_ID char(25),
Order_ID char(25),
Code char(25),
Type char(25),
Mode char(25),
Status_tr char(25),
Created_at int,
Updated_at int,
Content char(250),
FOREIGN KEY (user_id) REFERENCES user(user_id),
FOREIGN key (order_id) REFERENCES order_table(order_id));

