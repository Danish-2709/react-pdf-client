import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
const Apps = () => {
    const { collapseSidebar } = useProSidebar();

    return (
      <div style={{ display: "flex", minHeight: "100vh"}}>
        <Sidebar className="app">
          <Menu>
            <MenuItem className="menu1 sidebar-item"  component={<a href="/PdfUpload" className="link" />} icon={<MenuRoundedIcon className="icon" onClick={() => {
                  collapseSidebar();
                }} />}>
              <h6 className="text"><strong className="strong">RAYAN </strong><span id="italic-text">INFO SOLUTON</span></h6>
            </MenuItem>
            <MenuItem className="sidebar-item"  component={<a href="/PdfUpload" className="link" />} icon={<GridViewRoundedIcon className="icon" />}> <span className="text">Upload File</span> </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    );
  };
  export default Apps;
