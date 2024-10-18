export default {
  global: {
    componenteFormativo: 'Ventas y comunicación',
    descripcionCurso:
      'Este componente formativo abarca de manera integral los aspectos esenciales de la venta, desde las herramientas y clasificación de vendedores, hasta el proceso, estrategias, técnicas. Se profundiza en las transacciones comerciales, incluyendo formas de pago, documentos y condiciones. Y como eje integrador, se explora a fondo el concepto de la comunicación, elementos, herramientas, tipos y medios, con un enfoque especial en la interacción con los clientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    /*imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],*/
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herramientas de la venta',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de vendedores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Proceso de la venta',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estrategias de ventas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Técnicas de la venta',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Venta consultiva',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Clínicas de venta',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Manejo de objeciones',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Transacciones comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '12.1',
            titulo: 'Formas de pago',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Documentos comerciales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Condiciones comerciales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Condiciones de entrega',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y elementos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas y funciones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de comunicación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Medios de comunicación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Comunicación con los clientes',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La venta',
      referencia: 'Westreicher, G. (2020). Ventas.',
      tipo: 'Página Web',
      link: 'https://economipedia.com/definiciones/ventas.html',
    },
    {
      tema: 'Condiciones de entrega',
      referencia: 'Coll, F. (2020). Transacción comercial.',
      tipo: 'Página Web',
      link: 'https://economipedia.com/definiciones/transaccion-comercial.html',
    },
    {
      tema: 'Comunicación',
      referencia: 'Peiró, R. (2021). Comunicación.',
      tipo: 'Página Web',
      link: 'https://economipedia.com/definiciones/comunicacion.html',
    },
    {
      tema: 'Comunicación',
      referencia:
        'ConectaDEL. (2021). Herramientas básicas para la comunicación aplicada a proyectos digitales y presenciales.',
      tipo: 'Página Web',
      link:
        'https://conectadel.ar/herramientas-basicas-para-la-comunicacion-aplicada-a-proyectos-digitales-y-presenciales/',
    },
  ],
  glosario: [
    {
      termino: 'Proceso de ventas',
      significado:
        '“El proceso de venta es la sucesión de pasos que una empresa realiza desde el momento en que intenta captar la atención de un potencial cliente hasta que la transacción final se lleva a cabo” (InboundCycle, 2020).',
    },
    {
      termino: 'Clínica de ventas',
      significado:
        'actividad de capacitación que implementan las empresas para mantener la fuerza de ventas en las habilidades de la técnica y el proceso de la venta adoptado por la empresa. ',
    },
    {
      termino: 'Cierre de ventas',
      significado:
        '“El cierre de ventas se refiere a una parte del proceso de ventas donde (después de haber presentado el producto o servicio y aclarado las dudas existentes) se tiende a cerrar la negociación y el prospecto de venta se convierte en cliente” (DocuSign, 2020).',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'tipo de comunicación que permite dialogar con calma y respeto, expresando lo que queremos decir, pero sin herir los sentimientos de las otras personas (González, 2021).',
    },
    {
      termino: 'Venta consultiva',
      significado:
        'tipo de venta en la que el vendedor también actúa como consultor. Más que vender a toda costa, el profesional escucha al posible cliente, comprende sus necesidades y buscar conjuntamente la solución más adecuada (Station, 2020).',
    },
    {
      termino: 'Técnicas de venta',
      significado:
        'serie de procedimientos, acciones y protocolos para lograr el resultado de ventas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Antevenio. (2020). Los mejores ejemplos del método AIDA para inspirarte. ',
      link:
        'https://www.antevenio.com/blog/2020/01/los-mejores-ejemplos-del-metodo-aida-para-inspirarte/',
    },
    {
      referencia:
        'Artal, C., M. (2010). Dirección de ventas. Organización del departamento de ventas y gestión de vendedores. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'DocuSign. (2020). 5 estrategias clave para facilitar el cierre de ventas.',
      link: 'https://www.docusign.mx/blog/cierre-de-ventas',
    },
    {
      referencia:
        'GestioPolis.com Experto. (2020). Documentos comerciales. Qué son, tipos, características y ejemplos.',
      link: 'https://www.gestiopolis.com/que-son-documentos-comerciales/ ',
    },
    {
      referencia:
        'Globalkam. (2021). Tipos de clientes: Cómo atenderlos para conectar en la venta. Globalkam. ',
      link: 'https://globalkamconsultoresretail.com/tipos-de-clientes/',
    },
    {
      referencia:
        'González, A., M. R. (2021). La comunicación asertiva, una habilidad fundamental para el convivir. Universidad Central. ',
      link: 'https://www.ucentral.edu.co/noticentral/comunicacion-asertiva',
    },
    {
      referencia:
        'Hair, J., Anderson, R., Mehta, R., y Babin, B. (2010). Administración de ventas. Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Igape-BicGalicia. (s. f.). Cómo elaborar un plan de marketing.',
      link:
        'http://www.igape.es/es/component/k2/item/417-como-elaborar-un-plan-de-marketing ',
    },
    {
      referencia:
        'Jobber, D., y Lancaster, G. (2021). Administración de ventas. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Lobato, F., De la Mata, M., y Rodríguez, S. (2010). Operaciones administrativas de compra-venta. MacMillan Profesional.',
      link: '',
    },
    {
      referencia:
        'Morfin, A. (2014). La importancia de las ventas en las empresas.',
      link:
        'https://es.scribd.com/document/339249965/La-Importancia-de-Las-Ventas-en-Las-Empresas',
    },
    {
      referencia:
        'Station, R. D. (2020). Todo sobre la venta consultiva: qué es, ventajas, pasos, cómo hacerla y habilidades para trabajar en el área. ',
      link: 'https://www.rdstation.com/blog/es/todo-sobre-la-venta-consultiva/',
    },
    {
      referencia:
        'Sy Corvo, H. (2019). Transacciones comerciales: características y ejemplos. Lifeder.',
      link: 'https://www.lifeder.com/transacciones-comerciales/',
    },
    {
      referencia:
        'Torres, V. (2014). Administración de ventas. Grupo Editorial Patria.',
      link: '',
    },
    {
      referencia: 'Westreicher, G. (2020). Ventas.',
      link: 'https://economipedia.com/definiciones/ventas.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johana Gómez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Alberto Pérez Posada',
          cargo: 'Instructor',
          centro: 'Centro de Comercio - Regional Antioquia',
        },
        {
          nombre: 'Esperanza Cardona Grisales',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Tecnológica de Servicios - Regional Valle',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñador instruccional',
          centro: 'Centro Agropecuario La Granja  - Regional Tolima',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrollador <i>full-stack</i> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animador y producción audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Falta ',
          cargo: 'Actividad didáctica',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'falta nombre',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'falta nombre',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
