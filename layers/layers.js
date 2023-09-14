var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_SitesUCPA_2 = new ol.format.GeoJSON();
var features_SitesUCPA_2 = format_SitesUCPA_2.readFeatures(json_SitesUCPA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesUCPA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesUCPA_2.addFeatures(features_SitesUCPA_2);cluster_SitesUCPA_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SitesUCPA_2
});
var lyr_SitesUCPA_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SitesUCPA_2, 
                style: style_SitesUCPA_2,
                interactive: true,
                title: '<img src="styles/legend/SitesUCPA_2.png" /> SitesUCPA'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleMaps_1.setVisible(true);lyr_SitesUCPA_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_SitesUCPA_2];
lyr_SitesUCPA_2.set('fieldAliases', {'Site': 'Site', 'webpage': 'webpage', 'Image': 'Image', 'Programme': 'Programme', });
lyr_SitesUCPA_2.set('fieldImages', {'Site': 'TextEdit', 'webpage': 'TextEdit', 'Image': 'ExternalResource', 'Programme': 'TextEdit', });
lyr_SitesUCPA_2.set('fieldLabels', {'Site': 'no label', 'webpage': 'no label', 'Image': 'no label', 'Programme': 'no label', });
lyr_SitesUCPA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
