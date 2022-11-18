import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "../../styles/protectoralogin.css";

export function CasaAcogidaCard(props) {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.organizacion_list();
  }, []);

  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhot(e.target.photo)}
              />
            </div> */}
      <ul className="list-group list-group-flush strut">
        <li
          className="ctitle list-group-item active text-break titlecard "
          aria-current="true"
        >
          {" "}
          {props.pet.name}
        </li>
        <li className="list-group-item text-break text-card ">
          Email:{props.pet.email}
        </li>
        <li className="list-group-item text-break text-card ">
          Ciudad:{props.pet.city}
        </li>
        <li className="list-group-item text-break text-card">
          Disponibilidad:{props.pet.avaiability}
        </li>
        <li className="list-group-item text-break text-card ">
          Animales:{props.pet.animals}
        </li>
      </ul>
      <Link to={"/contacto"}>
        <button type="button" className="bcontactanos">
          Contacta con nosotros{" "}
        </button>
      </Link>
    </div>
  );
}

CasaAcogidaCard.propTypes = {
  pet: propTypes.any,
};
