import  { FC, Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import {Box, Rating} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircleIcon from '@mui/icons-material/Circle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarRateIcon from '@mui/icons-material/StarRate';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';
import { styled } from '@mui/material/styles';

interface RatingProps { }

const Rating1: FC<RatingProps> = () => {

  // HeartRating
  const StyledRating = styled(Rating)(
    {color: '#F1C40F'}
  );
// Multi Star Rating
const StyledStarRating = styled(Rating)(
  {color: '#E74C3C'}
);
// Multi Heart Rating

  const StyledheartRating = styled(Rating)(
       {color: '#E74C3C'}
    );
    // read only mode
     const onChange = (value: any) => {
       window.alert (`rating is ${value}`);
    };
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${[value]}`;
   }
       const [value, setValue] = useState<number | null>(2);
       const [hover, setHover] = useState(-1);
  return(
  <Fragment>
    <PageHeader titles="Rating" active="Rating" items={['Apps']} /> 
    <Row className="row-cards">
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Star Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
          <div className="rating-stars block">
    <Box sx={{'& > legend': { mt: 2 },}}>
      <Rating name="no-value" size="large" value={3} max={5} />
    </Box>
    </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Heart Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
    <div className="rating-stars block">
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <StyledRating
        name="customized-color"
        defaultValue={2}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
    </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Multi Star Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
    <div className="rating-stars block">
    <Box sx={{'& > legend': { mt: 2 },}}>
      <StyledStarRating name="no-value" size="large" value={3} max={9} />
    </Box>
    </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Multi Heart Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
    <div className="rating-stars block">
    <Box sx={{'& > legend': { mt: 2 },}}>
      <StyledheartRating name="no-value" size="large" value={3} max={9} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}/>
    </Box>
    </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Multi circle Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
  <div className="rating-stars block">
  <Box
    sx={{
      '& > legend': { mt: 2 },
    }}
  >
    <Rating name="no-value" size="large" value={3} max={9} 
     icon={<CircleIcon fontSize="inherit" />}
     emptyIcon={<CircleIcon fontSize="inherit" />} />
     
  </Box>
  </div>

          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Thumbs-up Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
  <div className="rating-stars block">
  
  <Box
    sx={{
      '& > legend': { mt: 2 },
    }}
  >
    <Rating name="no-value" size="large" value={3} max={5}
    icon={<ThumbUpIcon fontSize="inherit" />}
    emptyIcon={<ThumbUpIcon fontSize="inherit" />} />
  </Box>
  </div>

          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-cards">
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Basic Star Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
  <Stack spacing={1} className="rating-stars block my-rating">
    <Rating name="half-rating" value={3} precision={0.5} size="large"
    icon={<StarRateIcon fontSize="inherit" />}
    emptyIcon={<StarRateIcon fontSize="inherit" />} />
 </Stack>

          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Rounded star Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
  <Stack spacing={1} className="rating-stars  block my-rating-4">
    <Rating name="half-rating" value={3} precision={0.5} size="large"
    icon={<StarsIcon fontSize="inherit" />}
    emptyIcon={<StarsIcon fontSize="inherit" />} />
 </Stack>

          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              gradients Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
  <Stack spacing={1} className="rating-stars block my-rating-5">
    <Rating name="half-rating" value={3} precision={0.5} size="large"
    icon={<StarRateIcon fontSize="inherit" />}
    emptyIcon={<StarRateIcon fontSize="inherit" />} />
 </Stack>

          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Execute callback when rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
    <Stack spacing={1} className="rating-stars block my-rating-6">
      <Rating name="half-rating"  value={3} precision={0.5} size="large" onChange={onChange} 
      icon={<StarRateIcon fontSize="inherit" />}
      emptyIcon={<StarRateIcon fontSize="inherit" />} />
   </Stack>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              read only mode
            </Card.Title>
          </Card.Header>
          <Card.Body>
    <Stack spacing={1} className="rating-stars block my-rating-7">
      <Rating name="half-rating-read" value={3} max={5}  size="large" readOnly  />
    </Stack>

          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              On hover event
            </Card.Title>
          </Card.Header>
          <Card.Body>
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating name="hover-feedback" value={value} precision={0.5} getLabelText={getLabelText} onChange={(_event, newValue) => {   setValue(newValue); }} onChangeActive={(_event, newHover) => {   setHover(newHover); }} emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
      {value !== null && (
        <Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>{[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Fragment>
);
};

export default Rating1;
