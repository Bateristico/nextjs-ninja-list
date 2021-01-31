import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h1>That page cannot be found</h1>
            <p>Go back to the <Link href="/"><a>homepage</a></Link></p>
        </div>
      );
}
 
export default NotFound;