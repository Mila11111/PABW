import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../Assets/profile.png";
import "../Form Login/FormLogin.css";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const HalamanRegistrasi = () => {
    navigate("/regist");
  };

  return (
    <body className="body-login">
      <section>
        <div className="login">
          <div className="col">
            <form id="form" className="flex flex-col">
              <div className="image_profile_login">
                <img
                  src={profile}
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </div>

              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />

              <Link to="/dashboard" className="btn button_login_akun btn-login">
                MASUK
              </Link>
              <p style={{ display: "flex", justifyContent: "center" }}>
                Belum Punya Akun?{" "}
                <a onClick={HalamanRegistrasi} className="btn-regis">
                  {" "}
                  BUAT AKUN{" "}
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </body>
  );
};

export default FormLogin;
