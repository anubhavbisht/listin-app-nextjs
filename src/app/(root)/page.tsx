import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartUpCard";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const queryParams = (await searchParams)?.query
  const posts = []
  return <>
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your Startup, <br />
        Connect With Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
        Competitions.
      </p>
      <SearchForm query={queryParams} />
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {queryParams ? `Search results for "${queryParams}"` : "All Startups"}
      </p>
      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartupTypeCard) => (
            <StartupCard key={post?._id} post={post} />
          ))
        ) : (
          <p className="no-results">No startups found</p>
        )}
      </ul>
    </section>
  </>
}