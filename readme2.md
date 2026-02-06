npm install -g @angular/cli
ng version
ng serve -o

src/
  app/
    components/
      header/
      nav/
      main/
      aside/
      footer/
    app.component.ts
    app.component.html
    app.component.css
  assets/
    img/
      logo-angular18.png
      section1.png
      section2.png
      section3.png
styles.css 

app.component.html

<app-header></app-header>
<app-nav></app-nav>
<app-main></app-main>
<app-aside></app-aside>
<app-footer></app-footer>

/* styles.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font-family: system-ui, sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

<!-- header.component.html -->
<header class="header">
  <img
    src="assets/img/logo-angular18.png"
    alt="Logotipo Angular 18"
    class="header__logo"
  />
  <h1 class="header__title">ANGULAR 18 - COMPONENTES</h1>
</header>


/* header.component.css */

.header {
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  position: relative;
  background: #dd0031;
  color: white;
}

.header__logo {
  height: 80%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.header__title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
}

<!-- nav.component.html -->
<nav class="nav">
  <ul class="nav__list">
    <li><a href="#section1">Introducción</a></li>
    <li><a href="#section2">Novedades</a></li>
    <li><a href="#section3">Ventajas</a></li>
  </ul>
</nav>

/* nav.component.css */
.nav {
  width: 100vw;
  height: 10vh;
  background: #fafafa;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__list {
  display: flex;
  gap: 3rem;
  font-weight: 600;
}

<!-- main.component.html -->
<main class="main">
  <section id="section1" class="section">
    <div class="section__img-wrapper">
      <img src="assets/img/section1.png" alt="Introducción Angular 18">
    </div>
    <div class="section__text">
      <h2>¿Qué es Angular 18?</h2>
      <p>
        Angular 18 es la última versión del framework de Google para crear
        aplicaciones web de una sola página basadas en componentes...
      </p>
    </div>
  </section>

  <section id="section2" class="section">
    <div class="section__img-wrapper">
      <img src="assets/img/section2.png" alt="Novedades Angular 18">
    </div>
    <div class="section__text">
      <h2>Novedades principales</h2>
      <p>
        Entre las novedades de Angular 18 encontramos mejoras en rendimiento,
        nuevas APIs de señales, simplificación en la configuración del router...
      </p>
    </div>
  </section>

  <section id="section3" class="section">
    <div class="section__img-wrapper">
      <img src="assets/img/section3.png" alt="Ventajas Angular 18">
    </div>
    <div class="section__text">
      <h2>Ventajas para el desarrollador</h2>
      <p>
        Gracias a su sistema de componentes, tipado con TypeScript y herramientas
        oficiales como Angular CLI, Angular 18 permite desarrollar proyectos
        escalables y mantenibles...
      </p>
    </div>
  </section>
</main>

/* main.component.css */
.main {
  width: 80vw;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.section {
  width: 100%;
  height: 20%;
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.section__img-wrapper {
  flex: 0 0 25%;
}

.section__text {
  flex: 0 0 75%;
}

.section__text h2 {
  margin-bottom: 0.5rem;
}

<!-- aside.component.html -->
<aside class="aside">
  <ul class="aside__list">
    <li><a href="https://angular.dev" target="_blank">Documentación oficial</a></li>
    <li><a href="https://blog.angular.io" target="_blank">Blog Angular</a></li>
    <li><a href="https://github.com/angular/angular" target="_blank">Repositorio GitHub</a></li>
    <li><a href="https://angular-university.io" target="_blank">Angular University</a></li>
    <li><a href="https://rxjs.dev" target="_blank">RxJS</a></li>
  </ul>
</aside>


/* aside.component.css */
.aside {
  width: 100vw;
  height: 10vh;
  background: #f0f4ff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aside__list {
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
}

<!-- footer.component.html -->
<footer class="footer">
  <ul class="footer__social">
    <li><a href="#">Twitter</a></li>
    <li><a href="#">Instagram</a></li>
    <li><a href="#">LinkedIn</a></li>
    <li><a href="#">GitHub</a></li>
    <li><a href="#">YouTube</a></li>
  </ul>

  <ul class="footer__student">
    <li>Nombre: TU NOMBRE</li>
    <li>Apellidos: TUS APELLIDOS</li>
    <li>DNI: TU DNI</li>
    <li>Teléfono: TU TELÉFONO</li>
    <li>Email: TU CORREO</li>
  </ul>
</footer>

/* footer.component.css */
.footer {
  width: 100vw;
  height: 50vh;
  background: #222;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.footer__social,
.footer__student {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}

ng g c components/header
ng g c components/nav
ng g c components/main
ng g c components/aside
ng g c components/footer








