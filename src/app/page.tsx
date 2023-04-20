import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

function PostCard(post: Post) {

    const Content = getMDXComponent(post.body.code)

    return (
        <div className="mb-8">
            <h2 className="text-xl">
                <Link href={`/posts/${post.slug}`} className="text-blue-700 hover:text-blue-900" legacyBehavior>
                    {post.title}
                </Link>
            </h2>
            <time dateTime={post.publishedAt} className="block mb-2 text-xs text-gray-600">
                {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
            </time>
            <div className="text-sm">
                <Content />
            </div>
        </div>
    )
}

export default function Home() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))

    return (
        <div className="py-8 mx-auto max-w-xl">
            <h1 className="mb-8 text-3xl font-bold text-center">Next.js</h1>

            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
        </div>
    )
}
