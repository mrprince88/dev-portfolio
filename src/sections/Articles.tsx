import { fetchArticles } from "~/lib/requests";
import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Fade } from "~/components/ReactReveal";
import Link from "next/link";

export const Articles = async () => {
  const articles = await fetchArticles();

  return (
    <section className="pb-20" id="articles">
      <h1 className="my-5 text-3xl font-bold sm:text-4xl">Articles</h1>
      <p className="mb-8 text-xl uppercase sm:text-2xl">
        {`Here are some of the articles I've written recently`}
      </p>
      <Fade duration={1000} triggerOnce>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {articles?.map(
            (article: { title: string; brief: string; url: string }) => (
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
                key={article.title}
              >
                <Card key={article.title}>
                  <CardHeader>
                    <CardTitle>{article.title}</CardTitle>
                  </CardHeader>
                  <CardFooter>{article.brief}</CardFooter>
                </Card>
              </Link>
            ),
          )}
        </div>
      </Fade>
    </section>
  );
};

export default Articles;
