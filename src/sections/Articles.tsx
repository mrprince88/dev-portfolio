/* eslint-disable */

import { fetchArticles } from "~/lib/requests";
import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Slide } from "~/components/ReactReveal";

export const Articles = async () => {
  const articles = await fetchArticles();

  return (
    <section className="pb-20" id="articles">
      <h1 className="my-5 text-4xl font-bold">Articles</h1>
      <p className="mb-8 text-2xl uppercase">
        {`Here are some of the articles I've written recently`}
      </p>
      <Slide duration={1000} direction="left" triggerOnce>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {articles?.map((article) => (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              key={article.title}
            >
              <Card key={article.title} rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardFooter>{article.brief}</CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default Articles;
