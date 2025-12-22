var size = 0;
var placement = 'point';
function categories_UmbrellaOrganisations_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1) Air Quality Partnership of the UAEU (2016-2019)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.026,
                  anchor: [500.0, 500.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '9) Public Procurement Partnership of the UAEU (2017-2024)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.026,
                  anchor: [500.0, 500.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '8) Jobs and Skills Partnerships of the UAEU (2017-2020)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.026,
                  anchor: [500.0, 500.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '13) Security in Public Spaces Partnership of the UAEU (2019-2022)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.026,
                  anchor: [500.0, 500.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '14) Culture and Cultural Heritage Thematic Partnership of the UAEU (2019-2024)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.026,
                  anchor: [500.0, 500.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_4.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '15) Greening Cities Partnership of the UAEU (2023-2026)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.026,
                  anchor: [500.0, 500.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_5.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '18) Cities of Equality Partnership of the UAEU (2024-2027)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.026,
                  anchor: [500.0, 500.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_6.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '19) Water Sensitive City Partnership of the UAEU (2025-2028)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.026,
                  anchor: [500.0, 500.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_7.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '20) Building Decarbonisation Partnership of the UAEU (2025-2028)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.026,
                  anchor: [500.0, 500.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/embedded_8.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '21) Compact Cities Partnership of the UAEU (2025-2028)':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.026,
                  anchor: [500.0, 500.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Umbrella Organisation.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_UmbrellaOrganisations_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("1st Partnership ");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_UmbrellaOrganisations_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
