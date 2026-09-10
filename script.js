"use strict";

/*
 * ==========================================================================
 * PASTELERÍA DERLING — DATOS DEL NEGOCIO
 * ==========================================================================
 * EDITA AQUÍ tus datos de contacto. No necesitas tocar nada más abajo.
 */
const BUSINESS = {
  name: "Pastelería Derling",
  addressLine: "Av. El Palomar 1733, Copiapó",
  // Número de WhatsApp SIN "+", sin espacios, con código de país 56.
  whatsappNumber: "56999646164",
  // El mismo número de WhatsApp, pero bonito para mostrar en pantalla.
  whatsappDisplay: "+56 9 9964 6164",
  // Teléfono fijo para el botón "Llamar" (formato tel: con +).
  phoneCall: "+56522210429",
  // El mismo teléfono fijo, pero bonito para mostrar en pantalla.
  phoneCallDisplay: "(52) 221 0429",
  email: "esteladerling@gmail.com",
  instagram: "https://www.instagram.com/pasteleria_derling_copiapo",
  facebook: "https://www.facebook.com/pasteleriafinaderling",
};

/*
 * ==========================================================================
 * EDITA AQUÍ: nombres, descripciones y precios de tus productos
 * ==========================================================================
 * Cada torta tiene un arreglo "prices" con 6 precios en pesos chilenos (CLP),
 * uno por cada tamaño (Aro 22 al Aro 32). El "group" indica cuántas personas
 * corresponden a cada tamaño (mira PORTION_GROUPS más abajo).
 *
 * Para agregar la foto de un producto, guarda una imagen en la carpeta
 * "images" con el mismo nombre que aparece en "img" (por ejemplo
 * images/torta-pina.jpg). Si no subes la foto, se mostrará un ícono
 * decorativo automáticamente — la página nunca se ve rota.
 */
const PORTION_GROUPS = {
  A: {
    es: ["10 personas", "15 personas", "20 personas", "25 personas", "30 personas", "35-40 personas"],
    en: ["10 people", "15 people", "20 people", "25 people", "30 people", "35-40 people"],
    short: {
      es: ["10 pers.", "15 pers.", "20 pers.", "25 pers.", "30 pers.", "35-40 pers."],
      en: ["10 ppl", "15 ppl", "20 ppl", "25 ppl", "30 ppl", "35-40 ppl"],
    },
  },
  B: {
    es: ["10-12 personas", "15 personas", "20 personas", "25 personas", "30 personas", "35-40 personas"],
    en: ["10-12 people", "15 people", "20 people", "25 people", "30 people", "35-40 people"],
    short: {
      es: ["10-12 pers.", "15 pers.", "20 pers.", "25 pers.", "30 pers.", "35-40 pers."],
      en: ["10-12 ppl", "15 ppl", "20 ppl", "25 ppl", "30 ppl", "35-40 ppl"],
    },
  },
  C: {
    es: ["15 personas", "25 personas", "30 personas", "40 personas", "45 personas", "50 personas"],
    en: ["15 people", "25 people", "30 people", "40 people", "45 people", "50 people"],
    short: {
      es: ["15 pers.", "25 pers.", "30 pers.", "40 pers.", "45 pers.", "50 pers."],
      en: ["15 ppl", "25 ppl", "30 ppl", "40 ppl", "45 ppl", "50 ppl"],
    },
  },
};
const ARO_SIZES = [22, 24, 26, 28, 30, 32];

const CATEGORIES = [
  { id: "clasicas", es: "Tortas Clásicas", en: "Classic Cakes" },
  { id: "tradicionales", es: "Tortas Tradicionales", en: "Traditional Cakes" },
  { id: "especiales", es: "Tortas Especiales", en: "Specialty Cakes" },
  { id: "panqueque", es: "Tortas de Panqueque", en: "Crepe Layer Cakes" },
  { id: "premium", es: "Tortas Premium", en: "Premium Cakes" },
  { id: "coctel", es: "Cóctel y Canapés", en: "Cocktail & Canapés" },
  { id: "quiches", es: "Quiches y Kuchenes Salados", en: "Savory Quiches & Kuchen" },
];

const CAKES = [
  // ---------- TORTAS CLÁSICAS ----------
  { id: "pina", category: "clasicas", group: "A", img: "images/torta-pina.jpg",
    es: { name: "Torta de Piña", desc: "Crema de piña con trozos y coco rallado." },
    en: { name: "Pineapple Cake", desc: "Pineapple cream with fruit chunks and shredded coconut." },
    prices: [26300, 33100, 44000, 52500, 63000, 66300] },
  { id: "naranja", category: "clasicas", group: "A", img: "images/torta-naranja.jpg",
    es: { name: "Torta de Naranja", desc: "Crema de naranja con mermelada de naranja y nuez." },
    en: { name: "Orange Cake", desc: "Orange cream with orange marmalade and walnuts." },
    prices: [26300, 33100, 44000, 52500, 63000, 66300] },
  { id: "moka", category: "clasicas", group: "A", img: "images/torta-moka.jpg",
    es: { name: "Torta Moka", desc: "Crema de café con chocolate." },
    en: { name: "Mocha Cake", desc: "Coffee cream with chocolate." },
    prices: [26300, 33100, 44000, 52500, 63000, 66300] },
  { id: "primavera", category: "clasicas", group: "A", img: "images/torta-primavera.jpg",
    es: { name: "Torta Primavera", desc: "Crema de vainilla, piña, cereza y durazno." },
    en: { name: "Spring Cake", desc: "Vanilla cream with pineapple, cherry and peach." },
    prices: [26300, 33100, 44000, 52500, 63000, 66300] },
  { id: "manjar-merengue", category: "clasicas", group: "A", img: "images/torta-manjar-merengue.jpg",
    es: { name: "Manjar con Merengue Italiano", desc: "Manjar (dulce de leche) con merengue italiano." },
    en: { name: "Manjar with Italian Meringue", desc: "Manjar (Chilean dulce de leche) with Italian meringue." },
    prices: [28700, 35300, 45000, 56700, 67000, 78000] },
  { id: "manjar-nueces", category: "clasicas", group: "A", img: "images/torta-manjar-nueces.jpg",
    es: { name: "Manjar con Nueces", desc: "Manjar con nueces." },
    en: { name: "Manjar with Walnuts", desc: "Manjar filling with walnuts." },
    prices: [28700, 35300, 45000, 56700, 67000, 78000] },
  { id: "manjar-pastelera", category: "clasicas", group: "A", img: "images/torta-manjar-pastelera.jpg",
    es: { name: "Manjar con Pastelera y Nueces", desc: "Manjar con crema pastelera y nueces." },
    en: { name: "Manjar with Pastry Cream & Walnuts", desc: "Manjar with pastry cream and walnuts." },
    prices: [28700, 35300, 45000, 56700, 67000, 78000] },
  { id: "lucuma", category: "clasicas", group: "A", img: "images/torta-lucuma.jpg",
    es: { name: "Torta de Lúcuma", desc: "Bizcocho y crema de lúcuma." },
    en: { name: "Lúcuma Cake", desc: "Sponge cake with lúcuma cream." },
    prices: [28700, 35300, 45000, 56700, 67000, 78000] },
  { id: "comb-hoja-merengue", category: "clasicas", group: "A", img: "images/torta-comb-hoja-merengue.jpg",
    es: { name: "Combinada con Hoja y Merengue", desc: "Bizcocho, merengue de frambuesa, hoja de manjar y merengue de lúcuma." },
    en: { name: "Combo with Manjar Leaf & Meringue", desc: "Sponge, raspberry meringue, manjar leaf and lúcuma meringue." },
    prices: [33100, 37300, 47000, 56700, 67000, 75000] },
  { id: "combinada-hoja-merengue", category: "clasicas", group: "A", img: "images/torta-combinada.jpg",
    es: { name: "Combinada con Hoja o Merengue", desc: "Combinación de hoja de manjar o merengue, a elección." },
    en: { name: "Combo, Manjar Leaf or Meringue", desc: "Your choice of manjar leaf or meringue combination." },
    prices: [33100, 37300, 47000, 56700, 67000, 75000] },
  { id: "chocolate-manjar", category: "clasicas", group: "A", img: "images/torta-chocolate-manjar.jpg",
    es: { name: "Torta de Chocolate", desc: "Manjar y cobertura de chocolate." },
    en: { name: "Chocolate Cake", desc: "Manjar filling with chocolate coating." },
    prices: [33100, 37300, 47000, 56700, 67000, 75000] },
  { id: "selva-negra", category: "clasicas", group: "A", img: "images/torta-selva-negra.jpg",
    es: { name: "Selva Negra", desc: "Chantilly de vainilla con mermelada ácida de guinda." },
    en: { name: "Black Forest Cake", desc: "Vanilla chantilly cream with tart cherry jam." },
    prices: [33100, 37300, 47000, 56700, 67000, 75000] },

  // ---------- TORTAS TRADICIONALES ----------
  { id: "reina-ana", category: "tradicionales", group: "A", img: "images/torta-reina-ana.jpg",
    es: { name: "Reina Ana", desc: "Receta tradicional de la casa." },
    en: { name: "Reina Ana", desc: "Our traditional house recipe." },
    prices: [33100, 37300, 47000, 54000, 64000, 75000] },
  { id: "chocolate-ganache", category: "tradicionales", group: "A", img: "images/torta-chocolate-ganache.jpg",
    es: { name: "Torta de Chocolate con Ganache", desc: "Relleno con ganache de chocolate." },
    en: { name: "Chocolate Ganache Cake", desc: "Filled with chocolate ganache." },
    prices: [36700, 44000, 52500, 63000, 68000, 84000] },
  { id: "ciruela", category: "tradicionales", group: "A", img: "images/torta-ciruela.jpg",
    es: { name: "Torta de Ciruela", desc: "Bizcocho de ciruela con nueces, manjar y merengue." },
    en: { name: "Prune Cake", desc: "Prune sponge with walnuts, manjar and meringue." },
    prices: [36700, 44000, 52500, 63000, 68000, 84000] },
  { id: "turron-nuez", category: "tradicionales", group: "A", img: "images/torta-turron-nuez.jpg",
    es: { name: "Turrón de Nuez", desc: "Bizcocho blanco, mermelada de damasco, bizcocho de nuez y manjar." },
    en: { name: "Walnut Nougat Cake", desc: "White sponge, apricot jam, walnut sponge and manjar." },
    prices: [36700, 44000, 52500, 63000, 68000, 84000] },
  { id: "turron-coco", category: "tradicionales", group: "A", img: "images/torta-turron-coco.jpg",
    es: { name: "Turrón de Coco", desc: "Bizcocho blanco, mermelada de damasco, bizcocho de nuez, coco y manjar." },
    en: { name: "Coconut Nougat Cake", desc: "White sponge, apricot jam, walnut sponge, coconut and manjar." },
    prices: [36700, 44000, 52500, 63000, 68000, 84000] },

  // ---------- TORTAS ESPECIALES ----------
  { id: "hojarasca-manjar", category: "especiales", group: "A", img: "images/torta-hojarasca-manjar.jpg",
    es: { name: "Hojarasca con Manjar y Nueces", desc: "Masa hojaldrada con manjar y nueces." },
    en: { name: "Hojarasca with Manjar & Walnuts", desc: "Flaky pastry layers with manjar and walnuts." },
    prices: [33100, 40900, 47000, 57700, 68000, 87000] },
  { id: "hojarasca-yemas", category: "especiales", group: "A", img: "images/torta-hojarasca-yemas.jpg",
    es: { name: "Hojarasca con Hoja de Yemas", desc: "Masa hojaldrada con relleno de hoja de yemas." },
    en: { name: "Hojarasca with Egg-Yolk Filling", desc: "Flaky pastry layers with egg-yolk leaf filling." },
    prices: [35500, 44100, 55100, 63000, 73500, 88000] },
  { id: "pompadour-platano", category: "especiales", group: "A", img: "images/torta-pompadour.jpg",
    es: { name: "Pompadour", desc: "Relleno con crema de plátano." },
    en: { name: "Pompadour", desc: "Filled with banana cream." },
    prices: [37300, 44100, 52500, 60900, 73000, 89000] },
  { id: "trasnochada", category: "especiales", group: "A", img: "images/torta-trasnochada.jpg",
    es: { name: "Trasnochada", desc: "Manjar, crema pastelera y mermelada, cubierta con chantilly." },
    en: { name: "Trasnochada", desc: "Manjar, pastry cream and jam, topped with chantilly cream." },
    prices: [37300, 44100, 52500, 60900, 73000, 89000] },
  { id: "amor", category: "especiales", group: "A", img: "images/torta-amor.jpg",
    es: { name: "Torta Amor", desc: "Especialidad de la casa con crema de vainilla." },
    en: { name: "Amor Cake", desc: "House specialty with vanilla cream." },
    prices: [37300, 44100, 52200, 60900, 73000, 89000] },
  { id: "tropical", category: "especiales", group: "A", img: "images/torta-tropical.jpg",
    es: { name: "Torta Tropical", desc: "Relleno con mango, frutilla, lúcuma y maracuyá." },
    en: { name: "Tropical Cake", desc: "Filled with mango, strawberry, lúcuma and passion fruit." },
    prices: [37300, 44100, 52200, 60900, 73000, 89000] },
  { id: "merengue-lucuma", category: "especiales", group: "A", img: "images/torta-merengue-lucuma.jpg",
    es: { name: "Merengue Relleno con Lúcuma", desc: "Capas de merengue con relleno de lúcuma." },
    en: { name: "Meringue with Lúcuma", desc: "Meringue layers filled with lúcuma cream." },
    prices: [31500, 37500, 42000, 52500, 63000, 78700] },
  { id: "merengue-mango", category: "especiales", group: "A", img: "images/torta-merengue-mango.jpg",
    es: { name: "Merengue Relleno con Mango", desc: "Capas de merengue con relleno de mango." },
    en: { name: "Meringue with Mango", desc: "Meringue layers filled with mango cream." },
    prices: [31500, 37500, 42000, 52500, 63000, 78700] },
  { id: "merengue-frutilla", category: "especiales", group: "A", img: "images/torta-merengue-frutilla.jpg",
    es: { name: "Merengue Relleno con Frutilla", desc: "Capas de merengue con relleno de frutilla." },
    en: { name: "Meringue with Strawberry", desc: "Meringue layers filled with strawberry cream." },
    prices: [31500, 37500, 42000, 52500, 63000, 78700] },
  { id: "merengue-pina", category: "especiales", group: "A", img: "images/torta-merengue-pina.jpg",
    es: { name: "Merengue Relleno con Piña", desc: "Capas de merengue con relleno de piña." },
    en: { name: "Meringue with Pineapple", desc: "Meringue layers filled with pineapple cream." },
    prices: [31500, 37500, 42000, 52500, 63000, 78700] },
  { id: "merengue-frambuesa", category: "especiales", group: "A", img: "images/torta-merengue-frambuesa.jpg",
    es: { name: "Merengue Relleno con Frambuesa", desc: "Capas de merengue con relleno de frambuesa." },
    en: { name: "Meringue with Raspberry", desc: "Meringue layers filled with raspberry cream." },
    prices: [33500, 37500, 42000, 52500, 63000, 78700] },
  { id: "merengue-durazno", category: "especiales", group: "A", img: "images/torta-merengue-durazno.jpg",
    es: { name: "Merengue Relleno con Durazno y Frutilla", desc: "Capas de merengue con relleno de durazno y frutilla." },
    en: { name: "Meringue with Peach & Strawberry", desc: "Meringue layers filled with peach and strawberry cream." },
    prices: [31500, 37500, 42000, 52500, 63000, 78700] },

  // ---------- TORTAS DE PANQUEQUE ----------
  { id: "panq-almendra", category: "panqueque", group: "C", img: "images/torta-panq-almendra.jpg",
    es: { name: "Pompadour de Almendra", desc: "Panqueque de almendra con crema de almendra." },
    en: { name: "Almond Crepe Cake", desc: "Almond crepe layers with almond cream." },
    prices: [37800, 44000, 52000, 68000, 78000, 89000] },
  { id: "panq-chocolate", category: "panqueque", group: "C", img: "images/torta-panq-chocolate.jpg",
    es: { name: "Panqueque de Chocolate", desc: "Relleno con manjar, ganache y mermelada." },
    en: { name: "Chocolate Crepe Cake", desc: "Filled with manjar, ganache and jam." },
    prices: [37800, 44000, 52000, 68000, 78000, 89000] },
  { id: "reina-sofia", category: "panqueque", group: "C", img: "images/torta-reina-sofia.jpg",
    es: { name: "Reina Sofía", desc: "Panqueque de vainilla, manjar y crema pastelera." },
    en: { name: "Reina Sofía", desc: "Vanilla crepe layers with manjar and pastry cream." },
    prices: [37800, 44000, 52000, 68000, 78000, 89000] },
  { id: "bicolor", category: "panqueque", group: "C", img: "images/torta-bicolor.jpg",
    es: { name: "Bicolor", desc: "Panqueque de chocolate y vainilla, crema de café, manjar y trufa." },
    en: { name: "Bicolor Crepe Cake", desc: "Chocolate and vanilla crepe layers, coffee cream, manjar and truffle." },
    prices: [37800, 44000, 52000, 68000, 78000, 89000] },
  { id: "muselina", category: "panqueque", group: "C", img: "images/torta-muselina.jpg",
    es: { name: "Muselina", desc: "Panqueque de chocolate, crema de café, manjar y trufa." },
    en: { name: "Muselina Crepe Cake", desc: "Chocolate crepe layers, coffee cream, manjar and truffle." },
    prices: [37800, 44000, 52000, 68000, 78000, 89000] },
  { id: "panq-naranja", category: "panqueque", group: "C", img: "images/torta-panq-naranja.jpg",
    es: { name: "Panqueque de Naranja", desc: "Panqueque de naranja con crema de naranja." },
    en: { name: "Orange Crepe Cake", desc: "Orange crepe layers with orange cream." },
    prices: [37800, 44000, 52000, 68000, 78000, 89000] },
  { id: "panq-chocolate-cobertura", category: "panqueque", group: "C", img: "images/torta-panq-chocolate-cobertura.jpg",
    es: { name: "Panqueque de Chocolate y Cobertura", desc: "Relleno con manjar y cobertura de chocolate." },
    en: { name: "Chocolate Crepe Cake, Chocolate Coating", desc: "Filled with manjar and chocolate coating." },
    prices: [37800, 44000, 52000, 68000, 78000, 89000] },

  // ---------- TORTAS PREMIUM ----------
  { id: "napoleon", category: "premium", group: "B", img: "images/torta-napoleon.jpg",
    es: { name: "Napoleón", desc: "Bizcocho de nuez, merengue, crema de vainilla y manjar." },
    en: { name: "Napoleón", desc: "Walnut sponge, meringue, vanilla cream and manjar." },
    prices: [37300, 44100, 52500, 63000, 73000, 84000] },
  { id: "nuez-manjar", category: "premium", group: "B", img: "images/torta-nuez.jpg",
    es: { name: "Torta de Nuez", desc: "Bizcocho de nuez con manjar." },
    en: { name: "Walnut Cake", desc: "Walnut sponge with manjar." },
    prices: [37300, 44100, 52500, 63000, 73000, 84000] },
  { id: "tres-leches", category: "premium", group: "B", img: "images/torta-tres-leches.jpg",
    es: { name: "Tres Leches", desc: "Remojada con leche condensada, crema y leche Ideal." },
    en: { name: "Tres Leches Cake", desc: "Soaked in condensed milk, cream and evaporated milk." },
    prices: [36700, 44000, 52500, 63000, 68000, 84000] },
  { id: "rellena-eleccion", category: "premium", group: "B", img: "images/torta-rellena.jpg",
    es: { name: "Torta a tu Elección", desc: "Rellena con crema pastelera, manjar o mermelada de frambuesa." },
    en: { name: "Build-Your-Own Filling", desc: "Filled with pastry cream, manjar or raspberry jam — your choice." },
    prices: [36700, 44000, 52500, 63000, 68000, 84000] },
];

/*
 * ---------- CÓCTEL, CANAPÉS, QUICHES Y KUCHENES ----------
 * Estos productos tienen un solo precio (no varían por número de personas).
 * "unit" es el texto que se muestra junto al precio (edítalo si corresponde).
 */
const SIMPLE_ITEMS = [
  { id: "canapes-pastas", category: "coctel", img: "images/canapes-pastas.jpg",
    es: { name: "Canapés de Pastas", desc: "Pan con pastas de ave, pimiento, carne, nuez, jamón, queso y atún.", unit: "100 unidades" },
    en: { name: "Pâté Canapés", desc: "Bread with poultry, pepper, beef, walnut, ham, cheese and tuna pâtés.", unit: "100 pieces" },
    price: 42000 },
  { id: "canapes-finos", category: "coctel", img: "images/canapes-finos.jpg",
    es: { name: "Canapés Finos", desc: "Pan de molde con palmitos, espárragos, camarón y champiñón.", unit: "100 unidades" },
    en: { name: "Fine Canapés", desc: "Sandwich bread with hearts of palm, asparagus, shrimp and mushroom.", unit: "100 pieces" },
    price: 47000 },
  { id: "petit-bouche", category: "coctel", img: "images/petit-bouche.jpg",
    es: { name: "Petit Bouché", desc: "Cachitos, maicenas, repollitos, alfajores, trufas, hojas, merengues, pie y tartaletas.", unit: "100 unidades" },
    en: { name: "Petit Bouché Assortment", desc: "Mini pastries: cachitos, cornstarch cookies, alfajores, truffles, meringues, pie and tartlets.", unit: "100 pieces" },
    price: 42000 },
  { id: "empanaditas-queso-pino", category: "coctel", img: "images/empanaditas-queso-pino.jpg",
    es: { name: "Empanaditas de Queso y Pino", desc: "Fritas de queso y al horno de pino.", unit: "100 unidades" },
    en: { name: "Cheese & Beef Mini Empanadas", desc: "Fried cheese empanadas and baked beef empanadas.", unit: "100 pieces" },
    price: 42000 },
  { id: "empanaditas-camaron", category: "coctel", img: "images/empanaditas-camaron.jpg",
    es: { name: "Empanaditas de Camarón u Ostión", desc: "Fritas, rellenas de queso y camarón u ostión.", unit: "100 unidades" },
    en: { name: "Shrimp or Scallop Mini Empanadas", desc: "Fried, filled with cheese and shrimp or scallop.", unit: "100 pieces" },
    price: 50000 },
  { id: "empanaditas-jamon-queso", category: "coctel", img: "images/empanaditas-jamon-queso.jpg",
    es: { name: "Empanaditas de Jamón y Queso", desc: "Fritas, rellenas de jamón y queso.", unit: "100 unidades" },
    en: { name: "Ham & Cheese Mini Empanadas", desc: "Fried, filled with ham and cheese.", unit: "100 pieces" },
    price: 42000 },
  { id: "pizzetas", category: "coctel", img: "images/pizzetas.jpg",
    es: { name: "Pizzetas", desc: "Mini pizzas individuales.", unit: "c/u" },
    en: { name: "Mini Pizzas", desc: "Individual mini pizzas.", unit: "each" },
    price: 1300 },
  { id: "pastel-choclo", category: "coctel", img: "images/pastel-choclo.jpg",
    es: { name: "Pastel de Choclo Individual", desc: "Versión mini de nuestro pastel de choclo.", unit: "c/u" },
    en: { name: "Mini Corn Pie", desc: "Mini version of our classic Chilean corn pie.", unit: "each" },
    price: 1500 },
  { id: "tapaditos-carne-pollo", category: "coctel", img: "images/tapaditos-1.jpg",
    es: { name: "Tapaditos de Carne y Pollo", desc: "Bocaditos individuales de carne y pollo.", unit: "c/u" },
    en: { name: "Beef & Chicken Tapaditos", desc: "Individual beef and chicken savory bites.", unit: "each" },
    price: 1600 },
  { id: "diplomatico", category: "coctel", img: "images/diplomatico.jpg",
    es: { name: "Diplomático", desc: "Pollo, jamón, morrón y mayonesa.", unit: "c/u" },
    en: { name: "Diplomático", desc: "Chicken, ham, roasted pepper and mayonnaise.", unit: "each" },
    price: 1600 },
  { id: "tapaditos-choricillo", category: "coctel", img: "images/tapaditos-2.jpg",
    es: { name: "Tapaditos de Carne, Tocino, Pollo y Choricillo", desc: "Bocaditos individuales surtidos.", unit: "c/u" },
    en: { name: "Beef, Bacon, Chicken & Sausage Tapaditos", desc: "Assorted individual savory bites.", unit: "each" },
    price: 1700 },

  { id: "quiche-clasico", category: "quiches", img: "images/quiche-clasico.jpg",
    es: { name: "Quiche / Kuchen Salado Clásico", desc: "Carne, pavo y brócoli, espinaca y jamón, vacuno picado, o pollo y zanahoria.", unit: "tamaño familiar" },
    en: { name: "Classic Savory Quiche / Kuchen", desc: "Beef, turkey and broccoli, spinach and ham, minced beef, or chicken and carrot.", unit: "family size" },
    price: 17900 },
  { id: "quiche-lorraine", category: "quiches", img: "images/quiche-lorraine.jpg",
    es: { name: "Quiche Lorraine", desc: "Cebolla con tocino." },
    en: { name: "Quiche Lorraine", desc: "Onion and bacon." },
    price: 17900 },
  { id: "quiche-marisco", category: "quiches", img: "images/quiche-marisco.jpg",
    es: { name: "Quiche / Kuchen de Marisco", desc: "Ostión, camarón y choritos.", unit: "tamaño familiar" },
    en: { name: "Seafood Quiche / Kuchen", desc: "Scallop, shrimp and mussels.", unit: "family size" },
    price: 19900 },
  { id: "quiche-vegetariano", category: "quiches", img: "images/quiche-vegetariano.jpg",
    es: { name: "Quiche / Kuchen Vegetariano", desc: "Champiñón, coliflor, zanahoria, cebolla, queso, alcachofa, pimiento, choclo, palmito y espárrago.", unit: "tamaño familiar" },
    en: { name: "Vegetarian Quiche / Kuchen", desc: "Mushroom, cauliflower, carrot, onion, cheese, artichoke, pepper, corn, palm heart and asparagus.", unit: "family size" },
    price: 17900 },
  { id: "quiche-del-mar", category: "quiches", img: "images/quiche-del-mar.jpg",
    es: { name: "Quiche / Kuchen del Mar", desc: "Salmón, anchoas, atún, pescado y mariscos.", unit: "tamaño familiar" },
    en: { name: "Seaside Quiche / Kuchen", desc: "Salmon, anchovies, tuna, fish and shellfish.", unit: "family size" },
    price: 19900 },
  { id: "quiche-individual", category: "quiches", img: "images/quiche-individual.jpg",
    es: { name: "Quiche Individual", desc: "Porción individual", unit: "c/u" },
    en: { name: "Individual Quiche", desc: "Individual serving", unit: "each" },
    price: 4000 },
];

/*
 * ==========================================================================
 * GALERÍA DE TORTAS ESPECIALES REALIZADAS
 * ==========================================================================
 * Este es un espacio para mostrar tortas personalizadas que ya hiciste
 * (cumpleaños temáticos, bodas, bautizos, etc.). Solo necesitan nombre y
 * foto — no tienen precio ni botones de tamaño.
 *
 * Para agregar una: copia un bloque completo (desde { hasta },) y pégalo
 * antes del corchete final "]". Cambia "id" (sin espacios ni tildes),
 * el nombre en español e inglés, y el nombre del archivo de la foto en
 * "img" (guárdala en la carpeta images/ con ese mismo nombre).
 * Para quitar una torta de la galería, borra su bloque completo.
 */
const GALLERY_ITEMS = [
  { id: "galeria-1", img: "images/galeria-1.jpg",
    es: { name: "Torta de Bodas" },
    en: { name: "Wedding Cake" } },
  { id: "galeria-2", img: "images/galeria-2.jpg",
    es: { name: "Cumpleaños Temático" },
    en: { name: "Themed Birthday Cake" } },
  { id: "galeria-3", img: "images/galeria-3.jpg",
    es: { name: "Torta de Bautizo" },
    en: { name: "Christening Cake" } },
  { id: "galeria-4", img: "images/galeria-4.jpg",
    es: { name: "Torta de Cumpleaños Infantil" },
    en: { name: "Kids' Birthday Cake" } },
];

/*
 * ==========================================================================
 * TEMPORADA ESPECIAL (Fiestas Patrias, Navidad, Día de la Madre, etc.)
 * ==========================================================================
 * Usa este espacio para productos de una fecha especial. Cuando la
 * temporada termine, NO hace falta borrar nada: solo cambia "active" a
 * false (una línea más abajo) para ocultar toda la sección hasta la
 * próxima fecha especial. Cuando quieras mostrarla de nuevo, cambia el
 * título, las fotos y los productos, y vuelve a poner "active" a true.
 */
const SEASONAL = {
  active: true, // true = mostrar la sección / false = ocultarla
  es: {
    title: "Fiestas Patrias",
    subtitle: "Empanadas y productos típicos para este 18 de septiembre. ¡Encarga con tiempo!",
  },
  en: {
    title: "Chilean Independence Day",
    subtitle: "Empanadas and traditional treats for this September 18th. Order ahead!",
  },
};

/*
 * Grupos dentro de la Temporada Especial (por ejemplo "Empanadas" y
 * "Dulces Chilenos"). Cada producto de SEASONAL_ITEMS más abajo indica
 * a cuál pertenece con "subcategory". Para agregar un grupo nuevo,
 * copia un bloque completo aquí y usa su "id" en los productos.
 */
const SEASONAL_SUBCATEGORIES = [
  { id: "empanadas", es: "Empanadas", en: "Empanadas" },
  { id: "dulces", es: "Dulces Chilenos", en: "Chilean Sweets" },
];

/*
 * Cada producto de temporada necesita nombre, foto y grupo
 * ("subcategory", debe coincidir con un "id" de SEASONAL_SUBCATEGORIES
 * de arriba). El precio es opcional: si no quieres mostrar uno, borra
 * esa línea completa (la que dice "price: ...,").
 *
 * Para agregar uno nuevo: copia un bloque completo (desde { hasta },) y
 * pégalo antes del corchete final "]". Cambia "id" (sin espacios ni
 * tildes), el nombre en español e inglés, el precio y el nombre del
 * archivo de la foto en "img" (guárdala en la carpeta images/ con ese
 * mismo nombre). Para quitar un producto, borra su bloque completo.
 */
const SEASONAL_ITEMS = [
  // ---------- Empanadas ----------
  { id: "empanada-ave-carne", subcategory: "empanadas", img: "images/temporada-empanada-ave-carne.jpg",
    es: { name: "Empanadas al Horno (Ave, trozos de carne)" },
    en: { name: "Baked Empanada (Chicken & Beef Chunks)" },
    price: 2800 },
  { id: "empanada-carne-molida", subcategory: "empanadas", img: "images/temporada-empanada-carne-molida.jpg",
    es: { name: "Empanada al Horno (Carne Molida)" },
    en: { name: "Baked Empanada (Ground Beef)" },
    price: 2400 },
  { id: "empanada-napolitana", subcategory: "empanadas", img: "images/temporada-empanada-napolitana.jpg",
    es: { name: "Empanada Napolitana al Horno" },
    en: { name: "Baked Napolitana Empanada" },
    price: 2400 },
  { id: "empanada-queso-frita", subcategory: "empanadas", img: "images/temporada-empanada-queso-frita.jpg",
    es: { name: "Empanada de Queso (Frita)" },
    en: { name: "Fried Cheese Empanada" },
    price: 2500 },
  { id: "empanada-queso-hoja", subcategory: "empanadas", img: "images/temporada-empanada-queso-hoja.jpg",
    es: { name: "Empanada de Queso (Masa de Hoja)" },
    en: { name: "Puff Pastry Cheese Empanada" },
    price: 2600 },

  // ---------- Dulces Chilenos ----------
  { id: "alfajores-patrios", subcategory: "dulces", img: "images/temporada-alfajores.jpg",
    es: { name: "Alfajores (Manjar, c/Chancaca)" },
    en: { name: "Alfajores (Manjar & Chancaca)" },
    price: 1200 },
  { id: "dulces-blancos", subcategory: "dulces", img: "images/temporada-dulces-blancos.jpg",
    es: { name: "Dulces Blancos" },
    en: { name: "Dulces Blancos (Chilean Meringue Sweet)" },
    price: 1200 },
  { id: "empanada-alcayota", subcategory: "dulces", img: "images/temporada-empanada-alcayota.jpg",
    es: { name: "Empanada de Alcayota" },
    en: { name: "Alcayota Sweet Empanada" },
    price: 1200 },
];

/*
 * ==========================================================================
 * TEXTOS DE LA INTERFAZ (ES / EN)
 * ==========================================================================
 */
const UI = {
  es: {
    skipLink: "Ir al contenido",
    welcomeTitle: "Bienvenidos",
    welcomeSchedule: "Horario de entrega en el local: de lunes a sábado, entre las 17:00 y las 19:00 hrs. Domingo cerrado.",
    tagline: "Sabores que perduran en cada celebración",
    heroTitle: "Pastelería Derling",
    heroSubtitle: "Tortas artesanales, cóctel y kuchenes salados hechos con receta de familia en Copiapó.",
    navTemporada: "Temporada Especial",
    navCatalog: "Catálogo",
    navGaleria: "Galería",
    navNovios: "Novios y Eventos",
    navInfo: "Información",
    langButton: "EN",
    catalogTitle: "Nuestro Catálogo",
    catalogSubtitle: "Elige el tamaño y el precio se actualiza al instante.",
    searchLabel: "Buscar en el catálogo",
    searchPlaceholder: "Buscar torta o producto...",
    filterAll: "Todas",
    peopleLabel: "Elige el tamaño",
    priceFrom: "Desde",
    orderButton: "Pedir aquí",
    aroLabel: "Aro",
    cakeTextLabel: "✏️ Escrito en la torta (opcional)",
    cakeTextPlaceholder: "Ej: Feliz Cumpleaños Juan",
    mapsLinkText: "📍 Ver en Google Maps",
    mapsEnlarge: "🔍 Ampliar mapa",
    mapsClose: "Cerrar",
    galleryTitle: "Tortas Especiales Realizadas",
    gallerySubtitle: "Algunos trabajos personalizados que hemos hecho. ¿Quieres algo similar? Escríbenos.",
    navCotizar: "Cotiza Aquí",
    quoteTitle: "Cotiza tu Pedido",
    quoteSubtitle: "¿Quieres varias cosas a la vez (torta, canapés, alfajores, cachitos, etc.)? Cuéntanos todo aquí y te respondemos por WhatsApp o correo.",
    quoteNombre: "Nombre",
    quoteApellido: "Apellido",
    quoteEmail: "Email",
    quoteTelefono: "Teléfono",
    quoteDireccion: "Dirección",
    quoteFecha: "Fecha del pedido",
    quoteHora: "Hora del pedido",
    quoteHoraPlaceholder: "Elige una hora",
    quoteDateTimeHint: "La entrega es en el local de lunes a sábado, entre 17:00 y 19:00 hrs. Domingo cerrado.",
    quoteDateSundayError: "No trabajamos los domingos. Por favor elige otro día para la entrega.",
    quoteCakeText: "Escrito en torta (opcional)",
    quoteMessage: "Consulta o cotización",
    quoteMessagePlaceholder: "Cuéntanos qué necesitas: tipo de torta, cantidad de personas, otros productos (canapés, alfajores, cachitos...), fecha del evento, etc.",
    quoteSendWhatsapp: "Enviar por WhatsApp",
    quoteSendEmail: "Enviar por Gmail",
    quoteRequiredNote: "* Campos obligatorios",
    quoteMessageIntro: "Hola, quiero cotizar un pedido:",
    quoteEmailSubject: "Cotización - Pastelería Derling",
    noviosEyebrow: "Matrimonios y Eventos Especiales",
    noviosTitle: "Tortas de Novios y Eventos",
    noviosText: "¿Tienes un matrimonio, aniversario o evento especial? Diseñamos tu torta a medida. Coordina los detalles directamente con nosotras por llamada o WhatsApp.",
    noviosDietary: "También preparamos tu pedido sin azúcar o según otras necesidades especiales que nos indiques (alergias, intolerancias, etc.). Cuéntanos tu requerimiento por WhatsApp o llamada.",
    noviosCall: "Llamar ahora",
    noviosWhatsapp: "Escribir por WhatsApp",
    infoTitle: "Información Útil",
    infoSchedule: "Horario de Atención",
    infoAddress: "Dirección y Retiro",
    infoDelivery: "Coordinamos despacho dentro de Copiapó o retiro directo en nuestro local. Consulta disponibilidad y costo de envío por WhatsApp.",
    infoAnticipation: "Anticipación para Pedidos",
    infoAnticipationText: "Recomendamos encargar tus tortas con al menos 48 horas de anticipación, y con 1 semana para tortas de matrimonio o eventos grandes. Se solicita un abono para confirmar el pedido.",
    infoPayment: "Métodos de Pago",
    infoPaymentText: "Efectivo, transferencia bancaria y tarjetas de débito/crédito (sujeto a disponibilidad).",
    infoQr: "Transfiere escaneando este código QR:",
    infoQrAlt: "Código QR para transferencias",
    days: { mon: "Lunes", tue: "Martes", wed: "Miércoles", thu: "Jueves", fri: "Viernes", sat: "Sábado", sun: "Domingo" },
    hoursWeek: "10:00–14:00 y 16:30–19:00",
    hoursSat: "10:00–14:30 y 16:30–19:00",
    hoursClosed: "Cerrado",
    footerFollow: "Síguenos",
    footerRights: "Todos los derechos reservados.",
    floatWhatsapp: "Escríbenos por WhatsApp",
    whatsGreeting: (name, size, price, cakeText) =>
      `Hola, quiero encargar la ${name} para ${size} (Precio: ${price}).` +
      (cakeText ? ` Escrito en la torta: "${cakeText}".` : "") +
      ` ¿Está disponible?`,
    whatsGreetingSimple: (name, unit, price) =>
      `Hola, quiero encargar: ${name} (${unit}) - Precio: ${price}. ¿Está disponible?`,
    whatsGreetingSeasonal: (name, seasonTitle, price) =>
      price
        ? `Hola, quiero encargar: ${name} (${seasonTitle}) - Precio: ${price}. ¿Está disponible?`
        : `Hola, quiero encargar: ${name} (${seasonTitle}). ¿Está disponible?`,
    whatsGreetingNovios: "Hola, me gustaría cotizar una torta para matrimonio o evento especial. Fecha del evento: ___ / Número de invitados: ___",
    photoSoon: "Foto próximamente",
  },
  en: {
    skipLink: "Skip to content",
    welcomeTitle: "Welcome",
    welcomeSchedule: "Pickup hours at our store: Monday to Saturday, between 5:00 and 7:00 PM. Closed Sundays.",
    tagline: "Flavors that last through every celebration",
    heroTitle: "Pastelería Derling",
    heroSubtitle: "Handcrafted cakes, cocktail bites and savory kuchen made with a family recipe in Copiapó, Chile.",
    navTemporada: "Special Season",
    navCatalog: "Catalog",
    navGaleria: "Gallery",
    navNovios: "Weddings & Events",
    navInfo: "Information",
    langButton: "ES",
    catalogTitle: "Our Catalog",
    catalogSubtitle: "Choose a size and the price updates instantly.",
    searchLabel: "Search the catalog",
    searchPlaceholder: "Search for a cake or product...",
    filterAll: "All",
    peopleLabel: "Choose a size",
    priceFrom: "From",
    orderButton: "Order here",
    aroLabel: "Size",
    cakeTextLabel: "✏️ Cake message (optional)",
    cakeTextPlaceholder: "E.g.: Happy Birthday John",
    mapsLinkText: "📍 View on Google Maps",
    mapsEnlarge: "🔍 Enlarge map",
    mapsClose: "Close",
    galleryTitle: "Special Cakes We've Made",
    gallerySubtitle: "Some custom work we've created. Want something similar? Message us.",
    navCotizar: "Get a Quote",
    quoteTitle: "Request a Quote",
    quoteSubtitle: "Want several things at once (cake, canapés, alfajores, cachitos, etc.)? Tell us everything here and we'll reply via WhatsApp or email.",
    quoteNombre: "First Name",
    quoteApellido: "Last Name",
    quoteEmail: "Email",
    quoteTelefono: "Phone",
    quoteDireccion: "Address",
    quoteFecha: "Order Date",
    quoteHora: "Order Time",
    quoteHoraPlaceholder: "Choose a time",
    quoteDateTimeHint: "Pickup is at our store, Monday to Saturday, between 5:00 and 7:00 PM. Closed Sundays.",
    quoteDateSundayError: "We're closed on Sundays. Please choose another delivery day.",
    quoteCakeText: "Cake message (optional)",
    quoteMessage: "Inquiry or quote request",
    quoteMessagePlaceholder: "Tell us what you need: cake type, number of guests, other products (canapés, alfajores, cachitos...), event date, etc.",
    quoteSendWhatsapp: "Send via WhatsApp",
    quoteSendEmail: "Send via Gmail",
    quoteRequiredNote: "* Required fields",
    quoteMessageIntro: "Hi! I'd like to request a quote:",
    quoteEmailSubject: "Quote Request - Pastelería Derling",
    noviosEyebrow: "Weddings & Special Events",
    noviosTitle: "Wedding & Event Cakes",
    noviosText: "Planning a wedding, anniversary or special event? We design a custom cake for you. Coordinate the details directly with us by phone call or WhatsApp.",
    noviosDietary: "We can also prepare your order sugar-free or according to other special needs you let us know about (allergies, intolerances, etc.). Tell us your requirement via WhatsApp or phone call.",
    noviosCall: "Call now",
    noviosWhatsapp: "Message on WhatsApp",
    infoTitle: "Useful Information",
    infoSchedule: "Business Hours",
    infoAddress: "Address & Pickup",
    infoDelivery: "We arrange delivery within Copiapó or direct pickup at our store. Ask about availability and delivery cost via WhatsApp.",
    infoAnticipation: "Advance Notice for Orders",
    infoAnticipationText: "We recommend ordering your cakes at least 48 hours in advance, and 1 week ahead for wedding cakes or large events. A deposit is required to confirm your order.",
    infoPayment: "Payment Methods",
    infoPaymentText: "Cash, bank transfer, and debit/credit cards (subject to availability).",
    infoQr: "Pay by scanning this QR code:",
    infoQrAlt: "QR code for bank transfers",
    days: { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" },
    hoursWeek: "10:00 AM–2:00 PM & 4:30–7:00 PM",
    hoursSat: "10:00 AM–2:30 PM & 4:30–7:00 PM",
    hoursClosed: "Closed",
    footerFollow: "Follow us",
    footerRights: "All rights reserved.",
    floatWhatsapp: "Message us on WhatsApp",
    whatsGreeting: (name, size, price, cakeText) =>
      `Hi! I'd like to order the ${name} for ${size} (Price: ${price}).` +
      (cakeText ? ` Cake message: "${cakeText}".` : "") +
      ` Is it available?`,
    whatsGreetingSimple: (name, unit, price) =>
      `Hi! I'd like to order: ${name} (${unit}) - Price: ${price}. Is it available?`,
    whatsGreetingSeasonal: (name, seasonTitle, price) =>
      price
        ? `Hi! I'd like to order: ${name} (${seasonTitle}) - Price: ${price}. Is it available?`
        : `Hi! I'd like to order: ${name} (${seasonTitle}). Is it available?`,
    whatsGreetingNovios: "Hi! I'd like a quote for a wedding or special-event cake. Event date: ___ / Number of guests: ___",
    photoSoon: "Photo coming soon",
  },
};

/* ==========================================================================
 * LÓGICA DE LA PÁGINA (no es necesario editar desde aquí hacia abajo)
 * ========================================================================== */
let currentLang = "es";

function formatCLP(amount) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(amount);
}

// Construye un enlace seguro de WhatsApp, codificando el mensaje.
function buildWhatsappLink(number, message) {
  return "https://wa.me/" + encodeURIComponent(number) + "?text=" + encodeURIComponent(message);
}

function safeExternalLink(a, href) {
  a.setAttribute("href", href);
  a.setAttribute("target", "_blank");
  a.setAttribute("rel", "noopener noreferrer");
}

// Quita tildes y pasa a minúsculas, para que la búsqueda encuentre
// "lucuma" aunque el producto se llame "Lúcuma".
function normalizeText(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Íconos dibujados en SVG (sin depender de ninguna imagen externa ni de
// una fuente de íconos), para usarlos en los botones de contacto.
const ICON_PATHS = {
  whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  facebook: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
  phone: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  email: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
};

function makeIcon(name, className) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  if (className) svg.setAttribute("class", className);
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("fill", "currentColor");
  path.setAttribute("d", ICON_PATHS[name]);
  svg.appendChild(path);
  return svg;
}

// Vacía un botón/enlace y lo rellena con [ícono de WhatsApp] + texto,
// usando solo DOM (sin innerHTML) para mantenerlo seguro.
function setWhatsappLabel(el, text, iconClass) {
  setIconLabel(el, "whatsapp", text, iconClass);
}

// Vacía un elemento y lo rellena con [ícono] + texto, usando solo DOM
// (sin innerHTML) para mantenerlo seguro.
function setIconLabel(el, iconName, text, iconClass) {
  el.textContent = "";
  el.appendChild(makeIcon(iconName, iconClass || "btn-icon"));
  const span = document.createElement("span");
  span.textContent = text;
  el.appendChild(span);
}

// Para <img> que ya vienen escritas en el HTML (como el logo o el QR):
// el navegador empieza a cargarlas apenas lee la página, antes de que
// termine de cargar script.js. Si la imagen falla muy rápido (por
// ejemplo, un 404 en el mismo servidor), el evento "error" puede ocurrir
// antes de que alcancemos a agregar el listener. Por eso primero
// revisamos "img.complete" — si ya terminó (con o sin éxito) actuamos de
// inmediato; si no, recién ahí escuchamos el evento.
function watchImageForError(img, onError) {
  if (img.complete) {
    if (img.naturalWidth === 0) onError();
  } else {
    img.addEventListener("error", onError, { once: true });
  }
}

function makePhotoBox(imgPath, altText) {
  const box = document.createElement("div");
  box.className = "photo-box";

  const img = document.createElement("img");
  img.src = imgPath;
  img.alt = altText;
  img.loading = "lazy";

  const placeholder = document.createElement("div");
  placeholder.className = "photo-placeholder";
  placeholder.hidden = true;
  const icon = document.createElement("span");
  icon.className = "photo-placeholder-icon";
  icon.textContent = "🎂";
  const label = document.createElement("span");
  label.className = "photo-placeholder-label";
  label.textContent = UI[currentLang].photoSoon;
  placeholder.appendChild(icon);
  placeholder.appendChild(label);

  img.addEventListener("error", () => {
    img.hidden = true;
    placeholder.hidden = false;
  });

  box.appendChild(img);
  box.appendChild(placeholder);
  return box;
}

function buildCakeCard(product) {
  const t = UI[currentLang];
  const article = document.createElement("article");
  article.className = "card";
  article.dataset.category = product.category;
  article.dataset.searchText = product[currentLang].name + " " + product[currentLang].desc;

  article.appendChild(makePhotoBox(product.img, product[currentLang].name));

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = product[currentLang].name;
  body.appendChild(title);

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent = product[currentLang].desc;
  body.appendChild(desc);

  const sizesLabel = document.createElement("p");
  sizesLabel.className = "card-sizes-label";
  sizesLabel.textContent = t.peopleLabel;
  body.appendChild(sizesLabel);

  const sizeRow = document.createElement("div");
  sizeRow.className = "size-row";
  body.appendChild(sizeRow);

  const cakeTextLabel = document.createElement("label");
  cakeTextLabel.className = "cake-text-label";
  const cakeTextLabelSpan = document.createElement("span");
  cakeTextLabelSpan.textContent = t.cakeTextLabel;
  const cakeTextInput = document.createElement("input");
  cakeTextInput.type = "text";
  cakeTextInput.className = "cake-text-input";
  cakeTextInput.maxLength = 60;
  cakeTextInput.placeholder = t.cakeTextPlaceholder;
  cakeTextLabel.appendChild(cakeTextLabelSpan);
  cakeTextLabel.appendChild(cakeTextInput);
  body.appendChild(cakeTextLabel);

  const priceRow = document.createElement("div");
  priceRow.className = "price-row";
  const priceValue = document.createElement("span");
  priceValue.className = "price-value";
  priceRow.appendChild(priceValue);
  body.appendChild(priceRow);

  const orderLink = document.createElement("a");
  orderLink.className = "btn btn-order";
  setWhatsappLabel(orderLink, t.orderButton);
  body.appendChild(orderLink);

  let selectedIndex = 0;

  function refresh() {
    const labels = PORTION_GROUPS[product.group][currentLang];
    const price = product.prices[selectedIndex];
    priceValue.textContent = formatCLP(price);
    const message = t.whatsGreeting(
      product[currentLang].name,
      labels[selectedIndex],
      formatCLP(price),
      cakeTextInput.value.trim()
    );
    safeExternalLink(orderLink, buildWhatsappLink(BUSINESS.whatsappNumber, message));
  }

  cakeTextInput.addEventListener("input", refresh);

  const labels = PORTION_GROUPS[product.group][currentLang];
  const shortLabels = PORTION_GROUPS[product.group].short[currentLang];
  labels.forEach((label, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "size-btn" + (index === selectedIndex ? " is-active" : "");

    const aroSpan = document.createElement("span");
    aroSpan.className = "size-btn-aro";
    aroSpan.textContent = t.aroLabel + " " + ARO_SIZES[index];

    const peopleSpan = document.createElement("span");
    peopleSpan.className = "size-btn-people";
    peopleSpan.textContent = shortLabels[index];

    btn.appendChild(aroSpan);
    btn.appendChild(peopleSpan);
    btn.setAttribute("aria-label", label);
    btn.addEventListener("click", () => {
      selectedIndex = index;
      sizeRow.querySelectorAll(".size-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      refresh();
    });
    sizeRow.appendChild(btn);
  });

  refresh();
  article.appendChild(body);
  return article;
}

function buildSimpleCard(product) {
  const t = UI[currentLang];
  const article = document.createElement("article");
  article.className = "card";
  article.dataset.category = product.category;
  article.dataset.searchText = product[currentLang].name + " " + product[currentLang].desc;

  article.appendChild(makePhotoBox(product.img, product[currentLang].name));

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = product[currentLang].name;
  body.appendChild(title);

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent = product[currentLang].desc;
  body.appendChild(desc);

  const priceRow = document.createElement("div");
  priceRow.className = "price-row";
  const priceValue = document.createElement("span");
  priceValue.className = "price-value";
  priceValue.textContent = formatCLP(product.price);
  priceRow.appendChild(priceValue);
  if (product[currentLang].unit) {
    const unit = document.createElement("span");
    unit.className = "price-unit";
    unit.textContent = product[currentLang].unit;
    priceRow.appendChild(unit);
  }
  body.appendChild(priceRow);

  const orderLink = document.createElement("a");
  orderLink.className = "btn btn-order";
  setWhatsappLabel(orderLink, t.orderButton);
  const message = t.whatsGreetingSimple(
    product[currentLang].name,
    product[currentLang].unit || "",
    formatCLP(product.price)
  );
  safeExternalLink(orderLink, buildWhatsappLink(BUSINESS.whatsappNumber, message));
  body.appendChild(orderLink);

  article.appendChild(body);
  return article;
}

function renderFilters() {
  const t = UI[currentLang];
  const nav = document.getElementById("filter-bar");
  nav.textContent = "";

  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "filter-btn is-active";
  allBtn.textContent = t.filterAll;
  allBtn.dataset.filter = "all";
  nav.appendChild(allBtn);

  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-btn";
    btn.textContent = cat[currentLang];
    btn.dataset.filter = cat.id;
    nav.appendChild(btn);
  });

  // Se usa "onclick" (en vez de addEventListener) a propósito: renderFilters()
  // se llama de nuevo cada vez que cambias de idioma, y "onclick" reemplaza
  // el manejador anterior en lugar de ir acumulando uno nuevo encima.
  nav.onclick = (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    nav.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    applyFilters();
  };
}

// Combina el filtro de categoría (botones) con el texto de búsqueda.
function applyFilters() {
  const activeBtn = document.querySelector(".filter-btn.is-active");
  const category = activeBtn ? activeBtn.dataset.filter : "all";
  const searchInput = document.getElementById("product-search");
  const query = normalizeText((searchInput ? searchInput.value : "").trim());

  document.querySelectorAll("#catalog-grid .card").forEach((card) => {
    const matchesCategory = category === "all" || card.dataset.category === category;
    const matchesSearch = !query || normalizeText(card.dataset.searchText || "").includes(query);
    card.hidden = !(matchesCategory && matchesSearch);
  });
}

function populateSearchSuggestions() {
  const list = document.getElementById("product-datalist");
  if (!list) return;
  list.textContent = "";
  const names = CAKES.concat(SIMPLE_ITEMS).map((p) => p[currentLang].name);
  names.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    list.appendChild(option);
  });
}

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  grid.textContent = "";
  CAKES.forEach((product) => grid.appendChild(buildCakeCard(product)));
  SIMPLE_ITEMS.forEach((product) => grid.appendChild(buildSimpleCard(product)));
  populateSearchSuggestions();
}

function buildGalleryCard(item) {
  const figure = document.createElement("figure");
  figure.className = "gallery-card";
  figure.appendChild(makePhotoBox(item.img, item[currentLang].name));
  const caption = document.createElement("figcaption");
  caption.className = "gallery-caption";
  caption.textContent = item[currentLang].name;
  figure.appendChild(caption);
  return figure;
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  grid.textContent = "";
  GALLERY_ITEMS.forEach((item) => grid.appendChild(buildGalleryCard(item)));
}

function buildSeasonalCard(item) {
  const t = UI[currentLang];
  const article = document.createElement("article");
  article.className = "card";
  article.appendChild(makePhotoBox(item.img, item[currentLang].name));

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = item[currentLang].name;
  body.appendChild(title);

  if (item.price) {
    const priceRow = document.createElement("div");
    priceRow.className = "price-row";
    const priceValue = document.createElement("span");
    priceValue.className = "price-value";
    priceValue.textContent = formatCLP(item.price);
    priceRow.appendChild(priceValue);
    body.appendChild(priceRow);
  }

  const orderLink = document.createElement("a");
  orderLink.className = "btn btn-order";
  setWhatsappLabel(orderLink, t.orderButton);
  const message = t.whatsGreetingSeasonal(
    item[currentLang].name,
    SEASONAL[currentLang].title,
    item.price ? formatCLP(item.price) : ""
  );
  safeExternalLink(orderLink, buildWhatsappLink(BUSINESS.whatsappNumber, message));
  body.appendChild(orderLink);

  article.appendChild(body);
  return article;
}

// Muestra u oculta toda la sección de temporada según SEASONAL.active,
// para que la dueña pueda "apagarla" sin borrar nada cuando termine la fecha.
function renderSeasonal() {
  const section = document.getElementById("temporada");
  const navLink = document.getElementById("nav-temporada");
  if (!section) return;

  section.hidden = !SEASONAL.active;
  if (navLink) navLink.hidden = !SEASONAL.active;
  if (!SEASONAL.active) return;

  const t = UI[currentLang];
  document.getElementById("seasonal-title").textContent = SEASONAL[currentLang].title;
  document.getElementById("seasonal-subtitle").textContent = SEASONAL[currentLang].subtitle;

  const container = document.getElementById("seasonal-grid");
  container.textContent = "";

  SEASONAL_SUBCATEGORIES.forEach((sub) => {
    const items = SEASONAL_ITEMS.filter((item) => item.subcategory === sub.id);
    if (items.length === 0) return;

    const heading = document.createElement("h3");
    heading.className = "seasonal-subtitle-heading";
    heading.textContent = sub[currentLang];
    container.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "catalog-grid";
    items.forEach((item) => grid.appendChild(buildSeasonalCard(item)));
    container.appendChild(grid);
  });
}

// Actualiza el texto del botón de WhatsApp del formulario de cotización
// (con ícono) al idioma actual. Se llama en cada render().
function setupQuoteFormLabels() {
  const t = UI[currentLang];
  const whatsBtn = document.getElementById("quote-whatsapp");
  if (whatsBtn) setWhatsappLabel(whatsBtn, t.quoteSendWhatsapp);
}

// Junta los datos del formulario de cotización en un solo mensaje de
// texto, listo para mandar por WhatsApp o por correo.
// Convierte la fecha del <input type="date"> (siempre "AAAA-MM-DD") al
// formato chileno "DD-MM-AAAA", sin pasar por Date() para evitar
// problemas de zona horaria que podrían correr el día.
function formatDateCL(isoDate) {
  if (!isoDate) return "";
  const [y, m, d] = isoDate.split("-");
  return `${d}-${m}-${y}`;
}

function buildQuoteMessage() {
  const t = UI[currentLang];
  const nombre = document.getElementById("q-nombre").value.trim();
  const apellido = document.getElementById("q-apellido").value.trim();
  const email = document.getElementById("q-email").value.trim();
  const telefono = document.getElementById("q-telefono").value.trim();
  const direccion = document.getElementById("q-direccion").value.trim();
  const fecha = document.getElementById("q-fecha").value;
  const hora = document.getElementById("q-hora").value;
  const escrito = document.getElementById("q-escrito").value.trim();
  const mensaje = document.getElementById("q-mensaje").value.trim();

  const lines = [
    t.quoteMessageIntro,
    "",
    t.quoteNombre + ": " + nombre,
    t.quoteApellido + ": " + apellido,
    t.quoteEmail + ": " + email,
    t.quoteTelefono + ": " + telefono,
    t.quoteDireccion + ": " + direccion,
    t.quoteFecha + ": " + formatDateCL(fecha),
    t.quoteHora + ": " + hora,
  ];
  if (escrito) lines.push(t.quoteCakeText + ": " + escrito);
  lines.push(t.quoteMessage + ": " + mensaje);
  return lines.join("\n");
}

// La hora ya está limitada por el propio selector (solo ofrece opciones
// entre 17:00 y 19:00), así que aquí solo falta revisar que la fecha
// elegida no caiga domingo — usamos el mensaje de error nativo del
// formulario (setCustomValidity) para que se vea igual que cualquier
// otro error de campo obligatorio.
function validateQuoteBusinessRules() {
  const t = UI[currentLang];
  const fechaInput = document.getElementById("q-fecha");
  fechaInput.setCustomValidity("");

  if (fechaInput.value) {
    const [y, m, d] = fechaInput.value.split("-").map(Number);
    const dayOfWeek = new Date(y, m - 1, d).getDay(); // hora local; 0 = domingo
    if (dayOfWeek === 0) {
      fechaInput.setCustomValidity(t.quoteDateSundayError);
    }
  }
}

function handleQuoteWhatsapp() {
  const form = document.getElementById("quote-form");
  validateQuoteBusinessRules();
  if (!form.reportValidity()) return;
  const url = buildWhatsappLink(BUSINESS.whatsappNumber, buildQuoteMessage());
  window.open(url, "_blank", "noopener,noreferrer");
}

function handleQuoteEmail() {
  const form = document.getElementById("quote-form");
  validateQuoteBusinessRules();
  if (!form.reportValidity()) return;
  const t = UI[currentLang];
  const url =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(BUSINESS.email) +
    "&su=" + encodeURIComponent(t.quoteEmailSubject) +
    "&body=" + encodeURIComponent(buildQuoteMessage());
  window.open(url, "_blank", "noopener,noreferrer");
}

function renderInfoSchedule() {
  const t = UI[currentLang];
  const rows = [
    [t.days.mon, t.hoursWeek],
    [t.days.tue, t.hoursWeek],
    [t.days.wed, t.hoursWeek],
    [t.days.thu, t.hoursWeek],
    [t.days.fri, t.hoursWeek],
    [t.days.sat, t.hoursSat],
    [t.days.sun, t.hoursClosed],
  ];
  const list = document.getElementById("schedule-list");
  list.textContent = "";
  rows.forEach(([day, hours]) => {
    const li = document.createElement("li");
    const dayEl = document.createElement("span");
    dayEl.className = "schedule-day";
    dayEl.textContent = day;
    const hoursEl = document.createElement("span");
    hoursEl.className = "schedule-hours" + (hours === t.hoursClosed ? " is-closed" : "");
    hoursEl.textContent = hours;
    li.appendChild(dayEl);
    li.appendChild(hoursEl);
    list.appendChild(li);
  });
}

function applyStaticTranslations() {
  const t = UI[currentLang];
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
  });
  document.getElementById("lang-toggle").textContent = t.langButton;
  document.getElementById("lang-toggle").setAttribute(
    "aria-label",
    currentLang === "es" ? "Switch to English" : "Cambiar a Español"
  );
}

function setupContactLinks() {
  const t = UI[currentLang];

  const floatBtn = document.getElementById("float-whatsapp");
  safeExternalLink(
    floatBtn,
    buildWhatsappLink(BUSINESS.whatsappNumber, currentLang === "es" ? "Hola, tengo una consulta sobre sus productos." : "Hi! I have a question about your products.")
  );
  setWhatsappLabel(floatBtn, BUSINESS.whatsappDisplay, "btn-icon float-whatsapp-icon");
  floatBtn.setAttribute("aria-label", t.floatWhatsapp + ": " + BUSINESS.whatsappDisplay);

  const noviosWhats = document.getElementById("novios-whatsapp");
  safeExternalLink(noviosWhats, buildWhatsappLink(BUSINESS.whatsappNumber, t.whatsGreetingNovios));
  setWhatsappLabel(noviosWhats, t.noviosWhatsapp);

  const noviosCall = document.getElementById("novios-call");
  noviosCall.setAttribute("href", "tel:" + BUSINESS.phoneCall);
  setIconLabel(noviosCall, "phone", t.noviosCall + ": " + BUSINESS.phoneCallDisplay);

  const igLink = document.getElementById("social-instagram");
  safeExternalLink(igLink, BUSINESS.instagram);
  igLink.textContent = "";
  igLink.appendChild(makeIcon("instagram", "social-icon"));
  igLink.setAttribute("aria-label", "Instagram");

  const fbLink = document.getElementById("social-facebook");
  safeExternalLink(fbLink, BUSINESS.facebook);
  fbLink.textContent = "";
  fbLink.appendChild(makeIcon("facebook", "social-icon"));
  fbLink.setAttribute("aria-label", "Facebook");

  const emailLink = document.getElementById("contact-email");
  emailLink.setAttribute("href", "mailto:" + encodeURIComponent(BUSINESS.email));
  setIconLabel(emailLink, "email", BUSINESS.email);

  const footerPhone = document.getElementById("footer-phone");
  footerPhone.setAttribute("href", "tel:" + BUSINESS.phoneCall);
  setIconLabel(footerPhone, "phone", BUSINESS.phoneCallDisplay);

  const qrImage = document.getElementById("qr-image");
  if (!qrImage.dataset.errorHandlerAttached) {
    qrImage.dataset.errorHandlerAttached = "true";
    watchImageForError(qrImage, () => {
      qrImage.hidden = true;
    });
  }

  const mapsLink = document.getElementById("maps-link");
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(BUSINESS.addressLine);
  safeExternalLink(mapsLink, mapsUrl);

  const mapEmbedUrl = "https://www.google.com/maps?q=" + encodeURIComponent(BUSINESS.addressLine) + "&output=embed";
  const mapSmall = document.getElementById("map-embed");
  const mapLarge = document.getElementById("map-embed-large");
  if (mapSmall) mapSmall.src = mapEmbedUrl;
  if (mapLarge) mapLarge.src = mapEmbedUrl;

  document.getElementById("business-address").textContent = BUSINESS.addressLine;
  document.getElementById("business-address-footer").textContent = BUSINESS.addressLine;
  document.getElementById("business-name").textContent = BUSINESS.name;
  document.getElementById("footer-business-name").textContent = BUSINESS.name;
  document.getElementById("business-name-modal").textContent = BUSINESS.name;
  const year = document.getElementById("footer-year");
  year.textContent = String(new Date().getFullYear());
}

function render() {
  applyStaticTranslations();
  renderSeasonal();
  renderFilters();
  renderCatalog();
  renderGallery();
  renderInfoSchedule();
  setupContactLinks();
  setupQuoteFormLabels();
  applyFilters();
}

function setLanguage(lang) {
  currentLang = lang === "en" ? "en" : "es";
  try {
    localStorage.setItem("derling-lang", currentLang);
  } catch (e) {
    /* Almacenamiento no disponible: seguimos sin recordar el idioma. */
  }
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  let saved = "es";
  try {
    const stored = localStorage.getItem("derling-lang");
    if (stored === "en" || stored === "es") saved = stored;
  } catch (e) {
    /* Almacenamiento no disponible: usamos español por defecto. */
  }
  currentLang = saved;
  render();

  document.getElementById("lang-toggle").addEventListener("click", () => {
    setLanguage(currentLang === "es" ? "en" : "es");
  });

  document.getElementById("nav-toggle").addEventListener("click", () => {
    const nav = document.getElementById("main-nav");
    const expanded = nav.classList.toggle("is-open");
    document.getElementById("nav-toggle").setAttribute("aria-expanded", String(expanded));
  });

  document.querySelectorAll("#main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("main-nav").classList.remove("is-open");
      document.getElementById("nav-toggle").setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("product-search").addEventListener("input", applyFilters);

  const mapModal = document.getElementById("map-modal");
  const mapTrigger = document.getElementById("map-embed-trigger");
  const mapClose = document.getElementById("map-modal-close");

  mapTrigger.addEventListener("click", () => {
    if (typeof mapModal.showModal === "function") {
      mapModal.showModal();
    } else {
      document.getElementById("maps-link").click();
    }
  });
  mapClose.addEventListener("click", () => mapModal.close());
  mapModal.addEventListener("click", (e) => {
    if (e.target === mapModal) mapModal.close();
  });

  // Si aún no has guardado images/logo.png, se muestra el emoji de torta
  // en su lugar — nunca se ve un ícono de imagen rota.
  const logoImg = document.getElementById("brand-logo");
  const logoEmoji = document.getElementById("brand-mark-emoji");
  watchImageForError(logoImg, () => {
    logoImg.hidden = true;
    logoEmoji.hidden = false;
  });

  document.getElementById("quote-form").addEventListener("submit", (e) => e.preventDefault());
  document.getElementById("quote-whatsapp").addEventListener("click", handleQuoteWhatsapp);
  document.getElementById("quote-email").addEventListener("click", handleQuoteEmail);

  // No dejar elegir una fecha anterior a hoy en el formulario de cotización.
  const todayISO = new Date().toLocaleDateString("en-CA"); // formato AAAA-MM-DD
  document.getElementById("q-fecha").min = todayISO;

  // Ventana de bienvenida: se muestra sola al entrar a la página.
  const welcomeLogo = document.getElementById("welcome-logo");
  const welcomeLogoEmoji = document.getElementById("welcome-logo-emoji");
  watchImageForError(welcomeLogo, () => {
    welcomeLogo.hidden = true;
    welcomeLogoEmoji.hidden = false;
  });

  const welcomeModal = document.getElementById("welcome-modal");
  document.getElementById("welcome-modal-close").addEventListener("click", () => welcomeModal.close());
  welcomeModal.addEventListener("click", (e) => {
    if (e.target === welcomeModal) welcomeModal.close();
  });
  if (typeof welcomeModal.showModal === "function") {
    welcomeModal.showModal();
  }
});
