import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Konosuba from "../assets/trending/konosuba.jpg";
const Trending = () => {
	return (
		<Container>
			<h1 className="text-white text-center py-5">Trending Anime</h1>
			<Row>
				<Col md={4} className="movieWrapper" id="trending">
					<Card className=" bg-dark text-white p-2 m-1  movieImage">
						<Image src={Konosuba} alt="Card image" classname="images" />
						<Card.Title className="text-center mt-3">Konosuba</Card.Title>
						<Card.Text className="text-center">
							Fantasy, Comedy, Issekai
						</Card.Text>
						<Card.Text classname="lastUpdate">
							Last updated 3 mins ago
						</Card.Text>
					</Card>
				</Col>
				<Col md={4} className="movieWrapper">
					<Card className=" bg-dark text-white p-2 m-1  movieImage">
						<Image src={Konosuba} alt="Card image" classname="images" />
						<Card.Title className="text-center mt-3">Konosuba</Card.Title>
						<Card.Text className="text-center">
							Fantasy, Comedy, Issekai
						</Card.Text>
						<Card.Text classname="lastUpdate">
							Last updated 3 mins ago
						</Card.Text>
					</Card>
				</Col>
				<Col md={4} className="movieWrapper">
					<Card className=" bg-dark text-white p-2 m-1  movieImage">
						<Image src={Konosuba} alt="Card image" classname="images" />
						<Card.Title className="text-center mt-3">Konosuba</Card.Title>
						<Card.Text className="text-center">
							Fantasy, Comedy, Issekai
						</Card.Text>
						<Card.Text classname="lastUpdate">
							Last updated 3 mins ago
						</Card.Text>
					</Card>
				</Col>
				<Col md={4} className="movieWrapper">
					<Card className=" bg-dark text-white p-2 m-1  movieImage">
						<Image src={Konosuba} alt="Card image" classname="images" />
						<Card.Title className="text-center mt-3">Konosuba</Card.Title>
						<Card.Text className="text-center">
							Fantasy, Comedy, Issekai
						</Card.Text>
						<Card.Text classname="lastUpdate">
							Last updated 3 mins ago
						</Card.Text>
					</Card>
				</Col>
				<Col md={4} className="movieWrapper">
					<Card className=" bg-dark text-white p-2 m-1  movieImage">
						<Image src={Konosuba} alt="Card image" classname="images" />
						<Card.Title className="text-center mt-3">Konosuba</Card.Title>
						<Card.Text className="text-center">
							Fantasy, Comedy, Issekai
						</Card.Text>
						<Card.Text classname="lastUpdate">
							Last updated 3 mins ago
						</Card.Text>
					</Card>
				</Col>

				<Col md={4} className="movieWrapper">
					<Card className=" bg-dark text-white p-2 m-1  movieImage">
						<Image src={Konosuba} alt="Card image" classname="images" />
						<Card.Title className="text-center mt-3">Konosuba</Card.Title>
						<Card.Text className="text-center">
							Fantasy, Comedy, Issekai
						</Card.Text>
						<Card.Text classname="lastUpdate">
							Last updated 3 mins ago
						</Card.Text>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Trending;
