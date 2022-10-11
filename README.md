<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>

<h1>E-Commerce Backend
MIT License</h1>

#### Table of contents

1. [Description](#description)
2. [Built With](#built)
3. [Installation Instructions and Requirement](#require)

   - [Node.js Installation](#node)
   - [SQL database](#sql)
   - [Clone the Code and install dependencies](#clone)

4. [Before starting](#start)

   - [Compodocs](#compodocs)
   - [Swagger](#swagger)
   - [How does this API work ? ](#channel)

     - [Add product(s)](#ddProduct)
     - [Remove product(s)](#remove)
     - [User(s)](#signup)
     - [Payment](#payment)

5. [Stay In touch](#contact)

<a name="description"></a>

# Description

<p>
This project creates the back-end code for an e-commerce site via NestJs Framework. This application uses Express.js API and Prisma  to interact with a PostgreSQL database. The API Routes are created using RESTful CRUD methods.

Front-end here :https://github.com/hemkass/payment_tunnel_Front

This Application is documented by SWAGGER and COMPODOCS

</p>

<a name="built"></a>

# Built With

<ul>
<li>NestJs</li>
<li>JavaScript</li>
<li>Typescript</li>
<li>PostgreSQL</li>
<li>Postico</li>
<li>Prisma</li>
<li>Swagger</li>
<li>CompoDocs</li>

</ul>

<a name="require"></a>

# Installation Instructions and Requirement

<ol>
<li>

## Node.js Installation

<a name="node"></a>

<p>Please check that you have Node.js globally installed on your computer. 
 If not, try reinstalling Node.js by following this link: https://nodejs.org/en/
</p></li>
<br />

<li>

## SQL database

<a name="sql"></a>

<p>

To run, this project require to install PostgreSQL. If you don't have installed it yet, please check on their website : <code>https://www.postgresql.org/</code>

Don't forget to add your DataBase in your .env

</p></li>
<br />

<li>

## Clone the Code and install dependencies

<a name="clone"></a>

<p> The first thing to do is to open git bash command line, and then simply you can clone the project under any of your favorite places as the following:

> gh repo clone hemkass/PaymentTunnel_NestJs </p></li>

</p>

</ol>
<br />

# Before Starting

<a name="start"></a>

<p>Please to understand infrastructure, routes possibler, watch before :</p>

<ol><li>

## COMPODOCS

<a name="compodocs"></a>

<p>
<underline>To run it :</underline>

```bash
$ npx @compodoc/compodoc -p tsconfig.json -s
```

Open your browser and navigate to http://localhost:8080

if you have any trouble, please check nestJs documentation :
https://docs.nestjs.com/recipes/documentation</p>

</li>

 <li>

## SWAGGER

<a name="swagger"></a>

Open your browser and navigate to http://localhost:3000/api

</p></li></ol>
# Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev


# production mode
$ npm run start:prod
```

## How does this API work - API CHANNEL ?

<a name="channel"></a>

<li>STEP 1 : Add product from your cart</li>
<a name="addProduct"></a>

POST

```bash
http://localhost:3000/products/add/cart/:productId/:cartId
```

cartId is optional, if you don't send one, a new cart will be created.

PATCH

<li>STEP 2 bis : Remove product from your cart also </li>

<a name="remove"></a>

```bash
http://localhost:3000/products/remove/:productId/:cartId
```

<li>STEP 3: USERS </li>
<a name="signup"></a>

POST

```bash
http://localhost:3000/users/addOwner
```

<li>STEP 4: Add paiement</li>

<a name="payment"></a>

```bash
http://localhost:3000/payments/create
```

# Stay in touch

<a name="contact"></a>

- Author - [Marine Corbel](https://fr.linkedin.com/in/marinecorbel)
