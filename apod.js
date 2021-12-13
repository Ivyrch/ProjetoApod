window.addEventListener('load', function() { 


  $.ajax({
    
    url: `https://api.nasa.gov/planetary/apod?api_key=W5w7IIcVeI9aVKdT3P0l8RPW4Wzahw0XZ2UW9she`,
    type: "GET",
    contentType: "application/json",
    success: function (mostra) {

      $("#data").text(mostra.date);
      $("#titulo").text(mostra.title);
      $("#foto").attr("src", mostra.hdurl);
      $("#autoria").text(mostra.copyright);
      $("#explicacao").text(mostra.explanation);
    },
  });
},
);


function apod() {
  let data = $("#escolha").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=W5w7IIcVeI9aVKdT3P0l8RPW4Wzahw0XZ2UW9she&date=${data}`,
    type: "GET",
    contentType: "application/json",
    success: function (mostra) {

      $("#data").text(mostra.date);
      $("#titulo").text(mostra.title);
      $("#foto").attr("src", mostra.hdurl);
      $("#autoria").text(mostra.copyright);
      $("#explicacao").text(mostra.explanation);
    },
  });
}

