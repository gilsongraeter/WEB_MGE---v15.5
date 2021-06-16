function initialize() {
    var base = new google.maps.LatLng(-28.573783, -52.345841);
    var latlng1 = new google.maps.LatLng(-28.251602, -52.397889);
    var latlng2 = new google.maps.LatLng(-28.251602, -52.397889);
    var latlng3 = new google.maps.LatLng(-28.560922, -52.350486);
    var latlng4 = new google.maps.LatLng(-28.364736, -52.367361);
    var latlng5 = new google.maps.LatLng(-28.277677, -52.624912);
    var latlng6 = new google.maps.LatLng(-28.230553, -52.467887);
    var latlng7 = new google.maps.LatLng(-28.059218, -52.677683);
    var latlng8 = new google.maps.LatLng(-28.580768, -52.599652);
    var latlng9 = new google.maps.LatLng(-28.650133, -53.100411);
    var latlng10 = new google.maps.LatLng(-28.641322, -53.097187);
    var latlng11 = new google.maps.LatLng(-28.640185, -53.065924);
    var latlng12 = new google.maps.LatLng(-28.889636, -53.000423);
    var latlng13 = new google.maps.LatLng(-28.418160, -52.210932);
    var latlng14 = new google.maps.LatLng(-28.054273, -52.680648);
    var latlng15 = new google.maps.LatLng(-28.582360, -52.600242);
    var latlng16 = new google.maps.LatLng(-28.802557, -52.612499);
    var latlng17 = new google.maps.LatLng(-28.796420, -52.654274);
    var latlng18 = new google.maps.LatLng(-28.890001, -54.114823);
    var latlng19 = new google.maps.LatLng(-28.937204, -53.722681);
    var latlng20 = new google.maps.LatLng(-28.823721, -52.711906);
    var latlng21 = new google.maps.LatLng(-28.326236, -53.654496);
    var latlng22 = new google.maps.LatLng(-28.378194, -53.371680);
    var latlng23 = new google.maps.LatLng(-28.271068, -52.488537);
    var latlng24 = new google.maps.LatLng(-29.046159, -54.333318);
    var latlng25 = new google.maps.LatLng(-28.258295, -52.466220);
    var latlng26 = new google.maps.LatLng(-28.317403, -52.374169);
    var latlng27 = new google.maps.LatLng(-28.970303, -54.285811);
    var latlng28 = new google.maps.LatLng(-28.594608, -53.068461);
    var latlng29 = new google.maps.LatLng(-28.674983, -53.177436);
    var latlng30 = new google.maps.LatLng(-28.518946, -53.085668);
    var latlng31 = new google.maps.LatLng(-28.717006, -52.865830);
    var latlng32 = new google.maps.LatLng(-28.737817, -52.809244);
    var latlng33 = new google.maps.LatLng(-28.736803, -52.860008);
    var latlng34 = new google.maps.LatLng(-28.332833, -53.513970);
    var latlng35 = new google.maps.LatLng(-28.064012, -52.678287);
    var latlng36 = new google.maps.LatLng(-28.641496, -53.095604);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: base,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var pinColorBase = "FFFFFF";
    var pinColorAberto = "0000FF";
    var pinColorConcluido = "00FF00";
    var pinColorCancelado = "FF0000";
    var pinColorTrafo = "FFFF00";
    var pinColorRural = "FF00F0";
    var pinColorResidencial = "00FFFF";
    var pinColorComercial = "FF0000";
    var pinColorIndustrial = "00FF00";
    var pinColorPoderPublico = "0000FF";
    var pinColorNULL = "F00FFF";
    var pinImageCar = new google.maps.MarkerImage("http://icons.iconarchive.com/icons/icons-land/transporter/32/Taxi-Top-Yellow-icon.png",
        new google.maps.Size(42, 68),
        new google.maps.Point(0,0),
        new google.maps.Point(20, 68));

    var pinImageBase = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorBase,
        new google.maps.Size(42, 68),
        new google.maps.Point(0,0),
        new google.maps.Point(20, 68));

    var pinImageAberto = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorAberto,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var pinImageConcluido = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorConcluido,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var pinImageCancelado = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorCancelado,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var pinImageNULL = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorNULL,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var pinImageTrafo = new google.maps.MarkerImage("http://icons.iconarchive.com/icons/iconsmind/outline/16/Communication-Tower-2-icon.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(21, 34));

    var pinImageTrafoDisponivel = new google.maps.MarkerImage("images/trafo_disponivel.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(21, 34));

    var pinImageTrafoConcluido = new google.maps.MarkerImage("images/trafo_concluido.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(21, 34));

    var pinImageTrafoInstConcluido = new google.maps.MarkerImage("images/trafo_inst_conc.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(21, 34));

    var pinImageTrafoInstCancelado = new google.maps.MarkerImage("images/trafo_inst_canc.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(21, 34));

    var pinImageTrafoCancelado = new google.maps.MarkerImage("images/trafo_cancelado.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var pinImageRural = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorRural,
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageRuralDisponivel = new google.maps.MarkerImage("images/rural_disponivel.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageRuralConcluido = new google.maps.MarkerImage("images/rural_concluido.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageRuralInstConcluido = new google.maps.MarkerImage("images/rural_inst_conc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageRuralInstCancelado = new google.maps.MarkerImage("images/rural_inst_canc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageRuralCancelado = new google.maps.MarkerImage("images/rural_cancelado.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencial = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorResidencial,
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencialDisponivel = new google.maps.MarkerImage("images/residencial_disponivel.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencialConcluido = new google.maps.MarkerImage("images/residencial_concluido.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencialInstConcluido = new google.maps.MarkerImage("images/residencial_inst_conc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencialInstCancelado = new google.maps.MarkerImage("images/residencial_inst_canc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencialCancelado = new google.maps.MarkerImage("images/residencial_cancelado.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrial = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorIndustrial,
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrialDisponivel = new google.maps.MarkerImage("images/industrial_disponivel.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrialConcluido = new google.maps.MarkerImage("images/industrial_concluido.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrialInstConcluido = new google.maps.MarkerImage("images/industrial_inst_conc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrialInstCancelado = new google.maps.MarkerImage("images/industrial_inst_canc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrialCancelado = new google.maps.MarkerImage("images/industrial_cancelado.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercial = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorComercial,
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercialDisponivel = new google.maps.MarkerImage("images/comercial_disponivel.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercialConcluido = new google.maps.MarkerImage("images/comercial_concluido.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercialInstConcluido = new google.maps.MarkerImage("images/comercial_inst_conc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercialInstCancelado = new google.maps.MarkerImage("images/comercial_inst_canc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercialCancelado = new google.maps.MarkerImage("images/comercial_cancelado.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageServicoPublico = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorPoderPublico,
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var pinImageServicoPublicoDisponivel = new google.maps.MarkerImage("images/servico_publico_disponivel.png",
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var pinImageServicoPublicoConcluido = new google.maps.MarkerImage("images/servico_publico_concluido.png",
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var pinImageServicoPublicoInstConcluido = new google.maps.MarkerImage("images/servico_publico_inst_conc.png",
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var pinImageServicoPublicoInstCancelado = new google.maps.MarkerImage("images/servico_publico_inst_canc.png",
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var pinImageServicoPublicoCancelado = new google.maps.MarkerImage("images/servico_publico_cancelado.png",
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var marker = new google.maps.Marker({
        position: base,
        map: map,
        title: "UC: 2368504",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 2368504' + '<br />Grupo: 30' + '<br />Posição: 1' + '<br />Subclasse: FX7 (1000-2000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: JOSE VALDEMAR TICHER' + '<br />Latitude: ' + latlng0.lat() + '<br />Longitude: ' + latlng0.lng()
        });
        infoWindow.open(map, marker);
    });
    var marker1 = new google.maps.Marker({
        position: latlng1,
        map: map,
        title: "UC: 5950104",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker1, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 5950104' + '<br />Grupo: 36' + '<br />Posição: 1' + '<br />Subclasse: FX7 (1000-2000)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: FUNDACAO PASSO FUNDO DE TURISMO PASSOTUR' + '<br />Latitude: ' + latlng1.lat() + '<br />Longitude: ' + latlng1.lng()
        });
        infoWindow.open(map, marker1);
    });
    var marker2 = new google.maps.Marker({
        position: latlng2,
        map: map,
        title: "UC: 5950105",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker2, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 5950105' + '<br />Grupo: 36' + '<br />Posição: 2' + '<br />Subclasse: FX7 (1000-2000)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: FUNDACAO PASSO FUNDO DE TURISMO PASSOTUR' + '<br />Latitude: ' + latlng2.lat() + '<br />Longitude: ' + latlng2.lng()
        });
        infoWindow.open(map, marker2);
    });
    var marker3 = new google.maps.Marker({
        position: latlng3,
        map: map,
        title: "UC: 745910",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker3, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 745910' + '<br />Grupo: 43' + '<br />Posição: 1' + '<br />Subclasse: FX8 (2000-4000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: COAGRISOL COOP AGROIndustrial' + '<br />Latitude: ' + latlng3.lat() + '<br />Longitude: ' + latlng3.lng()
        });
        infoWindow.open(map, marker3);
    });
    var marker4 = new google.maps.Marker({
        position: latlng4,
        map: map,
        title: "UC: 2053502",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker4, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 2053502' + '<br />Grupo: 44' + '<br />Posição: 1' + '<br />Subclasse: FX8 (2000-4000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: JOSE LUIZ FAVERO' + '<br />Latitude: ' + latlng4.lat() + '<br />Longitude: ' + latlng4.lng()
        });
        infoWindow.open(map, marker4);
    });
    var marker5 = new google.maps.Marker({
        position: latlng5,
        map: map,
        title: "UC: 4070801",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker5, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 4070801' + '<br />Grupo: 44' + '<br />Posição: 2' + '<br />Subclasse: FX8 (2000-4000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: TELEFONICA BRASIL S.A.' + '<br />Latitude: ' + latlng5.lat() + '<br />Longitude: ' + latlng5.lng()
        });
        infoWindow.open(map, marker5);
    });
    var marker6 = new google.maps.Marker({
        position: latlng6,
        map: map,
        title: "UC: 7299600",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker6, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 7299600' + '<br />Grupo: 44' + '<br />Posição: 3' + '<br />Subclasse: FX8 (2000-4000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: Comercial DE EXTINTORES PASSO FUNDO LTDA' + '<br />Latitude: ' + latlng6.lat() + '<br />Longitude: ' + latlng6.lng()
        });
        infoWindow.open(map, marker6);
    });
    var marker7 = new google.maps.Marker({
        position: latlng7,
        map: map,
        title: "UC: 3069424",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker7, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 3069424' + '<br />Grupo: 45' + '<br />Posição: 1' + '<br />Subclasse: FX8 (2000-4000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: PREFEITURA MUNICIPAL DE PONTAO' + '<br />Latitude: ' + latlng7.lat() + '<br />Longitude: ' + latlng7.lng()
        });
        infoWindow.open(map, marker7);
    });
    var marker8 = new google.maps.Marker({
        position: latlng8,
        map: map,
        title: "UC: 3189101",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker8, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 3189101' + '<br />Grupo: 46' + '<br />Posição: 1' + '<br />Subclasse: FX8 (2000-4000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: AMARANTE CORREA DA SILVA' + '<br />Latitude: ' + latlng8.lat() + '<br />Longitude: ' + latlng8.lng()
        });
        infoWindow.open(map, marker8);
    });
    var marker9 = new google.maps.Marker({
        position: latlng9,
        map: map,
        title: "UC: 2869600",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker9, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 2869600' + '<br />Grupo: 49' + '<br />Posição: 1' + '<br />Subclasse: FX9 (>4000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: EMISSORAS PIONEIRA DA UNIAO LTDA' + '<br />Latitude: ' + latlng9.lat() + '<br />Longitude: ' + latlng9.lng()
        });
        infoWindow.open(map, marker9);
    });
    var marker10 = new google.maps.Marker({
        position: latlng10,
        map: map,
        title: "UC: 7579501",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker10, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 7579501' + '<br />Grupo: 49' + '<br />Posição: 2' + '<br />Subclasse: FX9 (>4000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: SERRARIA PITANGUEIRA LTDA - ME' + '<br />Latitude: ' + latlng10.lat() + '<br />Longitude: ' + latlng10.lng()
        });
        infoWindow.open(map, marker10);
    });
    var marker11 = new google.maps.Marker({
        position: latlng11,
        map: map,
        title: "UC: 9999924",
        icon: pinImageComercialInstCancelado
    });
    google.maps.event.addListener(marker11, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 9999924' + '<br />Grupo: 49' + '<br />Posição: 3' + '<br />Subclasse: FX9 (>4000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: COPREL COOPERATIVA DE ENERGIA' + '<br />Latitude: ' + latlng11.lat() + '<br />Longitude: ' + latlng11.lng()
        });
        infoWindow.open(map, marker11);
    });
    var marker12 = new google.maps.Marker({
        position: latlng12,
        map: map,
        title: "UC: 4139200",
        icon: pinImageResidencialInstCancelado
    });
    google.maps.event.addListener(marker12, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 4139200' + '<br />Grupo: 55' + '<br />Posição: 1' + '<br />Subclasse: FX1 (0-100)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: JOAO VALDAIR GONCALVES BOUMGARDT' + '<br />Latitude: ' + latlng12.lat() + '<br />Longitude: ' + latlng12.lng()
        });
        infoWindow.open(map, marker12);
    });
    var marker13 = new google.maps.Marker({
        position: latlng13,
        map: map,
        title: "UC: 7659400",
        icon: pinImageResidencialInstCancelado
    });
    google.maps.event.addListener(marker13, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 7659400' + '<br />Grupo: 60' + '<br />Posição: 1' + '<br />Subclasse: FX1 (0-100)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: ALEX MAROLLI' + '<br />Latitude: ' + latlng13.lat() + '<br />Longitude: ' + latlng13.lng()
        });
        infoWindow.open(map, marker13);
    });
    var marker14 = new google.maps.Marker({
        position: latlng14,
        map: map,
        title: "UC: 4204900",
        icon: pinImageResidencialInstCancelado
    });
    google.maps.event.addListener(marker14, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 4204900' + '<br />Grupo: 61' + '<br />Posição: 1' + '<br />Subclasse: FX1 (0-100)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: ALMIRO ROOS' + '<br />Latitude: ' + latlng14.lat() + '<br />Longitude: ' + latlng14.lng()
        });
        infoWindow.open(map, marker14);
    });
    var marker15 = new google.maps.Marker({
        position: latlng15,
        map: map,
        title: "UC: 1209203",
        icon: pinImageResidencialInstCancelado
    });
    google.maps.event.addListener(marker15, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 1209203' + '<br />Grupo: 69' + '<br />Posição: 1' + '<br />Subclasse: FX2 (100-200)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: LONI WIEDTHAUPER' + '<br />Latitude: ' + latlng15.lat() + '<br />Longitude: ' + latlng15.lng()
        });
        infoWindow.open(map, marker15);
    });
    var marker16 = new google.maps.Marker({
        position: latlng16,
        map: map,
        title: "UC: 3824100",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker16, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 3824100' + '<br />Grupo: 124' + '<br />Posição: 1' + '<br />Subclasse: FX10 (0-200)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: GENI HOFFMANN' + '<br />Latitude: ' + latlng16.lat() + '<br />Longitude: ' + latlng16.lng()
        });
        infoWindow.open(map, marker16);
    });
    var marker17 = new google.maps.Marker({
        position: latlng17,
        map: map,
        title: "UC: 3882100",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker17, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 3882100' + '<br />Grupo: 124' + '<br />Posição: 2' + '<br />Subclasse: FX10 (0-200)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: JOSE ALBERI BORGES DA SILVEIRA' + '<br />Latitude: ' + latlng17.lat() + '<br />Longitude: ' + latlng17.lng()
        });
        infoWindow.open(map, marker17);
    });
    var marker18 = new google.maps.Marker({
        position: latlng18,
        map: map,
        title: "UC: 3175700",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker18, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 3175700' + '<br />Grupo: 133' + '<br />Posição: 1' + '<br />Subclasse: FX10 (0-200)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: LEOMAR GULARTE VIANA' + '<br />Latitude: ' + latlng18.lat() + '<br />Longitude: ' + latlng18.lng()
        });
        infoWindow.open(map, marker18);
    });
    var marker19 = new google.maps.Marker({
        position: latlng19,
        map: map,
        title: "UC: 6195700",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker19, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 6195700' + '<br />Grupo: 137' + '<br />Posição: 1' + '<br />Subclasse: FX10 (0-200)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: ALINE DE ALMEIDA BARCELLOS' + '<br />Latitude: ' + latlng19.lat() + '<br />Longitude: ' + latlng19.lng()
        });
        infoWindow.open(map, marker19);
    });
    var marker20 = new google.maps.Marker({
        position: latlng20,
        map: map,
        title: "UC: 1956501",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker20, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 1956501' + '<br />Grupo: 254' + '<br />Posição: 1' + '<br />Subclasse: FX13 (500-1000)' + '<br />Equipamento: datalogger' + '<br />Fases: AB' + '<br /><br />Consumidor: DORVALINO RITTER DE RAMOS' + '<br />Latitude: ' + latlng20.lat() + '<br />Longitude: ' + latlng20.lng()
        });
        infoWindow.open(map, marker20);
    });
    var marker21 = new google.maps.Marker({
        position: latlng21,
        map: map,
        title: "UC: 7824400",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker21, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 7824400' + '<br />Grupo: 274' + '<br />Posição: 1' + '<br />Subclasse: FX13 (500-1000)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: FELIPE GOMES FARIAS' + '<br />Latitude: ' + latlng21.lat() + '<br />Longitude: ' + latlng21.lng()
        });
        infoWindow.open(map, marker21);
    });
    var marker22 = new google.maps.Marker({
        position: latlng22,
        map: map,
        title: "UC: 6900900",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker22, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 6900900' + '<br />Grupo: 274' + '<br />Posição: 3' + '<br />Subclasse: FX13 (500-1000)' + '<br />Equipamento: datalogger' + '<br />Fases: A' + '<br /><br />Consumidor: DELMAR ZIMMERMANN' + '<br />Latitude: ' + latlng22.lat() + '<br />Longitude: ' + latlng22.lng()
        });
        infoWindow.open(map, marker22);
    });
    var marker23 = new google.maps.Marker({
        position: latlng23,
        map: map,
        title: "UC: 5160200",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker23, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 5160200' + '<br />Grupo: 275' + '<br />Posição: 1' + '<br />Subclasse: FX13 (500-1000)' + '<br />Equipamento: datalogger' + '<br />Fases: AB' + '<br /><br />Consumidor: ALBERI NASCIMENTO GRANDO' + '<br />Latitude: ' + latlng23.lat() + '<br />Longitude: ' + latlng23.lng()
        });
        infoWindow.open(map, marker23);
    });
    var marker24 = new google.maps.Marker({
        position: latlng24,
        map: map,
        title: "UC: 2164401",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker24, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 2164401' + '<br />Grupo: 285' + '<br />Posição: 1' + '<br />Subclasse: FX13 (500-1000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: DENCIO ANTONIO BASSO' + '<br />Latitude: ' + latlng24.lat() + '<br />Longitude: ' + latlng24.lng()
        });
        infoWindow.open(map, marker24);
    });
    var marker25 = new google.maps.Marker({
        position: latlng25,
        map: map,
        title: "UC: 3247000",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker25, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 3247000' + '<br />Grupo: 314' + '<br />Posição: 1' + '<br />Subclasse: FX14 (>1000)' + '<br />Equipamento: datalogger' + '<br />Fases: AB' + '<br /><br />Consumidor: RUBENS ROSA DE PAULA' + '<br />Latitude: ' + latlng25.lat() + '<br />Longitude: ' + latlng25.lng()
        });
        infoWindow.open(map, marker25);
    });
    var marker26 = new google.maps.Marker({
        position: latlng26,
        map: map,
        title: "UC: 517505",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker26, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 517505' + '<br />Grupo: 317' + '<br />Posição: 1' + '<br />Subclasse: FX14 (>1000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: FLORENTINO IZIDORO LUBIAN' + '<br />Latitude: ' + latlng26.lat() + '<br />Longitude: ' + latlng26.lng()
        });
        infoWindow.open(map, marker26);
    });
    var marker27 = new google.maps.Marker({
        position: latlng27,
        map: map,
        title: "UC: 3688402",
        icon: pinImageRuralInstCancelado
    });
    google.maps.event.addListener(marker27, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 3688402' + '<br />Grupo: 322' + '<br />Posição: 1' + '<br />Subclasse: FX14 (>1000)' + '<br />Equipamento: datalogger' + '<br />Fases: ABC' + '<br /><br />Consumidor: ILDO VALENTINI' + '<br />Latitude: ' + latlng27.lat() + '<br />Longitude: ' + latlng27.lng()
        });
        infoWindow.open(map, marker27);
    });
    var marker28 = new google.maps.Marker({
        position: latlng28,
        map: map,
        title: "UC: 13187TR",
        icon: pinImageTrafoInstCancelado
    });
    google.maps.event.addListener(marker28, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 13187TR' + '<br />Grupo: 328' + '<br />Posição: 1' + '<br />Subclasse: FX15 (0-30)' + '<br />Equipamento: easytrafo' + '<br />Fases: AB' + '<br /><br />Consumidor: ' + '<br />Latitude: ' + latlng28.lat() + '<br />Longitude: ' + latlng28.lng()
        });
        infoWindow.open(map, marker28);
    });
    var marker29 = new google.maps.Marker({
        position: latlng29,
        map: map,
        title: "UC: 12817TR",
        icon: pinImageTrafoInstCancelado
    });
    google.maps.event.addListener(marker29, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 12817TR' + '<br />Grupo: 328' + '<br />Posição: 2' + '<br />Subclasse: FX15 (0-30)' + '<br />Equipamento: easytrafo' + '<br />Fases: AB' + '<br /><br />Consumidor: ' + '<br />Latitude: ' + latlng29.lat() + '<br />Longitude: ' + latlng29.lng()
        });
        infoWindow.open(map, marker29);
    });
    var marker30 = new google.maps.Marker({
        position: latlng30,
        map: map,
        title: "UC: 100393TR",
        icon: pinImageTrafoInstCancelado
    });
    google.maps.event.addListener(marker30, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 100393TR' + '<br />Grupo: 328' + '<br />Posição: 3' + '<br />Subclasse: FX15 (0-30)' + '<br />Equipamento: easytrafo' + '<br />Fases: AB' + '<br /><br />Consumidor: ' + '<br />Latitude: ' + latlng30.lat() + '<br />Longitude: ' + latlng30.lng()
        });
        infoWindow.open(map, marker30);
    });
    var marker31 = new google.maps.Marker({
        position: latlng31,
        map: map,
        title: "UC: 5309TR",
        icon: pinImageTrafoInstCancelado
    });
    google.maps.event.addListener(marker31, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 5309TR' + '<br />Grupo: 353' + '<br />Posição: 1' + '<br />Subclasse: FX15 (0-30)' + '<br />Equipamento: easytrafo' + '<br />Fases: AB' + '<br /><br />Consumidor: ' + '<br />Latitude: ' + latlng31.lat() + '<br />Longitude: ' + latlng31.lng()
        });
        infoWindow.open(map, marker31);
    });
    var marker32 = new google.maps.Marker({
        position: latlng32,
        map: map,
        title: "UC: 600628TR",
        icon: pinImageTrafoInstCancelado
    });
    google.maps.event.addListener(marker32, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 600628TR' + '<br />Grupo: 353' + '<br />Posição: 3' + '<br />Subclasse: FX15 (0-30)' + '<br />Equipamento: easytrafo' + '<br />Fases: AB' + '<br /><br />Consumidor: ' + '<br />Latitude: ' + latlng32.lat() + '<br />Longitude: ' + latlng32.lng()
        });
        infoWindow.open(map, marker32);
    });
    var marker33 = new google.maps.Marker({
        position: latlng33,
        map: map,
        title: "UC: 5315TR",
        icon: pinImageTrafoInstCancelado
    });
    google.maps.event.addListener(marker33, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 5315TR' + '<br />Grupo: 363' + '<br />Posição: 1' + '<br />Subclasse: FX15 (0-30)' + '<br />Equipamento: easytrafo' + '<br />Fases: AB' + '<br /><br />Consumidor: ' + '<br />Latitude: ' + latlng33.lat() + '<br />Longitude: ' + latlng33.lng()
        });
        infoWindow.open(map, marker33);
    });
    var marker34 = new google.maps.Marker({
        position: latlng34,
        map: map,
        title: "UC: 1000009TR",
        icon: pinImageTrafoInstCancelado
    });
    google.maps.event.addListener(marker34, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 1000009TR' + '<br />Grupo: 383' + '<br />Posição: 1' + '<br />Subclasse: FX16 (>30)' + '<br />Equipamento: easytrafo' + '<br />Fases: ABC' + '<br /><br />Consumidor: ' + '<br />Latitude: ' + latlng34.lat() + '<br />Longitude: ' + latlng34.lng()
        });
        infoWindow.open(map, marker34);
    });
    var marker35 = new google.maps.Marker({
        position: latlng35,
        map: map,
        title: "UC: 1295TR",
        icon: pinImageTrafoInstCancelado
    });
    google.maps.event.addListener(marker35, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 1295TR' + '<br />Grupo: 385' + '<br />Posição: 1' + '<br />Subclasse: FX16 (>30)' + '<br />Equipamento: easytrafo' + '<br />Fases: ABC' + '<br /><br />Consumidor: ' + '<br />Latitude: ' + latlng35.lat() + '<br />Longitude: ' + latlng35.lng()
        });
        infoWindow.open(map, marker35);
    });
    var marker36 = new google.maps.Marker({
        position: latlng36,
        map: map,
        title: "UC: 5031TR",
        icon: pinImageTrafoInstCancelado
    });
    google.maps.event.addListener(marker36, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'UC: 5031TR' + '<br />Grupo: 391' + '<br />Posição: 1' + '<br />Subclasse: FX16 (>30)' + '<br />Equipamento: easytrafo' + '<br />Fases: ABC' + '<br /><br />Consumidor: ' + '<br />Latitude: ' + latlng36.lat() + '<br />Longitude: ' + latlng36.lng()
        });
        infoWindow.open(map, marker36);
    });
}

function error(msg){
    var s = document.querySelector('#status');
    s.InnerHTML = typeof msg == 'string' ? msg : "failed";
    s.className = 'fail';
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    error('not supported');
}

google.maps.event.addDomListener(window, 'load', initialize);

initialize();
