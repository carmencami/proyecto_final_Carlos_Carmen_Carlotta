import { CasaAcogida } from "../component/card_casaacogida";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { CasaAcogidaCard } from "../component/card_casaacogida";

const Protectoralogin = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.listaCasaAcogida();
  }, []);
  console.log(store.casaacogida_list);
  return (
    <>
      <div>
        <Link to="/formulariopets">
          <button type="button" className="btn btn-outline-danger">
            Registra tu mascota{" "}
          </button>
        </Link>
        <div />

        <div className="cardacogida">
          {store.casaacogida_list.map((organizacion) => {
            return <CasaAcogidaCard key={organizacion.id} pet={organizacion} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Protectoralogin;
