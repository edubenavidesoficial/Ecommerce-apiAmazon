amazon = require("amazon-affiliate-api");
var db = require("../models");

var search = amazon.createClient({
  awsId: "AKIAYH4P6TPMZHXTIX3V",  // Reemplaza con tu Access Key ID
  awsSecret: "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",  // Reemplaza con tu Secret Access Key
  awsTag: "a77015054-20", //ID De Seguimiento Aws Afiliados
});
var productos = [
  {
    id: 1,
    name: "GadgetX",
    precio: 50,
    imagen:
      "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/u8bm8qiem3uhaqacb1cc",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas vitae lorem vitae tincidunt. Vestibulum non bibendum magna. Aenean lacinia odio in congue faucibus. Mauris pellentesque felis et augue lobortis facilisis. Vestibulum sed odio sed est sagittis auctor vel et neque. Suspendisse ultrices elit maximus lorem convallis sollicitudin. Aliquam pulvinar libero felis, in luctus urna sodales in. Maecenas blandit tristique nulla, nec luctus dui elementum hendrerit. Aenean consequat in velit eu ullamcorper. Suspendisse et consectetur dolor. In dui ante, ullamcorper quis mattis sit amet, dignissim ut mi. Mauris rhoncus sagittis tincidunt.",
  },
  {
    id: 2,
    name: "EcoBike",
    precio: 120,
    imagen:
      "data:image/jpeg;base64,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",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas vitae lorem vitae tincidunt. Vestibulum non bibendum magna. Aenean lacinia odio in congue faucibus. Mauris pellentesque felis et augue lobortis facilisis. Vestibulum sed odio sed est sagittis auctor vel et neque. Suspendisse ultrices elit maximus lorem convallis sollicitudin. Aliquam pulvinar libero felis, in luctus urna sodales in. Maecenas blandit tristique nulla, nec luctus dui elementum hendrerit. Aenean consequat in velit eu ullamcorper. Suspendisse et consectetur dolor. In dui ante, ullamcorper quis mattis sit amet, dignissim ut mi. Mauris rhoncus sagittis tincidunt.",
  },
  {
    id: 3,
    name: "SmartTablet",
    precio: 200,
    imagen: "https://m.media-amazon.com/images/I/71fnBZs3ujL.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas vitae lorem vitae tincidunt. Vestibulum non bibendum magna. Aenean lacinia odio in congue faucibus. Mauris pellentesque felis et augue lobortis facilisis. Vestibulum sed odio sed est sagittis auctor vel et neque. Suspendisse ultrices elit maximus lorem convallis sollicitudin. Aliquam pulvinar libero felis, in luctus urna sodales in. Maecenas blandit tristique nulla, nec luctus dui elementum hendrerit. Aenean consequat in velit eu ullamcorper. Suspendisse et consectetur dolor. In dui ante, ullamcorper quis mattis sit amet, dignissim ut mi. Mauris rhoncus sagittis tincidunt.",
  },
  {
    id: 4,
    name: "FashionWatch",
    precio: 80,
    imagen:
      "https://joyeriaisabelaguilera.com/wp-content/uploads/2019/05/Fashion-Watch.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas vitae lorem vitae tincidunt. Vestibulum non bibendum magna. Aenean lacinia odio in congue faucibus. Mauris pellentesque felis et augue lobortis facilisis. Vestibulum sed odio sed est sagittis auctor vel et neque. Suspendisse ultrices elit maximus lorem convallis sollicitudin. Aliquam pulvinar libero felis, in luctus urna sodales in. Maecenas blandit tristique nulla, nec luctus dui elementum hendrerit. Aenean consequat in velit eu ullamcorper. Suspendisse et consectetur dolor. In dui ante, ullamcorper quis mattis sit amet, dignissim ut mi. Mauris rhoncus sagittis tincidunt.",
  },
  {
    "id": 7,
    "name": "FitBit Versa 2",
    "precio": 150,
    "imagen":
      "https://www.ubuy.ec/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjMzYWIxMjMwM2E3ZjkwMWVkMjA0ZDhhLWZpdGJpdC12ZXJzYS0yLWhlYWx0aC1maXRuZXNzLmpwZw.jpg",
    "descripcion":
      "Stay motivated and on track with the Fitbit Versa 2 smartwatch, featuring Amazon Alexa Built-in, 24/7 heart rate tracking, sleep tracking, swim tracking, and more than 15 exercise modes. Plus, enjoy built-in music storage and control your Spotify app, all while looking stylish with a sleek, modern design."
  },
  {
    "id": 8,
    "name": "Instant Pot Duo Nova 7-in-1 Electric Pressure Cooker",
    "precio": 90,
    "imagen":
      "https://m.media-amazon.com/images/I/71UoD8D5OJL._AC_UF350,350_QL80_.jpg",
    "descripcion":
      "The Instant Pot Duo Nova 7-in-1 Electric Pressure Cooker is your one-stop shop for quick and easy meals. With 7 built-in functions (Pressure Cook, Slow Cook, Rice Cooker, Steamer, Yogurt Maker, Saute/Sealer, and Warmer), you can cook a variety of dishes with just one appliance. Plus, the dishwasher-safe lid and inner pot make cleanup a breeze."
  },
  {
    "id": 9,
    "name": "Bose QuietComfort 35 II Wireless Noise Cancelling Headphones",
    "precio": 299,
    "imagen":
      "data:image/jpeg;base64,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",
    "descripcion":
      "Escape the noise and immerse yourself in your music with the Bose QuietComfort 35 II Wireless Noise Cancelling Headphones. These headphones feature three levels of world-renowned noise cancellation, so you can focus on what matters most. Plus, they're comfortable enough to wear all day long, thanks to their soft ear cushions and lightweight design."
  },
  {
    "id": 10,
    "name": "Sony PlayStation 5 Console",
    "precio": 499,
    "imagen":
      "https://m.media-amazon.com/images/I/51051FiD9UL.jpg",
    "descripcion":
      "Experience next-generation gaming with the Sony PlayStation 5 Console. This powerful console features a custom 8-core AMD Zen 2 CPU, a custom AMD RDNA 2 GPU, and a lightning-fast SSD, so you can enjoy smooth, immersive gameplay. Plus, the new DualSense controller features haptic feedback and adaptive triggers for a more realistic gaming experience."
  },
  {
    "id": 11,
    "name": "Apple AirPods Pro Wireless Noise Cancelling Earbuds",
    "precio": 239,
    "imagen":
      "data:image/jpeg;base64,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",
    "descripcion":
      "Experience Active Noise Cancellation for immersive sound with the Apple AirPods Pro Wireless Noise Cancelling Earbuds. These earbuds feature Transparency mode that allows you to hear your surroundings, and a customizable fit with three sizes of silicone ear tips. Plus, they're sweat and water-resistant, so you can take them anywhere."
  },
  {
    "id": 12,
    "name": "Samsung Galaxy S22 Ultra Smartphone",
    "precio": 1199,
    "imagen":
      "https://m.media-amazon.com/images/I/81Tbq9xfZ5L._AC_UF894,1000_QL80_.jpg",
    "descripcion":
      "Capture stunning photos and videos with the Samsung Galaxy S22 Ultra Smartphone. This smartphone features a revolutionary quad rear camera system with a 108MP main sensor, and a powerful Nightography mode for low-light photos. Plus, the 6.8-inch Dynamic AMOLED 2X display is perfect for viewing your content."
  }
];



module.exports = function (app) {
  // Ruta en Express para manejar esta lógica
  app.get("/productos-amazon", async (req, res) => {
    try {
      // Realiza una búsqueda en Amazon API
      const results = await search.itemSearch({
        search: "your_search_query",
        responseGroup: "ItemAttributes,Offers,Images", // Puedes ajustar esto según tus necesidades
        // Otros parámetros de búsqueda aquí
      });

      // Procesa los resultados y muestra una lista de productos
      const products = results.map((item) => {
        return {
          title: item.ItemAttributes.Title,
          price: item.Offers.Offer.OfferListing.Price.FormattedPrice,
          image: item.LargeImage.URL,
          // Otros detalles del producto que quieras mostrar
        };
      });

      // Puedes enviar los productos a tu vista o hacer lo que desees con ellos
      res.render("productos", { products });
    } catch (error) {
      console.error("Error al buscar productos en Amazon:", error);
      res.status(500).send("Error interno del servidor");
    }
  });

  app.post("/api/search", function (req, res) {
    // Asegúrate de validar que req.body.name existe antes de usarlo
    var keyword = req.body.name;

    // Si el valor de keyword es nulo o indefinido, podrías manejarlo de manera adecuada
    if (!keyword) {
      console.log("Error: La palabra clave es nula o indefinida.");
      return res.status(400).json({ error: "Palabra clave no proporcionada" });
    }

    // Utiliza const o let en lugar de var para declarar variables
    // Utiliza comillas simples para las claves de los objetos y parámetros de funciones si es posible
   /* search
      .itemSearch({
        // La keyword vendrá de la entrada del usuario; cambiará a la clase/id cuando esté listo
        keywords: keyword,
        responseGroup: "ItemAttributes,Images",
      })
      .then(function (results) {
        console.log("---------------");
        res.json(results);
      })
      .catch(function (err) {
        console.log("Error:", err);
        // En lugar de solo imprimir el error, también puedes enviar una respuesta de error al cliente
        res.status(500).json({ error: "Error en la búsqueda" });
      });*/
      let results = productos.find((element) => element.name == keyword);
      res.json(results);


  });

  app.get("/api/producto/:id", function (req, res) {
  
      let results = productos.find((element) => element.id == req.params.id);
      res.json(results);
  });
  app.get("/api/productos", function (req, res) { 
      res.json(productos);
  });


  app.post("/api/list/:id/", function (req, res) {
    console.log("list/id", req.params.id);

    db.List.create({
      title: req.body.title,
      description: req.body.description,
      UserId: req.params.id,
    }).then(function (req2) {
      console.log(req2.dataValues.id);
      res.json(req2.dataValues.id);
    })
    .catch(function (err) {
      console.log("Error:", err);
      // En lugar de solo imprimir el error, también puedes enviar una respuesta de error al cliente
      res.status(500).json({ error: "Error al crear Lista" });
    });
  });

  app.post("/api/item/:name/", function (req, res) {
    console.log(req.params.name);
    console.log(req.body);

    db.Item.create({
      asin: req.body.asin,
      name: req.body.name,
      url: req.body.url,
      image: req.body.image,
      ListId: req.body.ListId,
    });
    res.send(req.body.asin);
  });

  app.delete("/api/item/:asin", function (req, res) {
    db.Item.destroy({
      where: {
        asin: req.params.asin,
      },
    }).then(function (dbItem) {
      res.json(dbItem);
    });
  });

  app.get("/api/view/:listid", function (req, res) {
    db.Item.findAll({
      where: {
        ListId: req.params.listid,
      },
    }).then(function (dbItem) {
      res.json(dbItem);
    });
  });

  app.post("/api/nav", function (req, res) {
    console.log("backend" + JSON.stringify(req.body, null, 2));

    db.User.findOne({
      where: {
        token: req.body.token,
      },
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.put("/api/info/:asin", function (req, res) {
    newDescription = JSON.stringify(req.body.description);
    newAsin = JSON.stringify(req.body.tempASIN);
    console.log(newAsin);

    db.Item.update(
      {
        description: newDescription,
      },
      {
        where: {
          asin: req.params.asin,
        },
      }
    );

    res.send(req.body);
  });

  app.get("/api/listpage/:listid", function (req, res) {
    db.List.findOne({
      where: {
        id: parseInt(req.params.listid),
      },
    }).then(function (response) {
      console.log("list" + response);

      res.json(response);
    });
  });

  app.get("/api/userpage/:token", function (req, res) {
    console.log(req.body);
    db.User.findOne({
      where: {
        token: req.params.token,
      },
    }).then(function (dbUserInfo) {
      console.log("user" + dbUserInfo);
      res.json(dbUserInfo);
    });
  });
};

//module.exports = search;
