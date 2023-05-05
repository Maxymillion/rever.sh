// @ts-nocheck
import {format, parseISO} from 'date-fns'
import {allPosts, Post} from 'contentlayer/generated'
import {getMDXComponent} from 'next-contentlayer/hooks'
import {notFound} from "next/navigation";
import styles from "./Article.module.scss";

export const generateStaticParams = async () => allPosts.map((post) => ({slug: post._raw.flattenedPath.split("/")}))

export const generateMetadata = ({params}) => {
  const post = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug.join("/"))
  if (!post) {
    return notFound();
  }
  return {title: post.title}
}

const PostLayout = ({params}: { params: { slug: string[] } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug.join("/"))
  if (!post) {
    return undefined;
  }
  const Content = getMDXComponent(post.body.code)


  return (
    <section className={styles.article}>
      <div className={styles.article__heading}>
        <div className={styles.article__heading__bar}>
          <time dateTime={post.publishedAt}>
            {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
          </time>
          <p>by Max van Essen</p>
        </div>
        <h1>{post.title}</h1>
      </div>
      <article>
        <Content/>
      </article>
    </section>
  )
}

export default PostLayout
