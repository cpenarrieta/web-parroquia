document.addEventListener('DOMContentLoaded', function(event) {
  var modal = document.getElementById('myModal');
  var modalInitial = document.getElementById('myModal-initial');
  var span = document.getElementsByClassName("close")[0];
  var spanInitial = document.getElementsByClassName("close")[1];
  var initialModalDisplayed = false;

  span.onclick = function() {
    modal.style.display = "none";
  }
  
  spanInitial.onclick = function() {
    initialModalDisplayed = false;
    modalInitial.style.display = "none";
  }

  var youtube_height = 315;
  var youtube_width = 560;

  var modal_content_title = document.getElementById('modal-content-title');
  var modal_content_descripcion = document.getElementById('modal-content-descripcion');
  var modal_content_horario = document.getElementById('modal-content-horario');
  var modal_content_responsable = document.getElementById('modal-content-responsable');
  var modal_content_email = document.getElementById('modal-content-email');
  var modal_content_facebook = document.getElementById('modal-content-facebook');
  var modal_content_youtube = document.getElementById('modal-content-youtube');

  var ofs_id = document.getElementById("ofs_id");
  ofs_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Orden Franciscana Seglar - OFS';
    modal_content_descripcion.innerHTML = 'Hermanos mayores que viven el evangelio de San Francisco de Asis.';
    modal_content_horario.innerHTML = 'Jueves de 8:00pm a 9:30pm - Salón Parroquial';
    modal_content_responsable.innerHTML = 'Pedro Bustamante 999668454';
    modal_content_email.innerHTML = 'ordenfranciscanaseglarchama@gmail.com';
    modal_content_facebook.innerHTML = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var comite_damas_id = document.getElementById("comite_damas_id");
  comite_damas_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Comité de Damas';
    modal_content_descripcion.innerHTML = 'Señoras activas que crecen espiritualmente en comunidad y trabajan por la solidaridad y los mas necesitados.';
    modal_content_horario.innerHTML = 'Martes de 10:00am a 11:30am - Salón Parroquial';
    modal_content_responsable.innerHTML = 'Lucha Arciniega 975262274';
    modal_content_email.innerHTML = '';
    modal_content_facebook.innerHTML = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var acolitos_id = document.getElementById("acolitos_id");
  acolitos_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Acólitos Franciscanos';
    modal_content_descripcion.innerHTML = 'Niños y Jovenes de 9 a 17 años que sigan el carisma franciscano, sirviendo en el altar.';
    modal_content_horario.innerHTML = 'Sabados de 9:00am a 1:00pm - Salón San Fidel de Sigmaringe (2do piso)';
    modal_content_responsable.innerHTML = 'Hno Adolfo Huanca OFM 448-0528';
    modal_content_email.innerHTML = '';
    modal_content_facebook.innerHTML = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var emmanuel_id = document.getElementById("emmanuel_id");
  emmanuel_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'EMMANUEL';
    modal_content_descripcion.innerHTML = 'Jóvenes encargados de la catequesis de la confirmación de jóvenes.';
    modal_content_horario.innerHTML = 'Sábados de 5:00pm a 7:30pm - Salón San Lorenzo (Virgen de Loreto)';
    modal_content_responsable.innerHTML = 'Mijee Loyola 995513204';
    modal_content_email.innerHTML = 'mijee92@gmail.com';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/ComEmmanuel/';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var pentecostes_id = document.getElementById("pentecostes_id");
  pentecostes_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Grupo de Oración Pentecostés';
    modal_content_descripcion.innerHTML = 'Grupo de oración, que viven y crecen en experiencia de Jesús vivo.';
    modal_content_horario.innerHTML = 'Martes de 9:00pm a 9:45pm - Salón Parroquial';
    modal_content_responsable.innerHTML = 'Blanca Calderón';
    modal_content_email.innerHTML = 'bcoproyectos@hotmail.com';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/g.o.pentecostes';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var renacer_id = document.getElementById("renacer_id");
  renacer_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Renacer Con Jesús';
    modal_content_descripcion.innerHTML = 'Comunidad que evangeliza a través de la alabanza gozosa, prédica y oración.';
    modal_content_horario.innerHTML = 'Jueves de 8:00pm a 9:45pm - Salón Parroquial';
    modal_content_responsable.innerHTML = 'Malú Gonzales - 998673808';
    modal_content_email.innerHTML = 'malugonzales@yahoo.com.mx';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/renacer.jesus';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var padre_pio_id = document.getElementById("padre_pio_id");
  padre_pio_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Grupo de Oración Padre Pio de Pietrelcina';
    modal_content_descripcion.innerHTML = 'El grupo se dedica a orar y realizar obras de caridad y solidarida, especialmente en favor de los que sufren y necesitan experimentar el amos de Dios.';
    modal_content_horario.innerHTML = 'Jueves de 8:30pm a 10:30pm';
    modal_content_responsable.innerHTML = 'Miguel Angel Hidalgo - 964725794';
    modal_content_email.innerHTML = 'miguelhidalgo1@msn.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = youtube_height;
    modal_content_youtube.src = 'https://www.youtube.com/embed/EYT92_XpvpU'
    modal.style.display = "block";
  }

  var eje_id = document.getElementById("eje_id");
  eje_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'EJE';
    modal_content_descripcion.innerHTML = 'Comunidad dirigida a adolescentes entre los 15 y 18 años, que luego de vivir el retiro EJE perseveran en comunidad.';
    modal_content_horario.innerHTML = 'Sábados de 4:00pm a 6:00pm - Salón San Felix (Virgen de Loreto)';
    modal_content_responsable.innerHTML = 'Baruc Ingar 992771378 / Sailvana Marcillo 991660614';
    modal_content_email.innerHTML = 'bicoo4@gmail.com / silvanamarcilio@gmail.com';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/ejecs/';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var epj_id = document.getElementById("epj_id");
  epj_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'EPJ';
    modal_content_descripcion.innerHTML = 'Dirigido a jóvenes de 19 a 27 años que buscan afianar su ideal de vida cristiana.';
    modal_content_horario.innerHTML = 'Sábados de 4:00pm a 7:00pm - Salón San Pio de Pietrelcina (2do piso)';
    modal_content_responsable.innerHTML = 'Milagros Gutierrez - 992027404';
    modal_content_email.innerHTML = 'milagrosgutierrezbonilla@gmail.com';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/epjchama/';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var epjca_mujeres_id = document.getElementById("epjca_mujeres_id");
  epjca_mujeres_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'EPCA Mujeres';
    modal_content_descripcion.innerHTML = 'Para mujeres que, luego de vivir el retiro EPCA, deciden perseverar en comunidad para crecer.';
    modal_content_horario.innerHTML = 'Lunes de 8:00pm a 9:45pm - Salón San Francisco';
    modal_content_responsable.innerHTML = 'Betty Luz Silva - 990040763';
    modal_content_email.innerHTML = 'busilva@gmail.com';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/EPCA-Mujeres-Parroquia-Cristo-Salvador-Chama-256421171223552/';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var epca_varones_id = document.getElementById("epca_varones_id");
  epca_varones_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'EPCA Varones';
    modal_content_descripcion.innerHTML = 'Para varones que, luego de vivir el retiro EPCA, deciden perseverar en comunidad para crecer.';
    modal_content_horario.innerHTML = 'Miercoles de 9:00pm a 9:45pm - Salón San Francisco';
    modal_content_responsable.innerHTML = 'Andrés Manrique - 999097013';
    modal_content_email.innerHTML = 'anhermanpal@gmail.com';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/epca.cristosalvadorchama';
    modal_content_youtube.height = youtube_height;
    modal_content_youtube.src = 'https://www.youtube.com/embed/VfWcmujJkOk'
    modal.style.display = "block";
  }

  var escoge_id = document.getElementById("escoge_id");
  escoge_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Escoge Familia';
    modal_content_descripcion.innerHTML = 'Dirigido a personas de 19 a 60 años y a la familia en general, que deseen crecer en sus relaciones interpersonales familiares.';
    modal_content_horario.innerHTML = 'Martes de 7:30pm a 9:45pm - Salón San Pio de Pietrelcina (2do piso)';
    modal_content_responsable.innerHTML = 'Luis Cuadros - 975529900 / Nancy Calderon 990040750';
    modal_content_email.innerHTML = 'lcuadros@hotmail.com';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/escogechama/';
    modal_content_youtube.height = youtube_height;
    modal_content_youtube.src = 'https://www.youtube.com/embed/oprrCeaUmu4'
    modal.style.display = "block";
  }

  var san_andres_id = document.getElementById("san_andres_id");
  san_andres_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Escuela de San Andrés';
    modal_content_descripcion.innerHTML = 'Partimos de la gran comisión confiada por el Señor Jesús a sus discípulos: "Vayan por todo el mundo y proclamen la Buena Nuevas toda la creación": Mc 16,15';
    modal_content_horario.innerHTML = '';
    modal_content_responsable.innerHTML = '992 795 637';
    modal_content_email.innerHTML = 'sanandreslimacristosalvador@hotmail.com';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/sanandres.cristosalvador/';
    modal_content_youtube.height = youtube_height;
    modal_content_youtube.src = 'https://www.youtube.com/embed/a--IyBQOF2w'
    modal.style.display = "block";
  }

  var llama_amor_id = document.getElementById("llama_amor_id");
  llama_amor_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Llama de Amor';
    modal_content_descripcion.innerHTML = 'Movimiento que busca salvar almas por medio de la oración del santo rosario, atiende enfermos y visita penales';
    modal_content_horario.innerHTML = 'Viernes de 4:00pm a 6:00pm - Salón San Francisco';
    modal_content_responsable.innerHTML = 'Lucero Balderrama - 998619104';
    modal_content_email.innerHTML = 'lgbc27@hotmail.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var legion_maria_id = document.getElementById("legion_maria_id");
  legion_maria_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Legión de María';
    modal_content_descripcion.innerHTML = 'Llevan el mensaje del evangelio unidos a la Virgen Maria e incentivan el rezo del Santo Rosario en las familias. Se reunen en diferentes horarios en la capilla Alborada, Virgen de Loreto y Cristo Salvador';
    modal_content_horario.innerHTML = '';
    modal_content_responsable.innerHTML = 'Elena Sánchez - 987115566';
    modal_content_email.innerHTML = 'eleise@hotmail.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var hermanos_maria_id = document.getElementById("hermanos_maria_id");
  hermanos_maria_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Hermanos en María';
    modal_content_descripcion.innerHTML = 'Varones que rezan el rosario y crecen en fraternidad';
    modal_content_horario.innerHTML = 'Martes de 8:00pm a 9:45pm - Salón San Crispin';
    modal_content_responsable.innerHTML = 'Felix Rodriguez - 2719646';
    modal_content_email.innerHTML = '';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var sagrado_corazon_id = document.getElementById("sagrado_corazon_id");
  sagrado_corazon_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Sagrados Corazones de Jesus y Maria';
    modal_content_descripcion.innerHTML = 'Grupo que evangeliza y fomenta la devocion y la consagracion a los corazones de Jesys y Maria en las familias';
    modal_content_horario.innerHTML = 'Miércoles de 7:00pm a 9:00pm - Salón San Crispin';
    modal_content_responsable.innerHTML = 'Maximo Valdivia - 981475888';
    modal_content_email.innerHTML = 'hpt_consultores@yahoo.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var adonai_id = document.getElementById("adonai_id");
  adonai_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Adonai';
    modal_content_descripcion.innerHTML = 'Comunidad que se encarga de la evangelizacion a los jovenes a traves de eventos (Talleres - Jornadas)';
    modal_content_horario.innerHTML = 'Sabados de 4:00pm a 9:00pm - Sanlon San Fidel (Virgen de Loreto)';
    modal_content_responsable.innerHTML = 'Gabriela Ramirez - 991327439';
    modal_content_email.innerHTML = 'gr.uyeno@mail.com';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/comunidad.adonai.1';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var matrimonios_id = document.getElementById("matrimonios_id");
  matrimonios_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Matrimonios Unidos en Victoria';
    modal_content_descripcion.innerHTML = 'Movimiento que se restaura y forma matrimonios que vivan la profundidad cristiana';
    modal_content_horario.innerHTML = 'Jueves de 8:00pm a 9:45pm - Salón San Felix (Virgen de Loreto)';
    modal_content_responsable.innerHTML = 'Riardo Ayala 996381284 / Yael Jaime Balleno 941038608';
    modal_content_email.innerHTML = 'rao@hotmail.com / yaeljaime@yahoo.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var taita_id = document.getElementById("taita_id");
  taita_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'TAITA DIOS';
    modal_content_descripcion.innerHTML = 'Comunidad misionera creada para ayudar a los mas necesitados';
    modal_content_horario.innerHTML = 'Jueves de 8:00pm a 9:45pm - Salón San Fidel de Sigmaringe';
    modal_content_responsable.innerHTML = 'Clementh de Arista - 4492565';
    modal_content_email.innerHTML = 'flaviaclementh@yahoo.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var pastoral_liturgia_id = document.getElementById("pastoral_liturgia_id");
  pastoral_liturgia_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Pastoral de Liturgia';
    modal_content_descripcion.innerHTML = 'Esta encargada de la animacion liturgica en las celebraciones eucaristicas de nuestra comunidad parroquial. Esta pastoral incluye en su actividad a la pastoral de salud, que se encarga de la visita a los engermos,';
    modal_content_horario.innerHTML = '';
    modal_content_responsable.innerHTML = 'Javier Peña - 999902228';
    modal_content_email.innerHTML = 'javierpd60@hotmail.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var pastoral_formacion_id = document.getElementById("pastoral_formacion_id");
  pastoral_formacion_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Pastoral de Formacion';
    modal_content_descripcion.innerHTML = 'Es la instancia dentro de la organizacion pastoral, que velara por la formacion integral de todos los grupos y comunidades, dicha pastoral incluye la pastoral biblica';
    modal_content_horario.innerHTML = 'Lunes de 8:00pm a 9:45pm - Salon San Leopoldo Mandic';
    modal_content_responsable.innerHTML = '';
    modal_content_email.innerHTML = '';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var pastoral_familiar_id = document.getElementById("pastoral_familiar_id");
  pastoral_familiar_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Pastoral Familiar';
    modal_content_descripcion.innerHTML = 'Esta encargada de evangelizar y promover a la familia en su formacion como escuela de fe y valorar humanos en todas las etapas y situacione de su existencia para lograr hacer de ella una verdadera Iglesia domestica.';
    modal_content_horario.innerHTML = '';
    modal_content_responsable.innerHTML = 'Manuel Palacios 998469243 / Lili de Palacios 961588019';
    modal_content_email.innerHTML = 'manpalmen@hotmail.com / liliananoda@gmail.com';
    modal_content_facebook.innerHTML = 'facebook';
    modal_content_facebook.href = 'https://www.facebook.com/Pastoral-Familiar-Cristo-Salvador-570136459736530/';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var pastoral_juvenil_id = document.getElementById("pastoral_juvenil_id");
  pastoral_juvenil_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Pastoral Juvenil';
    modal_content_descripcion.innerHTML = 'Se encarga de coordinar y promover todas las actividades para los jovenes de la parroquia';
    modal_content_horario.innerHTML = '';
    modal_content_responsable.innerHTML = '';
    modal_content_email.innerHTML = 'pj.cristosalvador@gmail.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var pastoral_social_id = document.getElementById("pastoral_social_id");
  pastoral_social_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Pastoral Social';
    modal_content_descripcion.innerHTML = 'Esta encargada de gestionar y dirigir las actividades de proyeccion social en nuestra parroquia. Su trabajo se enmarca en el conocimiento de la doctrina social de la iglesia, en su busqueda del respeto y promocion de la persona humana como creacion divina.';
    modal_content_horario.innerHTML = '';
    modal_content_responsable.innerHTML = 'Edgar Delgado 992143213 / Paola Somoza 997688707';
    modal_content_email.innerHTML = 'edgar.delgado@mail.com / tpsa1302@mail.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var pastoral_evangelizacion_id = document.getElementById("pastoral_evangelizacion_id");
  pastoral_evangelizacion_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Pastoral de Evangelizacion y Misiones';
    modal_content_descripcion.innerHTML = 'Esta encargada de organizar, planificar y ejecutar una permanente evengelizacion en los diversos sectores de nuestra parroquia. Su apostolado es procurar que la Buena Nueva de Jesus sea proclamada a las familias de nuestra juridiccion parroquial mediante la predica de la palabra y el testimonio de vida de sus mienbros';
    modal_content_horario.innerHTML = '';
    modal_content_responsable.innerHTML = '';
    modal_content_email.innerHTML = '';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var pastoral_comunicaciones_id = document.getElementById("pastoral_comunicaciones_id");
  pastoral_comunicaciones_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Pastoral de Comunicaciones';
    modal_content_descripcion.innerHTML = 'Es la encargada de dar a conocer los mensajes de la iglesis e informar las actividades de la parroquia a los miembros de la comunidad parriquial: comunidades, sectores y fieles en general, a traves de medios de comunicacion fisicos y virtuales.';
    modal_content_horario.innerHTML = '';
    modal_content_responsable.innerHTML = 'Mario Olivera - 981527887';
    modal_content_email.innerHTML = 'oliveraalberto@yahoo.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }

  var jufra_id = document.getElementById("jufra_id");
  jufra_id.onclick = function(event) {
    event.preventDefault();
    modal_content_title.innerHTML = 'Juventud Franciscana - JUFRA';
    modal_content_descripcion.innerHTML = 'Jovenes que viven y crecen en el ideal de la espiritualidad franciscana.';
    modal_content_horario.innerHTML = 'Sabados de 6:00pm a 9:30pm - Salon Santa Clara de Asis (3er piso)';
    modal_content_responsable.innerHTML = 'Andrea Fallaque C. - 991181212';
    modal_content_email.innerHTML = 'andrea.fallaque@gmail.com';
    modal_content_facebook.innerHTML = '';
    modal_content_facebook.href = '';
    modal_content_youtube.height = 0;
    modal.style.display = "block";
  }
  
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    } else if (event.target === modalInitial) {
      modalInitial.style.display = "none";
      initialModalDisplayed = false;
    }
  }

  if (initialModalDisplayed) {
    modalInitial.style.display = "block";
  }

  setScrolledClass();
  window.addEventListener("scroll", setScrolledClass, false);

  function setScrolledClass() {
    if (isScrolled() == true) {
      document.body.classList.add("js-has-scrolled");
    } else {
      document.body.classList.remove("js-has-scrolled");
    }
  }

  function isScrolled() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 5) {
      return true;
    } else {
      return false;
    }
  }

  const hashOptions = {
    "#id-nosotros": true,
    "#id-sacramentos": true,
    "#id-comunidades": true,
    "#id-retiros": true,
    "#id-formularios": true,
    "#id-contactenos": true,
  }

  document.querySelector('#scroll-into-section').addEventListener('click', function(e) {
    const target = e.target && e.target.hash;
    if (target in hashOptions) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
