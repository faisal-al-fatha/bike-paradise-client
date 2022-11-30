import img from '../../../Resourses/select candidate.png';
const Dashboard = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-3xl text-accent font-semibold my-8'>Please select a menu from left side dashboard menu.</p>
            <img className='w-[600px]' src={img} alt="" />
        </div>
    );
};

export default Dashboard;