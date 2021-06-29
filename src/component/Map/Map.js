import {useEffect, useState} from "react";
import {VectorLayer} from "./VectorLayer/VectorLayer";
import {Map as OlMap, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from "ol/source/XYZ";
import 'ol/ol.css';
import './Map.css';

export function Map() {
    const [map, setMap] = useState();

    useEffect(() => {
        setMap(new OlMap({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
                            'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
                    })
                })
            ],
            view: new View({
                center: [3450458.183389865, 6306713.440764223],
                zoom: 6
            })
        }));
    }, [])

    return <div className='map' id='map'>{map && <VectorLayer map={map}/>}</div>
}