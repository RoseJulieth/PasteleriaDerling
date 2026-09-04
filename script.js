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
  // Teléfono fijo para el botón "Llamar" (formato tel: con +).
  phoneCall: "+56522210429",
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
  },
  B: {
    es: ["10-12 personas", "15 personas", "20 personas", "25 personas", "30 personas", "35-40 personas"],
    en: ["10-12 people", "15 people", "20 people", "25 people", "30 people", "35-40 people"],
  },
  C: {
    es: ["15 personas", "25 personas", "30 personas", "40 personas", "45 personas", "50 personas"],
    en: ["15 people", "25 people", "30 people", "40 people", "45 people", "50 people"],
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
    es: { name: "Canapés de Pastas", desc: "Pan con pastas de ave, pimiento, carne, nuez, jamón, queso y atún.", unit: "por fuente" },
    en: { name: "Pâté Canapés", desc: "Bread with poultry, pepper, beef, walnut, ham, cheese and tuna pâtés.", unit: "per platter" },
    price: 42000 },
  { id: "canapes-finos", category: "coctel", img: "images/canapes-finos.jpg",
    es: { name: "Canapés Finos", desc: "Pan de molde con palmitos, espárragos, camarón y champiñón.", unit: "por fuente" },
    en: { name: "Fine Canapés", desc: "Sandwich bread with hearts of palm, asparagus, shrimp and mushroom.", unit: "per platter" },
    price: 47000 },
  { id: "petit-bouche", category: "coctel", img: "images/petit-bouche.jpg",
    es: { name: "Petit Bouché", desc: "Cachitos, maicenas, repollitos, alfajores, trufas, hojas, merengues, pie y tartaletas.", unit: "por fuente" },
    en: { name: "Petit Bouché Assortment", desc: "Mini pastries: cachitos, cornstarch cookies, alfajores, truffles, meringues, pie and tartlets.", unit: "per platter" },
    price: 42000 },
  { id: "empanaditas-queso-pino", category: "coctel", img: "images/empanaditas-queso-pino.jpg",
    es: { name: "Empanaditas de Queso y Pino", desc: "Fritas de queso y al horno de pino.", unit: "por fuente" },
    en: { name: "Cheese & Beef Mini Empanadas", desc: "Fried cheese empanadas and baked beef empanadas.", unit: "per platter" },
    price: 42000 },
  { id: "empanaditas-camaron", category: "coctel", img: "images/empanaditas-camaron.jpg",
    es: { name: "Empanaditas de Camarón u Ostión", desc: "Fritas, rellenas de queso y camarón u ostión.", unit: "por fuente" },
    en: { name: "Shrimp or Scallop Mini Empanadas", desc: "Fried, filled with cheese and shrimp or scallop.", unit: "per platter" },
    price: 50000 },
  { id: "empanaditas-jamon-queso", category: "coctel", img: "images/empanaditas-jamon-queso.jpg",
    es: { name: "Empanaditas de Jamón y Queso", desc: "Fritas, rellenas de jamón y queso.", unit: "por fuente" },
    en: { name: "Ham & Cheese Mini Empanadas", desc: "Fried, filled with ham and cheese.", unit: "per platter" },
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
    es: { name: "Quiche Individual", desc: "Porción individual, precio unitario.", unit: "c/u" },
    en: { name: "Individual Quiche", desc: "Single serving, unit price.", unit: "each" },
    price: 4000 },
];

/*
 * ==========================================================================
 * TEXTOS DE LA INTERFAZ (ES / EN)
 * ==========================================================================
 */
const UI = {
  es: {
    skipLink: "Ir al contenido",
    tagline: "Sabores que perduran en cada celebración",
    heroTitle: "Pastelería Derling",
    heroSubtitle: "Tortas artesanales, cóctel y kuchenes salados hechos con receta de familia en Copiapó.",
    ctaCatalog: "Ver catálogo",
    ctaWhatsapp: "Pedir por WhatsApp",
    navCatalog: "Catálogo",
    navNovios: "Novios y Eventos",
    navInfo: "Información",
    langButton: "EN",
    catalogTitle: "Nuestro Catálogo",
    catalogSubtitle: "Elige el tamaño y el precio se actualiza al instante.",
    filterAll: "Todas",
    peopleLabel: "Elige el tamaño",
    priceFrom: "Desde",
    orderButton: "Pedir por WhatsApp",
    aroLabel: "Aro",
    noviosEyebrow: "Matrimonios y Eventos Especiales",
    noviosTitle: "Tortas de Novios y Eventos",
    noviosText: "¿Tienes un matrimonio, aniversario o evento especial? Diseñamos tu torta a medida. Coordina los detalles directamente con nosotras por llamada o WhatsApp.",
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
    whatsGreeting: (name, size, price) =>
      `Hola, quiero encargar la ${name} para ${size} (Precio: ${price}). ¿Está disponible?`,
    whatsGreetingSimple: (name, unit, price) =>
      `Hola, quiero encargar: ${name} (${unit}) - Precio: ${price}. ¿Está disponible?`,
    whatsGreetingNovios: "Hola, me gustaría cotizar una torta para matrimonio o evento especial. Fecha del evento: ___ / Número de invitados: ___",
    photoSoon: "Foto próximamente",
  },
  en: {
    skipLink: "Skip to content",
    tagline: "Flavors that last through every celebration",
    heroTitle: "Pastelería Derling",
    heroSubtitle: "Handcrafted cakes, cocktail bites and savory kuchen made with a family recipe in Copiapó, Chile.",
    ctaCatalog: "View catalog",
    ctaWhatsapp: "Order on WhatsApp",
    navCatalog: "Catalog",
    navNovios: "Weddings & Events",
    navInfo: "Information",
    langButton: "ES",
    catalogTitle: "Our Catalog",
    catalogSubtitle: "Choose a size and the price updates instantly.",
    filterAll: "All",
    peopleLabel: "Choose a size",
    priceFrom: "From",
    orderButton: "Order on WhatsApp",
    aroLabel: "Size",
    noviosEyebrow: "Weddings & Special Events",
    noviosTitle: "Wedding & Event Cakes",
    noviosText: "Planning a wedding, anniversary or special event? We design a custom cake for you. Coordinate the details directly with us by phone call or WhatsApp.",
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
    whatsGreeting: (name, size, price) =>
      `Hi! I'd like to order the ${name} for ${size} (Price: ${price}). Is it available?`,
    whatsGreetingSimple: (name, unit, price) =>
      `Hi! I'd like to order: ${name} (${unit}) - Price: ${price}. Is it available?`,
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

  const priceRow = document.createElement("div");
  priceRow.className = "price-row";
  const priceValue = document.createElement("span");
  priceValue.className = "price-value";
  priceRow.appendChild(priceValue);
  body.appendChild(priceRow);

  const orderLink = document.createElement("a");
  orderLink.className = "btn btn-order";
  orderLink.textContent = t.orderButton;
  body.appendChild(orderLink);

  let selectedIndex = 0;

  function refresh() {
    const labels = PORTION_GROUPS[product.group][currentLang];
    const price = product.prices[selectedIndex];
    priceValue.textContent = formatCLP(price);
    const message = t.whatsGreeting(
      product[currentLang].name,
      labels[selectedIndex],
      formatCLP(price)
    );
    safeExternalLink(orderLink, buildWhatsappLink(BUSINESS.whatsappNumber, message));
  }

  const labels = PORTION_GROUPS[product.group][currentLang];
  labels.forEach((label, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "size-btn" + (index === selectedIndex ? " is-active" : "");
    btn.textContent = t.aroLabel + " " + ARO_SIZES[index];
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
  orderLink.textContent = t.orderButton;
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

  nav.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    nav.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    applyFilter(btn.dataset.filter);
  });
}

function applyFilter(filter) {
  document.querySelectorAll("#catalog-grid .card").forEach((card) => {
    card.hidden = filter !== "all" && card.dataset.category !== filter;
  });
}

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  grid.textContent = "";
  CAKES.forEach((product) => grid.appendChild(buildCakeCard(product)));
  SIMPLE_ITEMS.forEach((product) => grid.appendChild(buildSimpleCard(product)));
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
    hoursEl.className = "schedule-hours";
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
  floatBtn.setAttribute("aria-label", t.floatWhatsapp);

  const noviosWhats = document.getElementById("novios-whatsapp");
  safeExternalLink(noviosWhats, buildWhatsappLink(BUSINESS.whatsappNumber, t.whatsGreetingNovios));

  const noviosCall = document.getElementById("novios-call");
  noviosCall.setAttribute("href", "tel:" + BUSINESS.phoneCall);

  const heroWhats = document.getElementById("hero-whatsapp");
  safeExternalLink(
    heroWhats,
    buildWhatsappLink(BUSINESS.whatsappNumber, currentLang === "es" ? "Hola, quiero hacer un pedido." : "Hi! I'd like to place an order.")
  );

  const igLink = document.getElementById("social-instagram");
  safeExternalLink(igLink, BUSINESS.instagram);

  const fbLink = document.getElementById("social-facebook");
  safeExternalLink(fbLink, BUSINESS.facebook);

  const emailLink = document.getElementById("contact-email");
  emailLink.setAttribute("href", "mailto:" + encodeURIComponent(BUSINESS.email));
  emailLink.textContent = BUSINESS.email;

  const qrImage = document.getElementById("qr-image");
  if (!qrImage.dataset.errorHandlerAttached) {
    qrImage.dataset.errorHandlerAttached = "true";
    qrImage.addEventListener("error", () => {
      qrImage.hidden = true;
    });
  }

  document.getElementById("business-address").textContent = BUSINESS.addressLine;
  document.getElementById("business-address-footer").textContent = BUSINESS.addressLine;
  document.getElementById("business-name").textContent = BUSINESS.name;
  document.getElementById("footer-business-name").textContent = BUSINESS.name;
  const year = document.getElementById("footer-year");
  year.textContent = String(new Date().getFullYear());
}

function render() {
  applyStaticTranslations();
  renderFilters();
  renderCatalog();
  renderInfoSchedule();
  setupContactLinks();
  const activeFilter = document.querySelector(".filter-btn.is-active");
  applyFilter(activeFilter ? activeFilter.dataset.filter : "all");
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
});
