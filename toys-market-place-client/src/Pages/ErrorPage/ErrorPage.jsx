import { Link, useRouteError } from 'react-router-dom';
import Title from '../Title/Title';

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <div>
      <Title title="Error page-Kid's Zone"></Title>

      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
     <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=826&t=st=1684659195~exp=1684659795~hmac=bde079b0adcd9b1dbc5c5fdb5aae7d3d8d0ee0fba56891316b88427569436487" alt="" />
        <div className='max-w-md text-center'>
          
          <p className='text-2xl font-semibold md:text-3xl my-5'>
            {error?.message}
          </p>
         <button> <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to home
          </Link></button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;