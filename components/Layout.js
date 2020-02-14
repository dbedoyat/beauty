
import Head from 'next/head';
import Link from "./ActiveLink"
import "bootstrap/dist/css/bootstrap.min.css";
import '../theme.css';
import {
  FiBriefcase,
  FiClipboard,
  FiTruck,
  FiTv,
  FiUsers,
  FiPackage,
  FiEdit3,
  FiBox
} from "react-icons/fi";


export default class Layout extends React.Component {

	

    render() {
      const { children, title = 'App' } = this.props;
      return (
        <div className="app">
          <Head>
            <title>{title}</title>
            <meta name="theme-color" content="#fff" />
            <meta name="mobile-web-app-capable" content="yes" />
            <link
              href="https://fonts.googleapis.com/css?family=Muli:400,600,700&display=swap"
              rel="stylesheet"
            />
          </Head>

          <div className="layoutApp">
            <div className="logo">
              <img src="../static/img/logo.png" alt="" />
            </div>

            <li>
              <Link activeClassName="active" href="/services">
                <a>
                  <FiBox /> <span>Services</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/plans" activeClassName="active">
                <a>
                  <FiClipboard /> <span>Plans</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/doctors" activeClassName="active">
                <a>
                  <FiBriefcase /> <span>Doctors</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/nurses" activeClassName="active">
                <a>
                  <FiBriefcase /> <span>Nurses</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/drivers" activeClassName="active">
                <a>
                  <FiTruck /> <span>Drivers</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/rooms" activeClassName="active">
                <a>
                  <FiTv /> <span>Rooms</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/masseurs" activeClassName="active">
                <a>
                  <FiUsers /> <span>Masseurs</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/productsmp" activeClassName="active">
                <a>
                  <FiPackage /> <span>Products M.P.</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog" activeClassName="active">
                <a>
                  <FiEdit3 /> <span>Blog</span>
                </a>
              </Link>
            </li>
          </div>
          <div className="headerApp"></div>
          <div className="contentApp">{children}</div>
        </div>
      );
    }
  }