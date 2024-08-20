---
title: 'Pocket Recipes'
imgUrl: '/images/projects/pocket-recipes/demo.png'
completedAt: '06-01-2022'
orderId: 3
technologiesUsed: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'MongoDB']
summary: 'Calling all chefs! This mobile application built for iPhone and Android has many features for people like you. Explore recipes and organize them in cookbooks.'
---

👨‍🍳 Calling all chefs! Pocket Recipes is a recipe storage application with additional features that make organizing your recipes very easy.

## Features

- Login/Signup for personal account
- Explore Recipes
- Search the Database for recipes
- Favorite Recipes
- Group Recipes in "Cookbooks"
- Create Recipes and Cookbooks
- Make interactive Grocery Lists

## The Explore Page

This is the first page displayed in the app when opened, from here you can scroll through a list of recipes which can be clicked on to view the recipe. This page pulls recipes in from our database 30 at a time using pagination. The recipes in our MongoDB database were scraped from [publicdomainrecipes.org](https://publicdomainrecipes.org/)
![Explore Page](/images/projects/pocket-recipes/explore-page.png)

## Viewing a Recipe

To view a recipe that catches your eye, simply click on the tile. These tiles are buttons! This is what a recipe looks like in our application.
![Recipe View](/images/projects/pocket-recipes/recipe-view.png)

## Creating a Recipe

To create and upload a recipe, simply click the floating green + button and fill out the form. _Note_: You must be signed in to upload a recipe.
![Create Recipe Form](/images/projects/pocket-recipes/recipe-form.png)

## Searching for a Recipe

To search for a recipe in the database, click the search icon on the top right of the explore page.
![Searching](/images/projects/pocket-recipes/search.png)

## The Favorites Page

Throughout the application, the recipe tiles will have a small heart icon on the bottom right. To favorite a recipe, press this button and the state of your Favorites page will update to reflect this change. Likewise, you can also unfavorite a recipe. _The ability to favorite recipes is only available after signing in._
![Favorites Page](/images/projects/pocket-recipes/favorites.png)

## Cookbooks

Cookbooks are collections of recipes used to help with organization.
![Cookbooks](/images/projects/pocket-recipes/cookbooks.png)

## Adding a Recipe to a Cookbook

![Add Recipe to Cookbook](/images/projects/pocket-recipes/add-recipe-to-cookbook.png)

## Grocery List

Click the + icon to add an item to your grocery list. You can swipe to delete an item from the list.
![Grocery List](/images/projects/pocket-recipes/grocery-list.png)

## Login/Signup

![Login & Signup](/images/projects/pocket-recipes/login-signup.png)

_Note_: This was a 3-month agile development project made for GMU's CS321 course in collaboration with Nicholas Thor Page and Joshua Hilbert. We designed and created this application from scratch.
