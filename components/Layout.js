
import Head from 'next/head';
import Link from 'next/link';
import '../theme.css';


export default class Layout extends React.Component {

    render() {
      const { children, title = 'App' } = this.props;
      return (
        <div className="app">
      

        <Head>
            <title>{title}</title>
            <meta name="theme-color" content="#fff" />
            <meta name="mobile-web-app-capable" content="yes" />

        </Head>

			<div className="layoutApp">
				<div className="logo">
					<img src="../static/img/logo.png" alt=""/>
				</div>

				<li>
					<Link href="/services">
						<a>
							Services
						</a>
					</Link>
				</li>
				<li>
					  <Link href="/">
						<a>
						Plans
						</a>
					</Link>
				</li>
				<li>
					  <Link href="/">
						<a>
						T. Plans
						</a>
					</Link>
				</li>
				<li>
					  <Link href="/">
						<a>
						Doctors
					</a>
					</Link>
				</li>
				<li>
					  <Link href="/">
						<a>
							Nurses
						</a>
					</Link>
				</li>
				<li>
					  <Link href="/">
						<a>
							Drivers
						</a>
					</Link>
				</li>
				<li>
					  <Link href="/">
						<a>
							Rooms
					</a>
					</Link>
				</li>
				<li>
					  <Link href="/">
						<a>
							Masseur
						</a>
					</Link>
				</li>
				<li>
					  <Link href="/">
						<a>
							Products M.P
						</a>
					</Link>
				</li>
				  <li>
					  <Link href="/">
						  <a>
							 Blog
						</a>
					  </Link>
				  </li>
				
			</div>

            <div className="contentApp" > 
                {children}
            </div>

 

      
    </div>

      );
    }
  }