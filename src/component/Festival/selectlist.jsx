import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectList = ({
  handleOpen,
  open,
  handleClose,
  handleChange,
  eventlist,
  onSubmit,
  seletedValue,
}) => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-controlled-open-select-label">
          Select EventList
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          defaultValue={seletedValue}
          // // value={age}
          value={seletedValue}
          label="Select Eventlist"
          onChange={handleChange}
        >
          {eventlist &&
            eventlist.map((item) => {
              return (
                <MenuItem onClick={() => onSubmit(item.id)} value={item.id}>
                  {item.eventName}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectList;
