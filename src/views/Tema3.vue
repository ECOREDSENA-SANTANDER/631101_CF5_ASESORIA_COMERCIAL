<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 3
      h1 Comunicación

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-10
        .cajon.color-acento-contenido.mb-4
          .row.align-items-center.justify-content-center
            .col-sm-12.col-md-12.col-lg-4
              img(src='@/assets/curso/temas/tema3/imagen1.png', alt='')
            .col-sm-12.col-md-12.col-lg-7
              p.ps-5.mt-5 La comunicación es una actividad esencial para los seres humanos, ya que es la forma en que interactúan y se hacen entender. En una empresa, la comunicación es un elemento crucial para el crecimiento y desarrollo de sus actividades, ya que establece las políticas para el manejo de la comunicación interna y externa.
              p.ps-5.mb-5 En el proceso de ventas, una comunicación efectiva es vital para comprender las necesidades del cliente, presentar productos o servicios de manera convincente y construir relaciones sólidas y duraderas. La capacidad de escuchar, persuadir y responder adecuadamente a las inquietudes del cliente puede marcar la diferencia entre una venta exitosa y una oportunidad perdida. Además, una comunicación clara y transparente fortalece la confianza del cliente en la empresa, promoviendo la fidelidad y la satisfacción a largo plazo.       

    separador
    #t_3_1.titulo-segundo.mb-4
      h2 3.1 Concepto y elementos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Concepto")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-6
                p.mb-3 Desde una perspectiva general Peiró (2021), dice que
                .row
                  .bloque-texto-b.bgmoradomedio.p-4
                    .bloque-texto-b__texto
                      i.fas.fa-quote-left
                      p.mb-0 “La comunicación es el intercambio de información que se produce entre dos o más individuos con el objetivo de aportar información y recibirla. En este proceso intervienen un emisor y un receptor, además del mensaje que se pone de manifiesto”.
                      i.fas.fa-quote-right
                    p.mb-0 Peiró (2021)
              .col-lg-6
                img.mx-5(src='@/assets/curso/temas/tema3/imagen2.png', alt='')
            p.mb-3.mt-3 Por otro lado, la comunicación para la empresa es según Pérez et al. (2013) es:
            p “una actividad organizada y desarrollada por personas, que, además, persigue obtener beneficios, es imprescindible” (p. 48). 
          .row.col-xl-11.m-auto(titulo="Elementos")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-3 Los elementos que intervienen en el proceso de la comunicación según Peiró (2021) son esenciales para que el proceso se lleve a cabo de manera eficaz; y es necesario que intervengan una serie de elementos. Estos son los principales:
                .row.align-items-center.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-secundario.mb-4
                      h5 Figura 6. 
                      | Elementos de la comunicación
                    img(src='@/assets/curso/temas/tema3/fig1.png', alt='La figura presenta dos personas ubicadas a cada costado, ilustrando el proceso de comunicación. Entre ellas se destacan los elementos que hacen parte de este proceso, definidos a través de puntos calientes: Emisor: la persona que emite el mensaje. Receptor: la persona o personas que reciben el mensaje del emisor. Mensaje: es la información, los datos que transmite el emisor para que lleguen al receptor de forma óptima. Canal: es el medio por el que se transmite el mensaje. Pueden ser los diferentes medios de comunicación masiva, internet u otro medio. Código: son el conjunto de símbolos y signos que configuran el mensaje. Contexto: es el ambiente, lugar, tiempo desde donde se transmite el mensaje.')

    .row.justify-content-center.align-items-center
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/pc1.png', alt='Texto que describa la imagen')
          .tarjeta.morado-claro.p-3(x="19%" y="54%" numero="1")
            p.mb-0 #[b 1. Emisor] 
            p La persona que emite el mensaje.
          .tarjeta.morado-claro.p-3(x="31%" y="54%" numero="2")
            p.mb-0 #[b 2. Receptor] 
            p La persona o personas que reciben el mensaje del emisor.
          .tarjeta.morado-claro.p-3(x="44%" y="54%" numero="3")
            p.mb-0 #[b 3. Mensaje] 
            p Es la información, los datos que transmite el emisor para que lleguen al receptor de forma óptima.
          .tarjeta.morado-claro.p-3(x="56%" y="54%" numero="4")
            p.mb-0 #[b 4. Canal]  
            p Es el medio por el que se transmite el mensaje. Pueden ser los diferentes medios de comunicación masiva, internet u otro medio.
          .tarjeta.morado-claro.p-3(x="69%" y="54%" numero="5")
            p.mb-0 #[b 5. Código]  
            p Son el conjunto de símbolos y signos que configuran el mensaje.
          .tarjeta.morado-claro.p-3(x="81%" y="54%" numero="6")
            p.mb-0 #[b 6. Contexto]  
            p Es el ambiente, lugar, tiempo desde donde se transmite el mensaje.

    separador
    #t_3_2.titulo-segundo.mb-4
      h2 3.2 Herramientas y funciones

    .row.mb-3.bgmoradoclaro
      .col-sm-12.col-md-12.col-lg-3.p-0
        img(src='@/assets/curso/temas/tema3/imagen3.png', alt='')
      .col-sm-12.col-md-12.col-lg-9
        .row
          .col-lg-3
            .row.mx-4.mt-5
              h5.bg3.text-white.text-center.mb-0 Herramientas
          p.mb-2.ps-5.mt-4 Las herramientas más utilizadas para la comunicación de las personas y las organizaciones en actividades #[em online] y #[em offline] aportadas por Conecta DEL (s. f.):
        .row.mx-4
          .col-lg-6.mt-4
            p.mb-3 #[b Herramientas de comunicación personal]
            ul.lista-ul--color.fa-al
              li 
                i.fas.fa-check-circle
                span.mb-0 Correo electrónico.  
              li 
                i.fas.fa-check-circle
                span.mb-0 Autoconferencias, videoconferencias y mensajería instantanea.
              li 
                i.fas.fa-check-circle
                span.mb-0 Teléfonos celulares y fijos.
              li 
                i.fas.fa-check-circle
                span.mb-0 Herramientas de comunicación colectiva.
              li 
                i.fas.fa-check-circle
                span.mb-0 Blogs.
              li 
                i.fas.fa-check-circle
                span.mb-0 Multimedia.
          .col-lg-6.mt-4
            p.mb-3 #[b Herramientas de trabajo colectivo]
            ul.lista-ul--color.fa-al
              li 
                i.fas.fa-check-circle
                span.mb-0 Google #[em Group]. 
              li 
                i.fas.fa-check-circle
                span.mb-0 Facebook #[em Group].
              li 
                i.fas.fa-check-circle
                span.mb-0 WhatsApp #[em Group].
            p.mb-3 #[b Herramientas para la organización de tareas]
            .row.align-items-center.justify-content-center
              .col-lg-6
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Google #[em Calendar]. 
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Google #[em Docs].
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Dropbox.
              .col-lg-6
                img(src='@/assets/curso/temas/tema3/imagen5.png', alt='')

    .row.bgmoradoclaro
      .col-sm-12.col-md-12.col-lg-3.p-0
        img(src='@/assets/curso/temas/tema3/imagen4.png', alt='')
      .col-sm-12.col-md-12.col-lg-9
        .row
          .col-lg-3
            .row.mx-4.mt-5
              h5.bg3.text-white.text-center.mb-0 Funciones
          p.mb-2.ps-5.mt-4 La comunicación en las organizaciones para Pérez et al. (2013), cumple las siguientes funciones:
        .row.mx-4.mt-4
            ul.lista-ul--color.fa-al
              li 
                i.fas.fa-check-circle
                span.mb-0 Motivar a los empleados en un clima laboral adecuado. 
              li 
                i.fas.fa-check-circle
                span.mb-0 Brindar la información necesaria para la toma de decisiones.
              li 
                i.fas.fa-check-circle
                span.mb-0 Procurar el control y la ejecución de los planes y la conducta de sus miembros.
              li 
                i.fas.fa-check-circle
                span.mb-0 Expresar emociones ante logros y fracasos laborales.

    separador
    #t_3_3.titulo-segundo.mb-4
      h2 3.3	Tipos de comunicación
    p.mb-4 La comunicación es una variable estratégica en las organizaciones para interactuar con sus públicos, siendo fundamental para la toma de decisiones. El éxito de una empresa depende de la habilidad de comunicación entre sus dependencias y directivos. Al respecto, Pérez et al. (2013) presentan la siguiente clasificación:

    .row.align-items-center.justify-content-center.mb-4
      .col-sm-12.col-md-12.col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg3.text-white Título componente
                th.bg3.text-white Pestañas verticales
            tbody
              tr
                td Título
                td Tipos de comunicación
              tr
                td.bg2 Texto descriptivo
                td.bg2 Tipos de comunicación
              tr
                td Título (máx 6 palabras)
                td Texto
              tr
                td.bg2 Según el ámbito
                td.bg2 #[b Interna]
              tr
                td.bg2 
                td.bg2 #[b * Vertical:] se da entre la dirección y los empleados. 
              tr
                td.bg2 
                td.bg2 #[b * Horizontal:] se da entre empleados del mismo nivel.
              tr
                td.bg2 
                td.bg2 #[b Externa]
              tr
                td.bg2
                td.bg2 Es la que mantiene la empresa con su entorno: proveedores, clientes, acreedores y públicos interesados.
              tr
                td.bbabajo Según el código
                td.bbabajo #[b Oral]
              tr
                td.bbabajo 
                td.bbabajo Se da entre las personas de manera presencial o por medios electrónicos de manera sincrónica.
              tr
                td.bbabajo 
                td.bbabajo #[b Escrita]
              tr
                td.bbabajo 
                td.bbabajo Se da utilizando papel o medios electrónicos.
              tr
                td.bg2 Según el grado de control
                td.bg2 #[b Formal]
              tr
                td.bg2 
                td.bg2 Se utiliza para dar información sobre temas referente a la organización.
              tr
                td.bg2 
                td.bg2 #[b Informal]
              tr
                td.bg2 
                td.bg2 Se da de manera espontánea entre compañeros o con personas externas a la organización.

    p.mb-4 La comunicación es una variable estratégica en las organizaciones para interactuar con sus públicos, siendo fundamental para la toma de decisiones. El éxito de una empresa depende de la habilidad de comunicación entre sus dependencias y directivos. Al respecto, Pérez et al. (2013) presentan la siguiente clasificación:
    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Comunicación interna")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-7
                p Es la comunicación que se da al interior de la empresa, en ella se da la comunicación asertiva y la comunicación efectiva, razón por la que la organización capacita sobre el tema, para propiciar las buenas relaciones entre los empleados, entre los jefes y en los equipos de trabajo.
                p #[b Comunicación efectiva.] Es tener la capacidad de escuchar y comprender el todo sobre la información y datos que se reciben.
                p #[b Comunicación asertiva.] Consiste en expresar las opiniones y valoraciones, evitando descalificaciones, reproches y enfrentamientos.
              .col-lg-5
                img.mx-5(src='@/assets/curso/temas/tema3/imagen6.png', alt='')
            .row
              p Esta comunicación, de acuerdo con Pérez et al. (2013), se clasifica en:
              p #[b Vertical.] Aquella que se da entre todos los niveles de la escala jerárquica de la organización, puede ser descendente (de directivos a subordinados) o ascendente (de subordinados a directivos).
              p #[b Diagonal.] Este tipo de comunicación se da entre dependencias, sin importar los niveles jerárquicos.
              p #[b Reuniones de trabajo.] Estas reuniones son muy productivas para la empresa, en ella convergen la comunicación vertical y horizontal y se tomas decisiones importantes (p. 50).
          .row.col-xl-11.m-auto(titulo="Comunicación externa")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-5
                img(src='@/assets/curso/temas/tema3/imagen7.png', alt='')
              .col-lg-7
                p Es la comunicación que se da entre los clientes de la empresa, sus proveedores, acreedores, sus socios, entidades sin ánimo de lucro, entidades del Gobierno y demás públicos interesados.
                p La empresa puede dirigir su comunicación para buscar posicionamiento, dar a conocer sus marcas u otras áreas de interés comercial o relacional. La empresa realiza las siguientes clasificaciones de comunicación según Pérez et al. (2013):
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Corporativa. 
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Empresarial.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Institucional.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Otras de relaciones públicas.

    separador
    #t_3_4.titulo-segundo.mb-4
      h2 3.4 Medios de comunicación

    p Estos son instrumentos utilizados por la empresa o la organización para dar a conocer sus mensajes, información y su información publicitaria, entre otros. La empresa utiliza estos medios de manera masiva utilizando medios #[em off-line] u #[em on-line].
    p.mb-4 Existen divisiones de medios de comunicación generadas por la gestión del mercadeo. Es la comunicación que llega a un gran número de personas en un periodo de tiempo determinado; y los medios son:

    .row.justify-content-center.align-items-center
      .col-lg-6.p-0
        .cajon.color-acento-contenido.p-4.mb-4
          .row
            .col-lg-4.ps-5.mt-5
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Televisión.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Radio.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Prensa.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Revistas.
                li 
                  i.fas.fa-check-circle
                  span.mb-4 Internet.
            .col-lg-8.mt-5
                ul.lista-ul--color.fa-al
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Medios de comunicación exterior.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Plegables.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Material POP (#[em Point of Purchase]).
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Vallas fijas.
                  li 
                    i.fas.fa-check-circle
                    span.mb-4 Vallas electrónicas y digitales.
      .col-lg-6
        img(src='@/assets/curso/temas/tema3/imagen8.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Tipos de medios
    p Estos medios se clasifican en:

    .row.justify-content-center.align-items-center
      .col-lg-3
        .row.bg3.borde-redondo.mx-1
          h3.mt-3.mb-3.text-white.text-center Medios audiovisuales
      .col-lg-3
        .row.bg3.borde-redondo.mx-1
          h3.mt-3.mb-3.text-white.text-center Medios radiofónicos
      .col-lg-3
        .row.bg3.borde-redondo.mx-1
          h3.mt-3.mb-3.text-white.text-center Medios impresos
      .col-lg-3
        .row.bg3.borde-redondo.mx-1
          h3.mt-3.mb-3.text-white.text-center Medios alternativos

    separador
    #t_3_5.titulo-segundo.mb-4
      h2 3.5 Comunicación con los clientes
    p.mb-4 En la comunicación de los vendedores con los clientes cara a cara, se dan dos situaciones que se deben tener en cuenta para definir una venta, no tiene sentido que se apliquen todas las técnicas de venta adecuadas, sino están apoyadas por un excelente lenguaje oral y corporal.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Comunicación oral

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p.mb-3 La principal característica de este tipo de comunicación es la palabra hablada. Para el vendedor, esto es crucial en la interacción con los clientes. Sin embargo, no se trata de que el vendedor tenga una habilidad de persuasión extraordinaria, sino de mantener un equilibrio adecuado: hablar el 20 % del tiempo y escuchar el 80 %. Esta proporción permite, a través de las preguntas correctas, identificar las necesidades de los clientes y relacionarlas con los beneficios y ventajas del producto.
        p De acuerdo con Pérez et al. (2013) entre los objetivos de la comunicación y que deben ser tenidos en cuenta por el vendedor son:
      .col-lg-3
        .cajon.color-acento-contenido.p-4
          ul.lista-ul--color.fa-al
            li 
              i.fas.fa-check-circle
              span.mb-0 Informar, enseñar, adiestrar.
            li 
              i.fas.fa-check-circle
              span.mb-0 Estimular, animar, motivar.
            li 
              i.fas.fa-check-circle
              span.mb-0 Persuadir, convencer.
            li 
              i.fas.fa-check-circle
              span.mb-0 Averiguar, debatir, negociar.
            li 
              i.fas.fa-check-circle
              span.mb-0 Divertir, entretener (p. 90).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-5.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imagen9.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            br
            h4 Formas de comunicación oral
            br
            br
            p Según Pérez et al. (2012), la comunicación en un entorno laboral incluye varias formas de interacción, como el diálogo y el debate, el informe, la conferencia, la entrevista y la atención telefónica (p. 99). Para comunicarnos mejor, es fundamental escuchar activamente para captar y entender el mensaje de las partes. Además, es importante mostrar empatía, saber formular preguntas adecuadas y proporcionar retroalimentación o #[em feedback]. Estas habilidades facilitan una comunicación efectiva y enriquecen las relaciones laborales.    
            br
            br

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Comunicación no verbal
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Esta comunicación está formada por los movimientos, gestos, miradas y posturas del cuerpo a la hora de asumir una venta. En muchos casos una mala postura resulta en una venta no realizada, estas posturas pueden hacerse de manera involuntaria, conforme esté acostumbrado a la posición el cuerpo.
        .cajon.color-acento-contenido.p-4
          p ¿Qué significa? Que, si la persona está acostumbrada a asumir posturas inadecuadas, en una actividad de venta el cuerpo asume de manera involuntaria la posición de costumbre. 
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/imagen10.png', alt='')


</template>

<script>
export default {
  name: 'Tema3',
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
