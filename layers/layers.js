var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_batas_luar_2 = new ol.format.GeoJSON();
var features_batas_luar_2 = format_batas_luar_2.readFeatures(json_batas_luar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_luar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_luar_2.addFeatures(features_batas_luar_2);
var lyr_batas_luar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_luar_2, 
                style: style_batas_luar_2,
                popuplayertitle: 'batas_luar',
                interactive: true,
                title: '<img src="styles/legend/batas_luar_2.png" /> batas_luar'
            });
var format_Jalan_BWA_3 = new ol.format.GeoJSON();
var features_Jalan_BWA_3 = format_Jalan_BWA_3.readFeatures(json_Jalan_BWA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_BWA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_BWA_3.addFeatures(features_Jalan_BWA_3);
var lyr_Jalan_BWA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_BWA_3, 
                style: style_Jalan_BWA_3,
                popuplayertitle: 'Jalan_BWA',
                interactive: true,
                title: '<img src="styles/legend/Jalan_BWA_3.png" /> Jalan_BWA'
            });
var format_Pak_Jabur_4 = new ol.format.GeoJSON();
var features_Pak_Jabur_4 = format_Pak_Jabur_4.readFeatures(json_Pak_Jabur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pak_Jabur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pak_Jabur_4.addFeatures(features_Pak_Jabur_4);
var lyr_Pak_Jabur_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pak_Jabur_4, 
                style: style_Pak_Jabur_4,
                popuplayertitle: 'Pak_Jabur',
                interactive: true,
                title: '<img src="styles/legend/Pak_Jabur_4.png" /> Pak_Jabur'
            });
var format_Pak_Bandi_5 = new ol.format.GeoJSON();
var features_Pak_Bandi_5 = format_Pak_Bandi_5.readFeatures(json_Pak_Bandi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pak_Bandi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pak_Bandi_5.addFeatures(features_Pak_Bandi_5);
var lyr_Pak_Bandi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pak_Bandi_5, 
                style: style_Pak_Bandi_5,
                popuplayertitle: 'Pak_Bandi',
                interactive: true,
                title: '<img src="styles/legend/Pak_Bandi_5.png" /> Pak_Bandi'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_batas_luar_2.setVisible(true);lyr_Jalan_BWA_3.setVisible(true);lyr_Pak_Jabur_4.setVisible(true);lyr_Pak_Bandi_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_batas_luar_2,lyr_Jalan_BWA_3,lyr_Pak_Jabur_4,lyr_Pak_Bandi_5];
lyr_batas_luar_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Pemanfaata': 'Pemanfaata', });
lyr_Jalan_BWA_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Pak_Jabur_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'area': 'area', 'Nama_Andil': 'Nama_Andil', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'No_Bidang': 'No_Bidang', });
lyr_Pak_Bandi_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Nama': 'Nama', });
lyr_batas_luar_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Pemanfaata': 'TextEdit', });
lyr_Jalan_BWA_3.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Pak_Jabur_4.set('fieldImages', {'OBJECTID': '', 'area': '', 'Nama_Andil': '', 'Shape_Leng': '', 'Shape_Area': '', 'No_Bidang': '', });
lyr_Pak_Bandi_5.set('fieldImages', {'OBJECTID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'Nama': '', });
lyr_batas_luar_2.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'no label', 'Pemanfaata': 'inline label - visible with data', });
lyr_Jalan_BWA_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Pak_Jabur_4.set('fieldLabels', {'OBJECTID': 'no label', 'area': 'no label', 'Nama_Andil': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'No_Bidang': 'no label', });
lyr_Pak_Bandi_5.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Nama': 'no label', });
lyr_Pak_Bandi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});