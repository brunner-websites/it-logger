import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { getTechs, setLoading } from '../../actions/techActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const TechListModal = ({ getTechs, techs, setLoading, loading }) => {

  //const [techs, setTechs] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading();
    console.log(loading);
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicians</h4>
        <ul className="collection">
          {!loading && techs !== null && techs.map(tech => (
            <TechItem tech={tech} key={tech.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

TechListModal.propTypes = {
  getTechs: PropTypes.object.isRequired,
  techs: PropTypes.object.isRequired,
  setLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  // ! The 'log' here is very important
  // This is what is set in the /reducers/index.js
  techs: state.tech.techs,
  loading: state.tech.loading
})

export default connect(mapStateToProps, { getTechs, setLoading })(TechListModal)
