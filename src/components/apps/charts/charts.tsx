import  { FC, Fragment } from 'react';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip,} from 'chart.js';

interface ChartsProps { }
const Charts: FC<ChartsProps> = () => {

  ChartJS.register( LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip);
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
 const data = 
  { 
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Dataset 1',
        backgroundColor: '#f7b731',
        borderColor: '#f7b731',
        borderWidth: 2,
        fill: false,
        data: [100, 420, 210, 420, 210, 320, 350]
      },
      {
        type: 'line' as const,
        label: 'Dataset 2',
        backgroundColor: '#05c3fb',
        borderColor: '#05c3fb',
        borderWidth: 2,
        data: [450, 200, 350, 250, 480, 200, 400],
  
      },
      {
        type: 'bar' as const,
        label: 'Dataset 3',
        backgroundColor: '#09ad95',
        data: [200, 450, 290, 367, 256, 543, 345],
  
      },
      
    ],
  };
  
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  return(
  <Fragment>
    <PageHeader titles="Chart" active="Chart" items={['Apps']} />
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>ChartJS</Card.Title>
          </Card.Header>
          <Card.Body>
            <div>
              <div className="example example-bg">
                <div className="example-column example-column-2">
                  <Card>
                    <Card.Header>
                      <Card.Title as='h3'>Chart name</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Chart type='bar' data={data} options={options} className="appchart" height={'400px'} />
                    </Card.Body>
                  </Card>
                </div>
              </div>
              
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </Fragment>
);
  };
export default Charts;
