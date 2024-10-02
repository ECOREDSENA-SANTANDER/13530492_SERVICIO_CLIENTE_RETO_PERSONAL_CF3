<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 La negociación
    
    .row.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/t3/img1.png', alt='')
      .col-lg-7
        p.mb-2 La negociación es una comunicación entre dos o más sujetos, cuyo fin es llegar a encuentros cordiales, es decir, buscar puntos comunes, que beneficie a las partes (empresa-clientes) y que permitan llegar a una satisfacción mutua. En esta actividad hay que aplicar muy bien la escucha activa y la comunicación asertiva, por tanto, se trabaja en la construcción de ambientes de colaboración y cooperación, que faciliten llegar a realizar alianzas en beneficio y compromiso entre las partes. 
        .row
          .col-lg-11
            p A menudo los clientes tienen objetivos o intereses diferentes, a veces opuestos a los de la empresa, por esto se hace necesario entrar a realizar procesos de negociación, es decir, entrar a conciliar para llegar a un punto de acuerdo que permita llenar las expectativas de los clientes.
          .col-lg-1 
            img(src='@/assets/curso/temas/t3/img2.svg', alt='')
    p.mb-4 La habilidad para llevar a cabo una negociación puede mejorar mucho si se desarrolla un acercamiento gradual mediante concesiones que beneficien a ambas partes. 
    
    .row.mb-4
      img(src='@/assets/curso/temas/t3/img3.svg', alt='')
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Actitudes para la negociación 
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t3/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Si se quiere una negociación adecuada #[b se deben evitar actitudes como: la intimidación, puntos de vista intransigentes, actuaciones agresivas y propender por el diálogo, la escucha activa, la argumentación, el alcanzar un objetivo común.] Considerar los propios intereses y los de los otros facilita el proceso de negociación. 
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Tipos de negociación 
    
    p.mb-4 Según los intereses que se manejen dentro de la negociación se pueden establecer cuatro tipos: 
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.bg4.p-5(titulo="Ganar - ganar")
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-3 Ganar - ganar
                p.mb-3 Cuando la empresa y cliente se benefician mutuamente.  
              .col-lg-5
                img(src='@/assets/curso/temas/t3/tab1.png', alt='')
          .tarjeta.bg4.p-5(titulo="Ganar - perder")
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-3 Ganar - perder
                p.mb-3 Implica a la empresa, representada en el vendedor otorgar beneficios que no tenía contemplados con el fin de cerrar la transacción con el cliente.   
              .col-lg-5
                img(src='@/assets/curso/temas/t3/tab2.png', alt='')
          .tarjeta.bg4.p-5(titulo="Suma cero")
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-3 Suma cero
                p.mb-3 Cuando ambas partes deben ceder en sus pretensiones para finiquitar la transacción.  
              .col-lg-5
                img(src='@/assets/curso/temas/t3/tab3.png', alt='')
          .tarjeta.bg4.p-5(titulo="Perder - perder")
            .row.justify-content-center.align-items-center
              .col-lg-7
                h4.mb-3 Perder - perder
                p.mb-3 Ninguna de las partes establece acuerdo y por tanto desisten de la transacción.  
              .col-lg-5
                img(src='@/assets/curso/temas/t3/tab4.png', alt='')
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/img5.svg', alt='')
    
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Habilidades básicas para la negociación 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src='@/assets/curso/temas/t3/img6.svg', alt='')
      .col-lg-9
        p Un proceso de negociación, en cualquier contexto, requiere que los actores que intervengan cuenten con habilidades básicas que garanticen un proceso ágil, confiable, transparente, respetuoso y justo. Entre estas están: entusiasmo, prudencia, respeto, paciencia, persuasión, agilidad para tomar decisiones, imparcialidad, confianza en sí mismo, recursividad, creatividad, inteligencia emocional. 
    
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Etapas de la negociación 
    
    p.mb-4 Un proceso de negociación debe darse en un tiempo, en el desarrollo de un protocolo, unas etapas que se deben llevar a cabo para facilitar los acuerdos. Entre las etapas de la negociación están:
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Preparación" :icono="require('@/assets/curso/temas/t3/tabsb1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Preparación
            p Una buena preparación define el sendero de una excelente negociación. #[b Es necesario diseñar la estrategia, planear toda la logística requerida] (equipos, lugar, accesos a internet, refrigerios, documentación, entre otras).     
          .col-md-6
              img(src='@/assets/curso/temas/t3/img7.png', alt='')  
      .py-4.py-md-5(titulo="Apertura" :icono="require('@/assets/curso/temas/t3/tabsb2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Apertura
            p Se debe generar un clima de confianza, mediante la presentación de los actores presentes en la negociación y se establecen las reglas de juego.      
          .col-md-6
              img(src='@/assets/curso/temas/t3/img8.png', alt='')
      .py-4.py-md-5(titulo="Desarrollo" :icono="require('@/assets/curso/temas/t3/tabsb3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Desarrollo
            p Durante esta etapa se efectúan la presentación de las propuestas de cada una de las partes, se establecen algunas concesiones y los participantes aplican estrategia de negociación.      
          .col-md-6
              img(src='@/assets/curso/temas/t3/img9.png', alt='')
      .py-4.py-md-5(titulo="Cierre" :icono="require('@/assets/curso/temas/t3/tabsb4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Cierre
            p Se fija un acuerdo definitivo, informando a todas las partes los compromisos adquiridos y se procede a sellar el pacto con las firmas de respaldo.        
          .col-md-6
              img(src='@/assets/curso/temas/t3/img10.png', alt='')
    
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5 Claves para garantizar una negociación exitosa 
    
    p.mb-4 Para que una negociación llegue a su éxito es necesario abarcar las siguientes claves: 

    .row.mb-5
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='/assets/curso/temas/t3/tarjeta1.svg', alt='')
          h3.text-center Jerarquizar los intereses
          p.text-small Establecer prioridades que permitan obtener un beneficio común. 
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='/assets/curso/temas/t3/tarjeta2.svg', alt='')
          h3.text-center Reconocer las alternativas
          p.text-small Aceptar propuestas que ayuden a la negociación. 
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='/assets/curso/temas/t3/tarjeta3.svg', alt='')
          h3.text-center Pensar en acciones de concertación
          p.text-small Ceder en algunos puntos para facilitar acuerdos.
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
                img(src='/assets/curso/temas/t3/tarjeta4.svg', alt='')
          h3.text-center Escoger la menor opción para concertar
          p.text-small Elegir la alternativa que beneficie a ambas partes.
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='/assets/curso/temas/t3/tarjeta5.svg', alt='')
          h3.text-center Plantear acciones de mejoramiento
          p.text-small Emitir sugerencias de mejora para un nuevo proceso.
    
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.6 Entorno de la negociación 
    
    .row.justify-content-center.align-items-center
      .col-lg-9
        p.mb-4 Es el espacio donde se desarrollará la negociación, es decir, el ambiente o contexto físico en el que se llevará a cabo el intercambio de intereses que van a confluir en beneficios mutuos.
        .cajon.color-primario.p-4.mb-4
          p Se debe preparar la agenda de negociación. La elección de este entorno es un elemento importante, debe garantizar el fácil acceso, que sea un lugar reconocido, una sala o salón con buena iluminación, temperatura agradable, conectividad a internet si se requiere, capacidad según el número de participantes, disponer de la información necesaria.
        p Tener un buen sonido, dependiendo del tipo de auditorio. Se deben manejar los tiempos para evitar fatiga y cansancio que puedan obstaculizar el proceso, es decir manejar pautas de descanso. 
      .col-lg-3
        img(src='@/assets/curso/temas/t3/img11.png', alt='')



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
