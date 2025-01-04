# Next.js 15 - process.env undefined in client component

This repository demonstrates a common error encountered in Next.js 15 applications when attempting to access environment variables within client-side components.  The `process` object, and thus `process.env`, is not available in the browser environment.

## Problem

Accessing `process.env` directly in a client-side component (e.g., a page component rendered in the browser) results in a runtime error because `process` is a Node.js object not available on the client. 

## Solution

The solution involves moving environment variable access to server-side code (API routes or getServerSideProps) and passing the necessary values to the client component as props.