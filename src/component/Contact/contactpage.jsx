import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { BASE_URL } from "../../utils";
import { Box } from "@mui/material";
import StarImage from '../../component/card/Star';


const colorProps =  'rgb(241 241 241)'
const ContactPage = () => {
  const [contactlist, setContactlist] = useState([]);

  useEffect(() => {
    getAllContact();
  }, []);

  const getAllContact = async () => {
    const result = await axios.post(`${BASE_URL}/api/Contact/GetAll`);
    if (result.data) {
      setContactlist(result.data);
    }
  };

  return (
    <div style={{backgroundColor:"rgb(241,241,241)", paddingTop:'60px'}}>
     <div  style={{width:'100px',margin:'0 auto'}}>
               <StarImage color={colorProps}/>
               </div>
      <div className="main-d" >
        <h2 className="heading"></h2>
        <div className="main-d1">
          {contactlist.map((item) => {
            return (
              <>
                <div className="con1">
                  <h4 className="font">{item?.productName}</h4>
                  {item?.website1 && (
                    <a href={`http://${item?.website1}`} target="_blank">
                      {item?.website1}{" "}
                    </a>
                  )}
                  {item?.website1 && <br />}
                  {item?.website2 && (
                    <a href={`http://${item?.website2}`} target="_blank">
                      {item?.website2}
                    </a>
                  )}
                  {item?.website2 && <br />}
                  {item?.website3 && (
                    <a href={`http://${item?.website3}`} target="_blank">
                      {item?.website3}
                    </a>
                  )}
                  <p className="p-tag">{item?.address}</p>
                  {item.number.map((listItem) => {
                    return (
                      <>
                          <p className="p-tag">
                          {listItem.type}: {listItem.number}
                        </p>
                      </>
                    );
                  })}
                  {/* <p className="p-tag">{item?.mobileNo}</p>
                  <p className="p-tag">{item?.phone}</p> */}
                  <a href={`mailto:${item?.email}`}>{item?.email}</a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;