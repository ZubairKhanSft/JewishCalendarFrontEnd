import React from 'react'
import { Box } from "@mui/system";
import { ColorRing } from "react-loader-spinner";
function Loader() {
    return (<Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#2f913e", "#2f913e", "#2f913e", "#2f913e", "#2f913e"]}
        />
      </Box>)
}

export default Loader