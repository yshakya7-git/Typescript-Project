import COVER_IMAGE from '../../assets/cover.jpg';

export const Image = () => {
    return (
        <div className="relative w-[500px] h-[480px] flex flex-col">
            <div className='absolute top-[25%] left-[10%] flex flex-col'>
                <h1 className='text-4xl text-white font-bold my-2'>Login to your account</h1>
                <p className='text-xm text-white'>Start for free and get attractive offers from the communities.</p>
            </div>
            <img src={COVER_IMAGE} className="h-screen w-[800px] object-cover" />
        </div>
    )
}
