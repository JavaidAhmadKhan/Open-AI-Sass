import { UserButton } from "@clerk/nextjs"

const Dashboard = () => {
    return (
        <div className="flex items-end justify-end m-3">
        <div>
        <p>Dashboard Page</p>
        </div>
            <UserButton afterSignOutUrl="/" />
        </div>

    )
}

export default Dashboard
