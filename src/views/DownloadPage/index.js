import React, {Component} from "react";
import List from "@material-ui/core/List";
import DownloadItem from "./components/DownloadItem";
import {connect} from "react-redux";
import FileSaver from 'file-saver';
import {Header} from "../../components/Header";
import {fetchDownloadList} from "../../redux/actions";
import DownloadConfirmDialog from "../../components/DownloadConfirmDialog";
class DownloadPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchDownloadList())
    }
    onHandleDownloadModal = () => {
        this.setState((state) => {
            return {
                open_download: !state.open_download
            }
        })
    };
    confirmDownload = () => {
        this.setState({open_download: false});
        if (!this.state.url || !this.state.name) return;
        FileSaver.saveAs(this.state.url, this.state.name);
    };
    onClickItem = (url, name) => {
        this.setState({open_download: true, url, name});
    };
    constructor(props) {
        super(props);
        this.state = {
            open_download: false,
            url: null,
            name: null
        };
    }
    render() {
        const { downloads } = this.props;
        const { open_download } = this.state;
        return (
            <div className="vw-100">
                <Header title={'Mis documentos'}/>
                <List>
                    {downloads.map((d, index) =>
                        <DownloadItem key={"download" + index} item={d} onClick={this.onClickItem}/>
                    )}
                </List>
                {open_download && (
                    <DownloadConfirmDialog
                        open={open_download}
                        onHandleModal={this.onHandleDownloadModal}
                        confirmDownload={this.confirmDownload}
                    />
                )}
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
