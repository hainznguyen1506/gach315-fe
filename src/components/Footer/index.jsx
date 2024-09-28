import { PATH } from '@/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faComments, faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const Footer = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer
      className="bg-[#f9f9f9]"
      style={{ borderTop: '4px solid #ba9344' }}
    >
      <div className="py-6 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm mb-4 mb-sm-0">
              <div className="logo-footer flex justify-center">
                <Link className="navbar-brand" to={PATH.home}>
                  <img
                    style={{ width: '75px', height: 'auto' }}
                    srcSet="/img/backup-logo.png 2x"
                  />
                </Link>
              </div>
              <div className='des-footer pt-4 text-center'>
                GẠCH 315 NPP GẠCH ỐP LÁT - TBVS CAO CẤP - TẤM ỐP NHỰA
              </div>
            </div>
            <div className="col-6 col-sm mb-4 mb-sm-0">
              {/* Heading */}
              <h6 className="leading-normal tracking-[0.5px] relative text-[1.8rem] font-bold uppercase m-0">LIÊN HỆ</h6>
              {/* Links */}
              <ul className="list-none pl-0 my-4">
                <li className='text-black'>
                  <b>Địa chỉ:</b> <span>1151 Lê Đức Thọ, Phường 13, Quận Gò Vấp, Thành phố Hồ Chí Minh</span>
                </li>
                <li className='text-black my-1'>
                  <b>Số điện thoại:</b> <span>0911 315 315</span>
                </li>
                <li className='text-black'>
                  <b>Email:</b> gach315@gmail.com
                </li>
              </ul>
              {/* Tags */}
              <Link to={PATH.contact} className="link-store-footer">
                <div className="content-footer">
                  <div className="icon flex mr-2 ml-1">
                    <FontAwesomeIcon icon={faHouseChimney} />
                  </div>
                  <div className="text mt-1 mr-2">
                    Cửa hàng gạch 315
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-sm mb-4 mb-sm-0">
              {/* Heading */}
              <h6 className="leading-normal tracking-[0.5px] relative text-[1.8rem] font-bold uppercase m-0">CHÍNH SÁCH</h6>
              {/* Links */}
              <ul className="list-none pl-0 mb-0 my-4">
                <li className='text-white'>
                  <a className="text-black" href="#!">
                    Chính sách bảo hành
                  </a>
                </li>
                <li className='text-white'>
                  <a className="text-black" href="#!">
                    Chính sách đổi trả
                  </a>
                </li>
                <li className='text-white'>
                  <a className="text-black" href="#!">
                    Cam kết mua hàng đảm bảo
                  </a>
                </li>
              </ul>

              {/* Heading */}
              <h6 className="leading-normal tracking-[0.5px] relative text-[1.8rem] font-bold uppercase m-0">HƯỚNG DẪN</h6>
              {/* Links */}
              <ul className="list-none pl-0 mb-0 my-4">
                <li className='text-white'>
                  <a className="text-black" href="#!">
                    Chính sách bảo hành
                  </a>
                </li>
                <li className='text-white'>
                  <a className="text-black" href="#!">
                    Chính sách đổi trả
                  </a>
                </li>
                <li className='text-white'>
                  <a className="text-black" href="#!">
                    Cam kết mua hàng đảm bảo
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm mb-4 mb-sm-0">
              {/* Heading */}
              <h6 className="leading-normal tracking-[0.5px] relative text-[1.8rem] font-bold uppercase m-0">Fanpage</h6>
              {/* Links */}
            </div>
          </div>
        </div>
      </div>

      <div className="py-1 bg-[#ba9344]">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="mb-3 mb-md-0 font-size-xxs text-white text-center border-none">
                © 2024 All rights reserved. Designed by Ha Hai Binh.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-widget">
        <div className={`def-content element ${isOpen ? 'visible' : ''}`}>
          <div className='def-header'>
            Liên hệ
            <div className='close-icon-popup' onClick={toggleIcon}>
              <FontAwesomeIcon className='icon-svg' icon={faXmark} />
            </div>
          </div>
          <div className='item facebook'>
            <a
              href="https://www.facebook.com/GachMenGiaReSG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Facebook"
                className="w-10 h-10 rounded-full shadow-lg"
                srcSet="/img/2023_Facebook_icon.svg"
              />

              <div className='detail-content'>
                <span className='arcu-item-subtitle'>Gạch 315</span>
              </div>
            </a>
          </div>
          <div className='item phone'>
            <a
              href="tel:0911315315"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Phone"
                className="w-10 h-10 rounded-full shadow-lg"
                srcSet="/img/phone-call.svg"
              />

              <div className='detail-content'>
                <span className='arcu-item-subtitle'>0911 315 315</span>
              </div>
            </a>
          </div>
          <div className='item zalo'>
            <a
              href="https://zalo.me/0911315315"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Phone"
                className="w-10 h-10 rounded-full shadow-lg"
                srcSet="/img/zalo.jpg"
              />

              <div className='detail-content'>
                <span className='arcu-item-subtitle'>0911 315 315</span>
              </div>
            </a>
          </div>
          <div className='item email'>
            <a
              href="mailto:gachmen315@gmail.com"
              rel="noopener noreferrer"
            >
              <img
                alt="Phone"
                className="w-10 h-10 rounded-full shadow-lg"
                srcSet="/img/gmail.svg"
              />

              <div className='detail-content'>
                <span className='arcu-item-subtitle'>gachmen315@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
        <div className="out-circle" onClick={toggleIcon}>
          {isOpen ? (
            <div className='close-icon element'>
              <FontAwesomeIcon className='icon-svg' icon={faXmark} />
            </div>
          ) : (
            <div className='main-icon'>
              <FontAwesomeIcon className='icon-svg' icon={faComments} />
              <p className='text-sp'> Hỗ trợ </p>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
