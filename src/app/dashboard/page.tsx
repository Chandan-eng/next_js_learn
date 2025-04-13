'use client';
import { useRouter } from 'next/navigation';
const UserDashboard = () => {
    const router = useRouter();
    return (
        <div className="container-fluid mx-auto bg p-4">
            <div className="flex items-center gap-8 mb-4 bg-green-200 p-4 rounded text-green-900 cursor-pointer">
                <div onClick={()=>{router.push('/dashboard/home')}}>Home</div>
                <div>About</div>
                <div>Contact</div>
                </div>
        <h1>User Dashboard</h1>
        {/* Add your dashboard content here */}
        </div>
    );
    }
export default UserDashboard;