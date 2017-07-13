# Auth Snapshot Simple (444)

## Skills

- Can build a HTTP API with simple authentication using bcrypt and session cookies
- Can describe what encryption is
- Can describe why encryption is important when dealing with sensitive information like passwords
- Can build a SQL schema for a given problem definition

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can build CRUD apps from scratch with Node.js and PostgreSQL
- Are interested in implementing auth in an existing project

## Description

You will start by cloning a starter app the has full CRUD functionality. From here, you will implementing auth using `express-session`, `bcrypt`, and `cookie-parser`.

### Setting Up Your Snapshot

1. Fork & clone the [Contacts starter repo](https://github.com/GuildCrafts/contacts-snapshot-starter)
1. Create and checkout a new branch for this goal, something like `auth`
    ```
    $ git checkout -b auth
    ```
1. Push your branch to the remote repo on GitHub
    ```
    $ git push -u origin auth
    ```
1. Follow the install instructions in the README of the starter repo
1. Get started on the specs!

## Specifications

- Create a signup page with a form (links to the login page)
- Create a login page with a form (links to the signup page)
- Redirect users who are not logged in to the login page (Make sure not logged in users can't see any of the pages or data other than the login and signup pages)
- Create a user table in the database
- When a user signs up, a new user row is created in the user table
- When a user logs in, their username and password are validated in the user table. If the username/password combo doesn't exist or is invalid, the user receives an error.
- Passwords are encrypted with `bcrypt`
- `express-session` is used to store sessions on the server
- `cookie-parser` is used to store cookies in the browser
