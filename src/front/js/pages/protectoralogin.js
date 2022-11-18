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
  }, [store.isAuthenticate]);
  console.log(store.casaacogida_list);
  return (
    <>
      <div>
        
        <h1 className="titlecard">Te ayudamos a encontrar un hogar para tu mascota</h1>
        <Link to="/formulariopets">
          <button type="button" class="btn btn-warning" className="botonmascota">
            Registrala{" "}
          </button>
        </Link>
        <div />
         <div className>
        <div className="responsiv cardrespo">
          {store.casaacogida_list.map((organizacion) => {
            return <CasaAcogidaCard key={organizacion.id} pet={organizacion} />;
          })}
        </div>
        </div>
      </div>
    </>
  );
};
export default Protectoralogin;
