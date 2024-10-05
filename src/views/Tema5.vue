<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Medición de la satisfacción del cliente
    
    .tarjeta--orange.banner.p-4.p-lg-0.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/banner.png', alt='')
        .col-lg-6
          p Realizar constantemente la comprobación del nivel de satisfacción de los clientes, se convierte en un elemento fundamental para diseñar acciones de mejoramiento en los procesos y actividades que lleva a cabo la empresa para alcanzar la plena satisfacción de las necesidades y expectativas de los clientes.
          p.fw-bold Si se desea implementar acciones de mejora, encaminadas a alcanzar la satisfacción del cliente, se hace indispensable conocer los procesos comerciales y operativos que se dan dentro de la empresa. 
          p El examinar detenidamente estos procesos (comerciales y operativos) tiene como finalidad la planeación de recursos, el aumento de la productividad, de la calidad o del mejoramiento de la competitividad en el mercado. 


    p.mb-4 Una lista básica de ellos podría ser:

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        ol.lista-ol--cuadro.lista-ol--separador.color-primario.fa-ul
          li.pb-3.mb-3
            .lista-ol--cuadro__vineta
              span 1
            | Oferta del servicio o producto.
          li.pb-3.mb-3
            .lista-ol--cuadro__vineta
              span 2
            | Admisión y entrega de pedidos.
          li.pb-3.mb-3
            .lista-ol--cuadro__vineta
              span 3
            | Proyección de nuevos clientes.
          li.pb-3.mb-3
            .lista-ol--cuadro__vineta
              span 4
            | Respuesta a sugerencias, quejas y reclamos.
          li.pb-3.mb-3
            .lista-ol--cuadro__vineta
              span 5
            | Indagación sobre empresas con igual idea de negocio.
          li.pb-3.mb-3
            .lista-ol--cuadro__vineta
              span 6
            | Planear estrategias de venta. 
          li.pb-3.mb-3
            .lista-ol--cuadro__vineta
              span 7
            span.mb-0 Realización de un plan de mercadeo (#[em marketing]).
          li.pb-3.mb-3
            .lista-ol--cuadro__vineta
              span 8
            | Creación o mejoramiento de productos o servicios. 
          li.pb-3.mb-3
            .lista-ol--cuadro__vineta
              span 9
            | Habilidad para definir ofertas y promociones. 
      .col-lg-6.col-md-7.mb-3.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img1.svg', alt='')
    
    p Tener claridad de las actividades y procedimientos que se lleva a cabo en la empresa permite la rápida identificación de dificultades, con el fin de poderla convertir en una posibilidad de mejoramiento; el reconocimiento por parte de todos los colaboradores facilita brindar una información oportuna y veraz a los clientes.
    p.mb-4 Si se desea medir la satisfacción del cliente, se debe estar atento y dar respuesta oportuna a: 
    
    TabsC.color-acento-contenido.mb-4(data-aos="fade-down")
      .p-4.py-md-5.bg3(titulo="Petición")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tabs1.png', alt='')
          .col-md-5
            h4 Petición
            p La solicitud que hace un cliente con relación al servicio que le prestan.
      .p-4.py-md-5.bg3(titulo="Queja")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tabs2.png', alt='')
          .col-md-5
            h4 Queja
            p La manifestación de inconformidad o insatisfacción, relacionado con el servicio o la atención que ha recibido. 
      .p-4.py-md-5.bg3(titulo="Reclamo")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tabs3.png', alt='')
          .col-md-5
            h4 Reclamo
            p La expresión de total rechazo al servicio o la atención recibida; el cliente considera que se llegó al desconocimiento de sus derechos.  
    
    p.mb-5 Estos tres elementos, se transforman no en una amenaza, por el contrario, se convierten en una oportunidad de mejorar, ya que permite llamar la atención sobre los aspectos en que están fallando las organizaciones. Es así como se debe asumir una actitud serena, atenta y de calma, que facilite la reflexión y retroalimentación con el fin de establecer acciones encaminadas al mejoramiento. 

    .bgimg5.mb-3(data-aos="fade-right")
      h3.pt-1 Servicio de información y atención al usuario (cliente o ciudadano)
    
    .row.mb-4
      .col-lg-9
        p Este servicio constituye un canal de comunicación e interacción directa con los usuarios, se encarga de establecer estrategias que midan la satisfacción de los clientes. Una de estas tácticas puede ser la atención directa, encuestas de satisfacción o la creación del buzón de sugerencias, que al igual que la encuesta, deben ser revisados constantemente con el fin de dar respuesta oportuna a la inconformidad o malestar.
        p.mb-4 El análisis, desde una mirada crítica y la reflexión sobre las acciones que generaron la insatisfacción, permite realizar acciones: 
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t5/tarjeta1.svg', alt='')
          .tarjeta.bg6.p-4.pt-5
            h4.text-center Correctivas
            p.text-center Encaminadas a que los hechos que provocaron la inconformidad no se repitan.  
      .col-md-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t5/tarjeta2.svg', alt='')
          .tarjeta.bg6.p-4.pt-5
            h4.text-center Preventivas
            p.text-center Diseñadas para evitar que sucedan situaciones que puedan afectar la labor de la empresa.
      .col-md-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t5/tarjeta3.svg', alt='')
          .tarjeta.bg6.p-4.pt-5
            h4.text-center Mejora continua
            p.text-center Gestiones que se efectúan a diario como parte de la búsqueda de la excelencia constante.
    
    p.mb-4 Gracias a estas estrategias las empresas pueden alcanzar un posicionamiento en el mercado, incursionar en nuevos negocios e inclusive innovar en el servicio o producto: 
    
    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-6
        .bg7.p-4.p-lg-5
          h3.text-center.mb-0 El cliente es el mejor aliado para las organizaciones que desean prosperar.
        

</template>

<script>
export default {
  name: 'Tema5',
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
