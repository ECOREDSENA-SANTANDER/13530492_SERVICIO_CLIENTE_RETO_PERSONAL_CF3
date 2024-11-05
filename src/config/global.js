export default {
  global: {
    componenteFormativo: 'Interacción con el cliente',
    descripcionCurso:
      'La inteligencia emocional, el manejo de las emociones y las habilidades blandas como la solución de conflictos, representan estrategias claras y eficaces para reducir la carga emocional de un colaborador de servicio al cliente. Adicionalmente, las habilidades de básicas de negociación que pueda tener esta persona benefician tanto a la empresa como al cliente logrando, así un cliente satisfecho y que muy seguramente volverá y/o recomendará el servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        titulo: 'Inteligencia emocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Cerebro emocional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Base de la comunicación de las emociones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Naturaleza de la inteligencia emocional',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Inteligencia aplicada',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Alfabetización emocional',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Momentos de verdad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Una correcta actitud',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Actitudes para la negociación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de negociación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Habilidades básicas para la negociación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Etapas de la negociación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Claves para garantizar una negociación exitosa',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Entorno de la negociación',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'El conflicto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de conflictos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elementos del conflicto',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Fuentes del conflicto organizacional',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Variables del conflicto',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Manejo y resolución',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Medición de la satisfacción del cliente',
        desarrolloContenidos: true,
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/13530492_CF3_DU.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Conflicto',
      significado:
        'Coexistencia de tendencias contradictorias en el individuo, capaces de generar angustia y trastornos neuróticos.',
    },
    {
      termino: 'Momento brillante',
      significado:
        'Es aquel en que se genera un acto comunicativo agradable, empático, donde el cliente se siente atendido, acogido. La percepción del cliente es muy favorable.',
    },
    {
      termino: 'Momentos críticos',
      significado:
        'Es aquel en el que se presentan interferencias que obstaculizan y distorsionan el acto comunicativo, son situaciones negativas, donde el cliente se siente desatendido, ignorado, despreciado, rechazado. La percepción del cliente es muy desfavorable, afecta la imagen de la organización generando pérdidas.',
    },
    {
      termino: 'Respuesta emocional conductual',
      significado:
        'Hace referencia a movimientos musculares que responden a una situación.',
    },
    {
      termino: 'Respuesta emocional autónoma',
      significado: 'Genera una movilización rápida de energía.',
    },
    {
      termino: 'Respuesta emocional hormonal',
      significado: 'La producción de hormonas aumenta el flujo sanguíneo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barón, R y Byrne, B. (1998). Psicología social. (8a ed.). Madrid, España: Prentice Hall',
      link: '',
    },
    {
      referencia:
        'Carlson, N. (1996). Fundamentos de psicología fisiológica. México: Prentice Hall',
      link: '',
    },
    {
      referencia:
        'Carlzon, J. (1991). El momento de la verdad. Madrid, España: Ediciones Díaz de Santos. ',
      link: '',
    },
    {
      referencia:
        'Fundación Compromiso. (2006). Manejo de conflicto. Buenos Aires, Argentina: Autor.',
      link: '',
    },
    {
      referencia:
        'Gardner, H. (1998). Inteligencias múltiples: La teoría en práctica. Barcelona, España: Paidos Ibérica.',
      link: '',
    },
    {
      referencia:
        'Guerra, C. (2008). La negociación y el manejo de conflictos en las organizaciones. Brasil: UVM-San Ángel.',
      link: '',
    },
    {
      referencia:
        'Negociación efectiva con clientes: Cómo hacerlo correctamente. (2023, septiembre 3). Supered.',
      link:
        'https://supered.es/negociacion-efectiva-con-clientes-como-hacerlo-correctamente/?user_comments=1',
    },
    {
      referencia:
        'Merani, A. (1979). Diccionario de psicología. Barcelona, España: Grijalbo. ',
      link: '',
    },
    {
      referencia:
        'Morris, C. (1997). Psicología. México D.C., México: Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Pascal, A. (2003). Técnicas de negociación. México: Instituto Tecnológico y de Estudios Superiores de Monterrey Vicerrectoría Académica del Sistema Tecnológico.',
      link: '',
    },
    {
      referencia:
        'Robbin, S. (1997). Comportamiento organizacional. (7a ed.). Madrid, España: Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Universidad del CEMA. (2012). Negociación Organizacional. Consultado el 16 de julio de 2015, en ',
      link: 'https://ucema.edu.ar/educacion-ejecutiva/negociacion',
    },
    {
      referencia:
        'Viveros, J. (2003). Liderazgo, comunicación efectiva y resolución de conflictos. Santiago de Chile, Chile: Organización Internacional del Trabajo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Luis Aguilar Camacho',
          cargo: 'Experto temático',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Marina Jaramillo Portillo',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lucy Yaneth Rache Pérez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Elsa Vargas Báez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luz Clarena Arias González',
          cargo: 'Guionista - línea de producción',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <em>full stack</em> junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Lizeth Lozada Diaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
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
