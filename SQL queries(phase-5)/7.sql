-- SQLite
--7 What is the total price of all goods selected by the customer
Select User.First_Name, User.Last_Name, sum(OrderItem.Price) as 'Total price' from User 
JOIN Order_table on User.user_id=Order_table.User_id
JOIN OrderItem ON Order_table.Order_ID=OrderItem.order_item_id
where user.user_id = 'specified user_id'