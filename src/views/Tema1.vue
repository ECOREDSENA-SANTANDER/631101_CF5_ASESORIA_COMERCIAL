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
          .py-4.py-md-5(titulo="Estaba de preventa" :icono="require('@/assets/curso/temas/tema1/tab1-1.png')")
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
          .py-4.py-md-5(titulo="Etapa de venta" :icono="require('@/assets/curso/temas/tema1/tab1-3.png')")
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
          p #[b Vendedores de ventas técnicas:] se hacen al momento del encuentro entre comprador y vendedor o venta online, debido a que las características del producto y sus necesidades de compra son inmediatas.
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
              | Venta personal.
            li 
              i.fas.fa-shopping-cart
              | Venta multinivel.
            li 
              i.fas.fa-shopping-cart
              | Venta online o comercio electrónico.
    
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
                p.mb-0 Donde se consigue una serie de locales comerciales que venden todo tipo de productos de abarrotes.
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
                p.mb-0 También conocido como venta de bodega, se venden productos con el mínimo de defectos, otras están en buen estado, pero a precios cómodos.
          .row.col-xl-11.m-auto(titulo="Venta industrial y a tiendas")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Son conocidos como mayorista, que les venden a otros pequeños negocios.
          .row.col-xl-11.m-auto(titulo="Venta a prescriptores")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Esta es una especialidad de la venta en la que el vendedor basado en los beneficios y atributos de su portafolio de productos procura convencer a un referente para que otros compren. Ejemplo: los representantes de laboratorios y de casas editoriales para colegios y universidades.
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


    separador
    #t_1_4.titulo-segundo.mb-4
      h2 1.4 Estrategias de ventas

    separador
    #t_1_5.titulo-segundo.mb-4
      h2 1.5 Técnicas de la venta

    separador
    #t_1_6.titulo-segundo.mb-4
      h2 1.6 Venta consultiva

    separador
    #t_1_7.titulo-segundo.mb-4
      h2 1.7 Clínicas de venta

    separador
    #t_1_7.titulo-segundo.mb-4
      h2 1.8 Manejo de objeciones


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
