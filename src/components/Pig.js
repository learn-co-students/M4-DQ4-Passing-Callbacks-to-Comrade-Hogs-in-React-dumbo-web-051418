import React from "react"
import exclamation from "../assets/exclamation.png"

// import GalaxySNote7, {} from "./components/GalaxySNote7"

export default class Pig extends React.Component {


  panic = () => {
    console.log(exclamation)
    return <img className="exclamation" src={exclamation} alt="" />

  }

  panickedPig = () => this.props.environment === 'panicked' ? this.panic() : null

  // exclaim = () => {
  //   this.setState({panicked: true}, () => {
  //     if (this.state.panicked)
  //     return this.exclaimAudio.play()
  //     this.squeelAudio.play()
  //   })
  //
  // }

  render() {
    console.log("Inside Pig.js", this.props.name)
    return(
      <div id={this.props.name} className="sheeple">
        {this.panickedPig()}
      </div>
    )
  }
}
