import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <div className="mains-d">
      <div className="mains-d1">
        <div className="cons1">
          <h4 className="fonts">Ketab Bookstore</h4>
          <a href="http://www.ketab.com/" target="_blank">
            www.ketab.com
          </a>
          <p className="p-tags">
            {" "}
            12701 Van Nuys Blvd., Suite H <br /> Pacoima CA 91331
            <br /> (310) 477-7477 <br />
            (310) 444-7176 Fax
          </p>
          <a href=" mailto:ketab1@ketab.com">
            ketab1@ketab.com
          </a>
        </div>
        <div className="cons1">
          <h4 className="fonts">Iranian Information Center</h4>
          <a href="http://www.08global.net/" target="_blank">
            www.08Global.net
          </a>
          <br />
          <a href="http://www.08global.net/" target="_blank">
            www.Iran411.com
          </a>
          <p className="p-tag">
            (818) 908-0808
            <br />
            (818) 908-1457 Fax{" "}
          </p>

          <a href="mailto:ketab1@ketab.com" >
            ketab1@ketab.com
          </a>
        </div>
        <div className="cons2">
          <div className="icons-div">
            <a
              href="https://www.facebook.com/KetabCorporation/"
              target={"_blank"}
              rel="noreferrer"
              className="a-facebook"
            >
              <i>
                <FaFacebookF />
              </i>
            </a>
            <a
              href="https://twitter.com/ketabcorp"
              target={"_blank"}
              rel="noreferrer"
              className="a-twitter"
            >
              <i>
                <FaTwitter />
              </i>
            </a>
            <a
              href="https://www.youtube.com/user/Ketabcorp"
              target={"_blank"}
              rel="noreferrer"
              className="a-youtube"
            >
              <i>
                <TfiYoutube />
              </i>
            </a>
            <a
              href="https://www.instagram.com/ketab_corp/"
              target={"_blank"}
              rel="noreferrer"
              className="a-instagram"
            >
              <i>
                <SiInstagram />
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer-para">
          Copyright © 1996-2016 Ketab Corporation, All Rights Reserved.
        </p>
        <p>
          Designed by
          <a
            href="http://smartsoftwaresolution.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            smartsoftwaresolution.com
          </a>
        </p>
      </div>
    </div>
  );
}
