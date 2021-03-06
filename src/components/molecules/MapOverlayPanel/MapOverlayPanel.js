import React, { Component } from 'react'
//import { loadModules } from 'esri-loader'
import MapSearch from '../MapSearch/MapSearch'
import SidePanel from '../../molecules/SidePanel'
import './MapOverlayPanel.css'
import Grid from '@material-ui/core/Grid'
class MapOverlayPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  } 
  setProjectCallback = (value) =>{
    //this.setState({project:value})
    console.log(this.state.project)
    this.props.projectCallback(value)
  }
  setPhaseCallback = (value) =>{
    //this.setState({phase:value})
    console.log(this.state.phase)
    this.props.phaseCallback(value)
  }
  componentDidUpdate = () => {
  }
  render() {
    return (
      <div className="mapOverlayPanel">
        <Grid
          container
          spacing={10}
          alignItems="center"
          direction="row"
          justify="center"
        >
          <MapSearch 
            view={this.props.view} 
            resultPinDragable={true}
          />
          <SidePanel ref="sidePanel" 
            hideSidePanel={this.props.hideSidePanel} 
          />
        </Grid>
      </div>
    )
  }
}

export default MapOverlayPanel