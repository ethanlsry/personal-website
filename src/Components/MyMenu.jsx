//react router imports
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


//antd imports
import { Menu } from 'antd';
import { ConfigProvider } from 'antd';


//menu bar items
const items = [
  {
    label: (
      <Link to={`/about`}>About</Link>
    ),
    key: 'about',
  },
  {
    label: (
      <Link to={`/cs`}>Programming</Link>
    ),
    key: 'programming',
  },
  {
    label: (
      <Link to={`/digital_media`}>Digital Media</Link>
    ),
    key: 'dm',
  },
  {
    label: (
      <a href="https://ethanliss-roy.me/resume.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    ),
    key: 'resume',
  }
];



export default function MyMenu() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#3A5A40',
            fontSize: 18,
          },
        }}
      >
        <Menu
          mode="horizontal"
          items={items}
          style={{borderBottom: "none", minWidth: '100%'}}
          />
      </ConfigProvider>
    </>
  );
}