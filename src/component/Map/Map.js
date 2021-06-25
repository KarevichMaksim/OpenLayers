import 'ol/ol.css';
import {Map as OlMap, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import './Map.css';
import {fromLonLat} from 'ol/proj';
import {useEffect} from "react";

function Map() {
    useEffect(() => {
        const schladming = [-0.1275, 51.5072];

        const schladmingWebMercator = fromLonLat(schladming);

        new OlMap({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: schladmingWebMercator,
                zoom: 9
            })
        });
    }, [])

    return (
        <div id='map' className='map-items'/>
    );
}

export default Map;
