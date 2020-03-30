import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import PropTypes from 'prop-types';


const AddLogModal = ({ addLog }) => {

  //Component level state
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please entere a message and tech' });
    } else {

      const log = {
        message,
        tech,
        attention,
        date: new Date()
      }

      // Call redux action
      addLog(log);

      M.toast({
        html: `Log add by ${tech}`
      })

      // Clear Fields
      setMessage('');
      setAttention(false);
      setTech('');
    }

  }

  return (
    <div id='add-log-modal' className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>System Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
            <label htmlFor="message" className="active">Log Message</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
              <option value="" disabled>Select Technician</option>
              <option value="John Doe">John Doe</option>
              <option value="Smith Benson">Smith Benson</option>
              <option value="Philipp Campestrini">Philipp Campestrini</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)} />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
};


AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
}

export default connect(null, { addLog })(AddLogModal);
