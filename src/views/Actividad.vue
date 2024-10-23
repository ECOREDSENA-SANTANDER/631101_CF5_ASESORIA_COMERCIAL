<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Ventas y comunicación',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Apropiarse de los conocimientos asociados a la venta y las transacciones comerciales, así como adquirir los necesarios para una comunicación efectiva.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Según el ciclo de la venta, ¿cuál es el primer paso clave en el proceso de prospección?',
          imagen: require('@/assets/actividad/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar una lista de clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar los posibles clientes en perspectiva.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Hacer una visita inicial.', esCorrecta: false },
            { id: 'd', texto: 'Cerrar la venta.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de ventas se caracteriza por usar una red de distribuidores que pueden reclutar a otros para vender productos?',
          imagen: require('@/assets/actividad/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Venta personal.', esCorrecta: false },
            { id: 'b', texto: 'Venta multinivel.', esCorrecta: true },
            { id: 'c', texto: 'Comercio electrónico.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Venta directa al consumidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la principal ventaja del comercio electrónico para las empresas?',
          imagen: require('@/assets/actividad/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proporciona una red de distribuidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilita transacciones globales rápidas y seguras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Depende únicamente de la interacción personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requiere siempre una tienda física.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una de las etapas importantes de la venta es la presentación, donde se deben resaltar los beneficios para el cliente.',
          imagen: require('@/assets/actividad/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Una de las etapas importantes de la venta es la presentación, donde se deben resaltar los beneficios para el cliente.',
          imagen: require('@/assets/actividad/img1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué papel juega la comunicación efectiva en el proceso de venta?',
          imagen: require('@/assets/actividad/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantiza que los vendedores cumplan con sus metas personales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilita la comprensión de las necesidades del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Mejora únicamente la relación interna entre los vendedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumenta la cantidad de productos vendidos sin esfuerzo adicional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué función cumple la productividad en ventas para los vendedores?',
          imagen: require('@/assets/actividad/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mejorar únicamente los resultados financieros de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar un control eficiente del tiempo y los recursos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Generar una relación más cercana entre el vendedor y el cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar la cantidad de productos ofrecidos sin planificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cómo afecta la claridad en las comunicaciones internas de una empresa al proceso de ventas?',
          imagen: require('@/assets/actividad/img4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Genera un aumento inmediato en las ventas sin importar otros factores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilita la coordinación y alineación entre el equipo de ventas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reduce la importancia del entrenamiento en técnicas de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hace que los clientes dependan más de la publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La transparencia en una transacción comercial depende exclusivamente de la relación del vendedor con el cliente.',
          imagen: require('@/assets/actividad/img1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Un vendedor efectivo utiliza la comunicación como una herramienta para comprender las necesidades del cliente y ofrecer soluciones adecuadas.',
          imagen: require('@/assets/actividad/img2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
