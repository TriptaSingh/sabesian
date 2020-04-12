import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/Header.scss';
import Logo from '../../images/logo.png';
import data from "../../static/staticData.json";
import ReactModal from 'react-modal';

const ProjectListPopup = (props) => {
    return (
        <div className="projLi" onMouseLeave={() => props.close()} onClick={() => props.close()} >
            <Link className="nav-link" to="Project-FaceClassificationSystem">Face Classification System</Link>
            <Link className="nav-link" to="Project-Arthrocure">Arthrocure</Link>
            <Link className="nav-link" to="Project-SpellMe">Spell Me</Link>
            <Link className="nav-link" to="Project-EFarming">E-Farming</Link>
            <Link className="nav-link" to="Project-Chatbot">Chatbot</Link>
            <Link className="nav-link" to="Project-SupplyChainManagementSystem">Supply Chain Management System</Link>
            <Link className="nav-link" to="Project-NurseryManagementSystem">Nursery Management System</Link>
            <Link className="nav-link" to="Project-NanoProcessorDesign">Nano Processor Design</Link>
            <Link className="nav-link" to="Project-NozamaWarriorGameSimulation">Nozama Warrior Game Simulation</Link>
        </div>
    )
}

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showProjects: false,
            breadCrumbs: []
        }
    }

    componentDidMount() {
        this.breadCrumbLinks()
    }

    projectsList() {
        this.setState({ showProjects: true });
    }
    breadCrumbLinks() {
        
        // this.setState({breadCrumbs: links});
        this.props.onHeaderClick();
    }
    
    popupClose() {
        this.setState({ showProjects: false });
        this.breadCrumbLinks();
    }
    render() {
        const customStyles = {
            content : {
              top                   : '40%',
              left                  : '75%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)',
              borderRadius          : '0px',
              padding               : '0px',
              overlay               : {opacity: 1 },
              boxShadow          : '0px 3px 16px 0px rgba(0, 0, 0, 0.1)'
            }
          };
        return (
            <div>
                <div className="header" id="myHeader">
                    <div className="Header_area">
                        <div className="container row headchk">
                            <img src={Logo} alt="SABESAN" />
                            {/* <span> */}
                            <div style={{ display: 'flex' }} onClick={this.breadCrumbLinks.bind(this)}>

                                    <Link to="/home">{data.Home}</Link>
                                    <Link to="/about">{data.About}</Link>
                                    <Link to="/projects" id='projectPopup' onMouseOver={this.projectsList.bind(this)}>{data.Projects}</Link>
                                    <Link to="/blog">{data.Blog}</Link>
                                    <Link to="/media">{data.Media}</Link>
                                    <Link to="/contact">{data.Contact}</Link>
                                </div>
                            {/* </span> */}
                        </div>
                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.showProjects}
                    style={customStyles}
                    parentSelector={() => document.querySelector('#projectPopup')}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    shouldReturnFocusAfterClose={true}
                    ariaHideApp={false}
                    ><ProjectListPopup close={this.popupClose.bind(this)}/></ReactModal>

            </div>

        );
    }

}