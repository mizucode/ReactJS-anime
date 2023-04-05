import { Col, Container, Row, Button } from "react-bootstrap";
const Intro = () => {
	return (
		<div className="intro text-white">
			<Container className="d-flex justify-content-center align-items-center">
				<Row>
					<Col>
						<div className="title">TONTON ANIME FAVORITMU</div>
						<div className="title">KAPAN SAJA DAN DIMANA SAJA</div>
						<div className="introButton mt-4 text-center">
							<Button variant="dark">Tonton Sekarang</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Intro;
