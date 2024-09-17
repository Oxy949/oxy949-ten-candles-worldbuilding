// Import TypeScript modules
import { registerSettings } from './lib/settings.js';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function () {
    console.log('Ten Candles | Initializing');
    // Assign custom classes and constants here

    // Register custom module settings
    // Preload Handlebars templates
    // await preloadTemplates();
    // Register custom sheets (if any)
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function () {
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function () {
});

Hooks.on("renderActorSheet", (app, html, data) => {
  // Изменяем текст вкладки "Description" на "Описание"
  html.find('a[data-tab="description"]').text("Описание");

  // Изменяем текст вкладки "Items" на "Особенности"
  html.find('a[data-tab="items"]').text("Особенности");

  // Убираем вкладку "Attributes"
  html.find('a[data-tab="attributes"]').remove();
});

Hooks.on("renderItemSheet", (app, html, data) => {
  // Изменяем текст вкладки "Description" на "Описание"
  //html.find('a[data-tab="description"]').text("Описание");

  // Убираем вкладку "Attributes"
  //html.find('a[data-tab="attributes"]').remove();

  html.find('.sheet-tabs').css('visibility', 'hidden');
  html.find('.sheet-tabs').css('position', 'absolute');
});