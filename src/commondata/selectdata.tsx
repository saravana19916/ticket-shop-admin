
interface option {
    value:string
    label:string
    isDisabled?:any
}
export const options:option[] = [
  { value: 'Choose one', label: 'Choose one', isDisabled: "true"},
  { value: 'Chuck Testa', label: 'Chuck Testa'},
  { value: 'Sage Cattabriga-Alosa', label: 'Sage Cattabriga-Alosa'},
  { value: 'Nikola Tesla', label: 'Nikola Tesla'},
  { value: 'Cattabriga-Alosa', label: 'Cattabriga-Alosa'},
  { value: 'Nikola Alosa', label: 'Nikola Alosa'},

];
// Basic Select3
interface option1 {
    value:string
    label:string
    isDisabled?:any
}
export const options1: option1[] = [
    { value: 'Arizona', label: 'Arizona', isDisabled: "false" },
    { value: 'Colorado', label: 'Colorado' },
    { value: 'Idaho', label: 'Idaho' },
    { value: 'Montana', label: 'Montana' },
    { value: 'New Mexico', label: 'New Mexico' },
    { value: 'North Dakota', label: 'North Dakota' },
    { value: 'Utah', label: 'Utah' },
    { value: 'Wyoming', label: 'Wyoming' },
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Arkansas', label: 'Arkansas' },
    { value: 'Illinois', label: 'Illinois' },
    { value: 'Iowa', label: 'Iowa' },
    { value: 'Kansas', label: 'Kansas' },
    { value: 'Kentucky', label: 'Kentucky' },
    { value: 'Louisiana', label: 'Louisiana' },
    { value: 'Minnesota', label: 'Minnesota' },
    { value: 'Mississippi', label: 'Mississippi' },
    { value: 'Missouri', label: 'Missouri' },
    { value: 'Oklahoma', label: 'Oklahoma' },
    { value: 'South Dakota', label: 'South Dakota' },
    { value: 'Texas', label: 'Texas' },
    { value: 'Tennessee', label: 'Tennessee' },
    { value: 'Wisconsin', label: 'Wisconsin' },
  ];
  //user list 
  interface options2 {
    value:string
    label:string
}
 export const option1:options2[]  = [
    { value: 'Firefox', label: 'Firefox' },
    { value: 'Chrome', label: 'Chrome' },
    { value: 'Safari', label: 'Safari' },
    { value: 'Opera', label: 'Opera' },
    { value: 'Internet Explorer', label: 'Internet Explorer' },
  ] 
//Multiple Select Styles
export const option3 : any = [
  { value: "January", label: "January" },
  { value: "Febuary", label: "Febuary" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },

];
//Disabled multiselect
export const option4:any = [
  { value: "January", label: "January" },
  { value: "Febuary", label: "Febuary" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },

];
//single Data
const Group1 = [
  {
    value: "Option 1", label: "Option 1",
    isDisabled: "isDisabled"
  },
  {
    value: "Option 2",
    label: "Option 2",
    isDisabled: "isDisabled"
  },
  {
    value: "Option 3",
    label: "Option 3",
    isDisabled: "isDisabled"
  },
  {
    value: "Option 4",
    label: "Option 4",
    isDisabled: "isDisabled"
  },
  {
    value: "Option 5",
    label: "Option 5",
    isDisabled: "isDisabled"
  }
];
const Group2 = [
  { value: "Option 11", label: "Option 11" },
  {
    value: "Option 12",
    label: "Option 12"
  },
  {
    value: "Option 13",
    label: "Option 13"
  },
  {
    value: "Option 14",
    label: "Option 14"
  },
  {
    value: "Option 15",
    label: "Option 15"
  },
  {
    value: "Option 16",
    label: "Option 16"
  },
  {
    value: "Option 17",
    label: "Option 17"
  },
  {
    value: "Option 18",
    label: "Option 18"
  }
];

const Group3 = [
  { value: "Option 31", label: "Option 31" },
  {
    value: "Option 32",
    label: "Option 32"
  },
  {
    value: "Option 33",
    label: "Option 33"
  },
  {
    value: "Option 34",
    label: "Option 34"
  },
  {
    value: "Option 35",
    label: "Option 35"
  },
  {
    value: "Option 36",
    label: "Option 36"
  },
  {
    value: "Option 37",
    label: "Option 37"
  },
  {
    value: "Option 38",
    label: "Option 38"
  },
  {
    value: "Option 39",
    label: "Option 39"
  }
];
export const groupeddata: any = [
  {
    label: "Group 1",
    options: Group1
  },
  {
    label: "Group 2",
    options: Group2,
  },
  {
    label: "Group 3",
    options: Group3,
  },
];
// Multiple items with Group Option

const Group4 = [
  { value: "1", label: "1" },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "5",
    label: "5"
  }
];
const Group5 = [
  { value: "11", label: "11" },
  {
    value: "12",
    label: "12"
  },
  {
    value: "13",
    label: "13"
  },
  {
    value: "14",
    label: "14"
  },
  {
    value: "15",
    label: "15"
  },
  {
    value: "16",
    label: "16"
  },
  {
    value: "17",
    label: "17"
  },
  {
    value: "18",
    label: "18"
  }
];

const Group6 = [
  { value: "31", label: "31" },
  {
    value: "32",
    label: "32"
  },
  {
    value: "33",
    label: "33"
  },
  {
    value: "34",
    label: "34"
  },
  {
    value: "35",
    label: "35"
  },
  {
    value: "36",
    label: "36"
  },
  {
    value: "37",
    label: "37"
  },
  {
    value: "38",
    label: "38"
  },
  {
    value: "39",
    label: "39"
  }
];
export const Groupeddata: any = [
  {
    label: "Group 1",
    options: Group4
  },
  {
    label: "Group 2",
    options: Group5,
  },
  {
    label: "Group 3",
    options: Group6,
  },
];
export const option5: any = [
  { value: "January", label: "January" },
  { value: "Febuary", label: "Febuary", disabled: true },
  { value: "March", label: "March", disabled: true },
  { value: "April", label: "April", disabled: true },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },

];
// Group-Option MutipleSelect

const Group7: any = [

  {
    value: "Apple",
    label: "Apple"
  },
  {
    value: "Mangoo",
    label: "Mangoo"
  },
  {
    value: "Banana",
    label: "Banana"
  },
  {
    value: "Jackfruit",
    label: "Jackfruit"
  }
];
const Group8: any = [
  {
    value: "BMW",
    label: "BMW"
  },
  {
    value: "Mercedes-benz",
    label: "Mercedes-benz"
  },
  {
    value: "Jaguar",
    label: "Jaguar"
  },
  {
    value: "Renault",
    label: "Renault"
  },
  {
    value: "Audi",
    label: "Audi"
  },
  {
    value: "Tesla",
    label: "Tesla"
  },
  {
    value: "Porsche",
    label: "Porsche"
  }
];

export const Groupeddata1: any = [
  {
    label: "Fruits",
    options: Group7
  },
  {
    label: "Luxury Cars",
    options: Group8,
  }
];
// Single Custom Style
 export const option6: any = [
    { value: "January", label: "January" },
    { value: "Febuary", label: "Febuary" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May", color: "#6c5ffc" },
    { value: "June", label: "June" },
    { value: "July", label: "July", color: "#05c3fb" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October", color: "#498205" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  //Checkout
 export const Country = [
    { value: "Germany", label: "Germany" },
    { value: "Canada", label: "Canada" },
    { value: "USA", label: "USA" },
    { value: "AUS", label: "AUS" },
  ];
