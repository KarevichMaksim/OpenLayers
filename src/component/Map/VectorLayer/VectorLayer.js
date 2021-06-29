import {useEffect} from "react";
import VectorSource from "ol/source/Vector";
import {default as OlVectorLayer} from "ol/layer/Vector";
import {Feature} from "ol";
import Style from "ol/style/Style";

import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Circle from "ol/style/Circle";
import Point from "ol/geom/Point";

export function VectorLayer({map}) {

    const handleCreateFeature = (coordinate) => {
        const featureToAdd = new Feature({geometry: new Point(coordinate)})
        const style = new Style({
            image: new Circle({
                radius: 6,
                fill: new Fill({color: 'red'}),
                stroke: new Stroke({
                    color: [0, 0, 0], width: 2
                }),
            }),
        })

        featureToAdd.setStyle(style)

        return [featureToAdd]
    }

    useEffect(() => {
        const source = new VectorSource({
            features: handleCreateFeature([3915195.315363736, 6082905.821945228]),
        });
        const layer = new OlVectorLayer({
            source
        })
        map.addLayer(layer)

        map.on('click', async e => {
            source.clear();
            source.addFeatures(handleCreateFeature(e.coordinate))
        })
    }, [map])

    return null
}