import React from "react";
import { Link } from 'react-router-dom';
// import '../../styles/Header.scss';
import Logo from '../../images/logo.png';
import data from "../../static/staticData.json";
import ReactModal from 'react-modal';
import '../../styles/headerTest.scss';

// const ProjectListPopup = (props) => {
//     return (
//         <div className="projLi" onMouseLeave={() => props.close()} onClick={() => props.close()} >
//             <Link className="nav-link" to="Project-FaceClassificationSystem">Face Classification System</Link>
//             <Link className="nav-link" to="Project-Arthrocure">Arthrocure</Link>
//             <Link className="nav-link" to="Project-SpellMe">Spell Me</Link>
//             <Link className="nav-link" to="Project-EFarming">E-Farming</Link>
//             <Link className="nav-link" to="Project-Chatbot">Chatbot</Link>
//             <Link className="nav-link" to="Project-SupplyChainManagementSystem">Supply Chain Management System</Link>
//             <Link className="nav-link" to="Project-NurseryManagementSystem">Nursery Management System</Link>
//             <Link className="nav-link" to="Project-NanoProcessorDesign">Nano Processor Design</Link>
//             <Link className="nav-link" to="Project-NozamaWarriorGameSimulation">Nozama Warrior Game Simulation</Link>
//         </div>
//     )
// }

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
            content: {
                top: '40%',
                left: '75%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '0px',
                padding: '0px',
                overlay: { opacity: 1 },
                boxShadow: '0px 3px 16px 0px rgba(0, 0, 0, 0.1)'
            }
        };
        return (
                <header className="header_area" id="myHeader">
                    <div className="main_menu" id="mainNav">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container box_1620" onClick={this.breadCrumbLinks.bind(this)}>
                            <Link className="navbar-brand logo_h" to="/home">
                                <img src={Logo} alt=""
                                    /></Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    {/* <span><i className="fa fa-bars"></i></span> */}
                                    {/* <span><i className="fa fa-bars"></i></span>
                                    <span><i className="fa fa-bars"></i></span> */}
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse offset"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="nav navbar-nav menu_nav ml-auto">
                                        <li className="nav-item active">
                                        <Link className="nav-link" to="/home">{data.Home}</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/about">{data.About}</Link>
                                        </li>
                                        <li className="nav-item submenu dropdown">
                                        <Link to="/projects" id='projectPopup' className="nav-link dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false" 
                                                // onMouseOver={this.projectsList.bind(this)}
                                                >
                                            {data.Projects}</Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                <Link className="nav-link" to="Project-FaceClassificationSystem">Face Classification System</Link>
                                        
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="Project-Arthrocure">Arthrocure</Link>
            
            
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="Project-SpellMe">Spell Me</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="Project-EFarming">E-Farming</Link>
                                                </li>
                                                <li className="nav-item">
                                                                <Link className="nav-link" to="Project-Chatbot">Chatbot</Link>

                                                </li>
                                                <li className="nav-item">
                                                               <Link className="nav-link" to="Project-SupplyChainManagementSystem">Supply Chain Management System</Link>

                                                </li>
                                                <li className="nav-item">
                                                                <Link className="nav-link" to="Project-NurseryManagementSystem">Nursery Management System</Link>

                                                </li>
                                                <li className="nav-item">
                                                                <Link className="nav-link" to="Project-NanoProcessorDesign">Nano Processor Design</Link>

                                                </li>
                                                <li className="nav-item">
                                                                <Link className="nav-link" to="Project-NozamaWarriorGameSimulation">Nozama Warrior Game Simulation</Link>

                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/blog">{data.Blog}</Link>
                                        </li>
                                        <li className="nav-item">
                                    <Link className="nav-link" to="/media">{data.Media}</Link>

                                        </li>
                                        <li className="nav-item">
                                    <Link className="nav-link" to="/contact">{data.Contact}</Link>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

               


        );
    }

}