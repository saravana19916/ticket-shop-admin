
import { Row, Col, Card } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { WorldMap, USState, MapChart, EuropeMap } from '../../maps/simplemaps/simplemapdata/worldmap';
const SimpleMaps = () => {
    return (
    <div className=''>
        <PageHeader titles="Maps" active="Maps" items={['Home']} />
        <Row>
            <Col lg={6}>
                <Card className="m-b-20">
                    <Card.Header>
                        <Card.Title as="h3">World Map</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <div id="vmap1" className="stateh world_map h-400"> <WorldMap/></div>
                    </Card.Body>
                </Card>
            </Col>  
           <Col lg={6}>
                <Card className="m-b-20">
                    <Card.Header>
                        <Card.Title as="h3">SouthAmerica Map</Card.Title>
                    </Card.Header>
                    <Card.Body>
                       
                        <div id="vmap2" className="stateh h-400"> <MapChart/></div>
                    </Card.Body>
                </Card>
            </Col>
            </Row>  
            <Row>
            <Col lg={6}>
                <Card>
                    <Card.Header>
                        <Card.Title as="h3">Europe Map</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <div id="vmap3" className="stateh h-400">
                    <EuropeMap/>
                    </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card className="m-b-20">
                    <Card.Header>
                        <Card.Title as="h3">USA Map</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <div id="vmap4" className="stateh h-400">
                        <USState/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
);
    };
export default SimpleMaps;
