import { Container } from 'react-bootstrap';
 
export function About() {
    return (
        <Container className="container mt-4 bg-white">
            <div className="jumbotron">
                <h1 className="display-4 text-muted">Welcome to Our Store</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat ipsum eu orci luctus, ac hendrerit urna vulputate. Sed euismod velit id turpis lacinia, at cursus purus venenatis.</p>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <h2 className="card-title">Our Team</h2>
                            <p className="card-text">We have a dedicated team of professionals who are passionate about what they do. Meet our team members:</p>
                            <ul>
                                <li>John Doe - CEO</li>
                                <li>Jane Smith - COO</li>
                                <li>Mike Johnson - CTO</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card bg-muted text-dark">
                        <div className="card-body">
                            <h2 className="card-title">Our Mission</h2>
                            <p className="card-text">Our mission is to provide high-quality products/services to our customers and to make a positive impact on our community and the environment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <h2>Contact Us</h2>
                <p>If you have any questions or inquiries, please feel free to contact us at <a href="mailto:contact@store.com">contact@store.com</a>.</p>
            </div>
        </Container>
    )
}