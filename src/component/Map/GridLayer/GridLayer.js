import 'ol/ol.css';
import TileLayer from 'ol/layer/Tile';
import UTFGrid from 'ol/source/UTFGrid';
import {useEffect, useState} from "react";

const key = 'pk.eyJ1Ijoia2FyZXZpY2htYWtzaW0iLCJhIjoiY2txaHJkcjhvMmdyNTJ3cXRwdTM2MHIzbCJ9.iMZF1SM5jC4E3LV_wgnZpQ'

export function GridLayer({map}) {
    const [gridSource, setGridSource] = useState();

    const displayCountryInfo = data => {
        if (data) {
            document.getElementById('country-name').innerHTML = data['admin'];
            document.getElementById('country-flag').src = 'data:image/png;base64,' + data['flag_png'];
        }
    }

    useEffect(() => {
        setGridSource(new UTFGrid({
            url:
                'https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=' +
                key,
        }))
    }, [])


    useEffect(() => {
        if (gridSource) {
            map.addLayer(new TileLayer({source: gridSource}))
            map.on('click', e => {
                const viewResolution = (map.getView().getResolution());

                gridSource.forDataAtCoordinateAndResolution(e.coordinate, viewResolution, displayCountryInfo);
            })
        }
    }, [map, gridSource])

    return null
}