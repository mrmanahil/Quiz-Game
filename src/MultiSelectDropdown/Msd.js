import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { useState } from "react";
import { fetchData } from "../redux/Actions/customer.action";
import { useDispatch, useSelector } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const COLOR = "red";
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      color: COLOR,
    },
  },
};

function getStyles(name, personName, theme) {
  // console.log(name);
  // console.log(personName.indexOf(name));
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelectChip() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const ApiData = useSelector((state) => state?.customers?.data);
  // console.log(ApiData);
  React.useEffect(() => {
    dispatch(fetchData);
  }, []);

  let names = ApiData?.map((item) => item?.name);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  let selectedId = personName?.map((item) => String(item?.id));
  // console.log(selectedId);
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Select</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, color: "red" }}
            >
              {selected?.map((item) => (
                <Chip
                  key={item?.id}
                  label={item?.name}
                  style={{ color: "black" }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {ApiData?.map((item) => (
            <MenuItem
              key={item?.id}
              value={item}
              style={getStyles(item, personName, theme)}
            >
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default MultipleSelectChip;

// import * as React from "react";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import ListItemText from "@mui/material/ListItemText";
// import Select from "@mui/material/Select";
// import Checkbox from "@mui/material/Checkbox";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   { name: "Oliver Hansen", id: 1 },
//   { name: "Van Henry", id: 2 },
//   { name: "April Tucker", id: 3 },
// ];

// export default function MultipleSelectCheckmarks() {
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     setPersonName(event?.target?.value);
//   };
//   //   console.log(personName?.map((item) => JSON.stringify(item?.id)));
//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-checkbox-label">Please Select</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) =>
//             selected.map((item) => item?.name).join(", ")
//           }
//           MenuProps={MenuProps}
//         >
//           {names?.map((item) => {
//             return (
//               <MenuItem key={item.id} value={item}>
//                 <Checkbox checked={personName?.indexOf(item.name) > -1} />
//                 <ListItemText primary={item?.name} />
//               </MenuItem>
//             );
//           })}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
