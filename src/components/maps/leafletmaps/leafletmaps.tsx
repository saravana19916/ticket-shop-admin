import  { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { MapContainer, TileLayer, LayersControl, Popup, LayerGroup, Circle, Rectangle, FeatureGroup, Polygon, Pane, SVGOverlay } from "react-leaflet";

const LeafletMaps = () => {
  // pane
  const outer: any = [
    [50.505, -29.09],
    [52.505, 29.09],
  ];
  const inner: any = [
    [49.505, -2.09],
    [53.505, 2.09],
  ];

  function BlinkingPane() {
    const [render, setRender] = useState<any>(true);
    const timerRef = useRef<any>();
    useEffect(() => {
      timerRef.current = setInterval(() => {
        setRender((r: any) => !r);
      }, 5000);
      return () => {
        clearInterval(timerRef.current);
      };
    }, []);

    return render ? (
      <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
        <Rectangle bounds={outer} pathOptions={{ color: "cyan" }} />
      </Pane>
    ) : null;
  }
  // pane-end
  const position: any = [51.505, -0.09];
  const bounds: any = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  const center: any = [51.505, -0.09];
  const rectangle: any = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  const multiPolygon: any = [
    [
      [51.51, -0.05],
      [51.53, -0.07],
      [51.51, -0.07],
    ],
  ];

  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  const greenOptions = { color: "black", fillColor: "red" };
  const purpleOptions = { color: "black", fillColor: "red" };
  const purpleOptions1 = { color: "black", fillColor: "black" };

  function MapPlaceholder() {
    return (
      <p>
        Map of London.
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  }

  return (
    <div>
      <PageHeader titles="Maps" active="Maps" items={['Home']} />
      <Row className="row-sm">
        <Col lg={12}>
          <Card className="custom-card  overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Map with placeholder
                </h6>
                <p className="text-muted card-sub-title">
                  Ease the build of pretty data visualizations on dynamic vector
                  maps.
                </p>
              </div>
              <div className="mapcontainer4">
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  scrollWheelZoom={false}
                  placeholder={<MapPlaceholder />}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" row-sm">
        <Col lg={6}>
          <Card className=" custom-card  overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Layers control</h6>
                <p className="text-muted card-sub-title">
                  Ease the build of pretty data visualizations on dynamic vector
                  maps.
                </p>
              </div>
              <div className="mapcontainer">
                <div className="map">
                  <MapContainer
                    center={center}
                    zoom={13}
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LayerGroup>
                      <Circle
                        center={center}
                        pathOptions={fillBlueOptions}
                        radius={200}
                      />
                      <Circle
                        center={center}
                        pathOptions={fillRedOptions}
                        radius={100}
                        stroke={false}
                      />
                      <LayerGroup>
                        <Circle
                          center={[51.51, -0.08]}
                          pathOptions={greenOptions}
                          radius={100}
                        />
                      </LayerGroup>
                    </LayerGroup>
                    <FeatureGroup pathOptions={purpleOptions}>
                      <Popup>Popup in FeatureGroup</Popup>
                      <Circle center={[51.51, -0.06]} radius={200} />
                      <Rectangle bounds={rectangle} />
                    </FeatureGroup>
                  </MapContainer>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} >
          <Card className=" custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Other layers</h6>
                <p className="text-muted">
                  Ease the build of pretty data visualizations on dynamic vector
                  maps.
                </p>
              </div>
              <div className="mapcontainer1">
                <div className="map">
                  <MapContainer
                    center={center}
                    zoom={13}
                    scrollWheelZoom={true}
                  >
                    <LayersControl position="topright">
                      <LayersControl.BaseLayer
                        checked
                        name="OpenStreetMap.Mapnik"
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                      </LayersControl.BaseLayer>
                      <LayersControl.Overlay
                        checked
                        name="Layer group with circles"
                      >
                        <LayerGroup>
                          <Circle
                            center={center}
                            pathOptions={{ fillColor: "blue" }}
                            radius={200}
                          />
                        </LayerGroup>
                      </LayersControl.Overlay>
                      <LayersControl.Overlay name="Feature group">
                        <FeatureGroup pathOptions={{ color: "black" }}>
                          <Popup>Popup in FeatureGroup</Popup>
                          <Rectangle bounds={rectangle} />
                          <Polygon
                            pathOptions={purpleOptions1}
                            positions={multiPolygon}
                          />
                        </FeatureGroup>
                      </LayersControl.Overlay>
                    </LayersControl>
                  </MapContainer>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" row-sm">
        <Col lg={6} >
          <Card className=" custom-card   overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Map with Panes</h6>
                <p className="text-muted card-sub-title">
                  Ease the build of pretty data visualizations on dynamic vector
                  maps.
                </p>
              </div>
              <div className="mapcontainer">
                <div className="map">
                  <MapContainer
                    bounds={outer}
                    scrollWheelZoom={false}
                    className="panemap"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <BlinkingPane />
                    <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>
                      <Rectangle
                        bounds={inner}
                        pathOptions={{ color: "black" }}
                      />
                      <Pane name="purple-rectangle">
                        <Rectangle
                          bounds={outer}
                          pathOptions={{ color: "white" }}
                        />
                      </Pane>
                    </Pane>
                  </MapContainer>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} >
          <Card className=" custom-card  overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Map with Map with SVG Overlay
                </h6>
                <p className="text-muted card-sub-title">
                  Ease the build of pretty data visualizations on dynamic vector
                  maps.
                </p>
              </div>
              <div className="mapcontainer mx-auto">
                <div className="map">
                  <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <SVGOverlay attributes={{ stroke: "red" }} bounds={bounds}>
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="black"
                      />
                      <circle r="10" cx="10" cy="10" fill="white" />
                      <text x="40%" y="50%" stroke="white">
                        text
                      </text>
                    </SVGOverlay>
                  </MapContainer>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default LeafletMaps;

