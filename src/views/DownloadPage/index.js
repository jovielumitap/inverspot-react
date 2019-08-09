import React, {Component} from "react";
import List from "@material-ui/core/List";
import DownloadItem from "./components/DownloadItem";
import {connect} from "react-redux";
import {Header} from "../../components/Header";
const downloads = [
    {type: "img", name: "IFE Julian.jpg"},
    {type: "pdf", name: "contrato F2550.pdf"},
    {type: "pdf", name: "contrato F2550.pdf"},
];
class DownloadPage extends Component {
    onClickItem = () => {
        console.log("click item")
    };
    render() {
        return (
            <div className="vw-100">
                <Header title={'Mis documentos'}/>
                <List>
                    {downloads.map((download, index) =>
                        <DownloadItem key={"download" + index} item={download} onClick={this.onClickItem}/>
                    )}
                </List>
            </div>
        )
    }
}

export default connect()(DownloadPage);
