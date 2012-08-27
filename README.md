Palapala Proto 1
================
make palapala comic.

- Android 3.0+ WebBrowser
- Node.js 0.6.x
- https://github.com/shokai/palapala-proto-1

Install Dependencies
--------------------

    % npm install -g express
    % npm install
    % gem install heroku foreman


Run
---

    % foreman start

=> http://localhost:5000


Deploy
------

    % heroku create --stack cedar

deploy

    % git push heroku master
    % heroku open
