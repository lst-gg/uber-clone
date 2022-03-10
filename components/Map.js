import { View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  console.log(origin);
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ left: 0, right: 0, top: 0, bottom: 0, position: "absolute" }}
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType={"mutedStandard"}
      >
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;
