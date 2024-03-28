import { useEffect, useState } from "react";
import Article from "../interfaces/Article";
import { Container, Row } from "react-bootstrap";
import SingleArticleComponent from "../components/SingleArticleComponent";

const MainArticles = () => {
  const [article, setArticle] = useState<Article[]>([]);

  const fetchArticle = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (response.ok) {
        const allArticles = await response.json();
        const arrayOfArticles = allArticles.results;
        setArticle(arrayOfArticles);
      } else {
        throw new Error("Errore chiamata api");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        {article.map((singleArticle) => {
          return <SingleArticleComponent key={singleArticle.id} articleData={singleArticle} />;
        })}
      </Row>
    </Container>
  );
};

export default MainArticles;
