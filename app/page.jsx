import Link from "next/link"

const Homepage = () => {
  return (
    <Link href="/dashboard">
      <button>Press here to see the dashboard</button>
    </Link>
  )
}

export default Homepage