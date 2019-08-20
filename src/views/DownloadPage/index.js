import React, {Component} from "react";
import List from "@material-ui/core/List";
import DownloadItem from "./components/DownloadItem";
import {connect} from "react-redux";
import {Header} from "../../components/Header";
import {fetchDownloadList} from "../../redux/actions/downloadActions";
class DownloadPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchDownloadList())
    }

    onClickItem = () => {
        console.log("click item")
    };
    render() {
        const { downloads } = this.props;
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
const mapStateToProps = ({ download }) => {
  const { downloads } = download;
  return {
      downloads
  }
};
export default connect(mapStateToProps)(DownloadPage);
