import Article from './Article'

const ArticleList = ({ posts }) => {
    return (
        <main>
            {posts.map((article) => <Article
                key={article.id}
                title={article.title}
                date={article.date}
                preview={article.preview}
                readEst={article.minutes} />)}
        </main>
    )
}

export default ArticleList