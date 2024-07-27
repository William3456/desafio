import React from 'react';

// Asumiendo que tu JSON está en un archivo llamado data.js
import { data } from './data';

const EmpresasList = () => {
  console.log("hola mundo");
  return (
    <div className="container mt-5 border">
      {data.map((item, index) => (
        <div key={index} className='border'>
          <h1 className="mb-4">{item.descripcion}</h1>
          <div className="row">
            {item.empresas.map((empresa, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{empresa.titulo}</h5>
                    <p className="card-text">{empresa.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmpresasList;
