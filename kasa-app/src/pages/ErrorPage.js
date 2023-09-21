import React from 'react';
import Error from '../components/Error/Error';
import Header from '../components/header/header';

function ErrorPage() {
  return (
    <div>
        <Header />
        <main>
            <Error />
        </main>
        <footer />
    </div>
  )
}

export default ErrorPage