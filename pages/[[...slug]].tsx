import { Heading } from "@chakra-ui/react";
import MDXComponents from "components/MDXComponents";
import { allPages, Page } from "contentlayer/generated";
import type { NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";

export async function getStaticProps({ params: { slug = [] } }) {
  const pagePath = "/" + slug.join("/");

  // TODO get list of path + title for sidebar

  return {
    props: {
      page: allPages.find((p) => p.url === pagePath),
    },
  };
}

export async function getStaticPaths() {
  const paths = allPages.map((p) => p.url);

  return { paths, fallback: false };
}

const Home: NextPage<{ page: Page }> = ({ page }) => {
  const MdxBody = useMDXComponent(page.body.code);

  const components = {
    h1: Heading,
    pre: <div>hellod</div>,
    code: () => <div>hello</div>,
  };

  const Code = (props: any) => {
    return <div {...props}>he</div>;
  };

  return (
    <div>
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Heading as="h1">Heading</Heading>
        <Button colorScheme="green">hello</Button> */}
        <MdxBody components={MDXComponents} />
      </main>

      <aside>
        <ul>
          {allPages.map((page) => (
            <a key={page._id} href={`/${page._raw.flattenedPath}`}>
              {page.title}
            </a>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Home;
