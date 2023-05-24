import React from "react";
import "../E-Wallet/E-Wallet.css";
import Form from "react-bootstrap/Form";
import Footer from "../../Components/Footer/Footer";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const EWallet = () => {
  return (
    <>
      <div className="navbarSection">
        <nav className="nav_dashboard" id="navbard_dashboard_ewallet">
          <Link to="/dashboard">
            <button className="button_logout btn btn-danger">
              <FiArrowLeft className="icon_back" />
            </button>
          </Link>
        </nav>
        <div className="title_landing_page">
          <h1>E-Wallet</h1>
        </div>
        <div className="form_search_hotel_section">
          <div className="form_search_hotel">
            <h3 className="flight_title_hotel">Top Up Saldo</h3>
            <Form.Label className="label_field_hotel_search">
              Pilihan top up
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Pilihan top up saldo</option>
              <option value="1">Mitra</option>
              <option value="2">Agen Resmi</option>
              <option value="3">Transfer Bank</option>
            </Form.Select>

            <Form.Label className="label_field_hotel_search">
              Nama Akun
            </Form.Label>
            <Form.Control type="text" />

            <Form.Label className="label_field_hotel_search">
              Jumlah Saldo
            </Form.Label>
            <Form.Control type="number" />

            <button className="button_search_hotel">TOP UP</button>
          </div>
        </div>

        <div className="form_search_hotel_section2">
          <div className="form_search_hotel2">
            <h3 className="flight_title_hotel2">Total Saldo</h3>
            <h2 className="flight_title_hotel3">Rp 450.000</h2>

            <button className="button_search_hotel2">Lihat Transaksi</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EWallet;
