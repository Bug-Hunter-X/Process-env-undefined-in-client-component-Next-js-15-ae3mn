```javascript
// pages/api/env.js

export default function handler(req, res) {
  res.status(200).json({ myVar: process.env.MY_VARIABLE });
}
```
```javascript
// pages/about.js
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function About() {
  const { data, error } = useSWR('/api/env', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>About Page</h1>
      <p>MY_VARIABLE: {data.myVar}</p>
    </div>
  );
}
```