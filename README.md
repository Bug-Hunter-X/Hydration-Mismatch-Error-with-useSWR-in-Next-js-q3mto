# Next.js Hydration Mismatch with useSWR
This repository demonstrates a common hydration mismatch error in Next.js applications when using `useSWR` to fetch data. The error arises from a discrepancy between the client-side and server-side rendering of a page due to asynchronous data fetching.

## Problem
The `/about` page uses `useSWR` to fetch data from an API.  If the API call takes some time, the initial server-side render might complete before the data arrives. This results in the client rendering a different UI, leading to a hydration mismatch error.

## Solution
The solution involves using a loading indicator to display while fetching data using `useSWR`.  This ensures that both the server-side and client-side rendering agree on what to display initially, preventing the hydration mismatch error.