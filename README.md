# *Money Maker*

#### *Money Maker, 11/10/2021*

#### By **Chris Ramer**

## Description

An application that allows you to spend money to earn money. The prices and values of the curries are randomized each time the component is loaded.
Note that earnings is not actual profit, I didn't bother being accurate there.

## Setup/Installation Requirements

Clone this repo.

Open the Terminal and run the command `npm start` to start the live server.

Add a new currency by clicking "add new currency" and submitting that form.

## Specs

* **Spec:** Clicking on a currency's name shows the currency's details
* **Input:** Click on currency name
* **Output:** Shows details for that currency
* **Spec:** Clicking the buy button below the currency's price purchases 1 of that currency and deducts its cost from your total money and increases your earnings and reduces the stock of that currency by 1
* **Input:** Click buy on currency costing $10 with value of $20 while you have $100 to spend
* **Output:** Reduces the stock by 1, leaves you with $90 left to spend but with $20 additional earnings
* **Spec:** When a currency's stock is depleted, stock text says "out of stock"
* **Input:** Buy last stock of a currency
* **Output:** Stock text updates to say "out of stock"
* **Spec:** Deleting a currency deletes the currency (shocking!)
* **Input:** Click delete button on a currency's details view
* **Output:** Removes the currency from the list

![Component tree](https://github.com/ChrisRamer/react-fundamentals-ind-project/blob/master/Diagram.png)

## Technologies Used

* React
* JavaScript
* NPM

### License

Copyright (c) 2021 **Chris Ramer**

This software is licensed under the MIT license.