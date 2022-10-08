import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/editusuario.css";

export const Editusuario = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [avaiability, setAvaiability] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [animals, setAnimals] = useState("");
  const [disabledinput, setDisabledinput] = useState(true);

  const validate = (email) => {
    setErrorMessage("");
    if (!email.includes("@")) {
      alert("Email no válido");
    } else {
      actions.editUser(email, name, phone, animals, avaiability, city);
    }
  };

  return (
    <div class="wrapper">
      {/* <fieldset disabled={!disabledinput ? false : true}> */}
      <div class="h5 font-weight-bold text-center mb-3">
        Perfil casa de acogida
      </div>
      <div class="form-group d-flex align-items-center">
        <div class="icon">
          <span class="fas fa-phone"></span>
        </div>
        <input
          type="text"
          defaultValue={store.organizacion.phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          placeholder="Teléfono"
        />
      </div>
      <div class="form-group d-flex align-items-center">
        <div class="icon">
          <span class="far fa-envelope"></span>
        </div>
        <input
          type="text"
          defaultValue={store.organizacion.email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div class="form-group d-flex align-items-center">
        <div class="icon">
          <span class="fa fa-calendar"></span>
        </div>
        <input
          type="text"
          defaultValue={store.organizacion.avaiability}
          onChange={(e) => setAvaiability(e.target.value)}
          className="form-control"
          placeholder="Disponibilidad de acogida"
        />
      </div>
      <div class="form-group d-flex align-items-center">
        <div class="icon">
          <span class="fa fa-paw"></span>
        </div>
        <input
          type="text"
          defaultValue={store.organizacion.animals}
          onChange={(e) => setAnimals(e.target.value)}
          className="form-control"
          placeholder="¿Convives con más animales?"
        />
      </div>
      <div class="form-group d-flex align-items-center">
        <div class="icon">
          <span class="fas fa-map-marker-alt"></span>
        </div>
        <input
          type="text"
          defaultValue={store.organizacion.city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control"
          placeholder="Ciudad"
        />
      </div>
      {/* </fieldset> */}
      {disabledinput ? (
        <button
          onClick={() => {
            setDisabledinput(false);
          }}
          className="btn  sub btn-secondary"
        >
          Editar
        </button>
      ) : (
        <button
          onClick={() => {
            validate(email);
          }}
          className="btn  sub btn-secondary"
        >
          Guardar
        </button>
      )}

      <div class="mb-2"></div>
    </div>
  );
};