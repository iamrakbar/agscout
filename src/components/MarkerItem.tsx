import React, { forwardRef } from 'react';
import Svg, { Circle } from "react-native-svg";
import { Marker } from 'react-native-maps';
import type { MapMarker } from 'react-native-maps';

interface MarkerItemProps {
    marker: {
        lat: number;
        lng: number;
        color: string;
    };
}

export const MarkerItem = forwardRef<MapMarker, MarkerItemProps>(({ marker }, ref) => {
    return (
        <Marker
            coordinate={{ latitude: marker.lat, longitude: marker.lng }}
            tracksViewChanges={false}
            ref={ref}
        >
            <Svg height="100" width="100">
                <Circle cx="50" cy="50" r="10" fill={marker.color} fillOpacity={0.5} />
            </Svg>
        </Marker>
    );
});
