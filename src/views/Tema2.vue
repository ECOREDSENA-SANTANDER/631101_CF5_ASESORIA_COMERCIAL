<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Transacciones comerciales

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-7
        p Cuando el proceso de la venta finaliza con el consentimiento de las partes de la aceptación del bien o servicio, se inicia un proceso de formalización de ese acuerdo, y las transacciones comerciales, dan respuesta a esos acuerdos y transferencia de la propiedad. 
        p Las transacciones comerciales abarcan todas las actividades económicas que se realizan entre empresas mediante una serie de movimientos comerciales en el mercado, donde compradores y vendedores intercambian bienes y servicios para satisfacer sus necesidades.
        p Pero ¿qué son las transacciones comerciales? 
        .cajon.color-acento-contenido.p-4.mb-2
          .h5.ps-3 Coll (2020)
          p.ps-3 Una transacción comercial es una operación mercantil en la que un vendedor y un comprador acuerdan la transferencia de la propiedad sobre algo, a cambio de un precio previamente acordado.
        .cajon.color-acento-contenido.p-4.mb-2
          .h5.ps-3 Sy (2019)
          p.ps-3 Son actividades o eventos económicos que implican interacciones entre dos o más partes, en las que se intercambian productos, servicios o valores por algún tipo de retribución, con frecuencia en la forma de dinero.
        p.mb-0 Los elementos que hacen parte de una transacción comercial de acuerdo con Coll (2020):
      .col-10.col-md-10.col-lg-5
        img(src='@/assets/curso/temas/tema2/imagen1.png', alt='')

    .row.justify-content-center(data-aos="fade-down")
      .col-md-6.col-lg-3.col-sm-12.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tar1-1.png' alt='').img120
          .tarjeta.nueva
            .p-3.mt-5
              h4.mb-4.text-center El comprador
              p.mb-0.text-center La persona que necesita el bien o servicio. 
      .col-md-6.col-lg-3.col-sm-12.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tar1-2.png' alt='').img120
          .tarjeta.nueva
            .p-3.mt-5
              h4.mb-4.text-center El vendedor
              p.mb-0.text-center Es la persona o entidad que ofrece el bien o servicio. Este puede ser un sujeto de producción o distribución o ser un sujeto de consumo.
      .col-md-6.col-lg-3.col-sm-12.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tar1-3.png' alt='').img120
          .tarjeta.nueva
            .p-3.mt-5
              h4.mb-4.text-center El componente monetario
              p.mb-0.text-center Este pago se puede realizar de contado o en efectivo.
      .col-md-6.col-lg-3.col-sm-12.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tar1-4.png' alt='').img120
          .tarjeta.nueva
            .p-3.mt-5
              h4.mb-4.text-center.mx-5 El bien o servicio
              p.mb-0.text-center  Es el objeto de la transacción entre el comprador y el vendedor.

    p.mb-4 En ocasiones, dependiendo de la complejidad de la transacción realizada, se involucran otras actividades que forman parte del servicio, como la entrega a domicilio, seguros u otros.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-5.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/imagen2.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            br
            h4 Características de una transacción comercial
            br
            br
            p Toda transacción comercial tiene consigo unas maneras de realizarse que la distinguen. Sy (2019), señala las siguientes características alrededor de las transacciones comerciales.      
            br
            br

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-8
        ul.lista-ul--color.fa-al
          li 
            i.fas.fa-check-circle
            span.mb-0 Es un evento monetario.      
          li 
            i.fas.fa-check-circle
            span.mb-0 Representa para las partes una entrada o salida de activo, pasivo o patrimonio neto.    
          li 
            i.fas.fa-check-circle
            span.mb-0 Las transacciones pertenecen al negocio, no al propietario ni a ninguna otra persona que administre el negocio.   
          li 
            i.fas.fa-check-circle
            span.mb-0 Las transacciones se conforman por dos partes, quien compra y quien vende.  
          li 
            i.fas.fa-check-circle
            span.mb-0 Existe una persona autorizada. Es decir, una persona que posee la capacidad para transferir el capital o la propiedad, dependiendo de si es comprador o vendedor. 
          li 
            i.fas.fa-check-circle
            span.mb-0 Debe estar soportado con un documento legal: factura, cheque, letras de cambio, seguros, notas, entre otros.  
      .col-sm-12.col-md-12.col-lg-3
        img(src='@/assets/curso/temas/tema2/imagen3.png', alt='')




 




</template>

<script>
export default {
  name: 'Tema2',
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
