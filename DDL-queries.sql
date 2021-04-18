-- SQLite
CREATE TABLE users (
    Id       INT            IDENTITY (1, 1) NOT NULL,
    Email    char NULL,
    Password char NULL,
    RoleId   INT            NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (RoleId) REFERENCES Roles([Id])
);

CREATE TABLE Roles (
    Id   INT            IDENTITY (1, 1) NOT NULL,
    Name char,
    PRIMARY KEY(Id)
);

CREATE TABLE Products(
    ProductId    INT             IDENTITY (1, 1) NOT NULL,
    ProductName  char  NULL,
    ProductCost  INT             NOT NULL,
    ProductImage varchar NULL,
    СategoryId   INT             NOT NULL,
    PRIMARY KEY (ProductId)
);

CREATE TABLE Orders(
    OrderId      INT            IDENTITY (1, 1) NOT NULL,
    User         CHAR NULL,
    Address      CHAR  NULL,
    ContactPhone CHAR  NULL,
    BasketId     INT            NOT NULL,
    PRIMARY KEY (OrderId),
    FOREIGN KEY (BasketId) REFERENCES Baskets(BasketId)
);

CREATE TABLE Baskets (
    BasketId  INT IDENTITY (1, 1) NOT NULL,
    ProductId INT NOT NULL,
    UserId    INT NOT NULL,
    PRIMARY KEY (BasketId),
    FOREIGN KEY (ProductId) REFERENCES Products (ProductId),
    FOREIGN KEY (UserId) REFERENCES Users(Id)
);


