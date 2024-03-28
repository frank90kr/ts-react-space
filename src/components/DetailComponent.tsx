import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import SingleArticle from "../interfaces/SingleArticle";
import { useParams, Link } from "react-router-dom";

const DetailComponent = () => {
  const [singleArticle, setSingleArticle] = useState<SingleArticle | null>(null);
  const param = useParams();

  const fetchSingleArticle = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + param.id);
      if (response.ok) {
        const singleResponse = await response.json();
        console.log(singleResponse);
        setSingleArticle(singleResponse);
      }
    } catch (error) {
      console.log("Errore nella chiamata");
    }
  };
  useEffect(() => {
    fetchSingleArticle();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={8}>
          <Card>
            <Card.Img variant="top" src={singleArticle?.image_url} />
            <Card.Body>
              <Card.Title>{singleArticle?.title}</Card.Title> <Card.Text>{singleArticle?.summary}</Card.Text>
              <Link to="/">
                <Button>HOME</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailComponent;
