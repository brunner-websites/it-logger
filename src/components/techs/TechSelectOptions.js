import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTechs, setLoading } from '../../actions/techActions'

const TechSelectOptions = ({ getTechs, setLoading, techs, loading }) => {

  useEffect(() => {

    setLoading();
    getTechs();
    //eslint-disable  -next-line
  }, [])
  return (
    <Fragment>
      <option value="" disabled>Select Technician</option>
      {!loading && techs !== null && techs.map(tech => {
        const firstName = tech.firstName[0].toUpperCase() + tech.firstName.slice(1);
        const lastName = tech.lastName[0].toUpperCase() + tech.lastName.slice(1);
        const name = firstName + ' ' + lastName;

        return <option key={tech.id} value={name}>{name}</option>
      })}
    </Fragment >

    /* // <option value="" disabled>Select Technician</option>
    // <option value="John Doe">John Doe</option>
    // <option value="Smith Benson">Smith Benson</option>
    // <option value="Philipp Campestrini">Philipp Campestrini</option> */
  )
}

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  techs: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  // ! The 'log' here is very important
  // This is what is set in the /reducers/index.js
  techs: state.tech.techs,
  loading: state.tech.loading
})


export default connect(mapStateToProps, { setLoading, getTechs })(TechSelectOptions)
