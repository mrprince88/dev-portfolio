export const fetchArticles = async () => {
  try {
    const query = `query Publication {
        publication(host: "mrprince88.hashnode.dev") {
          posts(first: 10) {
            edges {
              node {
                title
                brief
                url
              }
            }
          }
        }
      }`;

    const data: {
      json: () => Promise<{
        data: {
          publication: {
            posts: {
              edges: {
                node: {
                  title: string;
                  brief: string;
                  url: string;
                };
              }[];
            };
          };
        };
      }>;
    } = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
      body: JSON.stringify({ query }),
    });

    const json = await data.json();

    const articles = json.data.publication.posts.edges.map(
      (edge: { node: { title: string; brief: string; url: string } }) =>
        edge.node,
    );

    return articles;
  } catch (error) {
    console.log(error);
  }
};
