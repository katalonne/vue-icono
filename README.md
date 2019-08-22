<h1 align="center">Vue Icono</h1>

[![Build Status](https://travis-ci.org/katalonne/vue-icono.svg?branch=master)](https://travis-ci.org/katalonne/vue-icono)
[![codebeat badge](https://codebeat.co/badges/299f68a9-8267-4f8d-a3e8-9abc5910f582)](https://codebeat.co/projects/github-com-katalonne-vue-icono-master)
[![GitHub open issues](https://img.shields.io/github/issues/katalonne/vue-icono.svg)](https://github.com/katalonne/vue-icono/issues?q=is%3Aopen+is%3Aissue)
[![npm version](https://img.shields.io/npm/v/vue-icono.svg)](https://www.npmjs.com/package/vue-icono)
[![MIT License](https://img.shields.io/github/license/katalonne/vue-icono.svg)](https://github.com/katalonne/vue-icono/blob/master/LICENSE)

Design icons sourced from the [icono](https://github.com/saeedalipoor/icono) project.

## Demo
[Vue Icono](https://katalonne.github.io/vue-icono/)

## Installation
```bash
yarn add vue-icono

npm install --save vue-icono
```

## Usage

```javascript
import vueIcono from 'vue-icono';

export default {
  components: {
    vueIcono
  }
}
```

```html
<vue-icono name='mail' color="#fff"/>
```

## Props

| Property     | Type    | Default |
|--------------|---------|---------|
| name         | String  |         |
| color        | String  | #000    |
| container    | String  | div     |
| class-name   | String  |         |
| styles       | Object  | {}      |

## License

MIT © [katalonne](https://github.com/katalonne)