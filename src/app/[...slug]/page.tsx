// @ts-nocheck
import {format, parseISO} from 'date-fns'
import {allPosts, Post} from 'contentlayer/generated'
import {getMDXComponent} from 'next-contentlayer/hooks'
import {notFound} from "next/navigation";

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
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.publishedAt} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Content/>
    </article>
  )
}

export default PostLayout
