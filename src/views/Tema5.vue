<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Medición de la satisfacción del cliente
    
    //banner

    .row.mb-5
      .col-lg-7
        p.mb-3 Una lista básica de ellos podría ser:
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Oferta del servicio o producto.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Admisión y entrega de pedidos.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Proyección de nuevos clientes.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Respuesta a sugerencias, quejas y reclamos.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Indagación sobre empresas con igual idea de negocio.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Planear estrategias de venta. 
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Realización de un plan de mercadeo (marketing).
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Creación o mejoramiento de productos o servicios. 
          li 
            .lista-ol--cuadro__vineta
              span 9
            | Habilidad para definir ofertas y promociones. 
      .col-lg-5
        img(src='@/assets/curso/temas/t5/img1.svg', alt='')
    
    p.mb-3 Tener claridad de las actividades y procedimientos que se lleva a cabo en la empresa permite la rápida identificación de dificultades, con el fin de poderla convertir en una posibilidad de mejoramiento; el reconocimiento por parte de todos los colaboradores facilita brindar una información oportuna y veraz a los clientes.
    p.mb-4 Si se desea medir la satisfacción del cliente, se debe estar atento y dar respuesta oportuna a: 
    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Petición")
        .row.justify-content-center.align-items-center.bg3
          .col-md-6.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tabs1.png', alt='')
          .col-md-6
            h4 Petición
            p La solicitud que hace un cliente con relación al servicio que le prestan.

      .py-3.py-md-4(titulo="Queja")
        .row.justify-content-center.align-items-center.bg3
          .col-md-6.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tabs2.png', alt='')
          .col-md-6
            h4 Queja
            p La manifestación de inconformidad o insatisfacción, relacionado con el servicio o la atención que ha recibido. 

      .py-3.py-md-4(titulo="Reclamo")
        .row.justify-content-center.align-items-center.bg3
          .col-md-6.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tabs3.png', alt='')
          .col-md-6
            h4 Reclamo
            p La expresión de total rechazo al servicio o la atención recibida; el cliente considera que se llegó al desconocimiento de sus derechos.  
    
    p.mb-3 Estos tres elementos, se transforman no en una amenaza, por el contrario, se convierten en una oportunidad de mejorar, ya que permite llamar la atención sobre los aspectos en que están fallando las organizaciones. Es así como se debe asumir una actitud serena, atenta y de calma, que facilite la reflexión y retroalimentación con el fin de establecer acciones encaminadas al mejoramiento. 

    .bgimg5.mb-3
      h4.pt-1 Servicio de información y atención al usuario (cliente o ciudadano)
    
    .row.mb-4
      .col-lg-9
        p.mb-2 Este servicio constituye un canal de comunicación e interacción directa con los usuarios, se encarga de establecer estrategias que midan la satisfacción de los clientes. Una de estas tácticas puede ser la atención directa, encuestas de satisfacción o la creación del buzón de sugerencias, que al igual que la encuesta, deben ser revisados constantemente con el fin de dar respuesta oportuna a la inconformidad o malestar.
        p.mb-4 El análisis, desde una mirada crítica y la reflexión sobre las acciones que generaron la insatisfacción, permite realizar acciones: 
    
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t5/tarjeta1.svg', alt='')
          .tarjeta.bg6
            h2.text-center Correctivas
            p.text-center Encaminadas a que los hechos que provocaron la inconformidad no se repitan.  
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t5/tarjeta2.svg', alt='')
          .tarjeta.bg6
            h2.text-center Preventivas
            p.text-center Diseñadas para evitar que sucedan situaciones que puedan afectar la labor de la empresa.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t5/tarjeta3.svg', alt='')
          .tarjeta.bg6
            h2.text-center Mejora continua
            p.text-center Gestiones que se efectúan a diario como parte de la búsqueda de la excelencia constante.
    
    p.mb-4 Gracias a estas estrategias las empresas pueden alcanzar un posicionamiento en el mercado, incursionar en nuevos negocios e inclusive innovar en el servicio o producto: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.bg7
        p.text-center #[b El cliente es el mejor aliado para las organizaciones que desean prosperar. ]
        
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
