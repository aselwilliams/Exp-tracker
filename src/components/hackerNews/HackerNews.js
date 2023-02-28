import { useState} from "react";
import moment from 'moment';
import classes from './HackerNews.module.css';
import useAxios from '../hooks/useAxios'

export default function FetchNews() {
  const [query, setQuery] = useState("chat gpt")
  const [text, setText] = useState("")
  const {data, loading, error}= useAxios(`https://hn.algolia.com/api/v1/search?query=${query}`);

  // useEffect(() => {
  //   setIsLoading(true)
  //   const fetchNews = async () => {
  //     const url = `https://hn.algolia.com/api/v1/search?query=${query}`
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     // You can change the number of items you get back in your response using
  //     // the `Array.length` method, as demonstrated below. Uncomment the line and
  //     // reload your app to see it in action.
  //     data.hits.length = 10
  //     setNews(data.hits)
  //   }

  //   fetchNews()
  //   setIsLoading(false)
  // }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      console.log("Input is empty")
    } else {
      setQuery(text)
      setText("")
      console.log(text)
      console.log(query)
    }
  }
  return (
    <>
      <main className={classes.newsWrapper}>
        <h2 style={{letterSpacing: '0.1rem'}}>Hacker News</h2>
        {loading ? (
          <div className="spinner">Loading...</div>
        ) : (
          <>
            {/* Search form */}
            <form
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search for news..."
                autoComplete="off"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={classes.search}
              />
              {/* <button className={classes.btn}
                type="submit"
              >
                Search
              </button> */}
            </form>

            <article>
              <p className={classes.cat}>
                Category:{" "}
                <span>
                  {query}
                </span>
              </p>
            </article>

            <section>
              {data.hits.map((item) => {
                const { author, created_at, objectID, title, url } = item

                return (
                  <article className={classes.card}
                    key={objectID}
                  >
                    <div className={classes.top}>
                    <h3>
                      {title}
                    </h3>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopenner noreferrer"
                        className={classes.readMore}
                      >
                        Read More
                      </a>
                      </div>
                   <div className={classes.bottom}>
                      <p>
                        By <em>{author}</em>
                      </p>
                    <p>
                      {moment(created_at).format("ddd MMM yyyy")}
                    </p>
                    </div>
                  </article>
                )
              })}
            </section>
          </>
        )}
      </main>
    </>
  )
}