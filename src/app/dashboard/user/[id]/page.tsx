'use client';
import { useEffect, useState } from "react";

interface Props {
    params: { id: string }; // `id` is dynamic
  }
const UserDetails = ({ params }: Props) => {
    const { id } = params; // Extract the dynamic `id` from the params
    console.log('User ID:', id); // Log the user ID for debugging
    interface UserDetails {
        firstName: string;
        email: string;
        phone: string;
        address?: {
            address: string;
        };
    }
    
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null); // Initialize state to store user details

    const fetchUserDetails = async (userId: string) => {
        const res = await fetch(`https://dummyjson.com/users/${userId}`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Failed to fetch user details');
        }
        const data = await res.json();
        console.log('User Details:', data); // Log the user details for debugging
        setUserDetails(data); // Update state with fetched user details
  };

    useEffect(() => {
        fetchUserDetails(id)
            .then((data) => {
                console.log('Fetched user details:', data);
            })
            .catch((error) => {
                console.error('Error fetching user details:', error);
            });
        }, [id]);
    return (
        <div>
        <div className="flex justify-center items-center bg-green-200 p-4 rounded text-green-900 gap-4">
            <div className="cursor-pointer text-red-900 font-bold" onClick={() => window.location.href = '/'}>{`< Back to Home  `}</div>
        <h1 className="text-center text-2xl font-bold">User Details</h1>
        </div>
        {
            userDetails ? (
                <div className="bg-white p-4 rounded shadow text-center text-gray-900 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">{userDetails.firstName}</h2>
                    <p className="text-2xl font-bold " >Email: {userDetails.email}</p>
                    <p className="text-2xl font-bold">Phone: {userDetails.phone}</p>
                    <p className="text-2xl font-bold">Address: {userDetails.address?.address || 'N/A'}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )
        }
        </div>
    );
    }
export default UserDetails;