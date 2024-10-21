<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
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

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Tipo de transacciones
        
    p Las transacciones comerciales, se componen de transacciones a contado que se realizan en el momento que se procesa la compra, y a crédito, aun cuando el comprador recibe el bien o servicio, el vendedor lo recibe en un plazo definido. 
    p.mb-4 A continuación, se referencian algunos ejemplos de transacciones comerciales según Sy (2019):

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-12.col-md-12.col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row.align-items-center.justify-content-center
            .col-sm-12.col-md-12.col-lg-6.mx-5
              ol.lista-ol--cuadro.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span a
                  | Comprar el seguro a unaempresa aseguradora.
                li 
                  .lista-ol--cuadro__vineta
                    span b
                  | Comprar inventario de un proveedor.
                li 
                  .lista-ol--cuadro__vineta
                    span c
                  | Vender productos a un cliente por dinero en efectivo.
                li 
                  .lista-ol--cuadro__vineta
                    span d
                  | Vender productos a un cliente a crédito.
                li 
                  .lista-ol--cuadro__vineta
                    span e
                  | Pago de salarios a empleados.
                li 
                  .lista-ol--cuadro__vineta
                    span f
                  | Obtención de un préstamo a entidades.
                li 
                  .lista-ol--cuadro__vineta
                    span g
                  | Vender acciones a un inversor.
            .col-sm-12.col-md-10.col-lg-4
              img(src='@/assets/curso/temas/tema2/imagen4.png', alt='')

    p.mb-4 Los documentos que utilizan en la venta tienen dos direcciones: las que realiza la empresa o interna, y las que recibe el comprador o externa. En la siguiente tabla se describe el proceso de la transacción comercial de acuerdo con Lobato et al. (2010).
 
    .row
      .titulo-sexto.color-secundario.mb-4
        h5 Tabla 1. 
        | Relaciones documentales entre comprador y vendedor

      .tabla-a.color-acento-contenido.mb-4
        table
          caption Nota. Tomada de Lobato et al. (2010)
          thead
            tr
              th.bg3.text-white Operación
              th.bg3.text-white Documento
              th.bg3.text-white Emisor
              th.bg3.text-white Receptor
          tbody
            tr
              td El comprador pide información al vendedor
              td Petición de ofertas
              td Comprador
              td Vendedor
            tr
              td.bg2 El vendedor informa al cliente
              td.bg2 Catálogo y tarifa de precios
              td.bg2 Vendedor
              td.bg2 Comprador
            tr
              td El comprador pide productos
              td Pedido
              td Vendedor
              td Comprador
            tr
              td
              td Aceptación de pedido
              td Vendedor
              td Comprador
            tr
              td.bg2 El vendedor envía la mercancía
              td.bg2 Albarán
              td.bg2 Vendedor
              td.bg2 Comprador
            tr
              td.bg2 
              td.bg2 Nota de gastos
              td.bg2 Transportista
              td.bg2 Vendedor / Comprador
            tr
              td.bg2 
              td.bg2 Carta de portes
              td.bg2 Aseguradora
              td.bg2 Vendedor / Comprador
            tr
              td.bg2
              td.bg2 Póliza de seguros
              td.bg2 Vendedor
              td.bg2 Comprador
            tr
              td El vendedor envía la mercancía
              td Factura
              td Vendedor
              td Comprador
            tr
              td 
              td Recibo
              td Vendedor
              td Comprador
            tr
              td 
              td Letra de cambio
              td Comprador
              td Vendedor
            tr
              td 
              td Cheque
              td Comprador
              td Vendedor
            tr
              td 
              td Pagaré
              td Comprador
              td Vendedor
            tr
              td.bg2 El vendedor liquida el IVA
              td.bg2 Liquidaciones de IVA
              td.bg2 Vendedor
              td.bg2 Hacienda pública

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Proceso de una transacción comercial

    p El registro de una transacción comercial debe realizarse siguiendo los protocolos de la empresa, siendo preciso, cuidadoso y metódico. Este proceso involucra a los departamentos de contabilidad, ventas y otras áreas interesadas. Los documentos que respaldan la transacción son documentos financieros que sirven de soporte para la contabilidad, entre ellos cheques, tarjetas de crédito, tarjetas de débito y pagos por PSE. 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/icono.svg', alt='')
        h3.mb-0.ms-2 Soportes que apoyan

    p.mb-4 El principal soporte de una transacción comercial, según las leyes de Colombia, es la factura. Esta es definida por el artículo 772 del Código de Comercio colombiano como un título valor que el vendedor o prestador del servicio puede librar y entregar o remitir al comprador o beneficiario del servicio. En Colombia, los contribuyentes obligados a emitir facturas son:

    .row.mb-4
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 1
          p.text-center.p-3.mb-5 Responsables del régimen común.
          p.mb-4
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 2
          p.text-center.p-1.mb-0 Los señalados por la Dirección de Impuestos y Aduanas Nacionales - DIAN, para declarar vía electrónica.
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 3
          p.text-center.p-3.mb-4 Los proveedores de tecnología, tipógrafos y litógrafos.
      .col-md-12.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-morado-claro.p-4
          .tarjeta-numerada__numero.color-morado-claro
            .h2 4
          p.text-center.p-3.mb-5 Los responsables del impuesto al consumo.

    p.mb-4 Otros documentos que apoyan las transacciones comerciales son:

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row.align-items-center.justify-content-center
            .col-sm-12.col-md-12.col-lg-4
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Propuesta comercial.     
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Lista de precios.    
                li 
                  i.fas.fa-check-circle
                  span.mb-0 La orden de pedido.   
                li 
                  i.fas.fa-check-circle
                  span.mb-0 La remisión de la mercancía. 
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Pólizas de seguros. 
            .col-sm-12.col-md-12.col-lg-3
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-check-circle
                  span.mb-0 La orden de cargue.    
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Notas débitos.  
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Notas créditos.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Factura.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Factura electrónica.
            .col-sm-12.col-md-10.col-lg-3
              img(src='@/assets/curso/temas/tema2/imagen5.png', alt='')

    separador
    #t_2_1.titulo-segundo.mb-4
      h2 2.1 Formas de pago

    p.mb-4 Según Lobato et al. (2010), las diversas formas para el pago en las transacciones comerciales son:

    .row
      .col-sm-12.col-md-12.col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4
          .row.mx-3
            .col-sm-12.col-md-12.col-lg-8
              h5 De contado:
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Entrega de dinero en efectivo.   
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Domiciliación bancaria.  
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Ingreso en efectivo en cuenta corriente. 
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Cobro y pago a través del servicio de correos.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Transferencia bancaria.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Medios electrónicos o pagos online.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Cheques.
            .col-sm-12.col-md-12.col-lg-4
              h5 A crédito:
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Letra de cambio.   
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Pagaré. 
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Tarjetas de créditos.
      .col-sm-12.col-md-10.col-lg-5
        img.mt-5(src='@/assets/curso/temas/tema2/imagen6.png', alt='')

    separador
    #t_2_2.titulo-segundo.mb-4
      h2 2.2 Documentos comerciales

    p Toda actividad mercantil está respaldada por documentos comerciales, que pueden ser físicos o digitales, de acuerdo con las normas establecidas por la ley. Estos documentos permiten a las personas y empresas tener un control de cada transacción realizada, sirviendo como prueba de las compras efectuadas. Se recomienda archivar o guardar los documentos comerciales por diez (10) años desde la fecha de emisión del documento. 
    p.mb-4 Su importancia radica en las siguientes propiedades:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row.justify-content-center.mx-5
            .col-sm-12.col-md-12.col-lg-11
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Registro de la relación jurídica de la transacción con derechos y obligaciones. 
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Medio de prueba de la transacción de comercio realizada.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 A través de ellos se inicia el registro de las operaciones contables.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 
                  Permiten el control de las operaciones practicadas por la empresa (GestioPolis.com Experto, 2020).
  
    p.mb-4 Es así como estos documentos tienen la siguiente clasificación según GestioPolis.com Experto (2020):

    .row
      .col-lg-4.col-md-12.col-sm-12
        img(src='@/assets/curso/temas/tema2/imagen7.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Documentos comerciales negociables")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Se pueden convertir en flujo de caja o efectivo. Normalmente el poseedor puede realizar transacciones soportados en esos documentos. Como caso de ejemplo: pagaré, cheque, la letra de cambio, la libranza, la factura cambiaria u otro documento con estas características.
          .row.col-xl-11.m-auto(titulo="Documentos comerciales no negociables")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Sirven de soporte a la transacción realizada, el poseedor no puede realizar transacciones con ellos, y son: la cotización, el pedido, la remisión, la factura, el recibo de caja, el comprobante de pago, el recibo de consignación y las notas débito y crédito.
          .row.col-xl-11.m-auto(titulo="Documentos privados")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Son los suscritos entre las partes sin intervención de notarios, jueces o funcionarios.
          .row.col-xl-11.m-auto(titulo="Documentos públicos")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Son los realizados por los notarios o funcionarios judiciales.
          .row.col-xl-11.m-auto(titulo="Documentos informativos")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Aquellos que suministran información sobre el estado de la mercancía y sus generalidades como su valor, condiciones de pago, entre otros.
          .row.col-xl-11.m-auto(titulo="Documentos de soporte")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-12
                p.mb-0 Son utilizados como prueba de una acción realizada y para pagar o respaldar una obligación monetaria.

    separador
    #t_2_3.titulo-segundo.mb-4
      h2 2.3 Condiciones comerciales

    p Cuando se está en el proceso de la venta, entre el vendedor y el cliente, dependiendo el nivel o complejidad de la negociación, se definirán unos acuerdos, procedimientos y normas siguiendo la ley vigente que guiarán las futuras transacciones comerciales. 
    p.mb-4 Estas condiciones comerciales entre la empresa o vendedor y cliente o comprador, que guiarán las relaciones pueden ser:

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-6
        ol.lista-ol--cuadro.fa-ol
          li 
            .lista-ol--cuadro__vineta
              span 1
            span.mb-0 #[b Los pedidos.]
          p.ps-4 Se fijará cómo será aceptado el pedido, quién lo firmará y lo sellará, los plazos para ser entregados.
          li 
            .lista-ol--cuadro__vineta
              span 2
            span.mb-0 #[b Los precios y descuentos convenidos.]
          p.ps-4 Si los precios incluyen el transporte, los tipos de descuentos a otorgar, los impuestos según la ley.
          li 
            .lista-ol--cuadro__vineta
              span 3
            span.mb-0 #[b Los plazos de pago.]
          p.ps-4.mb-0 Las fechas y descuentos según el cumplimiento del pago.
          p.ps-4 Ejemplo: plazo de 15 o 30 días a partir de la fecha de la factura con un descuento por pronto pago del 3 %.
          li 
            .lista-ol--cuadro__vineta
              span 4
            span.mb-0 #[b Reclamaciones.]
          p.ps-4 Por defectos de la mercancía.
          li 
            .lista-ol--cuadro__vineta
              span 5
            span.mb-0 #[b Cupos de crédito otorgados.]
          p.ps-4 Según la referencia comercial.
          li 
            .lista-ol--cuadro__vineta
              span 6
            span.mb-0 #[b Otros tipos de condiciones.]
          p.ps-4 Sobre fletes, despachos, a quién se le hará el pago, entre otros.
      .col-sm-12.col-md-12.col-lg-4
        img(src='@/assets/curso/temas/tema2/imagen8.png', alt='')

    separador
    #t_2_4.titulo-segundo.mb-4
      h2 2.4 Condiciones de entrega

    p Uno de los aspectos más importantes para definir entre el vendedor y el comprador, son las condiciones en la entrega de la mercancía, que incluye:

    .row.justify-content-center.align-items-center
      .col-sm-12.col-md-12.col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row.align-items-center.justify-content-center
            .col-sm-12.col-md-12.col-lg-5
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Si la mercancía es llevada hasta la dirección del solicitante.   
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Si incluye los fletes, condiciones de la mercancía, plazos y posibles demoras en la entrega.
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Riesgos asociados a la entrega.  
                li 
                  i.fas.fa-check-circle
                  span.mb-0 Mora en la aceptación de la mercancía.
            .col-sm-12.col-md-12.col-lg-4
              img(src='@/assets/curso/temas/tema2/imagen9.png', alt='')

    p Cada una de estas condiciones depende de la política de servicio del vendedor. Para envíos internacionales, las relaciones entre vendedor y comprador se rigen por las normas internacionales de entrega conocidas como #[b INCOTERMS], de uso y reconocimiento mundial. Estos términos, establecen con precisión los gastos que el exportador debe asumir, permitiendo su identificación e incorporación en el precio de exportación de la mercancía.

    p Para más información, se invita a visitar el enlace #[b “Transacción comercial”] que se encuentra en el material complementario.



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
