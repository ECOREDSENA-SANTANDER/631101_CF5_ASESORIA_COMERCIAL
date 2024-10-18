<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p En este componente, tendrá la oportunidad de abordar los aspectos generales de la venta y las transacciones comerciales, así como adquirir los conocimientos necesarios para una comunicación efectiva que permita a los vendedores fortalecer el proceso y su utilidad. A continuación, le invitamos a consultar el video de introducción: 

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-10
        figure
          .video
            iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/uxUsQS5gvQs?si=CiYDKHqzFJe5H84g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: Ventas y comunicación: introducción

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
