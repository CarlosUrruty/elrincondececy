let listaProductos = [
    {
        "id": p01 ,
        "name" : "Cheeesecake",
        "price" : 40000 ,
        "description" : "Cheesecake. Un clásico de la pastelería mundial, pero el nuestro tiene algo especial, ¡Probalo!" ,
    },

    {
        "id": p02 ,
        "name" : "Chocotorta",
        "price" : 25000 ,
        "description" : "Chocotorta. Con los mejores ingredientes para que resalte el sabor de una receta bien argentina" ,
    },

    {
        "id": p03 ,
        "name" : "Torta Maicena",
        "price" : 15000 ,
        "description" : "Torta de Maicena. Convertimos el famoso alfajor en una torta de altura con el sabor característico" ,
    },

    {
        "id": p04 ,
        "name" : "Torta de Crema Rosetas",
        "price" : 75000 ,
        "description" : "Torta de Crema, multicolor con detalles de flores tipo rosetas. 2 pisos de sabor y frescura" ,
    },

    {
        "id": p05 ,
        "name" : "Torta Mariposas",
        "price" : 50000 ,
        "description" : "Torta de Crema con detalles de mariposas, forrado rústico con detalles y nombre con galletita" ,
    },

    {
        "id": p06 ,
        "name" : "Torta TikTok",
        "price" : 45000 ,
        "description" : "Torta de Crema con motivos de TikTok, con impresión comestible y drip con los colores típicos" ,
    },

    {
        "id": p07 ,
        "name" : "Torta Queen",
        "price" : 50000 ,
        "description" : "Torta Forrada, para los amantes de la música, con el logo de Queen, la silueta de Freddie Mercury e instrumentos" ,
    },

    {
        "id": p08 ,
        "name" : "Torta Plim Plim",
        "price" : 55000 ,
        "description" : "Torta Forrada blanca, para un cumple de 2 años, con número en galletita, detalles y adorno de Plim Plim" ,
    },

    {
        "id": p09 ,
        "name" : "Torta Bautismo",
        "price" : 60000 ,
        "description" : "Torta Forrada, para un bautismo, en colores pastel, con adorno de globo y otros detalles tiernos" ,
    },

    {
        "id": p10 ,
        "name" : "Cupcakes x 6",
        "price" : 20000 ,
        "description" : "Cupcakes rellenos de dulce de leche cubiertos con crema, disfrutá de esta presentacion por 6 unidades" ,
    },

    {
        "id": p11 ,
        "name" : "Cookies x 6",
        "price" : 16500 ,
        "description" : "Deliciosas galletitas de manteca con decoración de animales de la granja, hechas con pasta de azúcar" ,
    },

    {
        "id": p12 ,
        "name" : "Alfajores x 6",
        "price" : 12000 ,
        "description" : "Los clásicos alfajores argentinos, de Maicena y Bañados en chocolate, podés consultar por surtidos" ,
    },

    {
        "id": p13 ,
        "name" : "Tarta de Frutilla",
        "price" : 20000 ,
        "description" : "Riquísima y fresca Tarta de Frutilla, con crema chantilly y selección de las mejores frutillas" ,
    },

    {
        "id": p14 ,
        "name" : "Tarta de Ricota",
        "price" : 15000 ,
        "description" : "Tarta de Ricota, uno de los mejores acompañantes del mate, su masa es deliciosa y cubierta con azúcar impalpable" ,
    },

    {
        "id": p15 ,
        "name" : "Tarta Toffee",
        "price" : 25000 ,
        "description" : "Con dulce de leche repostero y una elegante cubierta de chocolate, no podés perderte esta tarta Toffee" ,
    }
] 
    for(let i = 0; i < listaProductos.length; i++) {
        console.log("Nombre: ", listaProductos[i].name);
    }


  const buttons = document.querySelectorAll('.masInfo');
  
  const textElements = document.querySelectorAll('.caja__oculto');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const textElement = textElements[index];
        textElement.classList.toggle('showText')
        
        if (textElement.classList.contains('showText')){
            button.innerHTML = "Menos Info";
        } else {
            button.innerHTML = "Más Info"
        }
    });
 });