import { Container } from 'react-bootstrap';

export function Home() {
    return (
        <Container className="container mt-4 bg-white">
            <div className="jumbotron">
                <h1 className="display-4 text-muted">Welcome to Our Store</h1>
                <p className="lead">Discover a wide range of products in our online store. We take pride in our use of the latest technologies to bring you the best shopping experience.</p>
            </div>
            <div className="card bg-primary text-white">
                <div className="card-body">
                    <h2 className="card-title">Technologies We Use</h2>
                    <p className="card-text">We've built this project using the following technologies:</p>
                    <ul>
                        <li>Bootstrap - for stylish and responsive design</li>
                        <li>React.js - for building dynamic user interfaces</li>
                        <li>Vite.js - for fast and efficient development</li>
                        <li>TypeScript - for static typing and enhanced developer tooling</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}