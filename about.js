```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if you navigate to /about before the data is fetched
  const { data } = useSWR('/api/data');

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>About Page</h1>
      <p>Some data: {JSON.stringify(data)}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate a delay to mimic an API call
  await new Promise(resolve => setTimeout(resolve, 2000));

  res.status(200).json({ message: 'Data from API' });
}
```