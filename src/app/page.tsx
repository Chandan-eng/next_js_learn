import UserDashboard from "./dashboard/page";

async function getUsers() {
  const res = await fetch('https://dummyjson.com/users', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.users; // assuming `data` contains a "users" array
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="container-fluid mx-auto bg p-4">
      <UserDashboard users={users}/>
    </div>
  );
}
