// import * as React from "react";
// import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Stack from "@mui/material/Stack";
// import CardContent from "@mui/material/CardContent";
// import Profile from "./Profile";
// import Password from "./Password";
// import Account from "./Account";
// import Personal from "./Personal";

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   "& .MuiTabs-indicator": {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//   },
//   "& .MuiTabs-indicatorSpan": {
//     maxWidth: 40,
//     width: "100%",
//     backgroundColor: "rgba(53, 138, 148, 1)",
//   },
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: "none",
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: "#141414",
//     // fontWeight: "400",
//     "&.Mui-selected": {
//       color: "#0c828f",
//     },
//     "&.Mui-focusVisible": {
//       backgroundColor: "#30c1d1",
//     },
//   })
// );

// function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function List() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <Card sx={{ minHeight: 84 + "vh" }}>
//         <CardContent>
//           <Box sx={{ width: "100%" }}>
//             <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//               <StyledTabs
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="styled tabs example"
//               >
//                 <StyledTab label="Profile" {...a11yProps(0)} />
//                 <StyledTab label="Personal Details" {...a11yProps(1)} />
//                 <StyledTab label="My Account" {...a11yProps(2)} />
//                 <StyledTab label="Change Password" {...a11yProps(3)} />
//               </StyledTabs>
//             </Box>
//             <TabPanel value={value} index={0}>
//               <Profile />
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//               <Personal />
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//               <Account />
//             </TabPanel>
//             <TabPanel value={value} index={3}>
//               <Password />
//             </TabPanel>
//           </Box>
//         </CardContent>
//       </Card>
//     </>
//   );
// }



import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Profile from "./Profile";
import Password from "./Password";
import Account from "./Account";
import Personal from "./Personal";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "rgba(53, 138, 148, 1)",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#141414",
    "&.Mui-selected": {
      color: "#0c828f",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#30c1d1",
    },
  })
);

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function List() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Card sx={{ minHeight: 84 + "vh" }}>
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
              >
                <StyledTab label="Profile" {...a11yProps(0)} />
                <StyledTab label="Personal Details" {...a11yProps(1)} />
                <StyledTab label="My Account" {...a11yProps(2)} />
                <StyledTab label="Change Password" {...a11yProps(3)} />
              </StyledTabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Profile />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Personal />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Account />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Password />
            </TabPanel>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
