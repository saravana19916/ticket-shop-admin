import React,{ FC, Fragment, useState } from 'react';
import { Card } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import {ValueLabel} from '../../../commondata/commondata';
import {Box} from '@mui/material';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from "@mui/material/styles";
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface RangeSlidersProps { }

const RangeSliders: FC<RangeSlidersProps> = () => {

  // Range Slider default********

const marks = [
  {
    value: 0,
    label: '10',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value: any) {
  return `${value}`;
}
// Range Slider default upto 1000*************


const mark = [
  {
    value: 100,
    label: '100',
  },
  {
    value: 1000,
    label: '1000',
  },
];

function valuetext1(value: number) {
  return `${value}`;
}

// Range Slider dollar$***********


const Mark = [
  {
    value: 0,
    label: '$0',
  },
  {
    value: 250,
    label: '$250',
  },
  {
    value: 500,
    label: '$500',
  },
  {
    value: 750,
    label: '$750',
  },
  {
    value: 1000,
    label: '$1000',
  }
];


function valuetext4(value: number) {
  return `${value}°C`;
};

const [value, setValue] = React.useState<number[]>([200, 800]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  }
  // Range Slider negetive to positive

const Marking = [
  {
    value: -1000,
    label: '-1000',
  },
  {
    value: -500,
    label: '-500',
  },
  {
    value: 0,
    label: '0',
  },
  {
    value: 500,
    label: '$750',
  },
  {
    value: 1000,
    label: '1000',
  }
];

 function valuetext3(value: number) {
  return `${value}$`;
}

    const [value1, setValue1] = React.useState<number[]>([-750, 750]);

    const handleChange1 = (_event: Event, newValue: number | number[]) => {
      setValue1(newValue as number[]);
    }
    // Range Slider Ios Design


interface Props {
  value: number;
  label: string;
}

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marker: Props[] = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  }
];

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none"
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000"
    }
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor"
    }
  }
}));
// Range Slider pretto Design
interface Props1 {
  value: number;
  label: string;
}

const markey: Props1[] = [
  {
    value: 100,
    label: '100',
  },
  {
    value: 1000,
    label: '1000',
  }
];

const PrettoSlider = styled(Slider)({
  color: 'primary',
  height: 5,
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#5389b8',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

// Range Slider with prise set 
const Markr = [
  {
    value: -1000,
    label: '-1000',
  },
  {
    value: -500,
    label: '-500',
  },
  {
    value: 0,
    label: '0',
  },
  {
    value: 500,
    label: '$750',
  },
  {
    value: 1000,
    label: '1000',
  }
];

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: `$primary`,
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#5389b8' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> { }

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

  // Slider with input field
  const Input = styled(MuiInput)`
  width: 42px;
`;

  const [value3, setValue3] = useState<any>(
    30,
  );

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setValue3(newValue);
  };

  const handleInputChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue3(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value3 < 0) {
      setValue3(0);
    } else if (value3 > 100) {
      setValue3(100);
    }
  };
  // TrackInverted Tempreture
const MarkData = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 40,
    label: '40°C',
  },
  {
    value: 70,
    label: '70°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext6(value: number) {
  return `${value}°C`;
}
// Storage Track
function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value: number) {
  return 2 ** value;
}
const [value2, setValue2] = React.useState<number>(10);

const handleChange2 = (_event: Event, newValue2: number | number[]) => {
  if (typeof newValue2 === 'number') {
    setValue2(newValue2);
  }
}
  return(

  <Fragment>
    <PageHeader titles="RangeSllider" active="RangeSllider" items={['Apps']} />
    <Card>
      <Card.Header className="border-bottom-0">
        <Card.Title>
          Range Slider
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="row row-sm">
          <div className="col-lg-12">

          <Box sx={{ width: "100%" }}>
      <Slider defaultValue={10} getAriaValueText={valuetext} step={1} valueLabelDisplay="on" marks={marks} />
    </Box>
          </div>
          <div className="col-lg-12 mt-4">
          <Box sx={{ width: "100%" }}>
      <Slider   defaultValue={550} getAriaValueText={valuetext1} valueLabelDisplay="on" step={1} min={100} max={1000} marks={mark} />
    </Box>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-lg-12 mt-4">
          <Box sx={{ width: "100%" }}>
      <Slider onChange={handleChange} valueLabelDisplay="on" getAriaValueText={valuetext4} value={value} min={0} max={1000} defaultValue={[200, 800]} marks={Mark}/>
    </Box>
          </div>
          <div className="col-lg-12 mt-4">
          <Box sx={{ width: "100%" }}>
      <Slider onChange={handleChange1} valueLabelDisplay="on" getAriaValueText={valuetext3} value={value1} min={-1000} max={1000} marks={Marking} defaultValue={[-500, 500]} step={250}/>
    </Box>
          </div>
        </div>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className="border-bottom-0">
        <Card.Title>
          Range Slider (Modern Skin)
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="row row-sm">
          <div className="col-lg-12">
          <Box sx={{ width: "100%" }}>

<IOSSlider defaultValue={10} marks={marker} valueLabelDisplay="on"/>
</Box>
          </div>
          <div className="col-lg-12 mt-4">
          <PrettoSlider valueLabelDisplay="auto" defaultValue={560} marks={markey} step={1} min={100} max={1000}/>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-lg-12 mt-4">             
            <ValueLabel />
          </div>
          <div className="col-lg-12 mt-4">
          <AirbnbSlider components={{ Thumb: AirbnbThumbComponent }} getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')} defaultValue={[-750, 250]} marks={Markr} valueLabelDisplay="on" min={-1000} max={1000} step={250}/>
          </div>
        </div>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className="border-bottom-0">
        <Card.Title>
          Range Slider (Outline Skin)
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="row row-sm">
          <div className="col-lg-12">
          <Box sx={{ width: '100%' }}>
                <Typography id="input-slider" gutterBottom>
                  Volume range
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <VolumeUp />
                  </Grid>
                  <Grid item xs>
                    <Slider value={typeof value3 === 'number' ? value3 : 0} onChange={handleSliderChange} aria-labelledby="input-slider"/>
                  </Grid>
                  <Grid item>
                    <Input value={value3} size="small" onChange={handleInputChange} onBlur={handleBlur} inputProps={{   step: 10,   min: 0,   max: 100,   type: 'number',   'aria-labelledby': 'input-slider', }}/>
                  </Grid>
                </Grid>
              </Box>
          </div>
          <div className="col-lg-12 mt-4">
          <Box sx={{ width: '100%' }}>
      <Typography id="track-inverted-range-slider" gutterBottom>
        Inverted tempreture track range
      </Typography>
      <Slider track="inverted" aria-labelledby="track-inverted-range-slider" getAriaValueText={valuetext6} defaultValue={[28, 37]} marks={MarkData} valueLabelDisplay="auto"/>
    </Box>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-lg-12 mt-4">
          <Box sx={{ width: '100%' }}>
      <Typography id="non-linear-slider" gutterBottom>
        Storage: {valueLabelFormat(calculateValue(value2))}
      </Typography>
      <Slider value={value2} min={5} step={1} max={30} scale={calculateValue} getAriaValueText={valueLabelFormat} valueLabelFormat={valueLabelFormat} onChange={handleChange2} valueLabelDisplay="auto" aria-labelledby="non-linear-slider"/>
    </Box>
          </div>
        </div> 
      </Card.Body>
    </Card>
  </Fragment>

)
  };

export default RangeSliders;
