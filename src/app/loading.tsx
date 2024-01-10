import LoadingSpinner from '@components/custom/BzbLoading';

export default function Loading() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-16'>
      <div className='z-10 max-w-5xl w-full font-mono text-sm flex justify-center items-center'>
        <LoadingSpinner />
      </div>
    </main>
  );
}
