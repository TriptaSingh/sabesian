import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import HeaderComponent from "./Layout/Components/Header";
import { Footer } from "./Layout/Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeComponent } from "./Pages/HomeComponent";
import { AboutComponent } from "./Pages/AboutComponent";
import { BreadCrumbsComponent } from "./Layout/Components/BreadCrumbs";
import { BlogComponent } from "./Pages/BlogComponent";
import ContactComponent from "./Pages/ContactComponent";
import { FaceCSComponent } from "./Pages/ProjectComponents/FaceCSComponent";
import { ArthrocureComponent } from "./Pages/ProjectComponents/ArthrocureComponent";
import { ChatbotComponent } from "./Pages/ProjectComponents/ChatbotComponent";
import { EFarmingComponent } from "./Pages/ProjectComponents/EFarmingComponent";
import { NPDComponent } from "./Pages/ProjectComponents/NPDComponent";
import { NWGSComponent } from "./Pages/ProjectComponents/NWGSComponent";
import { NurseryMSComponent } from "./Pages/ProjectComponents/NurseryMSComponent";
import { SpellMeComponent } from "./Pages/ProjectComponents/SpellMeComponent";
import { SupplyChainMSComponent } from "./Pages/ProjectComponents/SupplyChainMSComponent";
import { MediaComponent } from "./Pages/MediaComponent";
import { ProjectComponent } from "./Pages/ProjectComponent";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadCLinks: [],
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll(event) {
    var header = document.getElementById("myHeader");
    if (!!header) {
      var sticky = !!header ? header.offsetTop : 0;
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
  breadCrumbsLink() {
    const windowURL = window.location.href;
    const urlArr = windowURL.split("/");
    const url = !!urlArr && urlArr.length > 0 ? urlArr.pop() : "";
    const links = [
      {
        name: "Home",
        click: "/home",
      },
    ];
    switch (url) {
      case "":
      case "home":
        break;
      case "about": {
        links.push({
          name: "About Me",
          click: "/about",
        });
        break;
      }
      case "blog": {
        links.push({
          name: "Blog",
          click: "/blog",
        });
        break;
      }
      case "contact": {
        links.push({
          name: "Contact",
          click: "/contact",
        });
        break;
      }
      case "media": {
        links.push({
          name: "Gallery",
          click: "/media",
        });
        break;
      }
      case "projects": {
        links.push({
          name: "Project",
          click: "/projects",
        });
        break;
      }
      default: {
        links.push({
          name: "Project",
          click: "/projects",
        });
        links.push({
          name: url.replace("Project-", ""),
          click: url,
        });
        break;
      }
    }
    this.setState({ breadCLinks: links });
  }
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent onHeaderClick={this.breadCrumbsLink.bind(this)} />
        <BreadCrumbsComponent
          breadCLinks={this.state.breadCLinks}
          checkURL={this.breadCrumbsLink.bind(this)}
        />
        <Switch>
          <Route path="/about" component={AboutComponent}></Route>
          <Route path="/blog" component={BlogComponent}></Route>
          <Route path="/contact" component={ContactComponent}></Route>
          <Route path="/media" component={MediaComponent}></Route>
          <Route path="/projects" component={ProjectComponent}></Route>
          <Route
            path="/Project-FaceClassificationSystem"
            component={FaceCSComponent}
          ></Route>
          <Route
            path="/Project-Arthrocure"
            component={ArthrocureComponent}
          ></Route>
          <Route path="/Project-SpellMe" component={SpellMeComponent}></Route>
          <Route path="/Project-EFarming" component={EFarmingComponent}></Route>
          <Route path="/Project-Chatbot" component={ChatbotComponent}></Route>
          <Route
            path="/Project-SupplyChainManagementSystem"
            component={SupplyChainMSComponent}
          ></Route>
          <Route
            path="/Project-NurseryManagementSystem"
            component={NurseryMSComponent}
          ></Route>
          <Route
            path="/Project-NanoProcessorDesign"
            component={NPDComponent}
          ></Route>
          <Route
            path="/Project-NozamaWarriorGameSimulation"
            component={NWGSComponent}
          ></Route>
          <Route path="/" component={HomeComponent}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
