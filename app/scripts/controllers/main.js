'use strict';

angular.module('testYoAngularApp').controller('MainCtrl', function($scope, distancePainter) {

    var _objectifJson = '{"objectifs": [{"nom": "14mm f/2.8", "focale": 14, "ouvertureMin": 2.8, "vr": false, "resolution": 0, "ac": 0, "nbCylindres": 7, "longueursPolygones": [10.3, 23.5, 17.5, 24.9], "diametresPolygones": [63.8, 76.9, 76.9, 87], "distancesPolygones": [5.9, 0, 4.4], "indiceBague": 4 }, {"nom": "16mm f/2.8", "focale": 16, "ouvertureMin": 2.8, "vr": false, "resolution": 0, "ac": 0, "nbCylindres": 7, "longueursPolygones": [9, 21, 9, 17], "diametresPolygones": [63, 61.9, 61.9, 60.8], "distancesPolygones": [0, 0, 1], "indiceBague": 4 }, {"nom": "20mm f/2.8", "focale": 20, "ouvertureMin": 2.8, "vr": false, "resolution": 15, "ac": 18, "nbCylindres": 7, "longueursPolygones": [10, 16.5, 10, 6], "diametresPolygones": [65.2, 65.2, 69, 66.5], "distancesPolygones": [0, 0, 0], "indiceBague": 4 }, {"nom": "24mm f/2.8", "focale": 24, "ouvertureMin": 2.8, "vr": false, "resolution": 0, "ac": 0, "nbCylindres": 7, "longueursPolygones": [15, 14.5, 10.5, 4], "diametresPolygones": [63.4, 64.5, 64.5, 53.8], "distancesPolygones": [2, 0, 0], "indiceBague": 4 }, {"nom": "28mm f/2.8", "focale": 28, "ouvertureMin": 2.8, "vr": false, "resolution": 15, "ac": 16, "nbCylindres": 7, "longueursPolygones": [12.5, 16, 10, 4.5], "diametresPolygones": [61.6, 65, 65, 53], "distancesPolygones": [1.5, 0, 0], "indiceBague": 4 }, {"nom": "35mm f/2", "focale": 35, "ouvertureMin": 2, "vr": false, "resolution": 16, "ac": 6, "nbCylindres": 7, "longueursPolygones": [13.5, 16.5, 10, 2], "diametresPolygones": [62.2, 64.5, 64.5, 55.4], "distancesPolygones": [1.5, 0, 0], "indiceBague": 4 }, {"nom": "50mm f/1.8", "focale": 50, "ouvertureMin": 1.8, "vr": false, "resolution": 17, "ac": 7, "nbCylindres": 7, "longueursPolygones": [11.3, 16, 7.5, 2], "diametresPolygones": [63.5, 63.5, 63.5, 55.4], "distancesPolygones": [2.2, 0, 0], "indiceBague": 4 }, {"nom": "85mm f/1.8", "focale": 85, "ouvertureMin": 1.8, "vr": false, "resolution": 17, "ac": 4, "nbCylindres": 7, "longueursPolygones": [13.5, 29, 12, 1.5], "diametresPolygones": [62.7, 69, 71.5, 64], "distancesPolygones": [2.5, 0, 0], "indiceBague": 4 }, {"nom": "105mm f/2", "focale": 105, "ouvertureMin": 2, "vr": false, "resolution": 17, "ac": 2, "nbCylindres": 9, "longueursPolygones": [14, 15, 12, 33.5, 32.1], "diametresPolygones": [62.4, 72.1, 75.5, 77.6, 79], "distancesPolygones": [2.8, 2.8, 0, 1.4], "indiceBague": 6 }, {"nom": "135mm f/2", "focale": 135, "ouvertureMin": 2, "vr": true, "resolution": 0, "ac": 0, "nbCylindres": 9, "longueursPolygones": [13.5, 13.5, 50.5, 35, 2.5], "diametresPolygones": [64.6, 74.2, 79, 79, 74.2], "distancesPolygones": [5, 3, 0, 0], "indiceBague": 4 }, {"nom": "180mm f/2.8", "focale": 180, "ouvertureMin": 2.8, "vr": false, "resolution": 0, "ac": 0, "nbCylindres": 7, "longueursPolygones": [14, 54.5, 28, 39.5, 2.9], "diametresPolygones": [65.7, 69.9, 75.6, 78.5, 74.2], "distancesPolygones": [2.1, 3, 3, 0], "indiceBague": 4 }, {"nom": "200mm f/2", "focale": 200, "ouvertureMin": 2, "vr": true, "resolution": 0, "ac": 0, "nbCylindres": 7, "longueursPolygones": [1, 55, 22, 93], "diametresPolygones": [60.9, 94.7, 101.5, 124], "distancesPolygones": [21, 0, 11], "indiceBague": 4 }, {"nom": "300mm f/2.8", "focale": 300, "ouvertureMin": 2.8, "vr": true, "resolution": 24, "ac": 6, "nbCylindres": 9, "longueursPolygones": [14.1, 18.8, 107.9, 35, 73], "diametresPolygones": [49.1, 84.2, 100.6, 107.6, 114.6], "distancesPolygones": [7, 0, 4.7, 7], "indiceBague": 6 }, {"nom": "400mm f/2.8", "focale": 400, "ouvertureMin": 2.8, "vr": true, "resolution": 25, "ac": 4, "nbCylindres": 9, "longueursPolygones": [23.5, 117.5, 44.5, 68, 65], "diametresPolygones": [60.9, 92.8, 107.3, 121.8, 153.7], "distancesPolygones": [6, 6, 9, 18], "indiceBague": 4 }]}';
    var allObjectifs = JSON.parse(_objectifJson);

    $scope.model = {
        objectifs: [],
        sujets: [],
        objectifSelected: null
    };


    $scope.init = function init() {
        allObjectifs.objectifs.forEach(function(item) {
            $scope.model.objectifs.push(Objectif.fromJSON(item));
        });
        $scope.model.sujets.push(new Sujet().init("Chat", 4.9, "221,68,119"));
        $scope.model.sujets.push(new Sujet().init("Femme", 6.75, "51,102,204"));
        $scope.model.sujets.push(new Sujet().init("Arbre", 11.35, "102,170,20"));
    };

    $scope.repaintDistances = function repaintDistances() {
        distancePainter.drawDistances($scope.model.sujets);
    };

    $scope.$watch('model.sujets', function(newValue, oldValue) {
        $scope.repaintDistances();
    }, true);
    
    $scope.init();
});