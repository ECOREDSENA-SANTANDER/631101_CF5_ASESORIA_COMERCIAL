<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 1
      h1 La venta
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-6.col-lg-4
        img(src='@/assets/curso/temas/tema1/imagen1.png', alt='Se muestra un juego de roles donde se expone que normalmente el cliente-comprador son la misma persona, sin embargo hay situaciones donde la persona que compra no es la misma persona que consume o e usuario del servicio.')
      .col-sm-12.col-md-12.col-lg-8
        p La venta es tal vez la actividad más antigua el mundo, ya desde la prehistoria se realizaban acciones de venta conocida como el trueque, luego se realizaron otras relaciones de intercambio más avanzadas entre civilizaciones, posteriormente, desde antes de Cristo, se empezaron a usar metales como forma de pago para realizar intercambios.
        p Con el desarrollo de las ventas y la división del trabajo, surgieron los vendedores como intermediarios entre personas o entre civilizaciones, a medida que crecía la población, los vendedores cobraban más importancia para el desarrollo de una región, pues era el que proveía y conseguía lo que la población necesitaba. Hoy en día las ventas son una de las actividades que, a pesar de los cambios demográficos, económicos, empresariales y la evolución de los clientes y mercados, junto a diferentes circunstancias competitivas, representan para la sociedad el principal motor de transformación socioeconómico. 
        p La venta es el motor de la empresa, esta ejecuta lo definido en el plan de mercadeo. Hoy en día todas las organizaciones se orientan a proveer servicios al cliente (#[em Service Profit Chain]), como una estrategia para aumentar las ventas, por ende, todos los empleados sin importar su rol en la empresa son “vendedores” en mayor o menor grado.

    p.mb-5 Vender, es hacer operaciones de negocios que pueden darse de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-5.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/imagen2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            br
            h4 ¿Pero qué son las ventas? 
            br
            br
            p Las ventas para Westreicher (2020) “son la entrega de un determinado bien o servicio bajo un precio estipulado o convenido y a cambio de una contraprestación económica en forma de dinero por parte de un vendedor o proveedor”.      
            br
            br

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-8
        p En otros conceptos, las ventas tienen diferentes connotaciones, así, para Heller (2014), es el cambio de productos y servicios por dinero. Desde una mirada legal, se trata de la transferencia del derecho de posesión de un bien, a cambio de dinero y desde una mirada contable y financiera, la venta es el monto total cobrado por productos o servicios prestados.
        p Para la realización de la venta, se deben tener en cuenta varias etapas y a partir de ahí, desencadenar el proceso de la venta. La venta tiene varias etapas conocidas en cada una de ellas el vendedor debe tener una preparación para afrontar con calidad cada etapa. 
        p De acuerdo con Torres (2014, p. 71), las etapas de la venta son:
      .col-8.col-md-6.col-lg-4
        img(src='@/assets/curso/temas/tema1/imagen3.png', alt='')

    .row.justify-content-center.align-items-center
      .col-lg-12
        TabsB.color-primario
          .py-4.py-md-5(titulo="Etapa de preventa" :icono="require('@/assets/curso/temas/tema1/tab1-1.png')")
            .row.align-items-center.justify-content-center
              .col-md-6.mb-4.mb-md-0
                p En esta etapa, el vendedor debe tener una preparación en el conocimiento del producto, su historia, su proceso, sus beneficios y ventajas, la historia de la empresa.
                p También, debe manejar el catálogo del producto y su ficha técnica, instrucciones de manejo de ser necesario; conocer la competencia, sus factores críticos de competitividad, y qué está comunicando el producto. Por ejemplo, si es un detergente, su limpieza y blancura de la ropa; cuidado de las manos; innovación en la categoría; precio/beneficio.
                p Además, conocer los productos con los que compite la empresa, tener claro el área donde actuará, el mercado y cómo es su mercado objetivo.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/imgtab1-1.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Etapa de venta" :icono="require('@/assets/curso/temas/tema1/tab1-2.png')")
            .row.align-items-center.justify-content-center
              .col-md-6.mb-4.mb-md-0
                p De lo bien que se prepare el vendedor en la preventa, depende el éxito en la venta. En esta etapa se realiza el proceso de la venta, que implica que por parte del vendedor un entrenamiento riguroso para aplicar las técnicas de la venta y lo aprendido en la comunicación con el cliente, el modo de hablar, sus movimientos corporales, el encuentro del cliente con la empresa y el producto.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/imgtab1-2.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Etapa de posventa" :icono="require('@/assets/curso/temas/tema1/tab1-3.png')")
            .row.align-items-center.justify-content-center
              .col-md-6.mb-4.mb-md-0
                p También se le llama “Después de la venta”. En esta etapa, el vendedor junto con la empresa deben realizar seguimiento a la venta y ver el grado de satisfacción del cliente, o tomar medidas para mejorar el proceso. El vendedor debe comunicarse con el cliente para brindar asesoría en las situaciones que lo demande, además, atender sus peticiones y reclamos.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/imgtab1-3.png', alt='Texto que describa la imagen')
      

    p La venta se realiza entre un comprador y un vendedor; alguien debe ejercer estos roles, sean personas,  empresas u otros. Ahora, la manera en cómo se realice depende del sector y el rol que desempeñen ambos en el ejercicio del intercambio. 
    p.mb-5 Existen diversos tipos de venta según Morfin (2014): 

    .row.mb-4
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 1
          p.text-center 
            b Ventas directas
          p.text-center.mb-1 Involucran contacto directo entre comprador y vendedor (ventas al detal, ventas puerta a puerta, venta social).
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-4
          .tarjeta-numerada__numero
            .h2.text-white 2
          p.text-center 
            b Ventas industriales
          p.text-center.mb-5 Ventas de una empresa a otra.
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 3
          p.text-center 
            b Ventas indirectas
          p.text-center.mb-4 En ellas ocurre un contacto, pero no en persona (telemercadeo, correo, #[em on-line]).

    .row.mb-4
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 1
          p.text-center 
            b Ventas electrónicas
          p.text-center.mb-5 Vía Internet (B2B, B2C, C2C).
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-4
          .tarjeta-numerada__numero
            .h2.text-white 2
          p.text-center 
            b Ventas intermediadas
          p.text-center.mb-5 Por medio de corredores.
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 3
          p.text-center 
            b Otros tipos de ventas
          p.text-center.mb-4 Incluyen: ventas consultivas, ventas complejas.

    separador
    #t_1_1.titulo-segundo.mb-4
      h2 1.1. Herramientas de la venta
    p.mb-4 Las herramientas de productividad en ventas son aquellas que ayudan a la empresa a hacer más, en menos tiempo, es decir, logran automatizar varias funciones, sirven como una forma de establecer una mejor comunicación interna o con los clientes, o permiten gestionar las funciones de ventas de alguna forma.

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-8
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 1. 
              | Herramientas de la venta.
            img(src='@/assets/curso/temas/tema1/fig1.png', alt='La figura presenta un esquema que resume las herramientas de productividad en ventas, clasificadas en dos secciones: Herramientas off-line y herramientas on-line. Dentro de las herramientas off-line está la auditoría de mercadero, la comunicación corporativa, los equipos de ventas y la marca. En las herramientas on-line se encuentra el Internet, Marketing Automation, CRM y Sales Automation, la productividad y gestión.')

    separador
    #t_1_2.titulo-segundo.mb-4
      h2 1.2. Clasificación de vendedores
    p.mb-4.mt-4 Dependiendo del grado de complejidad y especificidad técnica de la venta, esta se divide en:

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          p #[b Vendedores de ventas no técnicas:] se dirigen a aquellos productos que requieren un mayor esfuerzo de ventas, y su duración va según el proceso de la venta.
          p #[b Vendedores de ventas técnicas:] se hacen al momento del encuentro entre comprador y vendedor o venta #[em online], debido a que las características del producto y sus necesidades de compra son inmediatas.
    p.mb-5 La venta tiene un comportamiento según la naturaleza de la compra o la manera de cómo se solicita la mercancía, de acuerdo con esto, Jobber y Lancaster (2012) clasifican los compradores en tres tipos de funciones:

    .row.justify-content-center(data-aos="fade-down").mb-3
      .col-md-12.col-lg-4.col-12.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tar1-1.png' alt='').img250
          .tarjeta.bg1
            .p-5.mt-5
              h4.mb-4.text-center Tomadores de órdenes
              p.mb-0.text-center Son aquellos que tienen clientes ya comprometidos, o también conocidos como preventistas. Por ejemplo, preventistas de Postobón, Coca-Cola o Bavaria. 
      .col-md-12.col-lg-4.col-12.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tar1-2.png' alt='').img250
          .tarjeta.bg1
            .p-5.mt-5
              h4.mb-4.text-center Creadores de órdenes o vendedores misioneros
              p.mb-0.text-center Son aquellos vendedores que tienen énfasis en el desarrollo de habilidades de persuasión y construcción de relaciones, para atraer más consumidores interesados en el producto. Por ejemplo, los visitadores médicos, quienes realizan visitas a profesionales de la salud, y los convencen de que medique su marca a los pacientes.
      .col-md-12.col-lg-4.col-12.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tar1-3.png' alt='').img250
          .tarjeta.bg1
            .p-5.mt-5
              h4.mb-4.text-center Captadores de órdenes 
              p.mb-0.text-center Procuran persuadir a los clientes de hacer un orden de pedido teniendo en cuenta su nivel de rotación de inventario, precios, facilidad de entrega, entre otros. 
    
    p.mb-4 La siguiente figura, presenta de manera más detallada la clasificación de la función de ventas:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-12
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 2. 
          | La función de ventas.
        img(src='@/assets/curso/temas/tema1/fig2.png', alt='La figura presenta un esquema de la función de ventas y su clasificación, en la que se encuentran: los tomadores de órdenes, los creadores de órdenes y los captadores de órdenes, dentro de estos últimos se incluyen los representantes en la línea de fuero y los representantes de apoyo en ventas.')
        figcaption.text-center Nota. Adaptada de Jobber y Lancaster (2012).

    p.mb-4 Entre los vendedores tomadores de órdenes, siguiendo a Jobber y Lancaster (2012, p. 30), se encuentran vendedores con unas características diferenciadoras como:

    .row.mb-5
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 1
          p.text-center 
            b Tomadores de órdenes internos o vendedores de pago inmediato.
          p.text-center.mb-0 Aquellos que reciben el pago y entregan la mercancía. También aplica al telemercadeo que toma pedidos por teléfono. 
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-4
          .tarjeta-numerada__numero
            .h2.text-white 2
          p.text-center.mt-3
            b Personal de entregas.
          p.text-center.mb-4.mt-4 Son aquellos que solo realizan la entrega del producto en el domicilio.
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 3
          p.text-center.mt-3
            b Tomadores de órdenes externos.
          p.text-center.mt-4.mb-0 Aquellos vendedores que solo toman el pedido revisan los inventarios y sugieren la venta. 

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/tema1/imagen4.png', alt='')
      .col-sm-12.col-md-12.col-lg-7
        p Ahora, los vendedores creadores de órdenes son, por lo general, quienes laboran en laboratorios farmacéuticos solo realizan visitas y persuaden para que se solicite a los pacientes la marca sugerida al cuerpo médico. 
        p Y los vendedores captadores de órdenes son los vendedores que responden por una cuota de ventas, realizan el proceso de la venta, identifican nuevos prospectos y realizan persuasión y negociación. En este grupo de vendedores, Torres (2014) señala un grupo dedicado a las ventas y que se encuentra en la línea de fuego:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-10
        .cajon.color-acento-contenido.p-4
          .row.justify-content-center.align-items-center.mx-5
            .col-12.col-md-12.col-lg-4
              ol.lista-ol--cuadro.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span a
                  | Representante de ventas.
                li 
                  .lista-ol--cuadro__vineta
                    span b
                  | Promotor de ventas.
                li 
                  .lista-ol--cuadro__vineta
                    span c
                  | Gerente de ventas.
                li 
                  .lista-ol--cuadro__vineta
                    span d
                  | Gerente de cuentas clave.
                li 
                  .lista-ol--cuadro__vineta
                    span e
                  | Gerente de categoría.
                li 
                  .lista-ol--cuadro__vineta
                    span f
                  | Entrenado en ventas.
            .col-12.col-md-12.col-lg-4
              ol.lista-ol--cuadro.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span g
                  | Gerente de distrito.
                li 
                  .lista-ol--cuadro__vineta
                    span h
                  | Gerente nacional de ventas.
                li 
                  .lista-ol--cuadro__vineta
                    span i
                  | Ingeniero de ventas.
                li 
                  .lista-ol--cuadro__vineta
                    span j
                  | Supervisor de ventas.
                li 
                  .lista-ol--cuadro__vineta
                    span k
                  | Ejecutivo de cuentas.
                li 
                  .lista-ol--cuadro__vineta
                    span l
                  | Superintendente de ventas.
            .col-8.col-md-8.col-lg-4
              img(src='@/assets/curso/temas/tema1/imagen5.png', alt='')

    p.mb-4 Teniendo en cuenta la naturaleza y dinámica cambiante de las ventas, estas asumen nuevas formas de venta que, según Artal (2010), se dividen en: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .row.bg2
          ul.lista-ul--color.lista-ul--separador.fa-al.mt-4
            li 
              i.fas.fa-shopping-cart
              span.mb-0 Venta personal.
            li 
              i.fas.fa-shopping-cart
              span.mb-0 Venta multinivel.
            li 
              i.fas.fa-shopping-cart
              span.mb-0 Venta  #[em online] o comercio electrónico.
    
    p.mb-5 A continuación, se amplía la información sobre cada una de ellas.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Venta personal
    p.mb-4.mt-4 Existe un encuentro entre comprador y vendedor y es el momento en que el vendedor realiza sus técnicas para vender. Puede ser venta personal interna y venta personal externa. Algunos de sus tipos se presentan a continuación:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Venta de mostrador")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 El encuentro del vendedor y comprador se da dentro del establecimiento comercial, donde el vendedor debe desarrollar técnicas de servicio al cliente y de ventas.
          .row.col-xl-11.m-auto(titulo="Ventas en mercados")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Este tipo de venta se da en los mercados, donde se encuentran una serie de locales comerciales que venden todo tipo de productos de abarrotes.
          .row.col-xl-11.m-auto(titulo="Ventas en autoservicio")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Aquí el vendedor despliega técnicas de merchandising para lograr captar el interés del cliente.
          .row.col-xl-11.m-auto(titulo="Ventas en feria y salones")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Esta es una actividad de venta utilizada por las empresas para promocionar sus productos y servicios.
          .row.col-xl-11.m-auto(titulo="Venta en la propia fábrica")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 También conocido como venta de bodega, se venden productos con el mínimo de defectos, otros en buen estado, pero a precios cómodos para el cliente.
          .row.col-xl-11.m-auto(titulo="Venta industrial y a tiendas")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Son conocidos como mayorista, que les venden a otros pequeños negocios.
          .row.col-xl-11.m-auto(titulo="Venta a prescriptores")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Especialidad de la venta en la que el vendedor, basado en los beneficios y atributos de su portafolio, procura convencer a un referente para que otros compren. Ejemplo: los representantes de laboratorios, casas editoriales para colegios y universidades.
          .row.col-xl-11.m-auto(titulo="Venta domiciliaria")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Esta es una venta ya muy poco utilizada, generalmente se hace en frío, es decir, visitar locales o residencias sin previo aviso; últimamente se realiza como una actividad promocional temporal.
          .row.col-xl-11.m-auto(titulo="Venta ambulante")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Es una venta que se realiza temporalmente en algunos puntos seleccionados para vender productos agrícolas o de la canasta familiar, también son puestos móviles algo permanentes. Generalmente no cuentan con permisos locales.
      .col-lg-6.col-md-8.col-10(data-aos="fade-left" data-aos-delay="500")
        img(data-aos="zoom-in-left")(src="@/assets/curso/temas/tema1/imagen6.png")

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Venta multinivel

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/tema1/imagen7.png', alt='')
      .col-sm-12.col-md-12.col-lg-9
        .row.bg4.borde-redondo
          p.p-4 La venta multinivel consiste en una estructura de negocio donde una red de personas adquiere productos directamente de una empresa y recibe un código único. Con este código, pueden distribuir los productos a otras personas, quienes a su vez también pueden generar ingresos a través de sus propias ventas. Este modelo permite que los distribuidores ganen comisiones tanto por sus ventas directas como por las ventas realizadas por su red de reclutados, fomentando así el crecimiento y la expansión del negocio de manera exponencial.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Venta #[em online] o comercio electrónico

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-9
        .row.bg4.borde-redondo
          p.p-4 El comercio electrónico, o venta #[em online], hace uso del Internet y la #[em web] para realizar transacciones de solicitud y pago de negocios (Mejía, 2017, p. 24). Este tipo de venta permite a los negocios ofrecer sus productos y servicios a una audiencia global, facilitando la solicitud y el pago de manera rápida y segura. El comercio electrónico ha revolucionado la forma en que las empresas y los consumidores interactúan, proporcionando comodidad, eficiencia y una amplia variedad de opciones a un solo clic de distancia.
      .col-6.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/tema1/imagen8.png', alt='')

    separador
    #t_1_3.titulo-segundo.mb-4
      h2 1.3 Proceso de la venta

    p Después de que la empresa haya aplicado técnicas de segmentación para identificar sus mercados objetivo (es importante recordar que la empresa puede identificar múltiples segmentos, pero selecciona los más adecuados según sus recursos), y haya definido cómo quiere posicionarse en esos mercados y la comunicación que quiere dirigir a esos segmentos para darse a conocer, es momento de convertir en realidad lo planificado en el plan de mercadeo.
    p.mb-4 Realizar la venta implica un proceso tanto para el vendedor como para la empresa. Es necesario definir la mejor estrategia de venta y preparar las condiciones necesarias para llevarla a cabo. Vender es una disciplina que debe seguirse de manera organizada para alcanzar el nivel de desempeño esperado por la empresa.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-5.p-sm-4.p-md-5
          .bloque-texto-g__img.nuevo(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/imagen9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p De acuerdo con InboundCycle, “el proceso de venta es la sucesión de pasos que una empresa realiza desde el momento en que intenta captar la atención de un potencial cliente hasta que la transacción final se lleva a cabo”.     

    p.mb-4 El proceso de la venta o ciclo de la venta, según los postulados de Hair et al. (2010, p. 92), tiene las siguientes fases:

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-10
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 3. 
          | Ciclo de la venta
        img(src='@/assets/curso/temas/tema1/fig3.png', alt='La figura presenta de manera gráfica en proceso de la venta. Se identifica como Ciclo de la venta y sus respectivas fases unidas con una línea punteada en forma de circunferencia: prospección, acercamiento, entrevistas, presentación/demostración, negocios, cierre, postventas y relaciones ALP. A estos subprocesos los rodean dos flechas junto con la palabra “Referidos”, que implica la participación de estos actores e importancia en todo el ciclo principal.')
        figcaption.text-center Nota. Adaptada de Hair et al.(2010).

    p.mb-5 Cada una de las fases mencionadas en el ciclo de la venta, tiene sus propios procesos, los cuales se mencionan a continuación:

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Prospección

    .row.justify-content-center.align-items-center
      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              .row.mx-5
                p La venta se inicia con la búsqueda permanente de nuevos clientes, la empresa cuenta con:
            .col-lg-8
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-check-circle
                  span.mb-0 #[b Clientes actuales:] son los clientes que actualmente le compran a la empresa.           
                li 
                  i.fas.fa-check-circle
                  span.mb-0 #[b Clientes potenciales:] son aquellos que están en posición de comprarle, pero que aún no lo han hecho           

    p El esfuerzo de la prospección es identificar y capturar a esos clientes, y llevarlos a otros procesos en el ciclo de la venta. Estas etapas corresponden, según Torres (2014) a:

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-4
        .row.bg5.borde-redondo.p-5.mx-1
          h4 Etapa 1. 
          p Identificar a los posibles clientes en perspectiva.
      .col-sm-12.col-md-12.col-lg-4
        .row.bg5.borde-redondo.p-5.mx-1
          h4 Etapa 2. 
          p Calificar a los candidatos en función de su potencial de compra.
      .col-sm-12.col-md-12.col-lg-4
        .row.bg5.borde-redondo.p-5.mx-1
          h4 Etapa 3. 
          p Elaborar una lista de clientes en perspectiva.

    p.mb-4 Siguiendo a Globalkan (2021), los diferentes tipos de prospectos por su personalidad, que son importantes que el vendedor conozca y tenga claro cómo enfrentarlos, son:

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3
        img(src='@/assets/curso/temas/tema1/imagen10.png', alt='')
      .col-lg-3.p-1
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b El cliente amable.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b El cliente dominante.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b El cliente distraído.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b El cliente desubicado.]
      .col-lg-3.p-1
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b El cliente reservado.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b El cliente indeciso.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b El cliente exigente.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b El cliente impaciente.]
      .col-lg-3.p-1
        .row.align-items-center.justify-content-center
          .row.mb-2.mx-1
            .tarjeta--boton.tema1
              .row.ps-3.mt-2
                p #[b El cliente negativo.]
          .row.mb-2.mx-1
            .tarjeta--boton.tema1
              .row.ps-3.mt-2
                p #[b El cliente conflictivo.]
          .row.mb-2.mx-1
            .tarjeta--boton.tema1
              .row.ps-3.mt-2
                p #[b El cliente negociador.]
    
    p.bg2.borde-redondo.p-3.mb-5 Nota. Cada uno de estos clientes tiene unos comportamientos y su manera de tratarlos para que sea favorable a la venta. 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Acercamiento
    p Cuando el vendedor tiene la lista o base de datos de los prospectos que le servirán al propósito de la venta, se pasa a la etapa de acercamiento, donde es el momento de recopilar información detallada de cada prospecto. Hair et al. (2010), recomienda los siguientes pasos:
        
    .row.justify-content-center.align-items-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-2(tipo="n")
          .row.align-items-center.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h3 Preparación de la visita inicial. 
              p Buscar hacer contacto, enviándole información del producto o la empresa.
            .col-md-3
              img(src='@/assets/curso/temas/tema1/paso1-1.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-3.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema1/paso1-2.png', alt='Texto que describa la imagen')
            .col-md-9
              h3 Buscar establecer la cita de ventas.
              p Puede hacerle una llamada, o enviarle un correo notificando al cliente, solicitando su autorización de visita.
          .row.align-items-center.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h3 Buscar información específica del cliente. 
              p Información particular que no se logró en la prospección, información referente a su comportamiento comercial, o a sus experiencias.
            .col-md-3
              img(src='@/assets/curso/temas/tema1/paso1-3.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-3.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema1/paso1-4.png', alt='Texto que describa la imagen')
            .col-md-9
              h3 Identificar las necesidades del cliente.
              p Esto es importante pues permite ir con mejores argumentos al posible cliente. Conocer la hora en que puede recibir, y qué referencias similares utiliza.	
          .row.align-items-center.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h3 Identificar las características, las ventajas y los beneficios del producto. 
              p Esto dará seguridad en la presentación y demostración del producto.
            .col-md-3
              img(src='@/assets/curso/temas/tema1/paso1-5.png', alt='Texto que describa la imagen')
          .row.align-items-center.justify-content-center
            .col-md-3.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema1/paso1-6.png', alt='Texto que describa la imagen')
            .col-md-9
              h3 Preparar la presentación de ventas.
              p Diseñar una presentación estructurada y atractiva que destaque los puntos clave del producto.	
          .row.align-items-center.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h3 Planear y ensayar su enfoque para el prospecto. 
              p Practicar la presentación y anticipar posibles preguntas u objeciones para transmitir con confianza del producto o servicio objeto de venta.
            .col-md-3
              img(src='@/assets/curso/temas/tema1/paso1-7.png', alt='Texto que describa la imagen')

    p.mb-5 Siguiendo estos pasos está listo para enfrentarse a los diferentes prospectos, con alta probabilidad de éxito. 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Entrevista

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-7
        p En esta etapa, el vendedor debe estar muy bien preparado, siguiendo todas las recomendaciones previas. Un error puede echar a perder todo el trabajo realizado anteriormente, resultando en la pérdida de tiempo y dinero. Lo más importante aquí es conocer al cliente, romper el hielo y confirmar las necesidades del cliente de manera presencial. 
        p Durante la entrevista, es esencial que el vendedor establezca una conexión genuina con el cliente. Puede comenzar con una conversación amistosa ayuda a crear un ambiente cómodo y de confianza, escuchando atentamente para entender las necesidades del cliente y hacerle preguntas abiertas que inviten a compartir información valiosa. Además, mostrar empatía y comprensión es crucial para demostrar interés en ayudar al cliente. Finalmente, presentar soluciones personalizadas y acordar los próximos pasos consolidará la relación y facilitará una posible venta.
      .col-11.col-md-10.col-lg-5
        img(src='@/assets/curso/temas/tema1/imagen11.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-10
        .row
          .cajon.color-acento-contenido.p-4
            .row.align-items-center.justify-content-center
              .col-10
                .h3 Presentación y demostración
                p En esta etapa, la recomendación principal es mantener una comunicación persuasiva, puesto que este es el momento donde la preparación en las fases anteriores se pone en práctica. 
                p El vendedor debe tener en cuenta en la presentación del portafolio de productos tres aspectos importantes: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.p-1
        .row.borde-redondo.bg6.mx-2
          p.text-center.p-4 Las características del producto, los beneficios y las ventajas.
      .col-lg-4.p-1
        .row.borde-redondo.bg6.mx-2
          p.text-center.p-4.mt-4 Estimular el deseo en ese prospecto.
      .col-lg-4.p-1
        .row.borde-redondo.bg6.mx-2
          p.text-center.p-4 Procurar involucrar al prospecto en la demostración del producto.

    p Existen tres tipos presentaciones:

    .row.justify-content-center.align-items-center.mb-4
      .col-8.col-md-10.col-lg-4
        img(src='@/assets/curso/temas/tema1/imagen12.png', alt='')
      .col-sm-12.col-md-12.col-lg-8
        TabsA.color-acento-botones
          .tarjeta.color-secundario--borde.p-4(titulo="De memoria")
            p.p-4 El vendedor actúa de manera mecánica, no permite la flexibilidad ni el manejo de la presentación.
          .tarjeta.color-secundario--borde.p-4(titulo="Pinceladas")
            p.p-4 En esta técnica se elabora un resumen de los puntos importantes de la presentación, ofreciendo mayor flexibilidad que la anterior.
          .tarjeta.color-secundario--borde.p-4(titulo="Programada")
            p.p-4 El vendedor se apoya en ayudas que le permitan hacer mejor su presentación. Puede utilizar material audiovisual (folletos publicitarios, catálogos, vídeos, muestras del producto), y utilizar plataformas sincrónicas de ser necesario.
    
    p.mb-4 Entre otras recomendaciones a implementar, se tienen: 

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-10
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Convertir las ventajas del producto en beneficios para el prospecto.       
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Detectar en las necesidades de los clientes cuáles se asocian más a las ventajas del producto y repetirlas. 
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Participación del prospecto en la demostración. 
                li 
                  i.fas.fa-check-circle
                  span.mb-0 La posición que debe mantener con el prospecto debe ser en ángulo de 90º. 
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Estar atento a las emociones del prospecto y dirigirse ahí.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Escuchar con cuidado las respuestas verbales y corporales.
          
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-10
        .cajon.color-acento-contenido
          p.p-5 En una demostración, el vendedor debe tener en cuenta varias labores esenciales para asegurar una presentación efectiva. Cada producto y servicio tiene sus propias características y beneficios, por lo que es crucial mostrar el producto, realizar pruebas y permitir la degustación cuando sea aplicable. Además, el vendedor debe facilitar la observación del producto, explicar características adicionales, responder a las inquietudes de los clientes y, si es necesario, presentar pruebas de laboratorio. Es fundamental que el vendedor se apoye en técnicas de ventas adecuadas para lograr una venta eficaz.
          
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Negociación

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-7
        p En la fase anterior, los clientes aún no han decidido la compra, pero pueden surgir una serie de inquietudes y preguntas que deben ser resueltas con contundencia. Se dice de manera coloquial, que la venta se inicia cuando el prospecto se niega o dice “No”. Esa serie de inquietudes que tiene el cliente sobre el producto se llaman objeciones, y son, de acuerdo con Hair et al. (2010): “Simplemente una solicitud de más información, de manera que el prospecto pueda justificar una decisión de compra”.
        p Una excelente presentación lleva en muchos casos a pocas preguntas de parte del cliente, y a concretar de manera rápida la venta. Hair et al. (2010) señalan las siguientes objeciones:
      .col-11.col-md-10.col-lg-5
        img(src='@/assets/curso/temas/tema1/imagen13.png', alt='')

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.p-1
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b Objeciones al producto.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b Objeciones al precio.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b Objeciones a la promoción.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b Objeciones a la distribución.]
      .col-lg-5.p-1
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b Objeciones de capital.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b Objeciones a la fuente.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b Objeciones a las necesidades.]
        .row.mb-2.mx-1
          .tarjeta--boton.tema1
            .row.ps-3.mt-2
              p #[b Objeciones latentes.]

    p “Las objeciones comunes se refieren al precio, satisfacción con el proveedor actual, renuencia a tomar decisiones en el momento, no hay necesidad inmediata del producto, sentimientos negativos hacia el vendedor, entre otras” (Torres, 2014).
    p.mb-4 Es así, como el vendedor debe determinar cuáles son los obstáculos que impiden a sus posibles clientes comprar, para superarlos de forma inmediata.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Cierre de la venta

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-6
        p El principal objetivo de la venta es concluir exitosamente la negociación. Durante este proceso, se llevan a cabo los protocolos necesarios para que los acuerdos adquieran un carácter legal, logrando que el vendedor obtenga la firma de la orden de pedido. Este paso requiere, además, que el vendedor posea habilidades y técnicas efectivas para el cierre de la venta. 
        p A continuación, Hair et al. (2010, p.105) consideran varios tipos de cierre de la venta:      
        ul.lista-ul--color.fa-al
          li 
            i.fas.fa-check-circle
            span.mb-0 Cierres de aclaración.     
          li 
            i.fas.fa-check-circle
            span.mb-0 Cierres psicológicos. 
          li 
            i.fas.fa-check-circle
            span.mb-0 Cierres directos.
          li 
            i.fas.fa-check-circle
            span.mb-0 Cierres de concesión.
          li 
            i.fas.fa-check-circle
            span.mb-0 Cierres de la venta perdida.
      .col-9.col-md-8.col-lg-4
        img(src='@/assets/curso/temas/tema1/imagen14.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Posventa y relaciones a largo plazo    

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-7
        p Las actividades de posventa consisten en continuar el esfuerzo inicial de ventas mediante acciones posteriores al cierre. Estas acciones incluyen el seguimiento con el cliente para asegurar su satisfacción, resolver cualquier problema que pueda surgir, y ofrecer soporte continuo. Mantener una comunicación regular y personalizada es clave para fortalecer la relación con el cliente y fomentar la lealtad a largo plazo. Además, estas actividades permiten identificar oportunidades adicionales de venta, mejorar la percepción de la marca y asegurar la continuidad del negocio a través de recomendaciones y repeticiones de compra.
        p.mb-4 Para alcanzar ese objetivo, es necesario dar una gama de servicios complementarios, que hagan que la relación sea muy fuerte y no se pierda jamás, como son:    
        .row.justify-content-center.align-items-center
          .cajon.color-acento-contenido.p-4.mb-4  
            .row
              .col-lg-6.ps-5              
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Garantía.     
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Plazos de entrega.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Cartera.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Facturación.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Asesoría permanente.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Servicio técnico.
              .col-lg-6
                h3 Además de: 
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Ser agradecido en la compra.   
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Verificar que el cliente reciba su compra.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Evidenciar la instalación.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Hacer venta cruzada.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Lograr referidos.
      .col-9.col-md-8.col-lg-5
        img.mt-5(src='@/assets/curso/temas/tema1/imagen15.png', alt='')

    separador
    #t_1_4.titulo-segundo.mb-4
      h2 1.4 Estrategias de ventas

    p Son esas acciones que buscan el cumplimiento de los objetivos propuestos por la empresa para alcanzar en la venta de su portafolio de productos. De acuerdo con Igape (s.f.), la estrategia es:
    p “Un conjunto consciente, racional y coherente de decisiones sobre acciones a emprender y sobre recursos a utilizar, que permite alcanzar los objetivos finales de la empresa u organización”. 
    p.mb-4 Para mayor comprensión del tema, se invita a consultar el siguiente video: 

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-10
        figure
          .video
            iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/-qE35zRZadU?si=zJBLTYz_aJAF29Gz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: Estrategias de ventas.

    separador
    #t_1_5.titulo-segundo.mb-4
      h2 1.5 Técnicas de la venta

    p.mb-4 Son una serie de procedimientos, acciones y protocolos para lograr el resultado de ventas. Estas técnicas de ventas acompañan al vendedor a realizar el proceso de la venta, dependiendo el tipo de venta: técnica o no técnica. A continuación, pasaremos a estudiar cada una.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .cajon.color-acento-contenido.p-4
          .row.align-items-center.justify-content-center
            .col-lg-11
                .h5 Técnica de venta basada en el método AIDA
                p En el momento en que el vendedor realiza cada una de las etapas del proceso de la venta, y llega a la etapa de entrevista o negociación, deberá realizar una conversación con el prospecto y esta conversación estará apoyada por una técnica, en este caso el método AIDA. Esta conversación puede realizarse de manera presencial, telefónica o virtual. 
                p El método AIDA, es un modelo que permite presentar el producto mediante un proceso para de esa manera, poder obtener la respuesta deseada de su público objetivo:

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-md-6.col-lg-3
        img(src='@/assets/curso/temas/tema1/ultima.png', alt='')
      .col-sm-12.col-md-12.col-lg-5
        TabsA.color-acento-botones
          .tarjeta.color-fondo3--borde.p-2(titulo="A")
            p.p-4 #[b Atención] - atraer la #[b atención] del cliente.
          .tarjeta.color-fondo3--borde.p-2(titulo="I")
            p.p-4 #[b Interés] - crear y retener el #[b interés] del cliente.
          .tarjeta.color-fondo3--borde.p-2(titulo="D")
            p.p-4 #[b Deseo] - provocar el #[b deseo] de adquirir el producto.
          .tarjeta.color-fondo3--borde.p-2(titulo="A")
            p.p-4 #[b Acción] - conseguir la #[b acción] de compra.
          
    p.mb-4 A continuación, se presenta gráficamente el método.

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-10
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 4. 
              | El método AIDA
            img(src='@/assets/curso/temas/tema1/fig4.png', alt='La figura representa el modelo AIDA (Atención, Interés, Deseo, Acción), un proceso clave en ventas y marketing. Comienza con la captación de Atención del cliente, seguida por la identificación de sus necesidades para generar Interés. Luego, se crea el Deseo de adquirir el producto o servicio a través de una presentación efectiva y negociación, para finalmente concluir con el Cierre, que corresponde a la Acción de la compra. En el centro del proceso están los Protocolos, que incluyen técnicas de comunicación como el manejo del lenguaje corporal y verbal, y las preguntas adecuadas para guiar la interacción en cada etapa del ciclo de ventas.')

    p El proceso de la venta debe estar en sintonía con el proceso de compra del cliente, este ciclo de acuerdo con Antevenio (2020), consta de cuatro fases por las que atraviesa un cliente, desde que se da cuenta de su necesidad, hasta que tiene la capacidad de satisfacerla comprando el producto o servicio, las que se pueden interrelacionar con el método AIDA, como se muestra a continuación.

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-10
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 5. 
              | El ciclo de compra y el método AIDA
            img(src='@/assets/curso/temas/tema1/fig5.png', alt='La figura presenta una comparación entre el ciclo de compra y el modelo AIDA, destacando cómo se relacionan ambos conceptos. El ciclo de compra se compone de cuatro etapas: 1) Toma de conciencia, donde el cliente reconoce una necesidad o problema; 2) Búsqueda de información, en la que el cliente investiga opciones para resolver su necesidad; 3) Evaluación de alternativas, donde compara diferentes soluciones; y 4) Decisión de compra, donde finalmente selecciona un producto o servicio. Estos pasos se alinean con el modelo AIDA, que también tiene cuatro fases: Conciencia (correspondiente a la toma de conciencia), Deseo (relacionado con la búsqueda de información), Interés (similar a la evaluación de alternativas), y Acción (equivalente a la decisión de compra).')
            figcaption.mt-4 Nota. Adaptada de Antevenio (2020). 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-4
          .row.align-items-center.justify-content-center
            .col-lg-11
              .h2 Técnica de venta basada en el método #[em SPIN]
              p Es otra técnica de ventas que puede utilizar el vendedor según la necesidad en el proceso de ventas es el #[em Spin Selling], creada por Neil Rackham en 1988. La técnica se basa en realizar una serie de preguntas sobre situación, problema, implicación y necesidad de pago. Cada una de las preguntas tienen un propósito claro, y se deben hacer en el orden propuesto por Rackham. 

    p Consta de cuatro etapas:

    .row.mb-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 1
          p.text-center 
            b Situación
          p.text-center.mb-5 Etapa donde se procura ganar confianza y conseguir información.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 2
          p.text-center 
            b Problema
          p.text-center.mb-5 Llevará al cliente a conocer que tiene un problema, o potencial problema.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 3
          p.text-center 
            b Implicación
          p.text-center.mb-4 Las implicaciones que puede generar ese problema para, finalmente, identificar qué necesita una solución.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 4
          p.text-center 
            b Necesidad
          p.text-center.mb-0 Es entonces cuando se presentará la solución a problemas, implicaciones y necesidad de solución del cliente: el producto.

    p.mb-4 El método permite identificar cómo el cliente expresa sus necesidades, bien sean necesidades implícitas o explícitas, como se describen a continuación:

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-5
        .row.bg10.borde-redondo.p-4.mx-1
          h4 Necesidades implícitas o generales:
          p Son aquellas que revelan los problemas del cliente. Estas se manifiestan cuando el cliente dice cosas como:
          p.text-center - “No estoy contento con esto…”.
          p.mb-5 En este punto, el cliente aún no está listo para comprar.
      .col-sm-12.col-md-12.col-lg-5
        .row.bg10.borde-redondo.p-4.mx-1
          h4 Necesidades explícitas o particulares: 
          p Para que un cliente esté listo para comprar, su necesidad debe ser explícita y claramente expresada. Esto se demuestra mediante frases que indican un deseo específico, como:
          p.mb-0 - “Necesito un XXX que tenga XXX característica”
          p - si tuviéramos XXX y XXX, entonces podríamos, XXX”.

    p.mb-4 Y los cuatro tipos de preguntas, que conducen al éxito en la venta #[em SPIN], son:

    .row.justify-content-center.align-items-center
      .col-lg-12
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/imagen16.png', alt='Texto que describa la imagen')
          .tarjeta.morado-claro.p-3(x="24%" y="37%" numero="1")
            p #[b Situación:] estas preguntas buscan reunir datos, hechos e información relevante sobre la situación actual del cliente. Es fundamental indagar sobre el cliente, su negocio y sus operaciones, centrándose en su necesidad. Se deben evitar preguntas obvias y aquellas cuya respuesta ya está disponible en otras fuentes. Es importante hacer preguntas relevantes y con un propósito claro, evitando preguntar por preguntar.
          .tarjeta.morado-claro.p-3(x="35%" y="87%" numero="2")
            p #[b Problema:] si la empresa no puede resolver un problema del cliente, no habrá venta posible. Identificar y abordar los problemas que se pueden solucionar permite aportar valor. Es crucial investigar cuáles son los problemas, dificultades e insatisfacciones del cliente. De esta manera, se descubrirán sus necesidades implícitas y cómo encaja la oferta de la empresa para resolverlas.
          .tarjeta.morado-claro.p-3(x="47%" y="28%" numero="3")
            p #[b Implicación:] estas preguntas toman un problema del cliente y exploran sus efectos o consecuencias. Ayudan al cliente a comprender la seriedad o urgencia del problema, amplificando su importancia en su mente. Se debe evitar proyectar escenarios apocalípticos, ya que esto podría deprimir o asustar al cliente. En cuanto el cliente comprenda las implicaciones del problema, es importante pasar a la siguiente fase de preguntas evitando demoras.
          .tarjeta.morado-claro.p-3(x="58%" y="74%" numero="4")
            p #[b Necesidad / Beneficio:]  estas preguntas muestran el valor de la solución ante los ojos del cliente. Se centran en los aspectos positivos de la solución que combaten los efectos negativos del problema, ayudando a reenfocar la atención del cliente en la solución más que en el problema. Además, permiten que sea el propio cliente quien mencione las ventajas de la solución en lugar de que lo haga el vendedor. Este tipo de preguntas también reducen las objeciones. 

    separador
    #t_1_6.titulo-segundo.mb-4
      h2 1.6 Venta consultiva
    p.mb-4 La venta consultiva se aplica a situaciones donde la decisión de compra toma tiempo, como en la venta de computadoras y electrodomésticos. En estos casos, se requiere asesoría especializada y un cumplimiento adecuado de acuerdo con las necesidades y recursos del cliente.

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-sm-12.col-md-12.col-lg-5
            .cajon.color-acento-contenido.p-4.mb-4
              p “La venta consultiva es un tipo de venta en la que el vendedor también actúa como consultor. Más que vender a toda costa, el profesional escucha al posible cliente, comprende sus necesidades y buscar conjuntamente la solución más adecuada” (RD Station, 2020).
          .col-sm-12.col-md-12.col-lg-7
            p El proceso de la venta consultiva sigue el mismo proceso del proceso de la venta:
            ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Prospección.   
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Acercamiento.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Entrevista.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Presentación y demostración.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Negociación.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Cierre.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Posventas y relaciones a largo plazo.

    p.mb-4 La venta consultiva, por sus características, tiene mayor aceptación entre los clientes, genera confianza y fidelidad, promueve el boca a boca, atrae a clientes más leales y evita la cancelación de pedidos.
          
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-segundo.cambio
          h3.mb-0.mt-0 Las técnicas para utilizar en la venta consultiva son:

    .row.justify-content-center.align-items-center.mb-4    
      .col-sm-12.col-md-12.col-lg-5.mx-2
        .row.align-items-center.justify-content-center.bg11.borde-redondo
          .col-7
            img.mt-4.mb-4(src='@/assets/curso/temas/tema1/imagen17.png', alt='')
        .row.bg10.p-5
          h4.mb-3 #[em Cross selling] o venta cruzada
          p Esta técnica se aplica cuando el cliente ha aceptado la compra, entonces se le ofrecen productos compatibles. Ejemplo: el cliente compra un computador de mesa, se le ofrece el mueble, la impresora.
      .col-sm-12.col-md-12.col-lg-5.mx-2
        .row.align-items-center.justify-content-center.bg11.borde-redondo
          .col-6
            img.mb-4.mt-2(src='@/assets/curso/temas/tema1/imagen18.png', alt='')
        .row.bg10.p-5
          h4 #[em Upselling] o venta adicional 
          p.mb-0 Esta técnica se aplica cuando el cliente desea un producto ya referenciado por él y ha aceptado la compra, entonces se le presenta otro artículo con las mismas características con mayor valor agregado y más costoso.

    separador
    #t_1_7.titulo-segundo.mb-4
      h2 1.7 Clínicas de venta

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-7
        p Las clínicas de venta son actividades de capacitación implementadas por las empresas para mantener a su fuerza de ventas actualizada en habilidades técnicas y en el proceso de venta adoptado por la organización. Estas se realizan mediante juegos de roles y dramatizaciones, lo que permite a los vendedores practicar y mejorar su desempeño. Además, las clínicas de venta proporcionan un espacio para que los vendedores compartan sus experiencias y corrijan posibles errores en la práctica. Los tipos de clínicas de venta incluyen:
        ul.lista-ul--color.fa-al.ps-5
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Clínicas para el cierre de ventas.   
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Clínicas para el abordaje de un cliente.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Clínicas para la presentación de un producto o servicio.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Clínicas para mejorar el uso del lenguaje (corporal y verbal).
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Clínicas para el manejo de objeciones.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Clínicas para la atención telefónica de un cliente.
        .cajon.color-acento-contenido.p-5
          .h3.mx-5 ¿Cómo organizar una clínica de ventas?
          p.mx-5 Es recomendable trabajar con los roles de diferentes tipos de clientes; por cada tipo de cliente se debe elaborar un guion a seguir por los vendedores que realizan la actividad. Para realizar seguimiento a la actividad, se debe hacer una lista de chequeo con indicadores que expresen el comportamiento de los vendedores en la actividad.
      .col-10.col-md-10.col-lg-5
        img(src='@/assets/curso/temas/tema1/imagen19.png', alt='')
    
    p.mb-4.mt-4 Por ejemplo, se puede trabajar bajo roles como los siguientes:

    SlyderF(columnas="col-lg-5 col-xl-3 col-md-5")
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-1.png' alt='').img90
          .tarjeta.nueva
            h3.text-center.p-3.mt-3 Amable
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-2.png' alt='').img90
          .tarjeta.nueva
            h3.text-center.p-3.mt-3 Dominante
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-3.png' alt='').img90
          .tarjeta.nueva
            h3.text-center.p-3.mt-3 Distraido
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-4.png' alt='').img90
          .tarjeta.nueva
            h3.text-center.p-3.mt-3 Desubicado
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-5.png' alt='').img90
          .tarjeta.nueva
            h3.h3.text-center.p-3.mt-3 Reservado
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-6.png' alt='').img90
          .tarjeta.nueva
            h3.text-center.p-3.mt-3 Indeciso
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-7.png' alt='').img90
          .tarjeta.nueva
            h3.text-center.p-3.mt-3 Exigente
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-8.png' alt='').img90
          .tarjeta.nueva
            h3.text-center.p-3.mt-3 Impaciente
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-9.png' alt='').img90
          .tarjeta.nueva
            h3.text-center.p-3.mt-3 Negativo
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-10.png' alt='').img90
          .tarjeta.nueva
            h3.text-center.p-3.mt-3 Conflictivo
      .tarjeta.p-2
        .row.justify-content-center
          .col-7
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/fig1-11.png' alt='').img90
          .tarjeta.nueva
            h3.text-center.p-3.mt-3 Negociador

    separador
    #t_1_8.titulo-segundo.mb-4
      h2 1.8 Manejo de objeciones

    p Las objeciones deben verse como algo normal en el proceso de la venta, ocurren a cada momento, y el vendedor consciente de esto, debe estar preparado y anticiparse a responder esas preguntas antes que las hagan, por eso, es fundamental el conocimiento de las necesidades del cliente. Se considera que, entre menos preguntas, la labor de ventas es más eficiente. Según Artal (2010, p. 324), “una objeción es en realidad una oportunidad”. En ella el vendedor debe ver la oportunidad de tener mejores relaciones con el cliente, y asegurar la venta.
    p.mb-4 Saber responder ante una objeción, se convierte en una habilidad del vendedor y esas habilidades se adquieren en el entrenamiento constante y las clínicas de ventas. Hair et al. (2010, p. 103), aportan las siguientes técnicas acompañadas de frases de enlace o acciones para iniciar la objeción:

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-4.p-1
        .tarjeta.nueva1
          h5.text-center.mt-4 Estrategias de evasión
          p.text-center.mb-0 Ahora llegaré a eso. 
          p.text-center.mb-5 Dejar pasar.
      .col-lg-4.p-1
        .tarjeta.nueva1
          h5.text-center.mt-4 Estrategias de proporcionar pruebas
          p.text-center.mb-0 Antecedentes.
          p.text-center.mb-0 Demostración.
          p.text-center.mb-4 Proponer uso de pruebas.
      .col-lg-4.p-1
        .tarjeta.nueva1
          h5.text-center.mt-4 Estrategias de negación
          p.text-center.mb-0 Negación indirecta.
          p.text-center.mb-5 Negación directa.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.p-1
        .tarjeta.nueva1
          h5.text-center.mt-4 Estrategias de compensación
          p.text-center.mb-0 #[em Boomerang].
          p.text-center.mb-0 Compensación o contrapeso.
          p.text-center.mb-0 Convenir o neutralizar.
          p.text-center Seguir el humor.
      .col-lg-4.p-1
        .tarjeta.nueva1
          h5.text-center.mt-4 Estrategias de cambio de enfoque
          p.text-center.mb-0 Producto alterno.
          p.text-center.mb-0 Siento, sentí, descubrí.
          p.text-center.mb-0 Comparación o contraste.
          p.text-center Respuesta con una pregunta.
    
    p.text-center #[b Tenga presente que:] el manejo de objeciones es una habilidad, y solo se adquiere con la práctica permanente.
    








</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
