import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/mascotaregister.css";

export const FormularioPets = () => {
  const { store, actions } = useContext(Context);
  const [pet, setPet] = useState("");
  const [login, setLogin] = useState("");


  useEffect(() => {}, []);

  const PetPhoto = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPet({ ...pet, image: e.target.files[0] });
    }
  };


  

  return (
    <form class="row g-3">
    <div class="wrapper" className="form-group formregister">
  
     
      <div className="container-fluid bodyregistro fluidbody">
        <div className="tamañoformulario ">
          <div className="form-outline mb-4 text-center">
            <div className="myform">
              <h4 className="protectoraocasa">
                ¡Registra a la mascota que necesite ayuda!
              </h4>
              <div className="input-group mb-3 " />
              <label className="input-group-text caracterlabel  casellalabel" for="inputGroupFile01">
                Subir
              </label>
              <input
                type="file"
                onChange={PetPhoto}
                className="form-control caractercontrol"
                id="inputGroupFile01"
              />

              <div></div>
            </div>
            <div className="form-group">
              <label></label>
              <input
                type="text"
                onChange={(e) => setPet({ ...pet, name: e.target.value })}
                className="form-control formcaract"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <label></label>{" "}
              <input
                type="text"
                onChange={(e) => setPet({ ...pet, years: e.target.value })}
                className="form-control "
                placeholder="Años"
              />
            </div>
            <div className="form-group ">
              <label></label>
              <input
                type="text"
                onChange={(e) => setPet({ ...pet, race: e.target.value })}
                className="form-control"
                placeholder="Animal/raza"
              />
            </div>
            <div className="form-group">
              <label></label>
              <input
                type="text"
                onChange={(e) => setPet({ ...pet, sexo: e.target.value })}
                className="form-control formquat"
                placeholder="sexo"
              />
            </div>
            <div className="form-group">
              <label></label>
              <input
                type="text"
                onChange={(e) =>
                  setPet({ ...pet, convivencia: e.target.value })
                }
                className="form-control formcinq"
                placeholder="¿Convivencia con otros animales?"
              />
            </div>
            <div>
              <button
                onClick={() => {
                  actions.pets(pet);
                  setLogin("Imagen subida");
                }}
                type="submit"
                className="registroboton btn  sub btn-secondary botonsubida"
                
              >
                Guardar
              </button>

              <p>{login}</p>{" "}


            </div>
          
          </div>
        </div>
      </div>
    </div>
    </form>
    );
  };

