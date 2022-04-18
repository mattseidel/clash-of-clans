# Clan Of Clash

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)

## About <a name = "about"></a>

You can search your clan an get information about wars won, lost and the current wars points of your clan

## Getting Started <a name = "getting_started"></a>

Before start you must generate an key from the clash of clans api just clicking [here](https://developer.clashofclans.com/#/account) then create an json file called key.json on src

![key](./public/readme%20images/key.png)

### /src/key.json
```
{
  "key": "your key",
}
````
![key](./public/readme%20images/key.configuration.png)

it is recomended using an proxy and them set the url on key.json file like this

### /src/key.json

```
{
  "key": "your key",
  "proxy": "your proxy"
}
````

then the project is ready to run with 
```
npm start
```
## Usage <a name = "usage"></a>

you can filter the search by clan's name or member quantity

![filter](./public/readme%20images/usage-1.png)

### infinite scroll 
no matter how far you scroll down the app, as long as data is available, you will find clan information

![filter](./public/readme%20images/usage-2.png)
