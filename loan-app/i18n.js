module.exports = {
  "locales" : ["en", "es"],
  "defaultLocale" : "en",
  "pages": {
    "*": ["common"],
    "/": ["home"]
  }/*,
  "loadLocaleFrom": (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./myTranslationsFiles/${lang}/${ns}.json`).then((m) => m.default),*/
}
