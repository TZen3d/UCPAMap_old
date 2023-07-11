var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_SitesUCPA_1 = new ol.format.GeoJSON();
var features_SitesUCPA_1 = format_SitesUCPA_1.readFeatures(json_SitesUCPA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesUCPA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesUCPA_1.addFeatures(features_SitesUCPA_1);cluster_SitesUCPA_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SitesUCPA_1
});
var lyr_SitesUCPA_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SitesUCPA_1, 
                style: style_SitesUCPA_1,
                interactive: true,
                title: '<img src="styles/legend/SitesUCPA_1.png" /> SitesUCPA'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_SitesUCPA_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_SitesUCPA_1];
lyr_SitesUCPA_1.set('fieldAliases', {'Site': 'Site', 'webpage': 'webpage', 'Image': 'Image', 'Programme': 'Programme', });
lyr_SitesUCPA_1.set('fieldImages', {'Site': 'TextEdit', 'webpage': 'TextEdit', 'Image': 'ExternalResource', 'Programme': 'TextEdit', });
lyr_SitesUCPA_1.set('fieldLabels', {'Site': 'no label', 'webpage': 'no label', 'Image': 'no label', 'Programme': 'no label', });
lyr_SitesUCPA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});