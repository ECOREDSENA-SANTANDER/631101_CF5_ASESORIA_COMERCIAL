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

    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Concepto")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-6
                p.mb-3 Desde una perspectiva general Peiró (2021), dice que
                .row
                  .bloque-texto-c.bgmoradomedio.p-4
                    i.fas.fa-quote-right
                    h5.mb-2 “La comunicación es el intercambio de información que se produce entre dos o más individuos con el objetivo de aportar información y recibirla. En este proceso intervienen un emisor y un receptor, además del mensaje que se pone de manifiesto”.
                    p Peiró (2021)
              .col-lg-6
                img.mx-5(src='@/assets/curso/temas/tema3/imagen2.png', alt='')
            p.mb-3.mt-3 Por otro lado, la comunicación para la empresa es según Pérez et al. (2013) es:
            h5 “una actividad organizada y desarrollada por personas, que, además, persigue obtener beneficios, es imprescindible” (p. 48). 
          .row.col-xl-11.m-auto(titulo="Elementos")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-3 Los elementos que intervienen en el proceso de la comunicación según Peiró (2021) son esenciales para que el proceso se lleve a cabo de manera eficaz; y es necesario que intervengan una serie de elementos. Estos son los principales:
                .row.align-items-center.justify-content-center
                  .col-lg-8
                    .titulo-sexto.color-secundario.mb-4
                      h5 Figura 6. 
                      | Elementos de la comunicación
                    img(src='@/assets/curso/temas/tema3/fig1.png', alt='La figura presenta dos personas ubicadas a cada costado, ilustrando el proceso de comunicación. Entre ellas se destacan los elementos que hacen parte de este proceso, definidos a través de puntos calientes: Emisor: la persona que emite el mensaje. Receptor: la persona o personas que reciben el mensaje del emisor. Mensaje: es la información, los datos que transmite el emisor para que lleguen al receptor de forma óptima. Canal: es el medio por el que se transmite el mensaje. Pueden ser los diferentes medios de comunicación masiva, internet u otro medio. Código: son el conjunto de símbolos y signos que configuran el mensaje. Contexto: es el ambiente, lugar, tiempo desde donde se transmite el mensaje.')

    separador
    #t_3_2.titulo-segundo.mb-4
      h2 3.2 Herramientas y funciones



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
