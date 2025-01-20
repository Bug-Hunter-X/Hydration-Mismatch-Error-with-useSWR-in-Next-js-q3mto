```javascript
// pages/about.js
import useSWR from 'swr';

export default function About() {
  const { data, error } = useSWR('/api/data');

  if (error) return <p>Failed to load data</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>About Page</h1>
      <p>Some data: {JSON.stringify(data)}</p>
    </div>
  );
}
```