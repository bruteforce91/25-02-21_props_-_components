# Esercitazione Giovedì 25 febbraio

Continuando a lavorare sul progetto precedente creato con npx create-react-app, inserire nella componente App il seguente oggetto:

const data = {
  name: 'HappyShoes',
  logo: 'https://logoipsum.com/logo/logo-16.svg',
  company: 'SZH Inc.',
  cover: 'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  title: 'Welcome to our brand new HappyShoes website!',
  description: 'Lorem ipsum velit cillum excepteur adipisicing voluptate mollit. Laboris deserunt reprehenderit commodo id id minim non voluptate irure pariatur nulla.',
}
All'interno di App importare e usare 3 componenti figlie:

Header
Body
Footer
Header
Header dovrà essere una componente funzionale che riceve le seguenti props:

logo (tipo String) - una URL all'immagine del logo del sito
name (tipo String) - il nome del sito
L'Header dovrà renderizzare un tag <header> con all'interno il logo del sito (<img />) e accanto il nome del sito (<span>).

Body
Body dovrà essere una componente di tipo class che riceve le seguenti props:

cover (tipo String) - una URL all'immagine cover del sito
title (tipo String) - l'intestazione della pagina
description (tipo String) - la descrizione della pagina
Il Body dovrà renderizzare un tag <main> contente un tag <img>, un tag <h1> e un tag <h2>.

Il tag <img> avrà come attributo src la prop cover
Il tag <h1> avrà come contenuto la prop title
Il tag <h2> avrà come contenuto la prop description
Footer
Footer dovrà essere una componente funzionale che riceve le seguenti props:

company (tipo String) - il nome dell'azienda proprietaria del sito.
Footer dovrà renderizzare un tag <footer> con al centro la seguante scritta:

2021 © SZH Inc.
La stinga 2021 dovrà essere ricavata tramite JavaScript e dovrà indicare l'anno corrente, mentre il nome dell'azienda sarà fornito dalla prop company.

Nice to have
Cercare di stilizzare in maniera accattivante il tutto tramite CSS, possibilmente tenendo un file CSS separato per ogni componente importato nella componente stessa:

import './Header.css';
import './Body.css';
import './Footer.css';
Documentazione
Classi in JavaScript
MDN Classes
javascript.info class
html.it Prototipi e Classi
React Components and props
React: Components and props
Pure functions (argomento opzionale avanzato)
Eric Elliot - pure functions
freecodecamp - pure functions
