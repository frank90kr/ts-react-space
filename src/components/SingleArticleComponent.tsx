import Article from "../interfaces/Article";
import { useNavigate } from "react-router-dom";
import { Col, Card, Button } from "react-bootstrap";

interface articleProps {
  articleData: Article;
}

const SingleArticleComponent = ({ articleData }: articleProps) => {
  const navigate = useNavigate();

  return (
    <Col xs={12} md={6} lg={4}>
      <Card>
        <Card.Img variant="top" src={articleData.image_url} />

        <Card.Body>
          <Card.Title>{articleData.title}</Card.Title>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/detail/" + articleData.id);
            }}
          >
            More infos
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleArticleComponent;
