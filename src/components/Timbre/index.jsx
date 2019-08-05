import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FullDialog from '../FullDialog';
import Confirm from '../Confirm';
import TimbreDialog from './components/TimbreDialog';

const Timbre = ({
  isOpen,
  isLoading,
  onClose,
  onSave,
  timbrar,
}) => {
  const [data, setData] = useState({});
  const [confirmIsOpen, changeConfirm] = useState(false);
  const { confirma } = timbrar;
  return (
    <FullDialog
      title="Timbrar"
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      onSave={
        () => {
          changeConfirm(true);
        }
      }
    >
      <div className="p-2" style={{ maxWidth: '1200px' }}>
        <TimbreDialog timbrar={timbrar} data={data} setData={setData} />
      </div>
      <Confirm
        isOpen={confirmIsOpen}
        title="Confirmar"
        description={(
          <div className="p-1">
            <p>
              <strong>Factura: </strong>
              <span>
                { confirma.Factura }
              </span>
            </p>
            <p>
              <strong>Modo: </strong>
              <span>
                { confirma.Modo }
              </span>
            </p>
            <p>
              <strong>RFC Emisor: </strong>
              <span>
                { confirma['RFC Emisor'] }
              </span>
            </p>
          </div>
        )}
        onClose={() => { changeConfirm(false); }}
        onConfirm={
          (response) => {
            if (response) {
              const { crmid } = timbrar;
              onSave({ ...data, crmid });
            }
          }
        }
      />
    </FullDialog>
  );
};

Timbre.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  timbrar: PropTypes.object.isRequired,
};

export default Timbre;
