# MealSuite Menuboard Embedder ![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

Embed your [MealSuite](https://www.mealsuite.com) Menuboard into your website.

> Requires a current subscription

## Including this component

### Script tag
- Put a script tag similar to this `<script src='https://unpkg.com/menuboard-embed/dist/ms-menuboard-embed.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install menuboard-embed --save`
- Put a script tag similar to this `<script src='node_modules/menuboard-embed/dist/ms-menuboard-embed.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc


## Usage
After including the tag insert the `ms-menuboard-embed` component in your webpage/web app where you want to display the menuboard.

The menuboard will take the full width and height of the element it is nested in.

| Attribute | Description | Default |
|:----------|-------------|---------|
| auth_key  | Auth key generated from your MenuStreams Admin Dashboard | null |
| provider  | synergy, threesquares, revera or myusuite | synergy |

### Framework Integration
See [Stencil Components Framework Integration](https://stenciljs.com/docs/framework-integration)

## Example
```html
  <head>
    <script src='https://unpkg.com/menuboard-embed/dist/ms-menuboard-embed.js'></script>
  </head>

  <div style="width: 100%; height: 100vh; padding:0; margin:0;">
    <ms-menuboard-embed provider="{{PROVIDER}}" auth_key="{{AUTH_KEY}}"></ms-menuboard-embed>
  </div>

```
